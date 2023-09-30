
describe(`validando texto da tela home`, () => {
    beforeEach ( () => {
        cy.visit (`https://buger-eats.vercel.app/`);
    });

    it(`validando texto principal`, () => {
        cy.get(`h1`).should(`have.text`, `Seja um parceiro entregador pela Buger Eats`);
    }); 	

    it(`validando texto secundario`, () => {
        cy.get(`p`).should(`have.text`, `Em vez de oportunidades tradicionais de entrega de refeições em horários pouco flexíveis, seja seu próprio chefe.`)
    });

    it(`Validando botao de cadastro`, () => {
        cy.get(`a`).click();
        cy.get(`h1`).should(`contain.text`, `Cadastre-se para`).and(`contain.text`, `fazer entregas`)
    });
    
    it(`validando cpf`, () => { 
        cy.get(`a`).click();
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('hdus');
        cy.get('.button-success').click();
        cy.get(':nth-child(2) > .alert-error').should(`contain.text`,`Oops! CPF inválido`)
    });

    it(`validando cep`, () => {
        cy.get(`a`).click();
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
        cy.get('.button-success').click();
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .alert-error').should(`contain.text`, `É necessário informar o CEP`)
    });

    it(`prenchendo dados`, () => {
        cy.get(`a`).click();
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type(`Larissa Batista`)
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(`64802567600`)
        cy.get(':nth-child(3) > :nth-child(1) > input').type(`oliviadaianeferreira@antunez.com.br`)
        cy.get(':nth-child(3) > :nth-child(2) > input').type(`(81)99893-0185`)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(`52130-014`)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click();
        cy.get(':nth-child(4) > :nth-child(1) > input').type(`13`)
        cy.get('.delivery-method > :nth-child(3)').click();
        cy.get('.dropzone').selectFile(`cnh fisica.png`,{
            action: `drag-drop`
            })
        cy.get('.button-success').click();
    });

    
    });