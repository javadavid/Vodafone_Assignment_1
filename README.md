#Assignment_1   Test Automation of RESTful web service using Cucumber TDD/BDD

Description

"VodafoneWebService" project implements CRUD operations as a RESTful web services.
This project will demonstrate test automation using Cucumber and JUnit framework using BDD/TDD
Note: By default a customer with name Viswa will be created in the DB

Dependencies

The following components / technologies are used in developing the app
•	Java 1.8.0_101
•	RESTEasy JAX-RS implementation
•   JBoss-EAP 6.4.0.GA
	Maven
•	Junit 4.12
•	Cucumber 1.2.4
•	Gherkin 2.12.2•	
•	JSONassert 1.2.3
•	Eclipse 

Steps to launch the Application

1. Open the GitHub repository by following the link  https://github.com/vdevireddy2/Vodafone_Assignment_1.git and then click on "Clone or Download" button to download the project to local disk. The project will be downloaded as a zip file. Extract the zip file to a local folder.
2. Open Eclipse and import 'Existing maven project' to work space by pointing to the downloaded project folder
3. The project will be imported and automatically the dependent jars will be downloaded by Maven
4. In order to run this project, we need to add the JBoss Server in Eclipse. 
   Note: Though this project can be run in Tomcat Server as well, but we need to add  "RESTEasy Servlet Initializer" dependencies in the deployment descriptor (web.xml) and in Maven Dependencies (pom.xml). As JBoss server runtime already provides RESTEasy implementation (jar files), we don't need to explicitely download the RESTEasy dependencies while deploying in JBoss.
5. Run the project (deploy) in Configured JBoss Server. The server will be started and the web application will be deployed in the server
   The base URL for the webservice is http://localhost:8080/VodafoneWebService


Test cases

The test cases are available under the directory ‘VodafoneWebService\src-test-java’
The Gherkin feature files for CRUD operations are under the directory 'VodafoneWebService\src-test-resources\CRUDFeatures’
To run the test cases, open the 'TestRunner' class under ‘VodafoneWebService\src-test-java’ folder, select "Run as JUnit Tests"
