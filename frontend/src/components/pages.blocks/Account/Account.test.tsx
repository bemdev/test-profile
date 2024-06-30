import Account from './Account'

describe('Account component test', () => {
    it('Account no empty render', () => {
        const wrapper = shallow(<Account />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
