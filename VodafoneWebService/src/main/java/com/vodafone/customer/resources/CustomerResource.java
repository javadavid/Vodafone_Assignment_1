package com.vodafone.customer.resources;

import java.util.List;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.Response.Status;

import com.vodafone.customer.model.Customer;
import com.vodafone.customer.service.CustomerService;

/**
 * @author Viswam Devireddy
 * @since August 31, 2016
 * Description: This is the rest interface for the Customer resource
 * This class uses the JAX-RS annotations
 * Currently all the web resources available in this class  supports only JSON content type as response
 */
@Path("/customers")
public class CustomerResource {
	
	/**
	 *  Initialization of CustomerService class, which is an interface for customer bean
	 */
	CustomerService custService = new CustomerService();
	
	/**
	 * Returns all customers
	 * Currently supports only JSON content type for response
	 * @return
	 */
	@Path("/get")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Customer> getAllCustomers()	
	{
		return custService.getAllCustomers();
	}
		
	/**
	 * Creates a new customer by accepting JSON customer object
	 * Customer Name is Primary Key. If the customer already exist, then error message will be returned
	 * @param customerBean
	 * @return
	 * @throws Exception
	 */
	@Path("/add")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON) 
	public String createCustomer(Customer customerBean) throws Exception { 
		custService.addCustomer(customerBean); 
		//Response.ok();
		return customerBean.getStatusMsg();
		
	} 
	
	/**
	 * Reads an existing customer, given the customer name
	 * @param custName
	 * @return
	 * @throws Exception
	 */
	@Path("/get/{custName}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Customer readCustomer(@PathParam("custName") String custName) throws Exception {
		//String statusMsg = null;
		Customer newCust = custService.getCustomer(custName);
		if(newCust == null)
		{
			Response.status(Status.NOT_FOUND).entity("Customer doesn't exist !!").build();
		
		}
		return newCust;		
	} 
	
	/**
	 * Updates the existing customer
	 * @param customerBean
	 * @return
	 * @throws Exception
	 */
	@Path("/modify")
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public String updateCustomer(Customer customerBean) throws Exception { 
		System.out.println("updateCustomer - "+customerBean.getName()+customerBean.getAddress()+customerBean.getTelNo());
		Customer updatedBean = custService.updateCustomer(customerBean); 
		//Response.ok(updatedBean.getStatusMsg());
		System.out.println("getStatusMsg - "+customerBean.getStatusMsg());
		return updatedBean.getStatusMsg();
		
	} 
	
	/**
	 * Deletes the existing customer
	 * @param custName
	 * @return
	 * @throws Exception
	 */
	@Path("/del/{custName}")
	@DELETE
	@Produces(MediaType.APPLICATION_JSON) 
	public String deleteCustomer(@PathParam("custName") String custName) throws Exception { 
		String statusMsg = custService.deleteCustomer(custName); 
		//Response.ok(statusMsg);
		return statusMsg;
		
	} 
		
	/**
	 * Deletes all the customers
	 * @return
	 * @throws Exception
	 */
	@Path("/del")
	@DELETE
	@Produces(MediaType.APPLICATION_JSON) 
	public String deleteAllCustomers() throws Exception { 
		String statusMsg = custService.deleteAllCustomers(); 
	//	Response.ok(statusMsg);
		return statusMsg;
		
	}
	
	
}
