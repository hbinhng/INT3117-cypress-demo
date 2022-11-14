import Greet from '../../components/Greet/Greet';

describe('Greet.cy.ts', () => {
  it('should have "Hello"', () => {
    cy.mount(<Greet />);
    cy.get('[data-cy-root]').should('contain.text', 'Hello');
  });
});
