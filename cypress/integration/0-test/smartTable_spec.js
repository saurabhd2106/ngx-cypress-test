import { navigateTo } from "../../support/ngx-cypress-app/navigationPage"
import { smartTablePage } from "../../support/ngx-cypress-app/smartTablePage"

describe("Smart Table Test", () => {

  beforeEach(() => {

    cy.visit("/")

    navigateTo.smartTablePage()
  })

  it("Edit a row", () => {

    let index = 3

    smartTablePage.editAnEntryInSmartTable(index)

  })

})
