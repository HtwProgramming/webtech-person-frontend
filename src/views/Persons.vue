<template>
  <h1>Persons</h1>
  <div class="container-fluid">
    <persons-card-list :persons="this.persons"></persons-card-list>
  </div>
  <persons-create-form @created="addPerson"></persons-create-form>
</template>

<script>
import PersonsCardList from '@/components/PersonsCardList'
import PersonsCreateForm from '@/components/PersonsCreateForm'

export default {
  name: 'Persons',
  components: {
    PersonsCardList,
    PersonsCreateForm
  },
  data () {
    return {
      persons: []
    }
  },
  methods: {
    addPerson (personLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + personLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(person => this.persons.push(person))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/persons'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(person => {
        this.persons.push(person)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
