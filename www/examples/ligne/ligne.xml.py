from machine import Pin

follower_13 = Pin(13, Pin.IN)

while True:
  if follower_13.value() == 1:
  else: