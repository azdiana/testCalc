describe('Addition', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('input[value="add"]').check()
  })

    const val1 = Cypress._.random(-1073741823,1073741823);
    const val2 = Cypress._.random(-1073741823,1073741824);
    const overflow_val1 = Cypress._.random(1073741824,2147483647);
    const overflow_val2 = Cypress._.random(1073741824,2147483647);
    const overflown_val1 = Cypress._.random(-2147483647,-1073741824);
    const overflown_val2 = Cypress._.random(-2147483647,-1073741824);
    const max_val1 = 2147483648;
    const min_val2 = -2147483649;


    it('Null Value1 Addition', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear();
        cy.get('input[name="val2"]').clear().type(val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('One of the operands is not filled.');
                });
    });

    it('Invalid Value2 Addition', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').type("test qwe");
        cy.get('input[value="Calculate"]').click();
        cy.contains('One of the operands is not');
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Invalid data input.');
                });
    });

    it('Overflow Positive Addition', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(overflow_val1);
        cy.get('input[name="val2"]').clear().type(overflow_val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Maximum integer value is exceeded.');
                });
    });

    it('Overflow Negative Addition', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(overflown_val1);
        cy.get('input[name="val2"]').clear().type(overflown_val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Minimum integer value is exceeded.');
                });
    });

    it('Max value Addition', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(max_val1);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Integer value is exceeded.');
                });
    });

    it('Min value Addition', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val2"]').clear().type(min_val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Integer value is exceeded.');
                });
    });

    it('Successfull Addition', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').clear().type(val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('input[name="result"]').should('have.value', (val1+val2).toString());
    });
})