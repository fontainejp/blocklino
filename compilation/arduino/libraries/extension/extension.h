#ifndef extension_h
#define extension_h

class Extension {
public:
	Extension();
	void ultrason(byte trig, byte echo);
	float mesure_distance();
	void bargraphe(byte dcki, byte di);
	void bargraphe_allumer(float del);
	void rvb(byte pinR, byte pinV, byte pinB);
	void rvb_afficher_couleur(byte red, byte green, byte blue);
	void mp3(byte volume_hex);
	void mp3_lecture_auto(byte volume_hex);
	void mp3_lecture();
	void mp3_lecture_piste(byte piste);
	void mp3_suivant();
	void mp3_precedent();
	void mp3_pause();
	void mp3_volume(byte volume_hex);
private:
	byte Rouge_pin;
	byte Vert_pin;
	byte Bleu_pin;
	byte trig_pin;
	byte echo_pin;
	byte dcki_pin;
	byte di_pin;
	void setData(unsigned char _state[]);
	void sendData(unsigned int data);
	void exe_cmd(byte CMD, byte Par1, byte Par2);
};

#endif