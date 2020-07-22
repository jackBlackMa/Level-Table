<template>
  <div>
    <el-select v-model="checked" @change="change">
      <el-option
        v-for="item in 10"
        :key="item"
        :value="item"
        :label="item"
      >
      </el-option>
    </el-select>
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
        default: 0
      }
    },
    methods: {
      change(value) {
        this.$emit('change', value)
      }
    }
  }
</script>

<style scoped>

</style>
