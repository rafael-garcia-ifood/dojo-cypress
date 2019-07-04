// email: contato+cypress@campinasfrontend.com.br
// senha: DojoCypress
describe('My first test', function () {
    beforeEach(() => {
       cy.clearCookies(); 
    });
    it('make login', function () {
        cy.login('contato+cypress@campinasfrontend.com.br', 'DojoCypress');
    })
    it('add to cart', function() {
        cy.login('contato+cypress@campinasfrontend.com.br', 'DojoCypress');
        cy.get('.deals-shoveler-card').first().find('a').click();
        cy.get('#add-to-cart-button').click();
        cy.get('#huc-v2-order-row-confirm-text h1').contains('Adicionado ao carrinho');

        cy.get('#nav-cart').click();
        cy.get('.sc-list-item-content').first().find('input[value="Excluir"]').click();
    })

    it.only('create wish list', function() {
        cy.login('contato+cypress@campinasfrontend.com.br', 'DojoCypress');
        cy.get('.deals-shoveler-card').first().find('a').click();
        cy.get('#wishListDropDown').click();
        cy.get('#atwl-dd-create-list').click();
    })
});