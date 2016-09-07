# Feature/Operation_04_Customer_Data_Delete.feature

Feature: Delete the existing Customer Data
		 In order to delete a customer, a client needs to key-in a existing customer's name
		 
	Background: 
	    Given The Server URL "http://localhost:8080/VodafoneWebService/rest/customers"
	    
	Scenario: Delete an existing customer data 
	    Given A customer data exists with the name "Andrei"
	    When the client sends the DELETE request with name "Andrei"
	    Then the client should obtain the following message
	    """
	    Customer deleted successfully
	    """
	    
	Scenario: Delete a non-existing customer data 
	    Given A customer data does not exists with the name "no-customer"
	    When the client sends the DELETE request with name "no-customer"
	    Then the client should obtain the following message
	    """
	    Customer doesn't exist !!
	    """
	    
	    
	Scenario: Delete all customer data
	    Given some customers exist in the data base
	    When the client sends the DELETE request
	    Then the client should obtain the following message
	    """
	    All Customers deleted successfully
	    """

