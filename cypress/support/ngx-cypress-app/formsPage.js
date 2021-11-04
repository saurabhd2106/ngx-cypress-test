export class FormPage{

  fillUsingTheGridForm(userEmail, userPassword){
     // .as() -- allias
     cy.contains("nb-card", "Using the Grid").as("usingTheGrid")

     cy.get("@usingTheGrid").find("[data-cy='imputEmail1']").type(userEmail)

     cy.get("@usingTheGrid").find("#inputPassword2").type(userPassword)

     cy.get("@usingTheGrid").find("button").click()

  }

}

export const formPage = new FormPage()
