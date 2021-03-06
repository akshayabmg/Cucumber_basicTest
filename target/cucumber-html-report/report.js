$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Myfeatures.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Akshaya"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    },
    {
      "line": 20,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 21,
      "value": "#\tI want to use this template for my feature file"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#@tag1"
    },
    {
      "line": 24,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 25,
      "value": "#Given I want to write a step with precondition"
    },
    {
      "line": 26,
      "value": "#\tAnd some other precondition"
    },
    {
      "line": 27,
      "value": "#When I complete action"
    },
    {
      "line": 28,
      "value": "#\tAnd some other action"
    },
    {
      "line": 29,
      "value": "#\tAnd yet another action"
    },
    {
      "line": 30,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 31,
      "value": "#\tAnd check more outcomes"
    },
    {
      "line": 32,
      "value": "#"
    },
    {
      "line": 33,
      "value": "#@tag2"
    },
    {
      "line": 34,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 35,
      "value": "#Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 36,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 37,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 38,
      "value": "#Examples:"
    },
    {
      "line": 39,
      "value": "#| name  |value | status |"
    },
    {
      "line": 40,
      "value": "#| name1 |  5   | success|"
    },
    {
      "line": 41,
      "value": "#| name2 |  7   | Fail   |"
    },
    {
      "line": 44,
      "value": "#########################For normal test######################"
    }
  ],
  "line": 45,
  "name": "Test facebook login",
  "description": "",
  "id": "test-facebook-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 46,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-login;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 6412332736,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.I_enter_valid_username_and_password()"
});
formatter.result({
  "duration": 240077322,
  "status": "passed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 865346606,
  "status": "passed"
});
});