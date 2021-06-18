package de.telekom.sea3.webserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.telekom.sea3.webserver.modul.Person;
import de.telekom.sea3.webserver.modul.Personen;
import de.telekom.sea3.webserver.repo.PersonRepository;

@Service
public class PersonService {

	private PersonRepository personRepository;
	
	@Autowired
	public PersonService(PersonRepository personRepository) {
		super();
		System.out.println("PersonService instanziert: " + this.toString());
		this.personRepository = personRepository;
	}
	
	public Integer getSize() {
		return personRepository.getSize();
	}
	
	public Personen getAllPersons() {
		return new Personen(personRepository.getAll());
	}
	
	public Person get(int id) {
		return new Person("Herr", "Paul", "Paulsen");
	}

	public Person add(Person person) {
		personRepository.add(person);
		return person;
	}
	
	public boolean remove(int id) {
		return personRepository.remove(id);
	}
}
