package com.nexttech.managerapi;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.nexttech.managerapi.entity")
@EnableJpaRepositories("com.nexttech.managerapi.repository")
public class ManagerapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagerapiApplication.class, args);
	}

}
