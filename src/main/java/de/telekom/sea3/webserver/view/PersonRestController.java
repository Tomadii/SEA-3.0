package de.telekom.sea3.webserver.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import de.telekom.sea3.webserver.modul.Person;
import de.telekom.sea3.webserver.modul.Personen;
import de.telekom.sea3.webserver.modul.Size;
import de.telekom.sea3.webserver.service.PersonService;

@RestController
public class PersonRestController {

	private PersonService personService;
	
	@Autowired
	public PersonRestController(PersonService personService) {
		super();
		this.personService = personService;
	}
	
	/** @see URL:<a href="http://localhost:8080/json/persons/all">http://localhost:8080/json/persons/all</a> */
	@GetMapping("/json/persons/all")
	public Personen getAllPersons() {
		return personService.getAllPersons();
		}
	
	/** @see URL:<a href="http://localhost:8080/json/persons/size">http://localhost:8080/json/persons/size</a> */
	@GetMapping("/json/persons/size")
	public Size getSize() {
		return new Size(personService.getSize());
	}
	
	@GetMapping("json/person/{id}")
	public Person getPerson(@PathVariable("id") int id) {
		return personService.get(id);
	}
	
	@PostMapping("json/person")
	public Person addPerson(@RequestBody Person person) {
		return personService.add(person);
		
	}
	
}
