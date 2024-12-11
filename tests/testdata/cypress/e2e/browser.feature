Feature: Browser Step Definitions
  Scenario: Remove Sticky Header
    Given I visit "/browser.html"
    Then the "header" selector should have CSS "position" set to "sticky"
    Then disable fixed header
    Then the "header" selector should have CSS "position" set to "relative"
