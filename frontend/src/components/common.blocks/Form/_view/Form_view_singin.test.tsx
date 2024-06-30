import Form_view_singin from './Form_view_singin'

describe('Form_view_singin component test', () => {
    it('Form_view_singin no empty render', () => {
        const wrapper = shallow(<Form_view_singin />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
