/**
 ******************************************************************************
 * @file    LSM303AGR_ACC_Sensor.cpp
 * @author  AST
 * @version V1.0.0
 * @date    7 September 2017
 * @brief   Implementation an LSM303AGR accelerometer sensor.
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
#include "LSM303AGR_ACC_Sensor.h"


/* Class Implementation ------------------------------------------------------*/

/** Constructor
 * @param i2c object of an helper class which handles the I2C peripheral
 * @param address the address of the component's instance
 */
LSM303AGR_ACC_Sensor::LSM303AGR_ACC_Sensor(TwoWire *i2c) : dev_i2c(i2c)
{
  address = LSM303AGR_ACC_I2C_ADDRESS;
  
  /* Enable BDU */
  if ( LSM303AGR_ACC_W_BlockDataUpdate( (void *)this, LSM303AGR_ACC_BDU_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  /* FIFO mode selection */
  if ( LSM303AGR_ACC_W_FifoMode( (void *)this, LSM303AGR_ACC_FM_BYPASS ) == MEMS_ERROR )
  {
    return;
  }
  
  /* Output data rate selection - power down. */
  if ( LSM303AGR_ACC_W_ODR( (void *)this, LSM303AGR_ACC_ODR_DO_PWR_DOWN ) == MEMS_ERROR )
  {
    return;
  }
  
  /* Full scale selection. */
  if ( SetFS( 2.0f ) == LSM303AGR_ACC_STATUS_ERROR )
  {
    return;
  }
  
  /* Enable axes. */
  if ( LSM303AGR_ACC_W_XEN( (void *)this, LSM303AGR_ACC_XEN_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  if ( LSM303AGR_ACC_W_YEN ( (void *)this, LSM303AGR_ACC_YEN_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  if ( LSM303AGR_ACC_W_ZEN ( (void *)this, LSM303AGR_ACC_ZEN_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  /* Select default output data rate. */
  Last_ODR = 100.0f;
  
  isEnabled = 0;
};

/** Constructor
 * @param i2c object of an helper class which handles the I2C peripheral
 * @param address the address of the component's instance
 */
LSM303AGR_ACC_Sensor::LSM303AGR_ACC_Sensor(TwoWire *i2c, uint8_t address) : dev_i2c(i2c), address(address)
{
  /* Enable BDU */
  if ( LSM303AGR_ACC_W_BlockDataUpdate( (void *)this, LSM303AGR_ACC_BDU_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  /* FIFO mode selection */
  if ( LSM303AGR_ACC_W_FifoMode( (void *)this, LSM303AGR_ACC_FM_BYPASS ) == MEMS_ERROR )
  {
    return;
  }
  
  /* Output data rate selection - power down. */
  if ( LSM303AGR_ACC_W_ODR( (void *)this, LSM303AGR_ACC_ODR_DO_PWR_DOWN ) == MEMS_ERROR )
  {
    return;
  }
  
  /* Full scale selection. */
  if ( SetFS( 2.0f ) == LSM303AGR_ACC_STATUS_ERROR )
  {
    return;
  }
  
  /* Enable axes. */
  if ( LSM303AGR_ACC_W_XEN( (void *)this, LSM303AGR_ACC_XEN_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  if ( LSM303AGR_ACC_W_YEN ( (void *)this, LSM303AGR_ACC_YEN_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  if ( LSM303AGR_ACC_W_ZEN ( (void *)this, LSM303AGR_ACC_ZEN_ENABLED ) == MEMS_ERROR )
  {
    return;
  }
  
  /* Select default output data rate. */
  Last_ODR = 100.0f;
  
  isEnabled = 0;
};

/**
 * @brief  Enable LSM303AGR Accelerator
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::Enable(void)
{ 
  /* Check if the component is already enabled */
  if ( isEnabled == 1 )
  {
    return LSM303AGR_ACC_STATUS_OK;
  }
  
  /* Output data rate selection. */
  if ( SetODR_When_Enabled( Last_ODR ) == LSM303AGR_ACC_STATUS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  isEnabled = 1;
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Disable LSM303AGR Accelerator
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::Disable(void)
{ 
  /* Check if the component is already disabled */
  if ( isEnabled == 0 )
  {
    return LSM303AGR_ACC_STATUS_OK;
  }
  
  /* Store actual output data rate. */
  if ( GetODR( &Last_ODR ) == LSM303AGR_ACC_STATUS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  /* Output data rate selection - power down. */
  if ( LSM303AGR_ACC_W_ODR( (void *)this, LSM303AGR_ACC_ODR_DO_PWR_DOWN ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  isEnabled = 0;
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Read ID of LSM303AGR Accelerometer
 * @param  p_id the pointer where the ID of the device is stored
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::ReadID(uint8_t *p_id)
{
  if(!p_id)
  { 
    return LSM303AGR_ACC_STATUS_ERROR; 
  }
 
  /* Read WHO AM I register */
  if ( LSM303AGR_ACC_R_WHO_AM_I( (void *)this, p_id ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Read data from LSM303AGR Accelerometer
 * @param  pData the pointer where the accelerometer data are stored
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::GetAxes(int32_t *pData)
{
  int data[3];
  
  /* Read data from LSM303AGR. */
  if ( !LSM303AGR_ACC_Get_Acceleration((void *)this, data) )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  /* Calculate the data. */
  pData[0] = (int32_t)data[0];
  pData[1] = (int32_t)data[1];
  pData[2] = (int32_t)data[2];
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Read Accelerometer Sensitivity
 * @param  pfData the pointer where the accelerometer sensitivity is stored
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::GetSensitivity(float *pfData)
{
  LSM303AGR_ACC_LPEN_t lp_value;
  LSM303AGR_ACC_HR_t hr_value;
  
  /* Read low power flag */
  if( LSM303AGR_ACC_R_LOWPWR_EN( (void *)this, &lp_value ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  /* Read high performance flag */
  if( LSM303AGR_ACC_R_HiRes( (void *)this, &hr_value ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  if( lp_value == LSM303AGR_ACC_LPEN_DISABLED && hr_value == LSM303AGR_ACC_HR_DISABLED )
  {
    /* Normal Mode */
    return GetSensitivity_Normal_Mode( pfData );
  } else if ( lp_value == LSM303AGR_ACC_LPEN_ENABLED && hr_value == LSM303AGR_ACC_HR_DISABLED )
  {
    /* Low Power Mode */
    return GetSensitivity_LP_Mode( pfData );
  } else if ( lp_value == LSM303AGR_ACC_LPEN_DISABLED && hr_value == LSM303AGR_ACC_HR_ENABLED )
  {
    /* High Resolution Mode */
    return GetSensitivity_HR_Mode( pfData );
  } else
  {
    /* Not allowed */
    return LSM303AGR_ACC_STATUS_ERROR;
  }
}

/**
 * @brief  Read Accelerometer Sensitivity in Normal Mode
 * @param  sensitivity the pointer where the accelerometer sensitivity is stored
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::GetSensitivity_Normal_Mode( float *sensitivity )
{
  LSM303AGR_ACC_FS_t fullScale;
  
  /* Read actual full scale selection from sensor. */
  if ( LSM303AGR_ACC_R_FullScale( (void *)this, &fullScale ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  /* Store the sensitivity based on actual full scale. */
  switch( fullScale )
  {
    case LSM303AGR_ACC_FS_2G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_2G_NORMAL_MODE;
      break;
    case LSM303AGR_ACC_FS_4G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_4G_NORMAL_MODE;
      break;
    case LSM303AGR_ACC_FS_8G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_8G_NORMAL_MODE;
      break;
    case LSM303AGR_ACC_FS_16G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_16G_NORMAL_MODE;
      break;
    default:
      *sensitivity = -1.0f;
      return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Read Accelerometer Sensitivity in LP Mode
 * @param  sensitivity the pointer where the accelerometer sensitivity is stored
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::GetSensitivity_LP_Mode( float *sensitivity )
{
  LSM303AGR_ACC_FS_t fullScale;
  
  /* Read actual full scale selection from sensor. */
  if ( LSM303AGR_ACC_R_FullScale( (void *)this, &fullScale ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  /* Store the sensitivity based on actual full scale. */
  switch( fullScale )
  {
    case LSM303AGR_ACC_FS_2G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_2G_LOW_POWER_MODE;
      break;
    case LSM303AGR_ACC_FS_4G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_4G_LOW_POWER_MODE;
      break;
    case LSM303AGR_ACC_FS_8G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_8G_LOW_POWER_MODE;
      break;
    case LSM303AGR_ACC_FS_16G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_16G_LOW_POWER_MODE;
      break;
    default:
      *sensitivity = -1.0f;
      return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Read Accelerometer Sensitivity in HR Mode
 * @param  sensitivity the pointer where the accelerometer sensitivity is stored
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::GetSensitivity_HR_Mode( float *sensitivity )
{
  LSM303AGR_ACC_FS_t fullScale;
  
  /* Read actual full scale selection from sensor. */
  if ( LSM303AGR_ACC_R_FullScale( (void *)this, &fullScale ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  /* Store the sensitivity based on actual full scale. */
  switch( fullScale )
  {
    case LSM303AGR_ACC_FS_2G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_2G_HIGH_RESOLUTION_MODE;
      break;
    case LSM303AGR_ACC_FS_4G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_4G_HIGH_RESOLUTION_MODE;
      break;
    case LSM303AGR_ACC_FS_8G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_8G_HIGH_RESOLUTION_MODE;
      break;
    case LSM303AGR_ACC_FS_16G:
      *sensitivity = ( float )LSM303AGR_ACC_SENSITIVITY_FOR_FS_16G_HIGH_RESOLUTION_MODE;
      break;
    default:
      *sensitivity = -1.0f;
      return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Read raw data from LSM303AGR Accelerometer
 * @param  pData the pointer where the accelerometer raw data are stored
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::GetAxesRaw(int16_t *pData)
{
  uint8_t regValue[6] = {0, 0, 0, 0, 0, 0};
  u8_t shift = 0;
  LSM303AGR_ACC_LPEN_t lp;
  LSM303AGR_ACC_HR_t hr;
  
  /* Determine which operational mode the acc is set */
  if(!LSM303AGR_ACC_R_HiRes( (void *)this, &hr )) {
    return LSM303AGR_ACC_STATUS_ERROR;
  }

  if(!LSM303AGR_ACC_R_LOWPWR_EN( (void *)this, &lp )) {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  if (lp == LSM303AGR_ACC_LPEN_ENABLED && hr == LSM303AGR_ACC_HR_DISABLED) {
    /* op mode is LP 8-bit */
    shift = 8;
  } else if (lp == LSM303AGR_ACC_LPEN_DISABLED && hr == LSM303AGR_ACC_HR_DISABLED) {
    /* op mode is Normal 10-bit */
    shift = 6;
  } else if (lp == LSM303AGR_ACC_LPEN_DISABLED && hr == LSM303AGR_ACC_HR_ENABLED) {
    /* op mode is HR 12-bit */
    shift = 4;
  } else {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  /* Read output registers from LSM303AGR_ACC_GYRO_OUTX_L_XL to LSM303AGR_ACC_GYRO_OUTZ_H_XL. */
  if (!LSM303AGR_ACC_Get_Raw_Acceleration( (void *)this, ( uint8_t* )regValue ))
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  /* Format the data. */
  pData[0] = ( ( ( ( ( int16_t )regValue[1] ) << 8 ) + ( int16_t )regValue[0] ) >> shift );
  pData[1] = ( ( ( ( ( int16_t )regValue[3] ) << 8 ) + ( int16_t )regValue[2] ) >> shift );
  pData[2] = ( ( ( ( ( int16_t )regValue[5] ) << 8 ) + ( int16_t )regValue[4] ) >> shift );
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Read LSM303AGR Accelerometer output data rate
 * @param  odr the pointer to the output data rate
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::GetODR(float* odr)
{
  LSM303AGR_ACC_ODR_t odr_low_level;
  
  if ( LSM303AGR_ACC_R_ODR( (void *)this, &odr_low_level ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  switch( odr_low_level )
  {
    case LSM303AGR_ACC_ODR_DO_PWR_DOWN:
      *odr = 0.0f;
      break;
    case LSM303AGR_ACC_ODR_DO_1Hz:
      *odr = 1.0f;
      break;
    case LSM303AGR_ACC_ODR_DO_10Hz:
      *odr = 10.0f;
      break;
    case LSM303AGR_ACC_ODR_DO_25Hz:
      *odr = 25.0f;
      break;
    case LSM303AGR_ACC_ODR_DO_50Hz:
      *odr = 50.0f;
      break;
    case LSM303AGR_ACC_ODR_DO_100Hz:
      *odr = 100.0f;
      break;
    case LSM303AGR_ACC_ODR_DO_200Hz:
      *odr = 200.0f;
      break;
    case LSM303AGR_ACC_ODR_DO_400Hz:
      *odr = 400.0f;
      break;
    default:
      *odr = -1.0f;
      return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Set ODR
 * @param  odr the output data rate to be set
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::SetODR(float odr)
{
  if(isEnabled == 1)
  {
    if(SetODR_When_Enabled(odr) == LSM303AGR_ACC_STATUS_ERROR)
    {
      return LSM303AGR_ACC_STATUS_ERROR;
    }
  }
  else
  {
    if(SetODR_When_Disabled(odr) == LSM303AGR_ACC_STATUS_ERROR)
    {
      return LSM303AGR_ACC_STATUS_ERROR;
    }
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Set ODR when enabled
 * @param  odr the output data rate to be set
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::SetODR_When_Enabled(float odr)
{
  LSM303AGR_ACC_ODR_t new_odr;
  
  new_odr = ( odr <=    1.0f ) ? LSM303AGR_ACC_ODR_DO_1Hz
          : ( odr <=   10.0f ) ? LSM303AGR_ACC_ODR_DO_10Hz
          : ( odr <=   25.0f ) ? LSM303AGR_ACC_ODR_DO_25Hz
          : ( odr <=   50.0f ) ? LSM303AGR_ACC_ODR_DO_50Hz
          : ( odr <=  100.0f ) ? LSM303AGR_ACC_ODR_DO_100Hz
          : ( odr <=  200.0f ) ? LSM303AGR_ACC_ODR_DO_200Hz
          :                      LSM303AGR_ACC_ODR_DO_400Hz;
            
  if ( LSM303AGR_ACC_W_ODR( (void *)this, new_odr ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Set ODR when disabled
 * @param  odr the output data rate to be set
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::SetODR_When_Disabled(float odr)
{ 
  Last_ODR = ( odr <=    1.0f ) ?  1.0f
           : ( odr <=   10.0f ) ? 10.0f
           : ( odr <=   25.0f ) ? 25.0f
           : ( odr <=   50.0f ) ? 50.0f
           : ( odr <=  100.0f ) ? 100.0f
           : ( odr <=  200.0f ) ? 200.0f
           :                      400.0f;
                                 
  return LSM303AGR_ACC_STATUS_OK;
}


/**
 * @brief  Read LSM303AGR Accelerometer full scale
 * @param  fullScale the pointer to the full scale
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::GetFS(float* fullScale)
{
  LSM303AGR_ACC_FS_t fs_low_level;
  
  if ( LSM303AGR_ACC_R_FullScale( (void *)this, &fs_low_level ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  switch( fs_low_level )
  {
    case LSM303AGR_ACC_FS_2G:
      *fullScale =  2.0f;
      break;
    case LSM303AGR_ACC_FS_4G:
      *fullScale =  4.0f;
      break;
    case LSM303AGR_ACC_FS_8G:
      *fullScale =  8.0f;
      break;
    case LSM303AGR_ACC_FS_16G:
      *fullScale = 16.0f;
      break;
    default:
      *fullScale = -1.0f;
      return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief  Set full scale
 * @param  fullScale the full scale to be set
 * @retval LSM303AGR_ACC_STATUS_OK in case of success, an error code otherwise
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::SetFS(float fullScale)
{
  LSM303AGR_ACC_FS_t new_fs;
  
  new_fs = ( fullScale <= 2.0f ) ? LSM303AGR_ACC_FS_2G
         : ( fullScale <= 4.0f ) ? LSM303AGR_ACC_FS_4G
         : ( fullScale <= 8.0f ) ? LSM303AGR_ACC_FS_8G
         :                         LSM303AGR_ACC_FS_16G;
           
  if ( LSM303AGR_ACC_W_FullScale( (void *)this, new_fs ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }
  
  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief Read accelerometer data from register
 * @param reg register address
 * @param data register data
 * @retval LSM303AGR_ACC_STATUS_OK in case of success
 * @retval LSM303AGR_ACC_STATUS_ERROR in case of failure
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::ReadReg( uint8_t reg, uint8_t *data )
{

  if ( LSM303AGR_ACC_ReadReg( (void *)this, reg, data ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }

  return LSM303AGR_ACC_STATUS_OK;
}

/**
 * @brief Write accelerometer data to register
 * @param reg register address
 * @param data register data
 * @retval LSM303AGR_ACC_STATUS_OK in case of success
 * @retval LSM303AGR_ACC_STATUS_ERROR in case of failure
 */
LSM303AGR_ACC_StatusTypeDef LSM303AGR_ACC_Sensor::WriteReg( uint8_t reg, uint8_t data )
{

  if ( LSM303AGR_ACC_WriteReg( (void *)this, reg, data ) == MEMS_ERROR )
  {
    return LSM303AGR_ACC_STATUS_ERROR;
  }

  return LSM303AGR_ACC_STATUS_OK;
}

uint8_t LSM303AGR_ACC_IO_Write( void *handle, uint8_t WriteAddr, uint8_t *pBuffer, uint16_t nBytesToWrite )
{
  return ((LSM303AGR_ACC_Sensor *)handle)->IO_Write(pBuffer, WriteAddr, nBytesToWrite);
}

uint8_t LSM303AGR_ACC_IO_Read( void *handle, uint8_t ReadAddr, uint8_t *pBuffer, uint16_t nBytesToRead )
{
  return ((LSM303AGR_ACC_Sensor *)handle)->IO_Read(pBuffer, ReadAddr, nBytesToRead);
}
