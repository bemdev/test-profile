import Form_view_profile from './Form_view_profile'

describe('Form_view_profile component test', () => {
    it('Form_view_profile no empty render', () => {
        const wrapper = shallow(<Form_view_profile />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
