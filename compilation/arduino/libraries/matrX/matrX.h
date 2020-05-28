/*
 *    matrX.h is a fork of LedControl.h [ Copyright 2007 Eberhard Fahle ]
 *    A library for controling Leds with a MAX7219 / 
 */
 
#ifndef matrX_h
#define matrX_h

#include <avr/pgmspace.h>

class Matrice_I2C {
public:
	Matrice_I2C();
	void initialisation();
	void afficher(byte s[], byte mat);
	void mettre_del(byte addr, byte x, byte y, boolean etat);
	void effacer(byte mat);
private:
	byte sda_pin;
	byte scl_pin;
	void IIC_start();
	void IIC_end();
	void IIC_send(unsigned char send_data);
};

class Matrice_SPI {
public:
	Matrice_SPI();
	void initialisation(int dataPin, int clkPin, int csPin, int numDevices);
    void effacer(int addr);
    void mettre_del(int addr, int row, int col, boolean state);
	void afficher(byte s[], byte mat);
	void faire_defiler(char s[]);
private:
	byte spidata[16];
    byte status[64];
    int SPI_MOSI;
    int SPI_CLK;
    int SPI_CS;
    int maxDevices;
    void spiTransfer(int addr, byte opcode, byte data);
	void setScanLimit(int addr, int limit);
    void setRow(int addr, int row, byte value);
    void setColumn(int addr, int col, byte value);
	void shutdown(int addr, bool status);
    void setIntensity(int addr, int intensity);
	void rotateBufferLong();
	void loadBufferLong(int ascii);
	void printBufferLong();	
};

#endif