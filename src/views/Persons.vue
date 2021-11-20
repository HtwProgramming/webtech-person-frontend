<template>
  <h1>Welcome to Persons</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card h-100">
          <img src="../assets/male.png" class="card-img-top" alt="Max Mustermann">
          <div class="card-body">
            <h5 class="card-title">Max Mustermann</h5>
            <p class="card-text">
              Max Mustermann ist geimpft und hat keine Haustiere.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="../assets/female.png" class="card-img-top" alt="Maxima Meier">
          <div class="card-body">
            <h5 class="card-title">Maxima Meier</h5>
            <p class="card-text">
              Maxima Meier ist nicht geimpft und hat 1 Haustier.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Persons'
}
</script>

<style scoped>

</style>
