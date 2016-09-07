package com.vodafone.customer.model;


/** 
 * @author Viswam Devireddy
 * @since August 31, 2016
 * Description: This is the Customer Java Bean with simple setters and getters
 */
public class Customer {

	String name;
	String address;
	String telNo;
	String statusMsg;
	

	/**
	 * 
	 */
	public Customer()
	{
		name = "dummy";
		address = "dummy";
		telNo = "dummy";
		statusMsg = "dummy";
		
	}
	/**
	 * @param name
	 * @param address
	 * @param telNo
	 */
	public Customer(String name, String address, String telNo)
	{
		this.name = name;
		this.address = address;
		this.telNo = telNo;
		this.statusMsg = "Default customer";
	}
	
	/**
	 * @return
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * @param address
	 */
	public void setAddress(String address) {
		this.address = address;
	}

	/**
	 * @return
	 */
	public String getTelNo() {
		return telNo;
	}

	/**
	 * @param telNo
	 */
	public void setTelNo(String telNo) {
		this.telNo = telNo;
	}
	
	/**
	 * @return
	 */
	public String getStatusMsg() {
		return statusMsg;
	}
	
	/**
	 * @param statusMsg
	 */
	public void setStatusMsg(String statusMsg) {
		this.statusMsg = statusMsg;
	}

	
}
