import Form_view_singup from './Form_view_singup'

describe('Form_view_singup component test', () => {
    it('Form_view_singup no empty render', () => {
        const wrapper = shallow(<Form_view_singup />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
