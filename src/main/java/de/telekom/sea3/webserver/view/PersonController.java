package de.telekom.sea3.webserver.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import de.telekom.sea3.webserver.service.PersonService;

@Controller
public class PersonController {

	private PersonService personService;

	@Autowired
	public PersonController(PersonService personService) {
		super();
		System.out.println("PersonController instanziert: " + this.toString());
		this.personService = personService;
	}
	
}
