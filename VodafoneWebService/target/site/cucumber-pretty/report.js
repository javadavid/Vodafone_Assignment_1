$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Operation_01_Customer_Data_Add.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature/Operation_01_Customer_Data_Add.feature"
    }
  ],
  "line": 3,
  "name": "Creates/Add new Customer Data",
  "description": " In order to create a new customer, a client needs to key-in a customer\u0027s name, address and telephone no",
  "id": "creates/add-new-customer-data",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers/add/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers/add/",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 270103461,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create a new customer data",
  "description": "",
  "id": "creates/add-new-customer-data;create-a-new-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "create a new customer with name \"Andrei\", address \"20 Viaduct Harbour Ave, Auckland 1010\" and phone \"093552000\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the client sends the POST request",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "Customer added successfully"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei",
      "offset": 33
    },
    {
      "val": "20 Viaduct Harbour Ave, Auckland 1010",
      "offset": 51
    },
    {
      "val": "093552000",
      "offset": 101
    }
  ],
  "location": "FeatureDefinitions.create_a_new_customer_with_name_address_phone(String,String,String)"
});
formatter.result({
  "duration": 29979123,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_sends_the_POST_request()"
});
formatter.result({
  "duration": 109243759,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 4441231,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers/add/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers/add/",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 142638,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Create a new customer data with the an existing customer name",
  "description": "",
  "id": "creates/add-new-customer-data;create-a-new-customer-data-with-the-an-existing-customer-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "create a new customer with name \"Andrei\", address \"20 Viaduct Harbour Ave, Auckland 1010\" and phone \"093552000\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the client sends the POST request",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 21,
    "value": "Customer already exist !!"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei",
      "offset": 33
    },
    {
      "val": "20 Viaduct Harbour Ave, Auckland 1010",
      "offset": 51
    },
    {
      "val": "093552000",
      "offset": 101
    }
  ],
  "location": "FeatureDefinitions.create_a_new_customer_with_name_address_phone(String,String,String)"
});
formatter.result({
  "duration": 231787,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_sends_the_POST_request()"
});
formatter.result({
  "duration": 3655507,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 295812,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers/add/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers/add/",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 599324,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Create a new customer data without customer name",
  "description": "",
  "id": "creates/add-new-customer-data;create-a-new-customer-data-without-customer-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "create a new customer with name \"\", address \"20 Viaduct Harbour Ave, Auckland 1010\" and phone \"093552000\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the client sends the POST request",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 30,
    "value": "Customer name can\u0027t be empty !!"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    },
    {
      "val": "20 Viaduct Harbour Ave, Auckland 1010",
      "offset": 45
    },
    {
      "val": "093552000",
      "offset": 95
    }
  ],
  "location": "FeatureDefinitions.create_a_new_customer_with_name_address_phone(String,String,String)"
});
formatter.result({
  "duration": 218415,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_sends_the_POST_request()"
});
formatter.result({
  "duration": 4981797,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 311210,
  "status": "passed"
});
formatter.uri("Operation_02_Customer_Data_Read.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature/Operation_02_Customer_Data_Read.feature"
    }
  ],
  "line": 3,
  "name": "Read Customer\u0027s Data",
  "description": " In order to read a customer\u0027s data, a client needs to key-in a customer\u0027s name or \r\n a request without a specific customer name will display all available customers in the system",
  "id": "read-customer\u0027s-data",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 164115,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Read a specific customer data",
  "description": "",
  "id": "read-customer\u0027s-data;read-a-specific-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "A customer data exists with the name \"Andrei\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the client sends the GET request with name \"Andrei\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the client should obtain the following JSON message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "{\"name\":\"Andrei\",\"address\":\"20 Viaduct Harbour Ave, Auckland 1010\",\"telNo\":\"093552000\",\"statusMsg\":\"Customer added successfully\"}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei",
      "offset": 38
    }
  ],
  "location": "FeatureDefinitions.verify_whether_the_given_customer_data_exists_with_the_name(String)"
});
formatter.result({
  "duration": 12085742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei",
      "offset": 44
    }
  ],
  "location": "FeatureDefinitions.the_client_sends_the_GET_request_with_name(String)"
});
formatter.result({
  "duration": 5006921,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_JSON(String)"
});
formatter.result({
  "duration": 17435886,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 181944,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Read all available customer data",
  "description": "",
  "id": "read-customer\u0027s-data;read-all-available-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "A customer data exists with the name \"Andrei\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "A customer data exists with the name \"Viswa\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the client sends the GET request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the client should obtain the following JSON message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 23,
    "value": "[{\"name\":\"Andrei\",\"address\":\"20 Viaduct Harbour Ave, Auckland 1010\",\"telNo\":\"093552000\",\"statusMsg\":\"Customer added successfully\"}\u0027\r\n{\"name\":\"Viswa\",\"address\":\"9 Linden Street, Mt Roskill, Auckland - 1041\",\"telNo\":\"022 163 1433\",\"statusMsg\":\"Default customer\"}]"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei",
      "offset": 38
    }
  ],
  "location": "FeatureDefinitions.verify_whether_the_given_customer_data_exists_with_the_name(String)"
});
formatter.result({
  "duration": 3886077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viswa",
      "offset": 38
    }
  ],
  "location": "FeatureDefinitions.verify_whether_the_given_customer_data_exists_with_the_name(String)"
});
formatter.result({
  "duration": 3486529,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_sends_the_GET_request()"
});
formatter.result({
  "duration": 8915691,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_JSON(String)"
});
formatter.result({
  "duration": 1606705,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 187618,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Read a non existing customer data",
  "description": "",
  "id": "read-customer\u0027s-data;read-a-non-existing-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "A customer data does not exists with the name \"no-customer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the client sends the GET request with name \"no-customer\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the client should obtain the following JSON message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 32,
    "value": "{\"name\":\"dummy\",\"address\":\"dummy\",\"telNo\":\"dummy\",\"statusMsg\":\"Customer doesn\u0027t exist !!\"}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "no-customer",
      "offset": 47
    }
  ],
  "location": "FeatureDefinitions.verify_whether_the_given_customer_data_not_exists_with_the_name(String)"
});
formatter.result({
  "duration": 3460189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no-customer",
      "offset": 44
    }
  ],
  "location": "FeatureDefinitions.the_client_sends_the_GET_request_with_name(String)"
});
formatter.result({
  "duration": 7944780,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_JSON(String)"
});
formatter.result({
  "duration": 292165,
  "status": "passed"
});
formatter.uri("Operation_03_Customer_Data_Update.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature/Operation_03_Customer_Data_Update.feature"
    }
  ],
  "line": 3,
  "name": "Update a Customer\u0027s Data",
  "description": " In order to update a customer\u0027s data, a client needs to modify either customer\u0027s name or address or telephone number\r\n a request without a specific customer name will display all available customers in the system",
  "id": "update-a-customer\u0027s-data",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers/modify\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers/modify",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 584735,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Update a customer data",
  "description": "",
  "id": "update-a-customer\u0027s-data;update-a-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "update a customer with name \"Andrei\", address \"45B Hobson St, Auckland Central, 1010\" and phone \"93552000\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the client sends the PUT request",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "Customer updated successfully"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei",
      "offset": 29
    },
    {
      "val": "45B Hobson St, Auckland Central, 1010",
      "offset": 47
    },
    {
      "val": "93552000",
      "offset": 97
    }
  ],
  "location": "FeatureDefinitions.update_a_customer_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 301891,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_sends_the_PUT_request()"
});
formatter.result({
  "duration": 5301517,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 389013,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers/modify\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers/modify",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 184782,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Update a non-existent customer data",
  "description": "",
  "id": "update-a-customer\u0027s-data;update-a-non-existent-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "update a customer with name \"non-exist-customer\", address \"45B Hobson St, Auckland Central, 1010\" and phone \"93552000\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the client sends the PUT request",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 23,
    "value": "Customer doesn\u0027t exist !!"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "non-exist-customer",
      "offset": 29
    },
    {
      "val": "45B Hobson St, Auckland Central, 1010",
      "offset": 59
    },
    {
      "val": "93552000",
      "offset": 109
    }
  ],
  "location": "FeatureDefinitions.update_a_customer_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 254479,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_sends_the_PUT_request()"
});
formatter.result({
  "duration": 4479728,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 301485,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers/modify\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers/modify",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 161278,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Update a customer without customer name",
  "description": "",
  "id": "update-a-customer\u0027s-data;update-a-customer-without-customer-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "update a customer with name \"\", address \"45B Hobson St, Auckland Central, 1010\" and phone \"93552000\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the client sends the PUT request",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 31,
    "value": "Customer name can\u0027t be empty !!"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    },
    {
      "val": "45B Hobson St, Auckland Central, 1010",
      "offset": 41
    },
    {
      "val": "93552000",
      "offset": 91
    }
  ],
  "location": "FeatureDefinitions.update_a_customer_with_name_address_and_phone(String,String,String)"
});
formatter.result({
  "duration": 271904,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_sends_the_PUT_request()"
});
formatter.result({
  "duration": 4643842,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 342818,
  "status": "passed"
});
formatter.uri("Operation_04_Customer_Data_Delete.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Feature/Operation_04_Customer_Data_Delete.feature"
    }
  ],
  "line": 3,
  "name": "Delete the existing Customer Data",
  "description": " In order to delete a customer, a client needs to key-in a existing customer\u0027s name",
  "id": "delete-the-existing-customer-data",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 211931,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Delete an existing customer data",
  "description": "",
  "id": "delete-the-existing-customer-data;delete-an-existing-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "A customer data exists with the name \"Andrei\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the client sends the DELETE request with name \"Andrei\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "Customer deleted successfully"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei",
      "offset": 38
    }
  ],
  "location": "FeatureDefinitions.verify_whether_the_given_customer_data_exists_with_the_name(String)"
});
formatter.result({
  "duration": 3864601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Andrei",
      "offset": 47
    }
  ],
  "location": "FeatureDefinitions.the_client_sends_the_DELETE_request_with_name(String)"
});
formatter.result({
  "duration": 3447222,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 298243,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 159252,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Delete a non-existing customer data",
  "description": "",
  "id": "delete-the-existing-customer-data;delete-a-non-existing-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "A customer data does not exists with the name \"no-customer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the client sends the DELETE request with name \"no-customer\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 21,
    "value": "Customer doesn\u0027t exist !!"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "no-customer",
      "offset": 47
    }
  ],
  "location": "FeatureDefinitions.verify_whether_the_given_customer_data_not_exists_with_the_name(String)"
});
formatter.result({
  "duration": 4841591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "no-customer",
      "offset": 47
    }
  ],
  "location": "FeatureDefinitions.the_client_sends_the_DELETE_request_with_name(String)"
});
formatter.result({
  "duration": 5649198,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 218819,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "The Server URL \"http://localhost:8080/VodafoneWebService/rest/customers\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8080/VodafoneWebService/rest/customers",
      "offset": 16
    }
  ],
  "location": "FeatureDefinitions.The_Server_URL(String)"
});
formatter.result({
  "duration": 161683,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Delete all customer data",
  "description": "",
  "id": "delete-the-existing-customer-data;delete-all-customer-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "some customers exist in the data base",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the client sends the DELETE request",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the client should obtain the following message",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 30,
    "value": "All Customers deleted successfully"
  }
});
formatter.match({
  "location": "FeatureDefinitions.verify_whether_customers_exists_in_DB()"
});
formatter.result({
  "duration": 4131642,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_sends_the_DELETE_request_with_name()"
});
formatter.result({
  "duration": 3447222,
  "status": "passed"
});
formatter.match({
  "location": "FeatureDefinitions.the_client_should_obtain_the_following_message(String)"
});
formatter.result({
  "duration": 327014,
  "status": "passed"
});
});