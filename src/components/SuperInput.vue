<template>
  <el-input v-model="input" onkeyup="this.value=this.value.replace(/[^\d.]/g,'');" onblur="this.value=this.value.replace(/[^\d.]/g,'');"
  >
  </el-input>
</template>

<script>
    export default {
        name: "SuperInput",
      data() {
          return {
            input: ''
          }
      },
      methods: {
        handleChange(data) {
          this.input= data.target.value.replace(/[^\d.]/g, '')
        }
      }
    }
</script>

<style scoped>

</style>
