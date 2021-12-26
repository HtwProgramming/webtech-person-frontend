<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="person in persons" :key="person.id">
      <person-card :person="person"></person-card>
    </div>
  </div>
</template>

<script>
import PersonCard from '@/components/PersonCard'

export default {
  name: 'PersonsCardList',
  components: {
    PersonCard
  },
  props: {
    persons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
