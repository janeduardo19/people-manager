package com.nexttech.managerapi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Phone {

	
	private long phone_id;
	private String name;
	private String number;
	private String email;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "phone_id")
	public long getPhoneId() {
		return phone_id;
	}

	public void setPhoneId(long phone_id) {
		this.phone_id = phone_id;
	}

	@Column(nullable = false)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(nullable = false)
	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	@Column(nullable = false)
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Phone() {
		super();
	}

	public Phone(long phone_id, String name, String number, String email) {
		super();
		this.phone_id = phone_id;
		this.name = name;
		this.number = number;
		this.email = email;
	}
	
}
