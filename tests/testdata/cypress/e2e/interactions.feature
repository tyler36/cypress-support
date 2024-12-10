Feature: Interactions Step Definitions
  Scenario: It clicks a selector
    When I visit "/interactions.html"
    Then I should not see "updated" in "main [js-test='click']"
    When I click "main [js-test='click']"
    Then I should see "updated" in "main [js-test='click']"
  Scenario: It clicks text
    When I visit "/interactions.html"
    Then I should not see "updated" in "main [js-test='click']"
    When I click the text "clickable"
    Then I should see "updated" in "main [js-test='click']"
  Scenario: It clicks text in a selector
    When I visit "/interactions.html"
    Then I should not see "updated" in "footer [js-test='click']"
    And I should not see "updated" in "main [js-test='click']"
    When I click the text "clickable" in "footer"
    Then I should see "updated" in "footer [js-test='click']"
    And I should not see "updated" in "main [js-test='click']"
  Scenario: It checks checkbox selector
    When I visit "/interactions.html"
    Then "checkbox" should not be checked
    When I check "[name='checkbox']"
    Then "checkbox" should be checked
  Scenario: It selects a form option
    When I visit "/interactions.html"
    Then "[name='fruit']" should have "apple" value
    When I select "banana" in "[name='fruit']"
    Then "[name='fruit']" should have "banana" value
  Scenario: It types text into input
    When I visit "/interactions.html"
    Then "[name='email']" should not have "example@example.com" value
    When I type "example@example.com" into "email"
    Then "[name='email']" should have "example@example.com" value
  Scenario: It scrolls the page
    When I visit "/interactions.html"
    And the "#toTop" selector should be hidden
    When I scroll "500" px
    Then wait "1000" ms
    Then the "#toTop" selector should be visible
    When I scroll "-500" px
    Then wait "1000" ms
    And the "#toTop" selector should be hidden
  Scenario: It scrolls a selector
    When I visit "/interactions.html"
    Then the "#privacy-confirmed" selector should be hidden
    When I scroll to the "bottom" of ".privacy"
    Then wait "1000" ms
    Then the "#privacy-confirmed" selector should be visible
