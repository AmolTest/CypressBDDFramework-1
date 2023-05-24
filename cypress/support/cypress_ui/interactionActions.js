

class InteractionActions {


    openURL(){
    try {
    cy.visit(Cypress.env('baseURL'))
    } catch (error) {
    
}
       
    }

   clickOnElement(elemenName) {
        try {
            cy.get(elemenName).click();
        } catch (err){

        }
    }

    typeInTextBox(text,elemenName) {
        try {
            cy.get(elemenName).type(text);
        } catch (err){

        }
    }


}export default InteractionActions