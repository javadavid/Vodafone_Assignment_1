package com.vodafone.customer.navigation.steps;


import java.net.URLConnection;

import org.json.JSONException;
import org.json.JSONObject;
import org.skyscreamer.jsonassert.JSONAssert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.JSONParser;

/**
 * Description: This class contains feature definitions which maps the Gherkin features
 * avaialble in the CRUD Features sub directory
 * @author Viswam Devireddy
 * @since August 31, 2016
 */
public class FeatureDefinitions extends BaseDefinition {
	private String serverURL;
	private URLConnection urlConnection;
	private String responseMsg = null;
	private String webResourceURI = null;
	
	@Given("^The Server URL \"([^\"]*)\"$")
	public void The_Server_URL(String url) {
	    this.serverURL = url;
	}

	@Given("^create a new customer with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	public void create_a_new_customer_with_name_address_phone(String name, String address, String phone) {				
		try {
			customer = new org.json.JSONObject();
			
			customer.put("name", name);
			customer.put("address", address);
			customer.put("telNo", phone);
		} catch (JSONException e) {
			e.printStackTrace();
		} catch (Exception e) {
			System.out.println("create_a_new_customer_with_name_address_phone:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: create_a_new_customer_with_name_address_phone");
		}		
	}

	@When("^the client sends the POST request$")
	public void the_client_sends_the_POST_request() {		
		try {
			this.responseMsg = sendReqWithBody("POST", this.serverURL);
		} catch (Exception e) {
			System.out.println("the_client_sends_the_POST_request:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("the_client_sends_the_POST_request:: Failure at: the_client_sends_the_POST_request");
		}
	}
	
	@Given("^A customer data exists with the name \"([^\"]*)\"$")
	public void verify_whether_the_given_customer_data_exists_with_the_name(String name) {
		try {
			webResourceURI = this.serverURL + "/get/" + name;
			this.responseMsg = sendReq(this.urlConnection, "GET", webResourceURI);
		} catch(Exception e){
			System.out.println("verify_whether_the_given_customer_data_exists_with_the_name:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: verify_whether_the_given_customer_data_exists_with_the_name");
		}
	}
	
	@Given("^A customer data does not exists with the name \"([^\"]*)\"$")
	public void verify_whether_the_given_customer_data_not_exists_with_the_name(String name) {
		try {
			try {
				webResourceURI = this.serverURL + "/get/" + name;
				this.responseMsg = sendReq(this.urlConnection, "GET", webResourceURI);
				
				org.junit.Assert.assertEquals("{\"name\":\"dummy\",\"address\":\"dummy\",\"telNo\":\"dummy\",\"statusMsg\":\"Customer doesn't exist !!\"}", this.responseMsg.trim());
					
			} catch(Exception e){
				System.out.println("verify_whether_the_given_customer_data_exists_with_the_name:: Exception occured : " + e.getMessage());
				org.junit.Assert.fail("Failure at: verify_whether_the_given_customer_data_exists_with_the_name");
			}
	
		} catch(Exception e){
			System.out.println("verify_whether_the_given_customer_data_not_exists_with_the_name:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: verify_whether_the_given_customer_data_not_exists_with_the_name");
		}
	}
	
	
	@Given("^some customers exist in the data base$")
	public void verify_whether_customers_exists_in_DB() {
		try {
			
			String uriAllCustomers = this.serverURL + "/get";
			this.responseMsg = sendReq(this.urlConnection, "GET", uriAllCustomers);
			System.out.println("this.responseMsg ::" + this.responseMsg);
			org.junit.Assert.assertFalse("Customers expected in DB, but no customers available", this.responseMsg.equals(""));
			
		
		} catch(Exception e){
			System.out.println("verify_whether__customers_exists_in_DB:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: verify_whether__customers_exists_in_DB");
		}
	}
	
	@When("^the client sends the GET request$")	
	public void the_client_sends_the_GET_request() {
		try {
			webResourceURI = this.serverURL + "/get";
			this.responseMsg = sendReq(this.urlConnection, "GET", webResourceURI);
		} catch(Exception e){
			System.out.println("the_client_sends_the_GET_request:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_the_GET_request");
		}		
	}
	
	@When("^the client sends the GET request with name \"([^\"]*)\"$")
	public void the_client_sends_the_GET_request_with_name(String customerName) {
		try {
			String webResourceURI = this.serverURL + "/get/" + customerName;
			this.responseMsg = sendReq(this.urlConnection, "GET", webResourceURI);
		} catch(Exception e){
			System.out.println("the_client_sends_the_GET_request_with_name:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_the_GET_request_with_name "+customerName);
		}		
	}
	
	@When("^the client sends the DELETE request$")
	public void the_client_sends_the_DELETE_request_with_name() {
		try {
			String webResourceURI = this.serverURL + "/del" ;
			this.responseMsg = sendReq(this.urlConnection, "DELETE", webResourceURI);
		} catch(Exception e){
			System.out.println("the_client_sends_the_DELETE_request_with_name:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_the_DELETE_request_with_name");
		}		
	}
	
	@When("^the client sends the DELETE request with name \"([^\"]*)\"$")
	public void the_client_sends_the_DELETE_request_with_name(String customerName) {
		try {
			String webResourceURI = this.serverURL + "/del/" + customerName;
			this.responseMsg = sendReq(this.urlConnection, "DELETE", webResourceURI);
		} catch(Exception e){
			System.out.println("the_client_sends_the_DELETE_request_with_name:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("the_client_sends_the_DELETE_request_with_name:: Failure at: the_client_sends_the_DELETE_request_with_name "+customerName);
		}		
	}
	
	
	@When("^update a customer with name \"([^\"]*)\", address \"([^\"]*)\" and phone \"([^\"]*)\"$")
	public void update_a_customer_with_name_address_and_phone(String name, String address, String phone) {				
		try {
			customer = new org.json.JSONObject();
			
			customer.put("name", name);
			customer.put("address", address);
			customer.put("telNo", phone);
			
			System.out.println("update_a_customer_with_name_address_and_phone - "+name+address+phone);
		} catch (JSONException e) {
			e.printStackTrace();
		} catch(Exception t){
			System.out.println("update_a_customer_with_name_address_and_phone:: Exception occured : " + t.getMessage());
			org.junit.Assert.fail("Failure at: update_a_customer_with_name_address_and_phone");
		}
	}
	
	@When("^the client sends the PUT request$")
	public void the_client_sends_the_PUT_request() {		
		try {System.out.println("this.serverURL - '"+this.serverURL+"'");
			this.responseMsg = sendReqWithBody("PUT", this.serverURL);
		} catch (Exception e) {
			System.out.println("the_client_sends_the_PUT_request:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("the_client_sends_the_PUT_request:: Failure at: the_client_sends_the_PUT_request");
		}
	}
	
	@When("^the client sends DELETE request with name \"([^\"]*)\"$")
	public void the_client_sends_DELETE_request_with_name(String customerName) {
		try {
			webResourceURI = this.serverURL +"/"+ customerName;
			this.responseMsg = sendReq(this.urlConnection, "DELETE", webResourceURI);
		} catch(Exception e){
			System.out.println("the_client_sends_DELETE_request_with_name:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_DELETE_request_with_name");
		}
	}
	
	@When("^the client sends DELETE request$")
	public void the_client_sends_DELETE_request() {
		try {
			webResourceURI = this.serverURL;
			this.responseMsg = sendReq(this.urlConnection, "DELETE", webResourceURI);
		} catch(Exception e){
			System.out.println("the_client_sends_DELETE_request:: Exception occured : " + e.getMessage());
			org.junit.Assert.fail("Failure at: the_client_sends_DELETE_request");
		}
	}	

	@Then("^the client should obtain the following message$")
	public void the_client_should_obtain_the_following_message(String featureMsg) {
		try {System.out.println("this.responseMsg.trim() - '"+this.responseMsg.trim()+"'");
			if(this.responseMsg == null){
				this.responseMsg = readData(this.urlConnection);
			}
			System.out.println("featureMsg - '"+featureMsg+"'");
			System.out.println("this.responseMsg.trim() - '"+this.responseMsg.trim()+"'");
			org.junit.Assert.assertEquals(featureMsg, this.responseMsg.trim());
		} catch(Exception e){
			System.out.println("the_client_should_obtain_the_following_message:: Exception at:" + e.getMessage());
			org.junit.Assert.fail("Failure at: the_client_should_obtain_the_following_message");
		}
	}	
	
	@Then("^the client should obtain the following JSON message$")
	public void the_client_should_obtain_the_following_JSON(String featureMsg) {
		try {
			if(this.responseMsg == null){
				this.responseMsg = readData(this.urlConnection);
			}
			compareJSON(featureMsg, this.responseMsg);	
		} catch(Exception e){
			System.out.println("the_client_should_obtain_the_following_JSON:: Exception at:" + e.getMessage());
			org.junit.Assert.fail("Failure at: the_client_should_obtain_the_following_JSON");
		}		
	}		
}