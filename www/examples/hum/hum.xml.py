from grove_rgb_lcd import *
import dht

setRGB(0,0,255)
h&t_2 = dht.DHT11(Pin(2))

while True:
  lcd.setCursor(0,0)
  lcd.print("Temperature")
  lcd.setCursor(0,1)
  lcd.print("Humidite")
  setText("h&t_2.temperature()")
  setText("h&t_2.humidity()")