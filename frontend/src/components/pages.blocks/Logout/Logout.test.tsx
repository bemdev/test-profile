import Logout from './Logout'

describe('Logout component test', () => {
    it('Logout no empty render', () => {
        const wrapper = shallow(<Logout />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
