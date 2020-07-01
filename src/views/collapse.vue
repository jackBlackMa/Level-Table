<template>
  <div>
    <el-button @click="show=!show">
      click
    </el-button>
    <div>
      <el-collapse-transition>
        <div v-show="show">
          <div style="height: 200px; background: black">
            123
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "collapse",
    data() {
      return {
        show: false,
      }
    }

  }
</script>

<style scoped>

</style>
