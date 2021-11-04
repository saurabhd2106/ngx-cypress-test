export class SmartTablePage{


  editAnEntryInSmartTable(index){

    cy.get("tbody").contains("tr", index).then(tableRow =>{

      cy.wrap(tableRow).find(".nb-edit").click()

      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type("16")

      cy.wrap(tableRow).find(".nb-checkmark").click()

      cy.wrap(tableRow).find('td').eq(6).should('contain', '16')

    })

  }

}

export const smartTablePage = new SmartTablePage()
