#include <Arduino.h>
#include "extension.h"

extension::extension(){}

void extension::ultrason(byte trig, byte echo){
	pinMode(trig, OUTPUT);
	digitalWrite(trig, LOW);
	pinMode(echo, INPUT);
	trig_pin = trig;
	echo_pin = echo;
}

float extension::ultrason_distance(){
	digitalWrite(trig_pin, HIGH);
	delayMicroseconds(10);
	digitalWrite(trig_pin, LOW);
	return pulseIn(echo_pin, HIGH)/58;
}

void extension::bargraphe(byte dcki, byte di){
	pinMode(dcki, OUTPUT);
	pinMode(di, OUTPUT);
	dcki_pin = dcki;
	di_pin = di;
}

void extension::bargraphe_allumer(byte del){
	unsigned char _state[]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};
	void sendData(unsigned int data) {
	  for (unsigned char i=0; i < 16; i++){
		unsigned int state=(data&0x8000) ? HIGH : LOW;
		digitalWrite(di_pin, state);
		state=digitalRead(dcki_pin) ? LOW : HIGH;
		digitalWrite(dcki_pin, state);
		data <<= 1;
	  }
	}
	void setData(unsigned char _state[]) {
	  sendData(0x00);
	  for (unsigned char i=0; i<10; i++) sendData(_state[10-i-1]);
	  sendData(0x00);
	  sendData(0x00);
	  digitalWrite(di_pin, LOW);
	  delayMicroseconds(10);
	  for (unsigned char i=0; i<4; i++){
		digitalWrite(di_pin, HIGH);
		digitalWrite(di_pin, LOW);
	  }
	}
	del=max(0, min(10, del));
	del *= 8;
	for (byte i=0; i<10; i++) {
		_state[i]=(del>8) ? ~0 : (del>0) ? ~(~0 << byte(del)) : 0;
		del -= 8;
	};
	setData(_state);
}

void extension::matrice16(){
	pinMode(A4,OUTPUT);
	pinMode(A5,OUTPUT);
	digitalWrite(A4,LOW);
	digitalWrite(A5,LOW);
	sda_pin = A4;
	scl_pin = A5;
}

void extension::matrice16_afficher(byte s[]){
	void IIC_start() {
		digitalWrite(scl_pin,LOW);
		delayMicroseconds(3);
		digitalWrite(sda_pin,HIGH);
		delayMicroseconds(3);
		digitalWrite(scl_pin,HIGH);
		delayMicroseconds(3);
		digitalWrite(sda_pin,LOW);
		delayMicroseconds(3);
	}
	void IIC_end() {
		digitalWrite(scl_pin,LOW);
		delayMicroseconds(3);
		digitalWrite(sda_pin,LOW);
		delayMicroseconds(3);
		digitalWrite(scl_pin,HIGH);
		delayMicroseconds(3);
		digitalWrite(sda_pin,HIGH);
		delayMicroseconds(3);
	}
	void IIC_send(unsigned char send_data) {
		for(char i = 0;i < 8;i++) {
			digitalWrite(scl_pin,LOW);
			delayMicroseconds(3);
			if(send_data & 0x01) {
				digitalWrite(sda_pin,HIGH);
			} else {
				digitalWrite(sda_pin,LOW);
			}
			delayMicroseconds(3);
			digitalWrite(scl_pin,HIGH);
			delayMicroseconds(3);
			send_data = send_data >> 1;
		}
	}
	IIC_start();
	IIC_send(0x40);
	IIC_end();
	IIC_start();
	IIC_send(0xC0);
	for(char i=0; i<16; i++) {
		IIC_send(s[i]);
	}
	IIC_end();
	IIC_start();
	IIC_send(0x8F);
	IIC_end();
}

void extension::matrice16_effacer(){
	byte t[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
	matrice16_afficher (t);
}

void extension::rvb(byte pinR, byte pinV, byte pinB){
	pinMode(pinR, OUTPUT);
	pinMode(pinV, OUTPUT);
	pinMode(pinB, OUTPUT);
	Rouge_pin = pinR;
	Vert_pin = pinV;
	Bleu_pin = pinB;
}

void extension::rvb_afficher_couleur(byte red, byte green, byte blue){
	analogWrite(Rouge_pin, red);
	analogWrite(Vert_pin, green);
	analogWrite(Bleu_pin, blue);
}

void extension::mp3(){
	
}