package com.nexttech.managerapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nexttech.managerapi.entity.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long>{

}
