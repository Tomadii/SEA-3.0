package de.telekom.sea3.webserver.modul;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Version;

import de.telekom.sea3.webserver.looup.Salutation;

@Entity
@Table(name="persons")
public class Person {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private Salutation salutation;
	
	@Column 
	private String firstname;
	
	@Column 
	private String lastname;
	
	@Column
	private LocalDate birthdate;
	
	@Version
	private Long version;
	
	public Person(String salutation, String firstname, String lastname) {
		this.salutation = Salutation.fromString(salutation);
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public Person() {
		
	}

	public Long getId() {
		return id;
	}
	
	public String getSalutation() {
		return salutation.toString();
	}

	public void setSalutation(String salutation) {
		this.salutation = Salutation.fromString(salutation);
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}
	
}
