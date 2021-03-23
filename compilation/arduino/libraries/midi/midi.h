#ifndef midi_h
#define midi_h

class Midi {
public:
	Midi();
	void initialisation()
	void send(byte command, byte MIDInote, byte MIDIvelocity);
	void send(byte command, byte para);
};

#endif