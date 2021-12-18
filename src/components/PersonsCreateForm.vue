<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#persons-create-offcanvas" aria-controls="#persons-create-offcanvas">
    <i class="bi bi-person-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="persons-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Person</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="persons-create-form" novalidate>
        <div class="mb-3">
          <label for="first-name" class="form-label">First name</label>
          <input type="text" class="form-control" id="first-name" v-model="firstName" required>
          <div class="invalid-feedback">
            Please provide the first name.
          </div>
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last name</label>
          <input type="text" class="form-control" id="last-name" v-model="lastName" required>
          <div class="invalid-feedback">
            Please provide the last name.
          </div>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" class="form-select" v-model="gender" required>
            <option value="" selected disabled>Choose...</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="DIVERSE">Diverse</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid gender.
          </div>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="vaccinated" v-model="vaccinated">
            <label class="form-check-label" for="vaccinated">
              Vaccinated
            </label>
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createPerson">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonsCreateForm',
  data () {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      vaccinated: false,
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    async createPerson () {
      if (this.validate()) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/persons'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const person = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          vaccinated: this.vaccinated,
          gender: this.gender
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: person,
          redirect: 'follow'
        }

        const response = await fetch(endpoint, requestOptions)
        await this.handleResponse(response)
      }
    },
    async handleResponse (response) {
      if (response.ok) {
        this.$emit('created', response.headers.get('location'))
        document.getElementById('close-offcanvas').click()
      } else if (response.status === 400) {
        response = await response.json()
        response.errors.forEach(error => {
          this.serverValidationMessages.push(error.defaultMessage)
        })
      } else {
        this.serverValidationMessages.push('Unknown error occurred')
      }
    },
    validate () {
      const form = document.getElementById('persons-create-form')
      form.classList.add('was-validated')
      return form.checkValidity()
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
