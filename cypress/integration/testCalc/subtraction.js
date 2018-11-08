describe('Subtraction', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/testCalc/webUI')
    cy.get('input[value="sub"]').check()
  })

    let val1 = Cypress._.random(0,2147483647);
    let val2 = Cypress._.random(-2147483647,0);
    let overflow_val1 = Cypress._.random(1073741824,2147483647);
    let overflow_val2 = Cypress._.random(-2147483647,-1073741824);
    let overflown_val1 = Cypress._.random(-2147483647,-1073741824);
    let overflown_val2 = Cypress._.random(1073741824,2147483647);
    let max_val1 = 2147483648;
    let min_val2 = -2147483649;


    it('Null Value1 Subtraction', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear();
        cy.get('input[name="val2"]').clear().type(val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('One of the operands is not filled.');
                });
    });

    it('Invalid Value2 Subtraction', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').clear().type("test qwe");
        cy.get('input[value="Calculate"]').click();
        cy.contains('One of the operands is not');
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Invalid data input.');
                });
    });

    it('Overflow Positive Subtraction', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(overflow_val1);
        cy.get('input[name="val2"]').clear().type(overflow_val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Maximum integer value is exceeded.');
                });
    });

    it('Overflow Negative Subtraction', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(overflown_val1);
        cy.get('input[name="val2"]').clear().type(overflown_val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Minimum integer value is exceeded.');
                });
    });

    it('Max value Subtraction', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(max_val1);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Integer value is exceeded.');
                });
    });

    it('Min value Subtraction', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val2"]').clear().type(min_val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Integer value is exceeded.');
                });
    });

    it('Successfull Subtraction', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').clear().type(val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('input[name="result"]').should('have.value', (val1-val2).toString());
    });
})