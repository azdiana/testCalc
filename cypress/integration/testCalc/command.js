describe('No command', () => {
  beforeEach(() => {
    cy.visit('/');
  })

    it('No command', () => {
        cy.get('form').should('be.visible');
        cy.get('input[name="val1"]')
            .should('be.visible')
            .should('have.attr','type','text');
        cy.get('input[name="val2"]')
            .should('be.visible')
            .should('have.attr','type','text');
        cy.get('input[name="result"]')
            .should('be.visible')
            .should('have.attr','readonly','readonly');
        
        cy.get('input[value="add"]').invoke('removeAttr', 'checked');
        cy.get('input[value="Calculate"]').click();
        cy.get('[role=alert]').should(($alert) => {
                    expect($alert).to.contain('No operand.');
                });
    })
})