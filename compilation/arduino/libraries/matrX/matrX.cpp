/*
 *    matrX.cpp is a fork of LedControl.cpp [ Copyright 2007 Eberhard Fahle ]
 *    A library for controling Leds with a MAX7219
 */

#include <Arduino.h>
#include "matrX.h"

#define OP_DECODEMODE  9
#define OP_INTENSITY   10
#define OP_SCANLIMIT   11
#define OP_SHUTDOWN    12
#define OP_DISPLAYTEST 15

//Numeric Font Matrix (Arranged as 7x font data + 1x kerning data)
const char font5x7 [] PROGMEM = {
    B00000000,  //Space (Char 0x20)
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    6,
    B10000000,  //!
    B10000000,
    B10000000,
    B10000000,
    B00000000,
    B00000000,
    B10000000,
    2,
    B10100000,  //"
    B10100000,
    B10100000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    4,
    B01010000,  //#
    B01010000,
    B11111000,
    B01010000,
    B11111000,
    B01010000,
    B01010000,
    6,
    B00100000,  //$
    B01111000,
    B10100000,
    B01110000,
    B00101000,
    B11110000,
    B00100000,
    6,
    B11000000,  //%
    B11001000,
    B00010000,
    B00100000,
    B01000000,
    B10011000,
    B00011000,
    6,
    B01100000,  //&
    B10010000,
    B10100000,
    B01000000,
    B10101000,
    B10010000,
    B01101000,
    6,
    B11000000,  //'
    B01000000,
    B10000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    3,
    B00100000,  //(
    B01000000,
    B10000000,
    B10000000,
    B10000000,
    B01000000,
    B00100000,
    4,
    B10000000,  //)
    B01000000,
    B00100000,
    B00100000,
    B00100000,
    B01000000,
    B10000000,
    4,
    B00000000,  //*
    B00100000,
    B10101000,
    B01110000,
    B10101000,
    B00100000,
    B00000000,
    6,
    B00000000,  //+
    B00100000,
    B00100000,
    B11111000,
    B00100000,
    B00100000,
    B00000000,
    6,
    B00000000,  //,
    B00000000,
    B00000000,
    B00000000,
    B11000000,
    B01000000,
    B10000000,
    3,
    B00000000,  //-
    B00000000,
    B11111000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    6,
    B00000000,  //.
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B11000000,
    B11000000,
    3,
    B00000000,  ///
    B00001000,
    B00010000,
    B00100000,
    B01000000,
    B10000000,
    B00000000,
    6,
    B01110000,  //0
    B10001000,
    B10011000,
    B10101000,
    B11001000,
    B10001000,
    B01110000,
    6,
    B01000000,  //1
    B11000000,
    B01000000,
    B01000000,
    B01000000,
    B01000000,
    B11100000,
    4,
    B01110000,  //2
    B10001000,
    B00001000,
    B00010000,
    B00100000,
    B01000000,
    B11111000,
    6,
    B11111000,  //3
    B00010000,
    B00100000,
    B00010000,
    B00001000,
    B10001000,
    B01110000,
    6,
    B00010000,  //4
    B00110000,
    B01010000,
    B10010000,
    B11111000,
    B00010000,
    B00010000,
    6,
    B11111000,  //5
    B10000000,
    B11110000,
    B00001000,
    B00001000,
    B10001000,
    B01110000,
    6,
    B00110000,  //6
    B01000000,
    B10000000,
    B11110000,
    B10001000,
    B10001000,
    B01110000,
    6,
    B11111000,  //7
    B10001000,
    B00001000,
    B00010000,
    B00100000,
    B00100000,
    B00100000,
    6,
    B01110000,  //8
    B10001000,
    B10001000,
    B01110000,
    B10001000,
    B10001000,
    B01110000,
    6,
    B01110000,  //9
    B10001000,
    B10001000,
    B01111000,
    B00001000,
    B00010000,
    B01100000,
    6,
    B00000000,  //:
    B11000000,
    B11000000,
    B00000000,
    B11000000,
    B11000000,
    B00000000,
    3,
    B00000000,  //;
    B11000000,
    B11000000,
    B00000000,
    B11000000,
    B01000000,
    B10000000,
    3,
    B00010000,  //<
    B00100000,
    B01000000,
    B10000000,
    B01000000,
    B00100000,
    B00010000,
    5,
    B00000000,  //=
    B00000000,
    B11111000,
    B00000000,
    B11111000,
    B00000000,
    B00000000,
    6,
    B10000000,  //>
    B01000000,
    B00100000,
    B00010000,
    B00100000,
    B01000000,
    B10000000,
    5,
    B01110000,  //?
    B10001000,
    B00001000,
    B00010000,
    B00100000,
    B00000000,
    B00100000,
    6,
    B01110000,  //@
    B10001000,
    B00001000,
    B01101000,
    B10101000,
    B10101000,
    B01110000,
    6,
    B01110000,  //A
    B10001000,
    B10001000,
    B10001000,
    B11111000,
    B10001000,
    B10001000,
    6,
    B11110000,  //B
    B10001000,
    B10001000,
    B11110000,
    B10001000,
    B10001000,
    B11110000,
    6,
    B01110000,  //C
    B10001000,
    B10000000,
    B10000000,
    B10000000,
    B10001000,
    B01110000,
    6,
    B11100000,  //D
    B10010000,
    B10001000,
    B10001000,
    B10001000,
    B10010000,
    B11100000,
    6,
    B11111000,  //E
    B10000000,
    B10000000,
    B11110000,
    B10000000,
    B10000000,
    B11111000,
    6,
    B11111000,  //F
    B10000000,
    B10000000,
    B11110000,
    B10000000,
    B10000000,
    B10000000,
    6,
    B01110000,  //G
    B10001000,
    B10000000,
    B10111000,
    B10001000,
    B10001000,
    B01111000,
    6,
    B10001000,  //H
    B10001000,
    B10001000,
    B11111000,
    B10001000,
    B10001000,
    B10001000,
    6,
    B11100000,  //I
    B01000000,
    B01000000,
    B01000000,
    B01000000,
    B01000000,
    B11100000,
    4,
    B00111000,  //J
    B00010000,
    B00010000,
    B00010000,
    B00010000,
    B10010000,
    B01100000,
    6,
    B10001000,  //K
    B10010000,
    B10100000,
    B11000000,
    B10100000,
    B10010000,
    B10001000,
    6,
    B10000000,  //L
    B10000000,
    B10000000,
    B10000000,
    B10000000,
    B10000000,
    B11111000,
    6,
    B10001000,  //M
    B11011000,
    B10101000,
    B10101000,
    B10001000,
    B10001000,
    B10001000,
    6,
    B10001000,  //N
    B10001000,
    B11001000,
    B10101000,
    B10011000,
    B10001000,
    B10001000,
    6,
    B01110000,  //O
    B10001000,
    B10001000,
    B10001000,
    B10001000,
    B10001000,
    B01110000,
    6,
    B11110000,  //P
    B10001000,
    B10001000,
    B11110000,
    B10000000,
    B10000000,
    B10000000,
    6,
    B01110000,  //Q
    B10001000,
    B10001000,
    B10001000,
    B10101000,
    B10010000,
    B01101000,
    6,
    B11110000,  //R
    B10001000,
    B10001000,
    B11110000,
    B10100000,
    B10010000,
    B10001000,
    6,
    B01111000,  //S
    B10000000,
    B10000000,
    B01110000,
    B00001000,
    B00001000,
    B11110000,
    6,
    B11111000,  //T
    B00100000,
    B00100000,
    B00100000,
    B00100000,
    B00100000,
    B00100000,
    6,
    B10001000,  //U
    B10001000,
    B10001000,
    B10001000,
    B10001000,
    B10001000,
    B01110000,
    6,
    B10001000,  //V
    B10001000,
    B10001000,
    B10001000,
    B10001000,
    B01010000,
    B00100000,
    6,
    B10001000,  //W
    B10001000,
    B10001000,
    B10101000,
    B10101000,
    B10101000,
    B01010000,
    6,
    B10001000,  //X
    B10001000,
    B01010000,
    B00100000,
    B01010000,
    B10001000,
    B10001000,
    6,
    B10001000,  //Y
    B10001000,
    B10001000,
    B01010000,
    B00100000,
    B00100000,
    B00100000,
    6,
    B11111000,  //Z
    B00001000,
    B00010000,
    B00100000,
    B01000000,
    B10000000,
    B11111000,
    6,
    B11100000,  //[
    B10000000,
    B10000000,
    B10000000,
    B10000000,
    B10000000,
    B11100000,
    4,
    B00000000,  //(Backward Slash)
    B10000000,
    B01000000,
    B00100000,
    B00010000,
    B00001000,
    B00000000,
    6,
    B11100000,  //]
    B00100000,
    B00100000,
    B00100000,
    B00100000,
    B00100000,
    B11100000,
    4,
    B00100000,  //^
    B01010000,
    B10001000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    6,
    B00000000,  //_
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B11111000,
    6,
    B10000000,  //`
    B01000000,
    B00100000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    4,
    B00000000,  //a
    B00000000,
    B01110000,
    B00001000,
    B01111000,
    B10001000,
    B01111000,
    6,
    B10000000,  //b
    B10000000,
    B10110000,
    B11001000,
    B10001000,
    B10001000,
    B11110000,
    6,
    B00000000,  //c
    B00000000,
    B01110000,
    B10001000,
    B10000000,
    B10001000,
    B01110000,
    6,
    B00001000,  //d
    B00001000,
    B01101000,
    B10011000,
    B10001000,
    B10001000,
    B01111000,
    6,
    B00000000,  //e
    B00000000,
    B01110000,
    B10001000,
    B11111000,
    B10000000,
    B01110000,
    6,
    B00110000,  //f
    B01001000,
    B01000000,
    B11100000,
    B01000000,
    B01000000,
    B01000000,
    6,
    B00000000,  //g
    B01111000,
    B10001000,
    B10001000,
    B01111000,
    B00001000,
    B01110000,
    6,
    B10000000,  //h
    B10000000,
    B10110000,
    B11001000,
    B10001000,
    B10001000,
    B10001000,
    6,
    B01000000,  //i
    B00000000,
    B11000000,
    B01000000,
    B01000000,
    B01000000,
    B11100000,
    4,
    B00010000,  //j
    B00000000,
    B00110000,
    B00010000,
    B00010000,
    B10010000,
    B01100000,
    5,
    B10000000,  //k
    B10000000,
    B10010000,
    B10100000,
    B11000000,
    B10100000,
    B10010000,
    5,
    B11000000,  //l
    B01000000,
    B01000000,
    B01000000,
    B01000000,
    B01000000,
    B11100000,
    4,
    B00000000,  //m
    B00000000,
    B11010000,
    B10101000,
    B10101000,
    B10001000,
    B10001000,
    6,
    B00000000,  //n
    B00000000,
    B10110000,
    B11001000,
    B10001000,
    B10001000,
    B10001000,
    6,
    B00000000,  //o
    B00000000,
    B01110000,
    B10001000,
    B10001000,
    B10001000,
    B01110000,
    6,
    B00000000,  //p
    B00000000,
    B11110000,
    B10001000,
    B11110000,
    B10000000,
    B10000000,
    6,
    B00000000,  //q
    B00000000,
    B01101000,
    B10011000,
    B01111000,
    B00001000,
    B00001000,
    6,
    B00000000,  //r
    B00000000,
    B10110000,
    B11001000,
    B10000000,
    B10000000,
    B10000000,
    6,
    B00000000,  //s
    B00000000,
    B01110000,
    B10000000,
    B01110000,
    B00001000,
    B11110000,
    6,
    B01000000,  //t
    B01000000,
    B11100000,
    B01000000,
    B01000000,
    B01001000,
    B00110000,
    6,
    B00000000,  //u
    B00000000,
    B10001000,
    B10001000,
    B10001000,
    B10011000,
    B01101000,
    6,
    B00000000,  //v
    B00000000,
    B10001000,
    B10001000,
    B10001000,
    B01010000,
    B00100000,
    6,
    B00000000,  //w
    B00000000,
    B10001000,
    B10101000,
    B10101000,
    B10101000,
    B01010000,
    6,
    B00000000,  //x
    B00000000,
    B10001000,
    B01010000,
    B00100000,
    B01010000,
    B10001000,
    6,
    B00000000,  //y
    B00000000,
    B10001000,
    B10001000,
    B01111000,
    B00001000,
    B01110000,
    6,
    B00000000,  //z
    B00000000,
    B11111000,
    B00010000,
    B00100000,
    B01000000,
    B11111000,
    6,
    B00100000,  //{
    B01000000,
    B01000000,
    B10000000,
    B01000000,
    B01000000,
    B00100000,
    4,
    B10000000,  //|
    B10000000,
    B10000000,
    B10000000,
    B10000000,
    B10000000,
    B10000000,
    2,
    B10000000,  //}
    B01000000,
    B01000000,
    B00100000,
    B01000000,
    B01000000,
    B10000000,
    4,
    B00000000,  //~
    B00000000,
    B00000000,
    B01101000,
    B10010000,
    B00000000,
    B00000000,
    6,
    B01100000,  // (Char 0x7F)
    B10010000,
    B10010000,
    B01100000,
    B00000000,
    B00000000,
    B00000000,
    5
};
const long scrollDelay = 75;
unsigned long bufferLong [14] = {0};

