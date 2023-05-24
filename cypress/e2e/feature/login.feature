Feature:  I want to login into the site with valid data

    Background:
        Given i navigate to the Website

    # Scenario: Login as new sign up user with valid data
    #     When I entered valid credential
    #     Then User click on sign in button
    #     Then Validate the title after login


    Scenario: Login as new sign up user with valid data
        Then i am on "LoginPage"
        Then i click on "signInButton"
        




