/// <reference types="cypress" />

import { formPage } from "../../support/ngx-cypress-app/formsPage"
import { navigateTo } from "../../support/ngx-cypress-app/navigationPage"

describe("Form Test", () => {

  beforeEach(() => {

    cy.visit("/")

    navigateTo.page('Forms')
    navigateTo.page('Form Layouts')
    //navigateTo.formLayoutPage()

  })

  it("Using the Grid Test", () => {


    cy.screenshot()
    formPage.fillUsingTheGridForm("saurabh.d2106@fake.com", "4kjhsdh@dbg")


  })


  it("Using the Grid using Then method", () => {


    // .as() -- allias
    cy.contains("nb-card", "Using the Grid").then(function (usingTheGrid) {

      cy.wrap(usingTheGrid).find("[data-cy='imputEmail1']").type("Saurabh@fake.com")

      cy.wrap(usingTheGrid).find("#inputPassword2").type("fhskdj@12")

      cy.wrap(usingTheGrid).find("button").click()
    })

  })

  it("Learn Invoke Method", () => {

    cy.get('[for="exampleInputEmail1"]').invoke("text").then(text => {

      //Chai-jquery assertion
      expect(text).to.equal("Email address")


    })

    cy.get('[for="exampleInputEmail1"]').should("have.text", "Email address");

    //Cypress assertion
    cy.get("#exampleInputEmail1").invoke("attr", "placeholder").should("equal", "Email");
  })



})
