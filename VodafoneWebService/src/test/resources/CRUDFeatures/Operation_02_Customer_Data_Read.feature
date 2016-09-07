# Feature/Operation_02_Customer_Data_Read.feature

Feature: Read Customer's Data	
		 In order to read a customer's data, a client needs to key-in a customer's name or 
		 a request without a specific customer name will display all available customers in the system
		 
	Background: 
	    Given The Server URL "http://localhost:8080/VodafoneWebService/rest/customers"
	    
	Scenario: Read a specific customer data 
	    Given A customer data exists with the name "Andrei"
	    When the client sends the GET request with name "Andrei"
	    Then the client should obtain the following JSON message
	    """
		{"name":"Andrei","address":"20 Viaduct Harbour Ave, Auckland 1010","telNo":"093552000","statusMsg":"Customer added successfully"}
	    """
	    
	Scenario: Read all available customer data 
	    Given A customer data exists with the name "Andrei"
	    And A customer data exists with the name "Viswa"
	    When the client sends the GET request
	    Then the client should obtain the following JSON message
	    """
		[{"name":"Andrei","address":"20 Viaduct Harbour Ave, Auckland 1010","telNo":"093552000","statusMsg":"Customer added successfully"}'
		{"name":"Viswa","address":"9 Linden Street, Mt Roskill, Auckland - 1041","telNo":"022 163 1433","statusMsg":"Default customer"}]
	    """
	    
	Scenario: Read a non existing customer data
	    Given A customer data does not exists with the name "no-customer"
	    When the client sends the GET request with name "no-customer"
	    Then the client should obtain the following JSON message
	    """
		{"name":"dummy","address":"dummy","telNo":"dummy","statusMsg":"Customer doesn't exist !!"}
	    """
	   	    