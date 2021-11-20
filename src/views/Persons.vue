<template>
  <h1>Welcome to Persons</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="person in persons" :key="person.id">
        <div class="card h-100">
          <img :src="getAvatar(person)" class="card-img-top" :alt="person.firstName + ' ' + person.lastName">
          <div class="card-body">
            <h5 class="card-title">{{ person.firstName }} {{ person.lastName }}</h5>
            <p class="card-text">
              {{ person.firstName }} {{ person.lastName }} ist {{ person.vaccinated ? 'geimpft' : 'nicht geimpft' }} und
              hat {{ person.pets.length }} Haustier(e).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Persons',
  data () {
    return {
      persons: [
        {
          id: 1,
          firstName: 'Max',
          lastName: 'Mustermann',
          vaccinated: true,
          gender: 'MALE',
          pets: []
        },
        {
          id: 2,
          firstName: 'Maxima',
          lastName: 'Meier',
          vaccinated: false,
          gender: 'FEMALE',
          pets: [
            1,
            2
          ]
        }
      ]
    }
  },
  methods: {
    getAvatar (person) {
      if (person.gender === 'MALE') {
        return require('../assets/male.png')
      } else if (person.gender === 'FEMALE') {
        return require('../assets/female.png')
      }
    }
  }
}
</script>

<style scoped>

</style>
