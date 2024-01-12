import './commands'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Account Creation', () => {
  it('should allow a user to sign up', () => {
    cy.visit('/reg'); // Adjust the URL to your signup page
    cy.get('input[name="email"]').type('fleur@live.nl');
    cy.get('input[name="password"]').type('hoi123');
    cy.get('form').submit();
    cy.url().should('include', '/home'); // Assuming the user is redirected to their profile
  });
});

describe('Login Functionality', () => {
  it('should allow a user to log in', () => {
    cy.visit('/');
    cy.get('input[name="email"]').type('fleur@live.nl');
    cy.get('input[name="password"]').type('hoi123');
    cy.get('form').submit();
    cy.url().should('include', '/home');
  });
});

describe('Homepage', () => {
  beforeEach(() => {
    // Log in before each test
    cy.login('fleur@live.nl', 'hoi123'); // This assumes you've created a custom Cypress command for login
  });

  it('should display movies', () => {
    cy.visit('/home');
    cy.get('.movie').should('have.length.at.least', 1); // Assumes movies have a class "movie"
  });
});

describe('Liking Movies', () => {
  beforeEach(() => {
    cy.login('fleur@live.nl', 'hoi123');
  });

  it('should allow a user to like a movie', () => {
    cy.visit('/card');
    cy.get('.movie:first .like-button').click(); // Adjust this to match your like button
    cy.get('.movie:first').should('have.class', 'liked'); // Assumes the like changes the class of the movie
  });
});

describe('Profile Page', () => {
  beforeEach(() => {
    cy.login('fleur@live.nl', 'hoi123');
  });

  it('should show liked movies', () => {
    cy.visit('/liked-movies');
    cy.get('.liked-movies').should('have.length.at.least', 1); // Assumes liked movies are in a container with this class
  });
});