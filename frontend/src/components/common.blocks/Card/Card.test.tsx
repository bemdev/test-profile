import Card from './Card'

describe('Card component test', () => {
    it('Card no empty render', () => {
        const wrapper = shallow(<Card />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
