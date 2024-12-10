Feature: Assertions Step Definitions
  Scenario: It tests selectors
    When I visit "/elements.html"
    Then I should see a "h1" selector
    And I should not see a ".foobar" selector
    Then I should see "Elements Title" in "h1"
    And I should not see "Foobar Title" in "h1"
    Then "input[name='email']" should have "example@example.com" value
    And "input[name='email']" should not have "user@example.com" value
    Then the "input[name='email']" selector should be visible
    And the "input[type='hidden']" selector should be hidden
    Then I should see a link to "https://github.com/tyler36/cypress-support"
    And I should not see a link to "https://github.com/tyler36/cypress-support/missing"
    Then the title should contain "Elements page"
    And the description should be "Page for testing assertion commands."
    And the "author" metaName should be "John Doe"
    And the "author" metaProp should be "John Doe"
    Then I should see a script with src="example.js"

  Scenario: It tests strings
    When I visit "/elements.html"
    Then I should see "Elements Title"
    And I should not see "Copyright 2010"

  Scenario: It tests URLs
    When I visit "/elements.html"
    Then the path should be "/elements.html"
    And the path should not be "/elements"
    Then the path should include "elements"
    And the path should not include "user"

  Scenario: It tests status codes
    When I request "/", I expect a "200" status code
    When I request "/invalid", I expect a "404" status code
