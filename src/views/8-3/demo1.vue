<template>
  <div>
    <div>father</div>
    <v-com></v-com>
  </div>
</template>

<script>
  import com from './components'
  export default {
    name: "demo1",
    components: {
      'v-com': com
    },
    created() {
      console.log(`father,created`)
    },
    mounted() {
      console.log(`father,mounted`)
    }
  }
</script>

<style scoped>

</style>
