from machine import Pin
import time

BROCHE_2 = Pin(2, Pin.OUT)

while True:
  BROCHE_2.value(1)
  time.sleep(1)
  BROCHE_2.value(0)
  time.sleep(1)