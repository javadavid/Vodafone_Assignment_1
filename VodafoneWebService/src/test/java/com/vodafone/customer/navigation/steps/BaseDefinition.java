package com.vodafone.customer.navigation.steps;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.Charset;

import org.json.JSONObject;
import org.json.JSONException;

import org.skyscreamer.jsonassert.JSONAssert;

/**
 * @author Viswam Devireddy
 * @since August 31, 2016
 * This class contains utility methods which will act as a client to the web service 
 */
public class BaseDefinition {
	JSONObject customer = null; 

	public String readData(URLConnection uc) {
		InputStream inputStream;
		
		try {
			inputStream = uc.getInputStream();
			BufferedReader buffer = new BufferedReader(new InputStreamReader(inputStream, Charset.forName("UTF-8")));
			StringBuilder finalResponse = new StringBuilder();
			
			int i=0;
			while ((i = buffer.read()) != -1)
			{
				finalResponse.append((char) i);
			}

			return finalResponse.toString();
			
		} catch (IOException ex) {
			
			System.out.println("readData:: Exception occured : " + ex.getMessage());
			org.junit.Assert.fail("Failure at: readData");
		}

		return null;
	}
	
	public void compareJSON(String expected, String actual) { 
		try{
			JSONAssert.assertEquals(expected, actual, false);		
		}
		catch(JSONException ex)
		{
			System.out.println("compareJSON :: Exception occured : " + ex.getMessage());
		}
	}
	
	public URLConnection connSetup(String url, String type) {
		try {
		    URL tragetUrl = new URL(url);
		    URLConnection uc = tragetUrl.openConnection();
			((HttpURLConnection) uc).setRequestMethod(type);
			uc.addRequestProperty("User-Agent", "Mozilla/48.0 (compatible; MSIE 6.0; Windows NT 5.0)");
				return uc;		
		} catch(Exception ex) {
			System.out.println("connSetup:: Exception occured : " + ex.getMessage());
			org.junit.Assert.fail("Failure at: connSetup");
		}
		
		return null;
	}
	
	public String sendReq(URLConnection uc, String type, String url) {
		try {
			String msg;
			uc = connSetup(url, type);
			uc.connect();
			msg = readData(uc);
			return msg;
		} catch(Exception ex) {
			System.out.println("sendReq:: Exception occured : " + ex.getMessage());
			org.junit.Assert.fail("Failure at: sendReq");
		}
		
		return null;
	}
	
	public String sendReqWithBody(String type, String url) {
		HttpURLConnection uc = null;
        StringBuilder finalResponse = new StringBuilder();
		
		try {
			URL tragetUrl = new URL(url);
	        uc = (HttpURLConnection) tragetUrl.openConnection();
	        uc.setRequestMethod(type);
			uc.setDoOutput(true);
            uc.setDoInput(true);
            uc.setRequestProperty("Content-Type", "application/json");
            uc.setRequestProperty("Accept", "application/json");
            
            OutputStreamWriter streamWriter = new OutputStreamWriter(uc.getOutputStream());
            streamWriter.write(customer.toString());
            streamWriter.flush();
            
            if (uc.getResponseCode() == HttpURLConnection.HTTP_OK){
                InputStreamReader streamReader = new InputStreamReader(uc.getInputStream());
                BufferedReader bufferedReader = new BufferedReader(streamReader);
                String response = null;
                while ((response = bufferedReader.readLine()) != null) {
                    finalResponse.append(response + "\n");
                }
                bufferedReader.close();
                return finalResponse.toString();
            }
        } catch (Exception ex){
			System.out.println("sendReqWithBody:: Exception occured : " + ex.getMessage());
			org.junit.Assert.fail("Failure at: sendReqWithBody");
        } finally {
            if (uc != null){
                uc.disconnect();
            }
        }
		
		return null;
	}	
}