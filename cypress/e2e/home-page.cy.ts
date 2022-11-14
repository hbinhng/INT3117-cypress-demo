describe('Home page', () => {
  const viewportSizes: Record<string, [number, number]> = {
    mobile: [375, 667],
    desktop: [1000, 660],
  };

  const originalLog = Cypress.log;
  Cypress.log = function (opts, ...other) {
    if (opts.displayName === 'fetch') return;
    if (opts.displayName === 'xhr') return;

    return originalLog(opts, ...other);
  };

  it('should have banner (desktop)', () => {
    cy.viewport(...viewportSizes.desktop);
    cy.on('uncaught:exception', () => false);

    cy.fixture('ua').then(({ desktop }) => {
      cy.visit('https://dantri.com.vn', {
        headers: {
          'User-Agent': desktop,
        },
      });
    });

    cy.get('#bannerMasthead iframe').should(
      'have.attr',
      'data-google-container-id',
    );
    cy.get('#bannerMasthead iframe')
      .invoke('height')
      .should('be.lessThan', viewportSizes.desktop[1]);
  });

  it('should have banner (mobile)', () => {
    cy.viewport(...viewportSizes.mobile);
    cy.on('uncaught:exception', () => false);

    cy.fixture('ua').then(({ mobile }) => {
      cy.visit('https://dantri.com.vn', {
        headers: {
          'User-Agent': mobile,
        },
      });
    });

    cy.get('#mobile-home-top-page iframe').should(
      'have.attr',
      'data-google-container-id',
    );
    cy.get('#mobile-home-top-page iframe')
      .invoke('height')
      .should('be.gte', viewportSizes.desktop[1]);
  });
});
