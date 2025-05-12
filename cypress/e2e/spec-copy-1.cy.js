describe('Login', () => {
  beforeEach(function() { 
          cy.session('StoringloginSession', () => {
              cy.visit('https://crmdev.nayatel.com/nhrms/LoginController');
              (cy.get('#username_txt')).type('areeba.qadeer');
              cy.get('#password_txt').type('Areeba@13');
             cy.get('#btnDiv > .btn').click();
          });
     
     cy.viewport(1500, 900); // Adjust width and height as needed
     cy.wait(2000)
  });
  it('Login to module', function() {
      cy.visit('https://crmdev.nayatel.com/views/crmViews/nayatelCrm/DevicesCluster/devicesClusterModule.php');
      cy.get('#name').type('Testingnew');

      cy.get('#s2id_autogen1').click();  // Open city the dropdown
cy.get('.select2-results li').should('be.visible').contains('Kakul').click();  // Select "Kot Adu"

cy.get('#s2id_autogen2').click(); // open devices drop-down
//cy.get('#select2-result-label-79').should('be.visible').contains('B17-1-1').click();
//cy.get('#select2-result-label-39633').should('be.visible').contains('Ali_Wali').click();

 // Open the devices dropdown

cy.get('.select2-results li')
  .should('be.visible')  // Ensure the dropdown is open
  .contains('Ali_Wali')  // Find the correct option
  .click();


cy.get('#s2id_autogen3').click(); // for email
cy.get('#select2-result-label-220').should('be.visible').contains('Naveed Aized Khan').click();

cy.get('#s2id_autogen4').click(); //Condition 2 
cy.get('#select2-result-label-11828').should('be.visible').contains('Muhammad Sohail Tahir').click();

cy.get('#s2id_autogen5').click();  //Condition 3
cy.get('#select2-result-label-23433').should('be.visible').contains('Fawad Abdullah').click();

cy.get('#s2id_autogen6').click();  //for phone number
cy.get('#select2-result-label-35041').should('be.visible').contains('Ashfaq Mehmood').click();

cy.get('#submitButton').click();

});
});