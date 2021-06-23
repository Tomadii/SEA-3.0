package de.telekom.sea3.webserver.repo;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import de.telekom.sea3.webserver.modul.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {

}
