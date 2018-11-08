describe('Multiplication', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/testCalc/webUI')
    cy.get('input[value="mul"]').check()
  })

    const val1 = Cypress._.random(-46340,46340);
    const val2 = Cypress._.random(-46340,46340);
    const overflow_val1 = Cypress._.random(-2147483647,-1);
    const overflow_val2 = Cypress._.random(1,2147483647);
    const max_val1 = 2147483648;
    const min_val2 = -2147483649;


    it('Null Value1 Multiplication', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear();
        cy.get('input[name="val2"]').clear().type(val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('One of the operands is not filled.');
                });
    });

    it('Invalid Value2 Multiplication', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').clear().type("test qwe");
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Invalid data input.');
                });
    });

    it('Max value Multiplication', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(max_val1);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Integer value is exceeded.');
                });
    });

    it('Min value Multiplication', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val2"]').clear().type(min_val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Integer value is exceeded.');
                });
    });

    it('Successfull Multiplication', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').clear().type(val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('input[name="result"]').should('have.value', (val1*val2).toString());
    });
})