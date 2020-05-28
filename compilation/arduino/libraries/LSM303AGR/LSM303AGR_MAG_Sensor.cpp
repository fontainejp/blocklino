/**
 ******************************************************************************
 * @file    LSM303AGR_MAG_Sensor.cpp
 * @author  AST
 * @version V1.0.0
 * @date    7 September 2017
 * @brief   Implementation an LSM303AGR magnetometer sensor.
 ******************************************************************************
 * @attention
 *
 * <h2><center>&copy; COPYRIGHT(c) 2017 STMicroelectronics</center></h2>
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *   1. Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *   2. Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *   3. Neither the name of STMicroelectronics nor the names of its contributors
 *      may be used to endorse or promote products derived from this software
 *      without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 ******************************************************************************
 */


/* Includes ------------------------------------------------------------------*/

#include "Arduino.h"
#include "Wire.h"
#include "LSM303AGR_MAG_Sensor.h"


/* Class Implementation ------------------------------------------------------*/

/** Constructor
 * @param i2c object of an helper class which handles the I2C peripheral
 * @param address the address of the component's instance
 */
LSM303AGR_MAG_Sensor::LSM303AGR_MAG_Sensor(TwoWire *i2c) : dev_i2c(i2c)
{
  address = LSM303AGR_MAG_I2C_ADDRESS;

  /* Operating mode selection - power down */
  if ( LSM303AGR_MAG_W_MD( (void *)this, LSM303AGR_MAG_MD_IDLE1_MODE ) == MEMS_ERROR )
  {
    return;
  }
  
  /* Enable BDU */
  if ( LSM303AGR_MAG_W_BDU( (void *)this, LSM303AGR_MAG_BDU_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  if ( SetODR( 100.0f ) == LSM303AGR_MAG_STATUS_ERROR )
  {
    return;
  }
  
  if ( SetFS( 50.0f ) == LSM303AGR_MAG_STATUS_ERROR )
  {
    return;
  }

  if ( LSM303AGR_MAG_W_ST( (void *)this, LSM303AGR_MAG_ST_DISABLED ) == MEMS_ERROR )
  {
    return;
  }
};

/** Constructor
 * @param i2c object of an helper class which handles the I2C peripheral
 * @param address the address of the component's instance
 */
LSM303AGR_MAG_Sensor::LSM303AGR_MAG_Sensor(TwoWire *i2c, uint8_t address) : dev_i2c(i2c), address(address)
{
  /* Operating mode selection - power down */
  if ( LSM303AGR_MAG_W_MD( (void *)this, LSM303AGR_MAG_MD_IDLE1_MODE ) == MEMS_ERROR )
  {
    return;
  }
  
  /* Enable BDU */
  if ( LSM303AGR_MAG_W_BDU( (void *)this, LSM303AGR_MAG_BDU_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  if ( SetODR( 100.0f ) == LSM303AGR_MAG_STATUS_ERROR )
  {
    return;
  }
  
  if ( SetFS( 50.0f ) == LSM303AGR_MAG_STATUS_ERROR )
  {
    return;
  }

  if ( LSM303AGR_MAG_W_ST( (void *)this, LSM303AGR_MAG_ST_DISABLED ) == MEMS_ERROR )
  {
    return;
  }
};

/**
 * @brief  Enable LSM303AGR magnetometer
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::Enable(void)
{
  /* Operating mode selection */
  if ( LSM303AGR_MAG_W_MD( (void *)this, LSM303AGR_MAG_MD_CONTINUOS_MODE ) == MEMS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }
  
  return LSM303AGR_MAG_STATUS_OK;
}

/**
 * @brief  Disable LSM303AGR magnetometer
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::Disable(void)
{
  /* Operating mode selection - power down */
  if ( LSM303AGR_MAG_W_MD( (void *)this, LSM303AGR_MAG_MD_IDLE1_MODE ) == MEMS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }
  
  return LSM303AGR_MAG_STATUS_OK;
}

/**
 * @brief  Read ID of LSM303AGR Magnetometer
 * @param  p_id the pointer where the ID of the device is stored
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::ReadID(uint8_t *p_id)
{
  if(!p_id)
  { 
    return LSM303AGR_MAG_STATUS_ERROR; 
  }
 
  /* Read WHO AM I register */
  if ( LSM303AGR_MAG_R_WHO_AM_I( (void *)this, p_id ) == MEMS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }
  
  return LSM303AGR_MAG_STATUS_OK;
}

/**
 * @brief  Read data from LSM303AGR Magnetometer
 * @param  pData the pointer where the magnetometer data are stored
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::GetAxes(int32_t *pData)
{
  int16_t pDataRaw[3];
  float sensitivity = 0;
  
  /* Read raw data from LSM303AGR output register. */
  if ( GetAxesRaw( pDataRaw ) == LSM303AGR_MAG_STATUS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }
  
  /* Get LSM303AGR actual sensitivity. */
  if ( GetSensitivity( &sensitivity ) == LSM303AGR_MAG_STATUS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }
  
  /* Calculate the data. */
  pData[0] = ( int32_t )( pDataRaw[0] * sensitivity );
  pData[1] = ( int32_t )( pDataRaw[1] * sensitivity );
  pData[2] = ( int32_t )( pDataRaw[2] * sensitivity );
  
  return LSM303AGR_MAG_STATUS_OK;
}

