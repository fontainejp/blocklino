#ifndef extension_h
#define extension_h

class extension  {
public:
	extension();
	void ultrason(byte trig, byte echo);
	float ultrason_distance();
	void bargraphe(byte dcki, byte di);
	void bargraphe_allumer(byte del);
	void matrice16(byte sda, byte scl);
	void matrice32(byte sda, byte scl);
	void rvb(byte pinR, byte pinV, byte pinB);
	void rvb_afficher_couleur(byte red, byte green, byte blue);
	void mp3();
private:
	byte Rouge_pin;
	byte Vert_pin;
	byte Bleu_pin;
	byte trig_pin;
	byte echo_pin;
	byte dcki_pin;
	byte di_pin;
	byte sda_pin;
	byte scl_pin;
};

#endif