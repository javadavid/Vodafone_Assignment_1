# Feature/Operation_01_Customer_Data_Add.feature

Feature: Creates/Add new Customer Data
		 In order to create a new customer, a client needs to key-in a customer's name, address and telephone no
		 
	Background: 
	    Given The Server URL "http://localhost:8080/VodafoneWebService/rest/customers/add/"
	    
	Scenario: Create a new customer data 
	    Given create a new customer with name "Andrei", address "20 Viaduct Harbour Ave, Auckland 1010" and phone "093552000"
	    When the client sends the POST request
	    Then the client should obtain the following message
	    """
	    Customer added successfully
	    """

	Scenario: Create a new customer data with the an existing customer name
	    Given create a new customer with name "Andrei", address "20 Viaduct Harbour Ave, Auckland 1010" and phone "093552000"
	    When the client sends the POST request
	    Then the client should obtain the following message
	    """
	    Customer already exist !!
	    """
	    
	    
	Scenario: Create a new customer data without customer name 
	    Given create a new customer with name "", address "20 Viaduct Harbour Ave, Auckland 1010" and phone "093552000"
	    When the client sends the POST request
	    Then the client should obtain the following message
	    """
	    Customer name can't be empty !!
	    """