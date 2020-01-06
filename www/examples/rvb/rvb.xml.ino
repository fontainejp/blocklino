void setup() {
  pinMode(7, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(5, OUTPUT);
}

void loop() {
  digitalWrite(7, HIGH);
  digitalWrite(6, LOW);
  digitalWrite(5, LOW);
  delay(1*1000);
  digitalWrite(7, LOW);
  digitalWrite(6, HIGH);
  delay(1*1000);
  digitalWrite(6, LOW);
  digitalWrite(5, HIGH);
  delay(1*1000);

}