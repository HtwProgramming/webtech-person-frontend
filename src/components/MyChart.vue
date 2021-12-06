<template>
  <div>
    <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: 'MyChart',
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: this.xValues
        }
      },
      series: [
        {
          name: 'series-1',
          data: this.yValues
        }
      ]
    }
  },
  props: {
    xValues: {
      type: Array,
      required: true
    },
    yValues: {
      type: Array,
      required: true
    }
    // dataSet: {
    //   type: Object,
    //   required: true
    // }
  }
}
</script>

<style scoped>

</style>