Matrice_I2C::Matrice_I2C(){}

void Matrice_I2C::initialisation(){
	pinMode(A4,OUTPUT);
	pinMode(A5,OUTPUT);
	digitalWrite(A4,LOW);
	digitalWrite(A5,LOW);
	sda_pin = A4;
	scl_pin = A5;
}

void Matrice_I2C::IIC_start(){
	digitalWrite(scl_pin,LOW);
	delayMicroseconds(3);
	digitalWrite(sda_pin,HIGH);
	delayMicroseconds(3);
	digitalWrite(scl_pin,HIGH);
	delayMicroseconds(3);
	digitalWrite(sda_pin,LOW);
	delayMicroseconds(3);
}
	
void Matrice_I2C::IIC_end() {
	digitalWrite(scl_pin,LOW);
	delayMicroseconds(3);
	digitalWrite(sda_pin,LOW);
	delayMicroseconds(3);
	digitalWrite(scl_pin,HIGH);
	delayMicroseconds(3);
	digitalWrite(sda_pin,HIGH);
	delayMicroseconds(3);
}
	
void Matrice_I2C::IIC_send(unsigned char send_data){
	for(char i = 0;i < 8;i++) {
		digitalWrite(scl_pin,LOW);
		delayMicroseconds(3);
		if(send_data & 0x01) {
			digitalWrite(sda_pin,HIGH);
		} else {
			digitalWrite(sda_pin,LOW);
		}
		delayMicroseconds(3);
		digitalWrite(scl_pin,HIGH);
		delayMicroseconds(3);
		send_data = send_data >> 1;
	}
}

