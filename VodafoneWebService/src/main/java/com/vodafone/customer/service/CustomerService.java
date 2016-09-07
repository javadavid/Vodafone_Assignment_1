package com.vodafone.customer.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import com.vodafone.customer.model.Customer;

/**
 * @author Viswam Devireddy
 * @since August 31, 2016
 * This class contains the customer data structure and the methods
 * to work on the same
 */
public class CustomerService {
	
	/**
	 * Map which servers as a customer DB
	 */
	private static Map <String,Customer> custMap = null;
	
	/**
	 * Constructor
	 * Initializes the map, the first time
	 */
	public CustomerService()
	{
		if(custMap == null)
		{
			custMap = new HashMap<String,Customer>();
			Customer sampleCust = new Customer("Viswa", "9 Linden Street, Mt Roskill, Auckland - 1041", "022 163 1433");
			custMap.put(sampleCust.getName(), sampleCust);		
		}		
	}
	
	/**
	 * Returns all the customers
	 * @return 
	 */
	public List<Customer> getAllCustomers()
	{
		
		List<Customer> customers = new ArrayList<Customer>(custMap.values());  
		return customers;  
								
	}
	
	/**
	 * Adds customer to map
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	public Customer addCustomer(Customer customer) throws Exception {
		if(customer.getName().equals(""))
		{
			customer.setStatusMsg("Customer name can't be empty !!");
		}		
		else if(custMap.containsKey(customer.getName()))
		{
			customer.setStatusMsg("Customer already exist !!");
		}
		else
		{
			customer.setStatusMsg("Customer added successfully");
			custMap.put(customer.getName(), customer);
		}
		
		return customer;
	}
	
	/**
	 * Get a customer from the map
	 * @param custName
	 * @return
	 * @throws Exception
	 */
	public Customer getCustomer(String custName) throws Exception {
		Customer customer = new Customer();
		if(custMap.containsKey(custName))
		{
			customer = custMap.get(custName);
		}
		else
		{
			customer.setStatusMsg("Customer doesn't exist !!");
		}
		return customer;
	}
	
	/**
	 * Update a customer
	 * @param customer
	 * @return
	 * @throws Exception
	 */
	public Customer updateCustomer(Customer customer) throws Exception {
		if(customer.getName().equals(""))
		{
			customer.setStatusMsg("Customer name can't be empty !!");
		}	
		else if(custMap.containsKey(customer.getName()))
		{
			customer.setStatusMsg("Customer updated successfully");
			custMap.put(customer.getName(), customer);			
		}
		else
		{
			customer.setStatusMsg("Customer doesn't exist !!");
		}
		
		return customer;
	}
	
	/**
	 * Delete a customer
	 * @param custName
	 * @return
	 * @throws Exception
	 */
	public String deleteCustomer(String custName) throws Exception {
		
		String statusMsg = null;
		if(custMap.containsKey(custName))
		{
			custMap.remove(custName);
			statusMsg = "Customer deleted successfully";
		}
		else
		{
			statusMsg = "Customer doesn't exist !!";
			
		}
		return statusMsg;
	}
	
	/**
	 * Delete all customers
	 * @return
	 * @throws Exception
	 */
	public String deleteAllCustomers() throws Exception {
		
		String statusMsg = null;
		if(custMap.isEmpty())
		{
			statusMsg = "No Customer exist !!";
		}
		else
		{
			custMap.clear();
			statusMsg = "All Customers deleted successfully";			
		}
		return statusMsg;
	}

	
}
