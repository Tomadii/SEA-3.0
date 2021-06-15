package de.telekom.sea3.webserver.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import de.telekom.sea3.webserver.modul.Person;

@Repository
public class PersonRepository {
	
	private List<Person> personen = new ArrayList<Person>();

	public PersonRepository() {
		super();
		System.out.println("PersonRepository instanziert: " + this.toString());
	}
	
	public int getSize() {
		return personen.size();
	}
	
	public boolean add(Person person) {
		return personen.add(person);
	}
	
	public List<Person> getAll() {
		return personen;
	}
}
