package de.telekom.sea3.webserver.repo;

import org.springframework.stereotype.Repository;

@Repository
public class PersonRepository {

	public PersonRepository() {
		System.out.println("PersonRepository instanziert: " + this.toString());
	}
}
