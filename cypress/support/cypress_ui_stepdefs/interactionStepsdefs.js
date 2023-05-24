import InteractionActions from "../cypress_ui/interactionActions";
import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";


let interaction = new InteractionActions();

class InteractionStepDefinition extends InteractionActions{
    
i_click_on(elementName){
    interaction.clickOnElement(elementName);
}

i_type_in(){}

i_select_from_dropdown(){}

}

Given('i navigate to the Website',()=>{
  interaction.openURL();
  return this;
})

Then ('i am on {string}',(pageName)=>{

  var class_obj = new DynamicClass(pageName);
})

Then('i click on {string}',(elementName)=>{
  try {
    interaction.clickOnElement(elementName);
    return this;
  } catch (error) {
    
  }
})

Then('i type {string} in {string}',(text,elementName )=>{
  try {
    interaction.typeInTextBox(text,elementName);
    return this;
  } catch (error) {
    
  }
})