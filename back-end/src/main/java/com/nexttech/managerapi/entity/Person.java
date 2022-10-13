package com.nexttech.managerapi.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Person {

	private long person_id;
	private String name;
	private String cpf;
	private String birthDate;
	private List<Phone> phones;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "person_id")
	public long getPersonId() {
		return person_id;
	}

	public void setPersonId(long person_id) {
		this.person_id = person_id;
	}

	@Column(nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(nullable = false, unique = true)
	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	@Column(nullable = false, name = "birth_date")
	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}
	
	@JoinColumn
	@OneToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
	public List<Phone> getPhones() {
		return phones;
	}

	public void setPhones(List<Phone> phones) {
		this.phones = phones;
	}
	
	public Person() {
		super();
	}

	public Person(long person_id, String name, String cpf, String birthDate, List<Phone> phones) {
		super();
		this.person_id = person_id;
		this.name = name;
		this.cpf = cpf;
		this.birthDate = birthDate;
		this.phones = phones;
	}

}
