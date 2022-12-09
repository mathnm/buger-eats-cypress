

class SignupPage {

    go() {
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        //preenche dados do entregador
        cy.get('input[name=fullName]').type(deliver.name)
        cy.get('input[name=cpf]').type(deliver.cpf)
        cy.get('input[name=email]').type(deliver.email)
        cy.get('input[name=whatsapp]').type(deliver.whatsapp)

        //preenche endereço
        cy.get('input[name="postalcode"').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        //validação dos campos buscados pelo CEP
        cy.get('input[name="address"').should('have.value',deliver.address.street)
        cy.get('input[name="district"').should('have.value',deliver.address.district)
        cy.get('input[name="city-uf"').should('have.value',deliver.address.city_state)

        //clica em método de entrega 'moto'
        cy.contains('.delivery-method li', deliver.delivery_method).click()
        //upload de CNH
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit(){
        //submit
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        //cy.get('.alert-error').should('have.text', expectedMessage)
        cy.contains('.alert-error', expectedMessage).should('be.visible');
    }

}

export default new SignupPage;