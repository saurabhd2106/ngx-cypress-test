import { navigateTo } from "../../support/ngx-cypress-app/navigationPage"

describe("Form Test", () => {

  beforeEach(() => {

    cy.visit("/")

    navigateTo.datepickerPage()
  })

  it("Select a Date", () => {

  })

})
