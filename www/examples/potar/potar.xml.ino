#include <Servo.h>

Servo servo_13;

void setup() {
  servo_13.attach(13);
}

void loop() {
  servo_13.write((180 - analogRead(A0)/4 * 0.7));
  delay(50);

}