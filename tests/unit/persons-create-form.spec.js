import { mount } from '@vue/test-utils'
import PersonsCreateForm from '@/components/PersonsCreateForm'

describe('Testing PersonsCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(PersonsCreateForm)

    // then
    expect(wrapper.find('#persons-create-offcanvas').classes()).not.toContain('show')
  })
})
