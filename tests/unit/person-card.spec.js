import { mount } from '@vue/test-utils'
import PersonCard from '@/components/PersonCard'

describe('Testing PersonCard.vue', () => {
  it('should render first name and last name', () => {
    // when
    const wrapper = mount(PersonCard, {
      propsData: {
        person: {
          id: 1,
          firstName: 'Max',
          lastName: 'Mustermann',
          vaccinated: true,
          pets: []
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Max Mustermann')
  })

  it.each`
    vaccinated | expected
    ${true}    | ${'geimpft'}
    ${false}   | ${'nicht geimpft'}
  `('should render vaccination status (status is $vaccinated)', ({ vaccinated, expected }) => {
    // when
    const testPerson = {
      id: 1,
      firstName: 'Max',
      lastName: 'Mustermann',
      vaccinated: vaccinated,
      pets: []
    }
    const wrapper = mount(PersonCard, {
      propsData: {
        person: testPerson
      }
    })

    // then
    const cardTitle = wrapper.find('.card-text')
    expect(cardTitle.text()).toContain(`${testPerson.firstName} ${testPerson.lastName} ist ${expected}`)
  })

  it.each`
    pets        | expected
    ${[]}       | ${'0 Haustier(e)'}
    ${[{}]}     | ${'1 Haustier(e)'}
    ${[{}, {}]} | ${'2 Haustier(e)'}
  `('should render amount of pets ($pets.length pets)', ({ pets, expected }) => {
    // when
    const testPerson = {
      id: 1,
      firstName: 'Max',
      lastName: 'Mustermann',
      vaccinated: true,
      pets: pets
    }
    const wrapper = mount(PersonCard, {
      propsData: {
        person: testPerson
      }
    })

    // then
    const cardTitle = wrapper.find('.card-text')
    expect(cardTitle.text()).toContain(`und hat ${expected}`)
  })
})
