import AboutView from '@/views/AboutView.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('aboutPage Component', () => {
  it('renders the About page correctly', () => {
    const wrapper = mount(AboutView)

    // Component render check
    expect(wrapper.exists()).toBe(true)

    // Element checks
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toBe('This is about page')

    // Class checks
    expect(heading.classes()).toContain('text-2xl')
    expect(heading.classes()).toContain('font-bold')
    expect(heading.classes()).toContain('tracking-tighter')
  })
})
