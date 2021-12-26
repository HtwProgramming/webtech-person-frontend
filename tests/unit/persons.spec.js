import { mount } from '@vue/test-utils'
import Persons from '@/views/Persons.vue'
import PersonsCardList from '@/components/PersonsCardList'
import PersonsCreateForm from '@/components/PersonsCreateForm'

describe('Testing Persons.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(Persons)

    // then
    expect(wrapper.text()).toMatch('Persons')
  })

  it('should have persons card list component', () => {
    // when
    const wrapper = mount(Persons)

    // then
    const cardList = wrapper.findComponent(PersonsCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have persons create form component', () => {
    // when
    const wrapper = mount(Persons)

    // then
    const createForm = wrapper.findComponent(PersonsCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
