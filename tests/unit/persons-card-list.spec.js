import { mount } from '@vue/test-utils'
import PersonsCardList from '@/components/PersonsCardList'
import PersonCard from '@/components/PersonCard'

describe('Testing PersonsCardList.vue', () => {
  it('should render a person card for each person', () => {
    // when
    const wrapper = mount(PersonsCardList, {
      propsData: {
        persons: [
          {
            id: 1,
            firstName: 'Max',
            lastName: 'Mustermann',
            vaccinated: true,
            pets: []
          },
          {
            id: 2,
            firstName: 'Maxima',
            lastName: 'Musterfrau',
            vaccinated: true,
            pets: []
          }
        ]
      }
    })

    // then
    const personCards = wrapper.findAllComponents(PersonCard)
    expect(personCards.length).toBe(2)
  })
})
