from machine import ADC
from machine import Pin
from machine import PWM
import time

Pot = ADC(0)
servo_13 = PWM(Pin(13), freq=50, duty 75)

while True:
  servo_13.duty(30+((180 - Pot.read()/4 * 0.7)/2))
  time.sleep_ms(50)