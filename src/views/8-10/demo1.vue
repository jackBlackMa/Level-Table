<template>
  <div>
    <superSelect v-model="check" :dialog-visible="visible" :key="new Date().getTime()" ></superSelect>
    <el-button @click="visible = !visible">
      点击
    </el-button>
  </div>

</template>

<script>
  import superSelect from '@/components/SelectSuper'
  export default {
    name: "demo1",
    components: {
      superSelect
    },
    data() {
      return {
        check: 0,
        visible: false,
      }
    }
  }
</script>

<style scoped>

</style>
