/// <reference types="cypress" />


//describe('Account Creation', () => {
  //it('should allow a user to sign up', () => {
    //cy.visit('/reg'); // Adjust the URL to your signup page
    //cy.wait(1000); 
    //cy.get('input[name="Username"]').type('fleurvdven');
    //cy.get('input[name="Email"]').type('fleur@live.nl');
    //cy.get('input[name="Password"]').type('hoi123');
    //cy.get('form').submit();
    //cy.url().should('include', '/home'); // Assuming the user is redirected to their profile
  //});
//});

describe('Login Functionality', () => {
  it('should allow a user to log in', () => {
    cy.visit('');
    cy.wait(1000); 
    cy.get('input[name="Email"]').type('fleur@live.nl');
    cy.get('input[name="Password"]').type('hoi123');
    cy.get('form').submit();
    cy.url().should('include', '/home');
  });
});

//describe('Homepage', () => {
  //beforeEach(() => {
    // Log in before each test
    //cy.login('fleur@live.nl', 'hoi123'); // This assumes you've created a custom Cypress command for login
 // });

  //it('should display movies', () => {
    //cy.visit('/home');
    //cy.wait(1000); 
    //cy.get('.movie').should('have.length.at.least', 1); // Assumes movies have a class "movie"
  //});
//});

describe('Liking Movies', () => {
  it('should allow a user to like a movie', () => {
    cy.visit('/home'); // Adjust the API endpoint
    cy.wait(1000);
    cy.get('.movie-card').first().trigger('mouseover')
    cy.wait(10000);
    cy.get('#cardBtn').click(); // Adjust this to match your like button // Assumes the like changes the class of the movie
    cy.wait(10000);
  });
});

describe('Profile Page', () => {

  it('should show liked movies', () => {
    cy.get('#MijnLijst').click();// Adjust the API endpoint
    cy.get('.liked-movies').should('have.length.at.least', 1); // Assumes liked movies are in a container with this class
  });
});