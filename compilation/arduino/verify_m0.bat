@echo off
arduino-builder -hardware "%cd%" -hardware "%cd%\Seeeduino" -tools "%cd%\tools-builder" -tools "%cd%\tools\avr" -tools "%cd%\Seeeduino" -built-in-libraries "%cd%\libraries" -fqbn=Seeeduino:samd:seeed_XIAO_m0:usbstack=arduino,debug=off -build-cache "%cd%\cache" -build-path "%cd%\build" -prefs=runtime.tools.arm-none-eabi-gcc.path=%cd%\Seeeduino\tools\arm-none-eabi-gcc\7-2017q4 -prefs=runtime.tools.arm-none-eabi-gcc-7-2017q4.path=%cd%\Seeeduino\tools\arm-none-eabi-gcc\7-2017q4 -prefs=runtime.tools.arduinoOTA.path=%cd%\Seeeduino\tools\arduinoOTA\1.2.1 -prefs=runtime.tools.arduinoOTA-1.2.1.path=%cd%\Seeeduino\tools\arduinoOTA\1.2.1 -prefs=runtime.tools.bossac.path=%cd%\Seeeduino\tools\bossac\1.7.0-arduino3 -prefs=runtime.tools.bossac-1.8.0-48-gb176eee.path=%cd%\Seeeduino\tools\bossac\1.8.0-48-gb176eee -prefs=runtime.tools.CMSIS-Atmel.path=%cd%\Seeeduino\tools\CMSIS-Atmel\1.2.1 -prefs=runtime.tools.CMSIS-Atmel-1.2.1.path=%cd%\Seeeduino\tools\CMSIS-Atmel\1.2.1 -prefs=runtime.tools.bossac-1.7.0-arduino3.path=%cd%\Seeeduino\tools\bossac\1.7.0-arduino3 -prefs=runtime.tools.CMSIS.path=%cd%\Seeeduino\tools\CMSIS\5.4.0 -prefs=runtime.tools.CMSIS-5.4.0.path=%cd%\Seeeduino\tools\CMSIS\5.4.0 -prefs=runtime.tools.openocd.path=%cd%\Seeeduino\tools\openocd\0.10.0-arduino7 -prefs=runtime.tools.openocd-0.10.0-arduino7.path=%cd%\Seeeduino\tools\openocd\0.10.0-arduino7 "%cd%\ino\sketch.ino"