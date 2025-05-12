// describe('Cluster Module Automation', () => {

//   // Step 1: Login before running the tests
//   before(() => {
//     cy.visit('https://crmdev.nayatel.com/nhrms/LoginController');
//     cy.get('#username_txt').type('areeba.qadeer');  // Your username
//     cy.get('#password_txt').type('Areeba@13');  // Your password
//     cy.get('#btnDiv > .btn').click();  // Clicking the login button
//     cy.url().should('include', '/dashboard');
//     cy.visit('https://crmdev.nayatel.com/views/crmViews/nayatelCrm/DevicesCluster/devicesClusterModule.php');  // Assert that the user is redirected to the dashboard after login (optional)
//   });

 


// });

describe('Cluster Form Automation', () => {
  // Step 1: Login before running the tests
  before(() => {
    cy.visit('https://crmdev.nayatel.com/nhrms/LoginController');
    cy.get('#username_txt').type('areeba.qadeer');  // Your username
    cy.get('#password_txt').type('Areeba@13');  // Your password
    cy.get('#btnDiv > .btn').click();  // Clicking the login button
    cy.url().should('include', '/dashboard');

    // Navigate to the cluster form page
    cy.visit('https://crmdev.nayatel.com/views/crmViews/nayatelCrm/DevicesCluster/devicesClusterModule.php');
  });

  it('Should fill in the cluster form and submit it', () => {
    // Step 2: Visit the cluster page after login
    cy.visit('https://crmdev.nayatel.com/views/crmViews/nayatelCrm/DevicesCluster/devicesClusterModule.php');

    // Step 3: Enter a unique cluster name
    const uniqueClusterName = 'testingnew';
    cy.get('#name').type(uniqueClusterName);

    // Step 4: Select a city from the dropdown
    cy.get('#s2id_autogen1').click();
    cy.get('.select2-results li').contains('Islamabad').click();  

    // Step 5: Select a device from the dropdown
    cy.get('#s2id_autogen2').click();
    cy.get('.select2-results li').contains('Kamra').click();

    // Step 6: Email field 1
    cy.get('#s2id_autogen3').click();
    cy.get('.select2-results li').contains('areeba.qadeer@nayatel.com').click();

    // Step 7: Phone number field 1
    cy.get('#s2id_autogen6').click();
    cy.get('.select2-results li').contains('03008520728').click();

    // Step 8: Submit the form
    cy.get('#submitButton').click();

    // Step 9: Verify the submission in the report
    cy.get('.report').should('contain', uniqueClusterName);  // Verify cluster name
    cy.get('.report').should('contain', 'Islamabad');  // Verify city
    cy.get('.report').should('contain', 'Kamra');  // Verify device
    cy.get('.report').should('contain', 'areeba.qadeer@nayatel.com');  // Verify email
    cy.get('.report').should('contain', '03008520728');  // Verify phone number
  });
});
