package de.telekom.sea3.webserver.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import de.telekom.sea3.webserver.service.PersonService;

@Controller
public class PersonHtmlController {
	
	private PersonService personService;

	@Autowired
	public PersonHtmlController(PersonService personService) {
		super();
		System.out.println("PersonController instanziert: " + this.toString());
		this.personService = personService;
	}
	
	// URL:"http://localhost:8080/size"
	@GetMapping("/size")
	public String getSize(Model model) {
		
		String title = "Size";
		String size = personService.getSize().toString();
		
		model.addAttribute("title", title);
		model.addAttribute("size", size);
		
		return "size";
	}

	@GetMapping("/personen")
	public String personen(Model model) {
		model.addAttribute("personen", personService.getAllPersons().getPersonen());
		
		return "personen";
	}
	
}
