from machine import Pin
import time

BP_7 = Pin(7, Pin.IN, Pin.PULL_UP)
BROCHE_8 = Pin(8, Pin.OUT)

while True:
  if BP_7.value() == 0:
    BROCHE_8.value(0)
    time.sleep(250)
    BROCHE_8.value(1)
    time.sleep(250)
  else:
    BROCHE_8.value(0)