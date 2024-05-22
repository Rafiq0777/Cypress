Feature: Create Template and Program as a Mentor

    Login as a Mentor and verify the complete flow of creating a template
    and use the recently created template for creating a new program

    Scenario: Create a Template
        Given I am logged in as a mentor
        When I click on "templatepage"."TemplatesBtn"
        And I click on "templatepage"."CreateNewTemplateBtn"
        When I enter "templatepage"."TemplateNameText"
        And I enter "templatepage"."DurationText" "2"
        And I click on "templatepage"."createButn"
        Then I get redirected to template creation page
        When I drag "templatepage"."imageToolLogoCss" and drop at "templatepage"."DroppointDay1"
        When I click on "templatepage"."ChoosefileBtn" and attach image "Certificate.png"
        And I click on "templatepage"."ChoosefileBtn" and attach image "photo1.jpg"
        Then I verify image is added
        And I click on "templatepage"."frequency" and select "Daily"
        Then I see the same course is available on Day2 as well
        And I click on "templatepage"."SaveBtn"
        And I click on "templatepage"."onlythisToolRB"
        And I drag "templatepage"."Questions" and drop at "templatepage"."Droppoint2"
        And I click on "templatepage"."QuestiontypeText"
        And I enter "templatepage"."QuestiontypeTextTextbox" "any feedback about the course?"
        And I click on "templatepage"."questionSave"
        And I click on "templatepage"."SavefinalChanges"
        
        Then I should see "Template creation is successful" message.

    Scenario: Create a program
        Given I am logged in as a mentor
        When I click on "prgrmPage"."addNewProgramBtn"
        And I enter "prgrmPage"."programNameField"
          And I enter "prgrmPage"."goalField"
        And I click on "prgrmPage"."switchPublicorPrivate"
        And I enter "prgrmPage"."publicKeyword"
        And I click on "prgrmPage"."UploadPic" and attach image "Certificate.png"
        When I select recently createdt template
        And I click on "prgrmPage"."createProgramBtn"
        Then I should see "Program created successfully" message.