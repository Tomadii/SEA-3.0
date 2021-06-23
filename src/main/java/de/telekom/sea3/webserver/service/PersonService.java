package de.telekom.sea3.webserver.service;

import java.util.Optional;

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
		this.personRepository = personRepository;
	}
	
	public Long getSize() {
		return personRepository.count();
	}
	
	public Personen getAllPersons() {
		return new Personen(personRepository.findAll());
	}
	
	public Optional<Person> get(Long id) {
		return personRepository.findById(id);
		
	}

	public Person add(Person person) {
		personRepository.save(person);
		return person;
	}
	
	public void remove(Long id) {
		personRepository.deleteById(id);
	}
	
//	public Person update(Person person) {
//		personRepository.
//	}
	
}
