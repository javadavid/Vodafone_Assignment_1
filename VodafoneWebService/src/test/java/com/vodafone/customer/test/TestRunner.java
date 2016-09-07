package com.vodafone.customer.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * This class is the entry point for Cucumber framework.
 * We can run this class as JUnit tests
 * @author Viswam Devireddy
 * @since August 31, 2016
 */
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/CRUDFeatures",
		glue = {"com.vodafone.customer.navigation.steps"},
		plugin = {"html:target/site/cucumber-pretty", "junit:target/site/cucumber.xml"}
	)

public class TestRunner {

}