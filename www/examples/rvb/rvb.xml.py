from machine import Pin
import time

BROCHE_7 = Pin(7, Pin.OUT)
BROCHE_6 = Pin(6, Pin.OUT)
BROCHE_5 = Pin(5, Pin.OUT)

while True:
  BROCHE_7.value(1)
  BROCHE_6.value(0)
  BROCHE_5.value(0)
  time.sleep(1)
  BROCHE_7.value(0)
  BROCHE_6.value(1)
  time.sleep(1)
  BROCHE_6.value(0)
  BROCHE_5.value(1)
  time.sleep(1)