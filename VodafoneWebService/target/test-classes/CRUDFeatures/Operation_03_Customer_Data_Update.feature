# Feature/Operation_03_Customer_Data_Update.feature

Feature: Update a Customer's Data
		 In order to update a customer's data, a client needs to modify either customer's name or address or telephone number
		 a request without a specific customer name will display all available customers in the system
		 
	Background: 
	    Given The Server URL "http://localhost:8080/VodafoneWebService/rest/customers/modify"
	    
	Scenario: Update a customer data 
	    Given update a customer with name "Andrei", address "45B Hobson St, Auckland Central, 1010" and phone "93552000"
	    When the client sends the PUT request
	    Then the client should obtain the following message
	    """
		Customer updated successfully
	    """
	    
	    
	Scenario: Update a non-existent customer data 
	    Given update a customer with name "non-exist-customer", address "45B Hobson St, Auckland Central, 1010" and phone "93552000"
	    When the client sends the PUT request
	    Then the client should obtain the following message
	    """
		Customer doesn't exist !!
	    """
	    
	Scenario: Update a customer without customer name 
	    Given update a customer with name "", address "45B Hobson St, Auckland Central, 1010" and phone "93552000"
	    When the client sends the PUT request
	    Then the client should obtain the following message
	    """
		Customer name can't be empty !!
	    """
 