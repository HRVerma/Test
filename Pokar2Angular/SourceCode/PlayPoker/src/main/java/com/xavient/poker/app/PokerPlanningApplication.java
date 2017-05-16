package com.xavient.poker.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan({ "com.xavient.poker" })
public class PokerPlanningApplication {

	public static void main(String[] args) {
		SpringApplication.run(PokerPlanningApplication.class, args);
	}
}
