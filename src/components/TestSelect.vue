<template>
  <div>
    <v-select v-model="value"  :key="value">

    </v-select>
    <button @click="change">变换</button>
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
        value: 2,
        show: true,
      }
    },
    methods: {
      change() {
        this.show = !this.show;
        this.value++
      }
    }
  }
</script>

<style scoped>

</style>
