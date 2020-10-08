#include <Arduino.h>
#include "extension.h"

Extension::Extension(){}

void Extension::ultrason(byte trig, byte echo){
	pinMode(trig, OUTPUT);
	digitalWrite(trig, LOW);
	pinMode(echo, INPUT);
	trig_pin = trig;
	echo_pin = echo;
}

float Extension::mesure_distance(){
	digitalWrite(trig_pin, HIGH);
	delayMicroseconds(10);
	digitalWrite(trig_pin, LOW);
	return pulseIn(echo_pin, HIGH)/58;
}

void Extension::bargraphe(byte dcki, byte di){
	pinMode(dcki, OUTPUT);
	pinMode(di, OUTPUT);
	dcki_pin = dcki;
	di_pin = di;
}

void Extension::sendData(unsigned int data){
  for (byte i=0; i < 16; i++){
	unsigned int state=(data&0x8000) ? HIGH : LOW;
	digitalWrite(di_pin, state);
	state=digitalRead(dcki_pin) ? LOW : HIGH;
	digitalWrite(dcki_pin, state);
	data <<= 1;
  }
}

void Extension::setData(unsigned char _state[]){
	sendData(0x00);
	for (byte i=0; i<10; i++) sendData(_state[10-i-1]);
	sendData(0x00);
	sendData(0x00);
	digitalWrite(di_pin, LOW);
	delayMicroseconds(10);
	for (byte i=0; i<4; i++){
		digitalWrite(di_pin, HIGH);
		digitalWrite(di_pin, LOW);
	}
}

void Extension::bargraphe_allumer(float del){
	unsigned char _state[]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};
	del=max(0, min(10, del));
	del *= 8;
	for (byte i=0; i<10; i++) {
		_state[i]=(del>8) ? ~0 : (del>0) ? ~(~0 << byte(del)) : 0;
		del -= 8;
	}
	setData(_state);
}

void Extension::rvb(byte pinR, byte pinV, byte pinB){
	pinMode(pinR, OUTPUT);
	pinMode(pinV, OUTPUT);
	pinMode(pinB, OUTPUT);
	Rouge_pin = pinR;
	Vert_pin = pinV;
	Bleu_pin = pinB;
}

void Extension::rvb_afficher_couleur(byte red, byte green, byte blue){
	analogWrite(Rouge_pin, red);
	analogWrite(Vert_pin, green);
	analogWrite(Bleu_pin, blue);
}

void Extension::exe_cmd(byte CMD, byte Par1, byte Par2){
	word check=-(0xFF + 0x06 + CMD + 0x00 + Par1 + Par2);
	byte Command[10]={0x7E,0xFF,0x06,CMD,0x00,Par1,Par2,highByte(check),lowByte(check),0xEF};
	for (byte i=0; i<10; i++) Serial.write(Command[i]);
}

void Extension::mp3(byte volume_hex){
	Serial.begin(9600);
	delay(1000);
	exe_cmd(0x3F,0,0);
	delay(500);
	exe_cmd(0x06,0,volume_hex);
	delay(500);
}

void Extension::mp3_lecture_auto(byte volume_hex){
	Serial.begin(9600);
	delay(1000);
	exe_cmd(0x3F,0,0);
	delay(500);
	exe_cmd(0x06,0,volume_hex);
	delay(500);
	exe_cmd(0x11,0,1);
	delay(500);
}

void Extension::mp3_lecture(){
	exe_cmd(0x0D,0,1);
	delay(500);
}

void Extension::mp3_pause(){
	exe_cmd(0x0E,0,0);
	delay(500);
}

void Extension::mp3_suivant(){
	exe_cmd(0x01,0,1);
	delay(500);
}

void Extension::mp3_precedent(){
	exe_cmd(0x02,0,1);
	delay(500);
}

void Extension::mp3_volume(byte volume_hex){
	exe_cmd(0x06,0,volume_hex);
	delay(500);
}

void Extension::mp3_lecture_piste(byte piste){
	exe_cmd(0x03,0,piste);
	delay(500);
}
