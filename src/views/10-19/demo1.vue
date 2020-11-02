<template>
  <div>
    <el-button @click="visible = !visible">open</el-button>
    <el-dialog
      :visible.sync="visible"
      :append-to-body="true"
    >
      <div style="width: 100px; height: 100px;">
        <el-button @click="confirm">test</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "demo1",
    data() {
      return {
        visible: false
      }
    },
    methods: {
      confirm() {
        const self = this;
        this.ElMessage.confirm("test")
          .then(res => {

          })
      }
    }
  }
</script>

<style scoped>

</style>
