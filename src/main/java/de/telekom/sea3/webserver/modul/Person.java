package de.telekom.sea3.webserver.modul;

public class Person {
	
	private static int index = 1;
	
	private String anrede;
	private String vorname;
	private String nachname;
	private int id;
	
	public Person(String anrede, String vorname, String nachname) {
		id = index++;
		this.anrede = anrede;
		this.vorname = vorname;
		this.nachname = nachname;
	}
		
	public int getId() {
		return id;
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
