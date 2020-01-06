void setup() {
  pinMode(5, OUTPUT);
}

void loop() {
  for (int count=0 ; count<2 ; count++) {
    tone(5,392,500);
    delay(500);
  }
  tone(5,440,500);
  delay(500);
  tone(5,392,500);
  delay(500);
  tone(5,523,500);
  delay(500);
  tone(5,493,1000);
  delay(1000);
  for (int count=0 ; count<2 ; count++) {
    tone(5,392,500);
    delay(500);
  }
  tone(5,440,500);
  delay(500);
  tone(5,392,500);
  delay(500);
  tone(5,587,500);
  delay(500);
  tone(5,523,500);
  delay(500);
  while(true);

}