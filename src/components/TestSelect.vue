<template>
  <div>
    <v-select v-model="value">

    </v-select>
  </div>
</template>

<script>
  import SuperSelect from './SelectSuper'
  export default {
    name: "TestSelect",
    components: {
      'v-select': SuperSelect
    },
    data() {
      return {
        value: '2'
      }
    }
  }
</script>

<style scoped>

</style>
