import max7219
from machine import Pin
from machine import SPI
import time

spi = SPI(-1, baudrate=10000000, miso=Pin(10), mosi=Pin(12), sck=Pin(11))
display = max7219.Matrix8x8(spi, 1)

while True:
  afficher(smile);
  time.sleep(1)
  afficher(triste);
  time.sleep(1)