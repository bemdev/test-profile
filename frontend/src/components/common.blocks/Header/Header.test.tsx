import Header from './Header'

describe('Header component test', () => {
    it('Header no empty render', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
