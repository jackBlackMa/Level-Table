<template>
    <el-input v-model="input" placeholder="请输入内容" @input.native="handleChange"></el-input>
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
