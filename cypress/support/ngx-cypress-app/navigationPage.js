export class NavigationPage {

  page(pageName) {
    cy.get('[title=\'' + pageName +'\']').click()
  }

  formLayoutPage(){

    this.page('Forms')
    this.page('Form Layouts')

  //  cy.get('[title="Forms"]').click()
   // cy.get('[title="Form Layouts"]').click()

  }

  datepickerPage(){

    cy.get('[title="Forms"]').click()
    cy.get('[title="Datepicker"]').click()

  }

  accordionPage(){

    cy.get('[title="Layout"]').click()
    cy.get('[title="Accordion"]').click()

  }

  smartTablePage(){

    cy.get('[title="Tables & Data"]').click()
    cy.get('[title="Smart Table"]').click()
  }
}

export const navigateTo = new NavigationPage()
