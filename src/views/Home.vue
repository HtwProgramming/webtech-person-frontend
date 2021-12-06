<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Hello World!"/>
    <my-chart v-for="(dataSet, index) in datasets" :x-values="dataSet.xValues" :y-values="dataSet.yValues" :key="index"></my-chart>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyChart from '@/components/MyChart'

export default {
  name: 'Home',
  components: {
    HelloWorld, MyChart
  },
  data () {
    return {
      datasets: [
        {
          xValues: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          yValues: [30, 40, 35, 50, 49, 60, 70, 91]
        },
        {
          xValues: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          yValues: [91, 70, 60, 30, 15, 10, 50, 123]
        }
      ]
    }
  }
}
</script>
