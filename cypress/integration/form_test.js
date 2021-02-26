describe('user-onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameFirstInput = () => cy.get('input[name=first_name]')
    const nameLastInput = () => cy.get('input[name=last_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=termsOfService]')
    const submitBtn = () => cy.get('button[id=submitBtn]')
    const errorDiv = () => cy.get('div[name=errors]')

    it('sanity check', () => {
        expect(1+1).to.equal(2)
    })

    it('Content Checks', () => {
        nameFirstInput().type('Craig')
        nameLastInput().type('Gerhardstein')
        emailInput().type('check@email.com')
        passwordInput().type('testpassword')
        termsInput().click()
        errorDiv().should('have.value', '')
        submitBtn().click()
    })

    it('validation checks', () => {
        nameFirstInput().type('ab')


    })
})