import '@testing-library/cypress/add-commands';

describe('Search for repositories with transition to the page with the repository card', () => {
    it('should visit, search and transition', () => {
        cy.visit('/');

        cy.get('input').type('tool-kit-test-task');

        cy.wait(500);

        cy.findAllByText('Show Repository Card').first().click();

        cy.get('img');

        cy.url().should('satisfy', (url) => url.startsWith('http://localhost:3000/repo/'));
    });

    it('should visit, paginate and refresh', () => {
        cy.visit('/');

        cy.get('input').type('test');

        cy.get('[aria-label="paginator"]')
            .contains('1')
            .first()
            .as('first')
            .then(($el) => $el[0].className)
            .should('match', /active/);

        cy.get('[aria-label="paginator"]').contains('2').first().as('second').click();

        cy.get('@second')
            .then(($el) => $el[0].className)
            .should('match', /active/);

        cy.reload();

        cy.get('@second')
            .then(($el) => $el[0].className)
            .should('match', /active/);
    });
});
