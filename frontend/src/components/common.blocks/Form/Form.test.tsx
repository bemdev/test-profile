import Form from './Form'

describe('Form component test', () => {
    it('Form no empty render', () => {
        const wrapper = shallow(<Form />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
