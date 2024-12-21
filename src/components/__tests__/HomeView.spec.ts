import WrapedButton from '@/components/ui/WrapedButton.vue'
import HomeView from '@/views/HomeView.vue'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vitest } from 'vitest'

describe('homePage Component', () => {
  it('renders correctly and interacts with the counter store', async () => {
    const wrapper = mount(HomeView, {
      global: {
        components: { WrapedButton },
        plugins: [
          createTestingPinia({
            initialState: {
              counter: { count: 0 },
            },
            createSpy: vitest.fn,
            stubActions: false,
          }),
        ],
      },
    })

    // Component render check
    expect(wrapper.text()).toContain('This is home page')
    expect(wrapper.text()).toContain('Counter: 0')
    // Element checks
    const buttons = wrapper.findAllComponents(WrapedButton)
    expect(buttons.length).toBe(2)
    expect(buttons[0].props('title')).toBe('Increment')
    expect(buttons[1].props('title')).toBe('Decrement')

    // Simulate increment
    await buttons[0].trigger('click')
    expect(wrapper.text()).toContain('Counter: 1')

    // Simulate decrement
    await buttons[1].trigger('click')
    expect(wrapper.text()).toContain('Counter: 0')
  })
})
