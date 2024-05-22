Feature: Create a templateAndProgram

    Scenario: Create a template
        Given I am logged in as a mentor
        When I click on create a new template
        And I enter template name
        And I enter duration as "2" and click on create
        And I get redirected to template creation page
        And I enter Images to my Day1 course
        And I select the frequency as daily
        And I see the same course is available on Day2 as well
        And I enter question in my Day2 course as "Any feedback about the course?"
        And I save all the changes made
        Then I should see "Template creation is successful" message.


    Scenario: Create a program
        Given I am logged in as a mentor
        When I click on add new program button
        And I enter program name
        And I enter goal as "TestGoal"
        And I set program to public
        And I add Keyword
        And I add picture
        And I select recently createdt template
        And I click on create program
       Then I should see "Program created successfully" message.
