void setup() {
  pinMode(13, INPUT);
  pinMode(6, OUTPUT);
  pinMode(11, OUTPUT);
}

void loop() {
  if (digitalRead(13) == HIGH) {
    analogWrite(6,45);
    digitalWrite(11,HIGH);
  } else {
    analogWrite(6,0);
    digitalWrite(11,HIGH);
  }

}