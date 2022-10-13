package com.nexttech.managerapi.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.nexttech.managerapi.entity.Person;
import com.nexttech.managerapi.exception.ResourceNotFoundException;
import com.nexttech.managerapi.repository.PersonRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/people")
public class PersonController {

	private PersonRepository personRepository;

	@Autowired
	public PersonController(PersonRepository personRepository) {
		this.personRepository = personRepository;
	}

	@GetMapping
	public List<Person> getAllPeople() {
		return personRepository.findAll();
	}

	@GetMapping("{person_id}")
	public ResponseEntity<Person> getPersonById(@PathVariable(value = "person_id") long personId)
			throws ResourceNotFoundException {
		Person person = personRepository.findById(personId)
				.orElseThrow(() -> new ResourceNotFoundException("Person not found: " + personId));
		return ResponseEntity.ok().body(person);
	}

	@PostMapping
	@ResponseStatus(value = HttpStatus.CREATED)
	public String createPerson(@RequestBody Person person) {
		Person savePerson = personRepository.save(person);
		return "Created person with ID: " + savePerson.getPersonId();
	}
	
	@PutMapping("{person_id}")
	public ResponseEntity<Person> updatePerson(@PathVariable (value = "person_id") long personId,
											@Validated @RequestBody Person personDetails) throws ResourceNotFoundException{
		Person person = personRepository.findById(personId)
				.orElseThrow(() -> new ResourceNotFoundException("Room not found for this id: " + personId));
		person.setName(personDetails.getName());
		person.setCpf(personDetails.getCpf());
		person.setBirthDate(personDetails.getBirthDate());
		person.setPhones(personDetails.getPhones());
		final Person updatePerson = personRepository.save(person);
		return ResponseEntity.ok(updatePerson);
	}
	
	@DeleteMapping("{person_id}")
	public Map<String, Boolean> deletePerson(@PathVariable(value = "person_id") long personId)
		throws ResourceNotFoundException{
		Person person = personRepository.findById(personId)
				.orElseThrow(() -> new ResourceNotFoundException("Person not found for this id: " + personId));
		personRepository.delete(person);
		Map<String, Boolean> response = new HashMap<>();
		response.put("delete", Boolean.TRUE);
		return response;
	}
}
