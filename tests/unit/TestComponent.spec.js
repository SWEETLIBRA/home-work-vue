import { mount } from "@vue/test-utils"
import TestComponent from './TestComponents.vue'

describe('TestComponent', () => {
  test('Test props', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'test message'
      }
    })
    expect(wrapper.text()).toEqual('My text test message'),
    expect(wrapper.html()).toEqual('<div>My text test message</div>')
  })
})
