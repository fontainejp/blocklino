void setup() {
  pinMode(7, INPUT_PULLUP);
  pinMode(8, OUTPUT);
}

void loop() {
  if (digitalRead(7) == LOW) {
    digitalWrite(8, LOW);
    delay(250*1000);
    digitalWrite(8, HIGH);
    delay(250*1000);
  } else {
    digitalWrite(8, LOW);
  }

}