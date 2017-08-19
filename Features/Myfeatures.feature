#Author: Akshaya
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@tag
#Feature: Title of your feature
#	I want to use this template for my feature file
#
#@tag1
#Scenario: Title of your scenario
#Given I want to write a step with precondition
#	And some other precondition
#When I complete action
#	And some other action
#	And yet another action
#Then I validate the outcomes
#	And check more outcomes
#
#@tag2
#Scenario Outline: Title of your scenario outline
#Given I want to write a step with <name>
#When I check for the <value> in step
#Then I verify the <status> in step
#Examples:
#| name  |value | status |
#| name1 |  5   | success|
#| name2 |  7   | Fail   |


#########################For normal test######################
#Feature: Test facebook login
#	Scenario: Test login with valid credentials
#	Given Open firefox and start application
#	When  I enter valid username and password
#	Then user should be able to login successfully

######################For parametrized########################
#Feature: Test facebook login
#	Scenario: Test login with valid credentials
#	Given Open firefox and start application
#	When  I enter valid "aksh1234@gmail.com" and "password123"
#	Then user should be able to login successfully

##################for data-driven##############################

Feature: Test facebook login

  Scenario Outline: Test login with valid credentials
    Given Open firefox and start application
    When I enter valid "<username>" and "<password>"
    Then user should be able to login successfully
    Then close the application
    
    Examples:
      | username              | password    |
      | akshaya.qa1@gmail.com | password1   |
      | akshaya.qa2@gmail.com | password12  |
      | akshaya.qa3@gmail.com | password123 |