/**
 * @brief  Read Magnetometer Sensitivity
 * @param  pfData the pointer where the magnetometer sensitivity is stored
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::GetSensitivity(float *pfData)
{
  *pfData = 1.5f;
  
  return LSM303AGR_MAG_STATUS_OK;
}

/**
 * @brief  Read raw data from LSM303AGR Magnetometer
 * @param  pData the pointer where the magnetomer raw data are stored
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::GetAxesRaw(int16_t *pData)
{
  uint8_t regValue[6] = {0, 0, 0, 0, 0, 0};
  int16_t *regValueInt16;
  
  /* Read output registers from LSM303AGR_MAG_OUTX_L to LSM303AGR_MAG_OUTZ_H. */
  if ( LSM303AGR_MAG_Get_Raw_Magnetic( (void *)this, regValue ) == MEMS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }
  
  regValueInt16 = (int16_t *)regValue;
  
  /* Format the data. */
  pData[0] = regValueInt16[0];
  pData[1] = regValueInt16[1];
  pData[2] = regValueInt16[2];
  
  return LSM303AGR_MAG_STATUS_OK;
}

/**
 * @brief  Read LSM303AGR Magnetometer output data rate
 * @param  odr the pointer to the output data rate
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::GetODR(float* odr)
{
  LSM303AGR_MAG_ODR_t odr_low_level;
  
  if ( LSM303AGR_MAG_R_ODR( (void *)this, &odr_low_level ) == MEMS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }
  
  switch( odr_low_level )
  {
    case LSM303AGR_MAG_ODR_10Hz:
      *odr = 10.000f;
      break;
    case LSM303AGR_MAG_ODR_20Hz:
      *odr = 20.000f;
      break;
    case LSM303AGR_MAG_ODR_50Hz:
      *odr = 50.000f;
      break;
    case LSM303AGR_MAG_ODR_100Hz:
      *odr = 100.000f;
      break;
    default:
      *odr = -1.000f;
      return LSM303AGR_MAG_STATUS_ERROR;
  }  
  return LSM303AGR_MAG_STATUS_OK;
}

/**
 * @brief  Set ODR
 * @param  odr the output data rate to be set
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::SetODR(float odr)
{
  LSM303AGR_MAG_ODR_t new_odr;
  
  new_odr = ( odr <= 10.000f ) ? LSM303AGR_MAG_ODR_10Hz
          : ( odr <= 20.000f ) ? LSM303AGR_MAG_ODR_20Hz
          : ( odr <= 50.000f ) ? LSM303AGR_MAG_ODR_50Hz
          :                      LSM303AGR_MAG_ODR_100Hz;
            
  if ( LSM303AGR_MAG_W_ODR( (void *)this, new_odr ) == MEMS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }
  
  return LSM303AGR_MAG_STATUS_OK;
}


/**
 * @brief  Read LSM303AGR Magnetometer full scale
 * @param  fullScale the pointer to the output data rate
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::GetFS(float* fullScale)
{
  *fullScale = 50.0f;
  
  return LSM303AGR_MAG_STATUS_OK;
}

/**
 * @brief  Set full scale
 * @param  fullScale the full scale to be set
 * @retval LSM303AGR_MAG_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::SetFS(float fullScale)
{
  (void)(fullScale);

  return LSM303AGR_MAG_STATUS_OK;
}


/**
 * @brief Read magnetometer data from register
 * @param reg register address
 * @param data register data
 * @retval LSM303AGR_MAG_STATUS_OK in case of success
 * @retval LSM303AGR_MAG_STATUS_ERROR in case of failure
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::ReadReg( uint8_t reg, uint8_t *data )
{
  if ( LSM303AGR_MAG_ReadReg( (void *)this, reg, data ) == MEMS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }

  return LSM303AGR_MAG_STATUS_OK;
}


/**
 * @brief Write magnetometer data to register
 * @param reg register address
 * @param data register data
 * @retval LSM303AGR_MAG_STATUS_OK in case of success
 * @retval LSM303AGR_MAG_STATUS_ERROR in case of failure
 */
LSM303AGR_MAG_StatusTypeDef LSM303AGR_MAG_Sensor::WriteReg( uint8_t reg, uint8_t data )
{
  if ( LSM303AGR_MAG_WriteReg( (void *)this, reg, data ) == MEMS_ERROR )
  {
    return LSM303AGR_MAG_STATUS_ERROR;
  }

  return LSM303AGR_MAG_STATUS_OK;
}

uint8_t LSM303AGR_MAG_IO_Write( void *handle, uint8_t WriteAddr, uint8_t *pBuffer, uint16_t nBytesToWrite )
{
  return ((LSM303AGR_MAG_Sensor *)handle)->IO_Write(pBuffer, WriteAddr, nBytesToWrite);
}

uint8_t LSM303AGR_MAG_IO_Read( void *handle, uint8_t ReadAddr, uint8_t *pBuffer, uint16_t nBytesToRead )
{
  return ((LSM303AGR_MAG_Sensor *)handle)->IO_Read(pBuffer, ReadAddr, nBytesToRead);
}
