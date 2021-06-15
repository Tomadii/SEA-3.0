package de.telekom.sea3.webserver.modul;

public class Person {
	
	private String anrede;
	private String vorname;
	private String nachname;
	
	public Person(String anrede, String vorname, String nachname) {
		this.anrede = anrede;
		this.vorname = vorname;
		this.nachname = nachname;
	}
	
	public String getAnrede() {
		return anrede;
	}
	public void setAnrede(String anrede) {
		this.anrede = anrede;
	}
	public String getVorname() {
		return vorname;
	}
	public void setVorname(String vorname) {
		this.vorname = vorname;
	}
	public String getNachname() {
		return nachname;
	}
	public void setNachname(String nachname) {
		this.nachname = nachname;
	}
	
}
