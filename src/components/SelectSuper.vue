<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-select v-model="selectChecked" @change="change">
        <el-option
          v-for="item in 10"
          :key="item"
          :value="item"
          :label="item"
        >
        </el-option>
      </el-select>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "SelectSuper",
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      // this allows using the `value` prop for a different purpose
      // use `checked` as the prop which take the place of `value`
      checked: {
        type: Number,
        default: ''
      },
      dialogVisible: false
    },
    data() {
      return {
        selectChecked: ''
      }
    },
    methods: {
      change(value) {
        this.$emit('change', value)
      }
    },
    watch: {
      checked(newValue) {
        this.selectChecked = newValue
      }
    }
  }
</script>

<style scoped>

</style>
