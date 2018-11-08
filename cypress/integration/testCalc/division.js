describe('Division', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/testCalc/webUI')
    cy.get('input[value="div"]').check()
  })

    const val1 = Cypress._.random(1,2147483647);
    const val2 = Cypress._.random(-2147483648,-1);
    const max_val1 = 2147483648;
    const min_val2 = -2147483649;


    it('Null Value1 Division', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear();
        cy.get('input[name="val2"]').clear().type(val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('One of the operands is not filled.');
                });
    });

    it('Invalid Value2 Division', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').clear().type("test qwe");
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Invalid data input.');
                });
    });

    it('Max value Division', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(max_val1);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Integer value is exceeded.');
                });
    });

    it('Min value Division', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val2"]').clear().type(min_val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Integer value is exceeded.');
                });
    });

    it('Division by 0', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').clear().type(0);
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('Division by 0 is undefined.');
                });
    });

    it('Successfull Division', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]').clear().type(val1);
        cy.get('input[name="val2"]').clear().type(val2);
        cy.get('input[value="Calculate"]').click();
        cy.get('input[name="result"]').should('have.value', Math.trunc(val1/val2).toString());
    });
})