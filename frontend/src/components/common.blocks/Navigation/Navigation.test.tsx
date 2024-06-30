import Navigation from './Navigation'

describe('Navigation component test', () => {
    it('Navigation no empty render', () => {
        const wrapper = shallow(<Navigation />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
