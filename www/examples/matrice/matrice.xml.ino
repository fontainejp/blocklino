#include <matrX.h>

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



Matrice_SPI matrice;

void setup() {
  matrice.initialisation(12, 11, 10, 1);
}

void loop() {
  matrice.afficher(smile, 0);
  delay(1*1000);
  matrice.afficher(triste, 0);
  delay(1*1000);

}