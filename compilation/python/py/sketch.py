import time
from machine import Pin

BROCHE_2 = Pin(2, Pin.OUT)

while True:
  BROCHE_2.value(0)
  time.sleep_ms(100)
  BROCHE_2.value(1)
  time.sleep_ms(100)