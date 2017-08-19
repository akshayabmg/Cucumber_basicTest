package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest {
	
	WebDriver driver;
	
	@Given("^Open firefox and start application$")
	public void Open_firefox_and_start_application() throws Throwable {
	    driver=new FirefoxDriver();
	    driver.manage().window().maximize();
	    driver.get("http://www.facebook.com");
	}
///////////////////for hardcoded//////////////////////////////////////////
//	@When("^I enter valid username and password$")
//	public void I_enter_valid_username_and_password() throws Throwable {
//		driver.findElement(By.id("email")).sendKeys("akshaya.qa1@gmail.com");
//		driver.findElement(By.id("pass")).sendKeys("12345");
//		
//	    	}
	
////////////////for data-driven and parameterized////////////////////////	
	
	@When("^I enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void I_enter_valid_username_and_password(String uname, String password) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("pass")).sendKeys(password);
		
	    	}


	@Then("^user should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	  driver.findElement(By.id("loginbutton")).click();
	}
	
	@Then("^close the application$")
	public void close_the_application() throws Throwable {
	    driver.quit();
	}

}
