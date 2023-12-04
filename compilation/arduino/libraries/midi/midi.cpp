#include <Arduino.h>
#include "midi.h"

Midi::Midi(){}

void Midi::initialisation(){
	Serial.begin(115200);
}

void Midi::send(byte command, byte MIDInote, byte MIDIvelocity){
	Serial.write(command);//send note on or note off command 
	Serial.write(MIDInote);//send pitch data
	Serial.write(MIDIvelocity);//send velocity data
}

void Midi::send(byte command, byte para){
	Serial.write(command);
	Serial.write(para);
}
