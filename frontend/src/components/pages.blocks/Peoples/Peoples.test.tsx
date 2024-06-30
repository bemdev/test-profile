import People from './People'

describe('People component test', () => {
    it('People no empty render', () => {
        const wrapper = shallow(<People />)
        expect(wrapper.isEmptyRender()).toBe(false)
    })
})
