#include <Wire.h>
#include <rgb_lcd.h>
#include <DHT.h>

rgb_lcd lcd;
DHT dht11(2, DHT11);

void setup() {
  lcd.begin(16,2);
  lcd.clear();
  dht11.begin();
}

void loop() {
  lcd.setCursor(0,0);
  lcd.print("Temperature");
  lcd.setCursor(0,1);
  lcd.print("Humidite");
  lcd.setCursor(12,0);
  lcd.print(dht11.readTemperature());
  lcd.setCursor(9,1);
  lcd.print(dht11.readHumidity());

}