import Index from './Index'

describe('Index component test', () => {
    it('Index no empty render', () => {
        const wrapper = shallow(<Index />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
