
#ifndef _TIMER_TC3_CPP_
#define _TIMER_TC3_CPP_


#include "Arduino.h"
#include "TimerTC3.h"


TimerTC3 TimerTc3;


void TC3_Handler()
{
    TcCount16* TC = (TcCount16*) TC3; // get timer struct

    if(TC->INTFLAG.bit.MC0 == 1) // A compare to cc0 caused the interrupt
    {
        TimerTc3.isrCallback();
        TC->INTFLAG.bit.MC0 = 1; // writing a one clears the flag ovf flag
    }
}

void TimerTC3::initialize(long microseconds)
{
    REG_GCLK_CLKCTRL = (uint16_t) (GCLK_CLKCTRL_CLKEN | GCLK_CLKCTRL_GEN_GCLK0 | GCLK_CLKCTRL_ID (GCM_TCC2_TC3)) ;
    while( GCLK->STATUS.bit.SYNCBUSY == 1 );

    TcCount16* TC = (TcCount16*) TC3;

    TC->CTRLA.reg &= ~TC_CTRLA_ENABLE;

    // Use the 16-bit timer
    TC->CTRLA.reg |= TC_CTRLA_MODE_COUNT16;
    while(TC->STATUS.bit.SYNCBUSY == 1);

    // Use match mode so that the timer counter resets when the count matches the compare register
    TC->CTRLA.reg |= TC_CTRLA_WAVEGEN_MFRQ;
    //TC->CTRLA.reg |= TC_CTRLA_WAVEGEN_NFRQ;
    while(TC->STATUS.bit.SYNCBUSY == 1);
    
    setPeriod(microseconds);
}

void TimerTC3::setPeriod(long microseconds)
{
    TcCount16* TC = (TcCount16*) TC3;
    
    uint32_t cycles = (CPU_HZ / 1000000) * microseconds;
    uint32_t prescalerConfigBits;
    
    if(cycles < RESOLUTION) prescalerConfigBits = TC_CTRLA_PRESCALER_DIV1;
    else if((cycles >>= 1) < RESOLUTION) prescalerConfigBits = TC_CTRLA_PRESCALER_DIV2;
    else if((cycles >>= 1) < RESOLUTION) prescalerConfigBits = TC_CTRLA_PRESCALER_DIV4;
    else if((cycles >>= 1) < RESOLUTION) prescalerConfigBits = TC_CTRLA_PRESCALER_DIV8;
    else if((cycles >>= 1) < RESOLUTION) prescalerConfigBits = TC_CTRLA_PRESCALER_DIV16;
    else if((cycles >>= 2) < RESOLUTION) prescalerConfigBits = TC_CTRLA_PRESCALER_DIV64;
    else if((cycles >>= 2) < RESOLUTION) prescalerConfigBits = TC_CTRLA_PRESCALER_DIV256;
    else if((cycles >>= 2) < RESOLUTION) prescalerConfigBits = TC_CTRLA_PRESCALER_DIV1024;
    else cycles = RESOLUTION - 1, prescalerConfigBits = TC_CTRLA_PRESCALER_DIV1024;
    /*
    SerialUSB.print("cycles is ");
    SerialUSB.println(cycles);
    SerialUSB.print("prescalerConfigBits is ");
    SerialUSB.println(prescalerConfigBits);
    */
    // Set prescaler
    TC->CTRLA.reg |= prescalerConfigBits;
    while(TC->STATUS.bit.SYNCBUSY == 1);
    
    TC->CC[0].reg = cycles;
    while(TC->STATUS.bit.SYNCBUSY == 1);
    
    //TC->PER.reg = cycles;
    //while (TC->STATUS.bit.SYNCBUSY == 1);
}

void TimerTC3::attachInterrupt(void (*isr)())
{
    isrCallback = isr;
    
    start();
}

void TimerTC3::detachInterrupt()
{
    // Disable InterruptVector
    NVIC_DisableIRQ(TC3_IRQn);
    NVIC_ClearPendingIRQ(TC3_IRQn);
    
    stop();
}

void TimerTC3::start()
{
    TcCount16* TC = (TcCount16*) TC3; // get timer struct
    
    // Enable the compare interrupt
    TC->INTENSET.reg = 0;
    TC->INTENSET.bit.MC0 = 1;
    
    // Enable InterruptVector
    NVIC_EnableIRQ(TC3_IRQn);

    // Enable TC
    TC->CTRLA.reg |= TC_CTRLA_ENABLE;
    while(TC->STATUS.bit.SYNCBUSY == 1);
    
    TC->CTRLBSET.reg |= TC_CTRLBSET_CMD_RETRIGGER; //  Start    
}

void TimerTC3::restart()
{
   TcCount16* TC = (TcCount16*) TC3; // get timer struct
   TC->CTRLBSET.reg |= TC_CTRLBCLR_CMD_RETRIGGER; // restart		
}

void TimerTC3::stop()
{
    TcCount16* TC = (TcCount16*) TC3; // get timer struct
    TC->CTRLBSET.reg |= TC_CTRLBSET_CMD_STOP; // Stop counter    
}


#endif