void Matrice_I2C::afficher(byte s[], byte mat){
	IIC_start();
	IIC_send(0x40);
	IIC_end();
	IIC_start();
	IIC_send(0xC0);
	for(char i=0; i<16; i++) IIC_send(s[i]);
	IIC_end();
	IIC_start();
	IIC_send(0x8F);
	IIC_end();
}

void Matrice_I2C::effacer(byte mat){
	byte t[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
	afficher(t,mat);
}

void Matrice_I2C::mettre_del(byte addr, byte x, byte y, boolean etat){
	
}

Matrice_SPI::Matrice_SPI(){}

void Matrice_SPI::initialisation(int dataPin, int clkPin, int csPin, int numDevices){
    SPI_MOSI=dataPin;
    SPI_CLK=clkPin;
    SPI_CS=csPin;
    if(numDevices<=0 || numDevices>8 ) numDevices=8;
    maxDevices=numDevices;
    pinMode(SPI_MOSI,OUTPUT);
    pinMode(SPI_CLK,OUTPUT);
    pinMode(SPI_CS,OUTPUT);
    digitalWrite(SPI_CS,HIGH);
    SPI_MOSI=dataPin;
    for(int i=0;i<64;i++) status[i]=0x00;
    for(int i=0;i<maxDevices;i++) {
		spiTransfer(i,OP_DISPLAYTEST,0);
		setScanLimit(i,7);
		spiTransfer(i,OP_DECODEMODE,0);
		effacer(i);
		shutdown(i,true);
    }
	for(byte mat=0; mat<maxDevices; mat++) {
		shutdown(mat, false);
		setIntensity(mat, 1);
		effacer(mat);
	}
}

void Matrice_SPI::afficher(byte s[], byte mat){
	for (char i=0; i<8; i++) setRow(mat,i,s[i]);
}

void Matrice_SPI::rotateBufferLong(){
	for(byte a=0; a<7; a++) {
		unsigned long x = bufferLong [a*2];
		byte b = bitRead(x,31);
		x = x<<1;
		bufferLong [a*2] = x;
		x = bufferLong [a*2+1];
		x = x<<1;
		bitWrite(x,0,b);
		bufferLong [a*2+1] = x;
	}
}

void Matrice_SPI::printBufferLong(){
	for(int a=0;a<7;a++) {
		unsigned long x = bufferLong [a*2+1];
		byte y = x;
		setRow(3,a,y);
		x = bufferLong [a*2];
		y = (x>>24);
		setRow(2,a,y);
		y = (x>>16);
		setRow(1,a,y);
		y = (x>>8);
		setRow(0,a,y);
	}
}

void Matrice_SPI::loadBufferLong(int ascii){
	if (ascii>=0x20 && ascii<=0x7f) {
		for(byte a=0; a<7; a++) {
			unsigned long c = pgm_read_byte_near(font5x7 + ((ascii - 0x20) * 8) + a);
			unsigned long x = bufferLong [a*2];
			x = x | c;
			bufferLong [a*2] = x;
		}
		byte count = pgm_read_byte_near(font5x7 +((ascii - 0x20) * 8) + 7);
		for(byte x=0; x<count; x++) {
			rotateBufferLong();
			printBufferLong();
			delay(scrollDelay);
		}
	}
}

void Matrice_SPI::faire_defiler(char * messageString){
	int counter=0;
	int myChar=0;
	do {
		//myChar = pgm_read_byte_near(messageString+counter);
		myChar =  messageString[counter]; 
		if (myChar != 0) loadBufferLong(myChar);
		counter++;
	} while(myChar != 0);
}

void Matrice_SPI::spiTransfer(int addr, volatile byte opcode, volatile byte data) {
    int offset=addr*2;
    int maxbytes=maxDevices*2;
    for(int i=0;i<maxbytes;i++)	spidata[i]=(byte)0;
    spidata[offset+1]=opcode;
    spidata[offset]=data;
    digitalWrite(SPI_CS,LOW);
    for(int i=maxbytes;i>0;i--) shiftOut(SPI_MOSI,SPI_CLK,MSBFIRST,spidata[i-1]);
    digitalWrite(SPI_CS,HIGH);
}    

void Matrice_SPI::shutdown(int addr, bool b) {
    if(addr<0 || addr>=maxDevices) return;
    if(b) spiTransfer(addr, OP_SHUTDOWN,0);
    else spiTransfer(addr, OP_SHUTDOWN,1);
}

void Matrice_SPI::setIntensity(int addr, int intensity) {
    if(addr<0 || addr>=maxDevices) return;
    if(intensity>=0 || intensity<16) spiTransfer(addr, OP_INTENSITY,intensity);
}

void Matrice_SPI::effacer(int addr) {
    int offset;
    if(addr<0 || addr>=maxDevices) return;
    offset=addr*8;
    for(int i=0;i<8;i++) {
		status[offset+i]=0;
		spiTransfer(addr, i+1,status[offset+i]);
    }
}

void Matrice_SPI::mettre_del(int addr, int row, int column, boolean state) {
    int offset;
    byte val=0x00;
    if(addr<0 || addr>=maxDevices) return;
    if(row<0 || row>7 || column<0 || column>7) return;
    offset=addr*8;
    val=B10000000 >> column;
    if(state)
		status[offset+row]=status[offset+row]|val;
    else {
		val=~val;
		status[offset+row]=status[offset+row]&val;
    }
    spiTransfer(addr, row+1,status[offset+row]);
}
	
void Matrice_SPI::setRow(int addr, int row, byte value) {
    int offset;
    if(addr<0 || addr>=maxDevices) return;
    if(row<0 || row>7) return;
    offset=addr*8;
    status[offset+row]=value;
    spiTransfer(addr, row+1,status[offset+row]);
}
    
void Matrice_SPI::setColumn(int addr, int col, byte value) {
    byte val;
    if(addr<0 || addr>=maxDevices) return;
    if(col<0 || col>7) return;
    for(int row=0;row<8;row++) {
		val=value >> (7-row);
		val=val & 0x01;
		mettre_del(addr,row,col,val);
    }
}

void Matrice_SPI::setScanLimit(int addr, int limit) {
    if(addr<0 || addr>=maxDevices) return;
    if(limit>=0 || limit<8)	spiTransfer(addr, OP_SCANLIMIT,limit);
}
