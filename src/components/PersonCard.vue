<template>
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
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    person: {
      type: Object,
      required: true
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
