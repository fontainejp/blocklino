#include <LedControl.h>

byte smile[]={
 B00000000,
 B01000010,
 B01000010,
 B00000000,
 B00000000,
 B10000001,
 B01000010,
 B00111100};

byte triste[]={
 B00000000,
 B01000010,
 B01000010,
 B00000000,
 B00000000,
 B00111100,
 B01000010,
 B10000001};



LedControl lc=LedControl(12,11,10,1);

void afficher(byte s[]) {
  for (char i=0; i<8; i++) {
    lc.setRow(0,i,s[i]);
  }
}
void effacer () {
  lc.clearDisplay(0);
}

void setup() {
  lc.shutdown(0,false);
  lc.setIntensity(0,1);
  lc.clearDisplay(0);
}

void loop() {
  afficher(smile);
  delay(1*1000);
  afficher(triste);
  delay(1*1000);

}