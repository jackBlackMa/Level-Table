<template>
  <div>
    <el-table
      ref="table"
      :data="data"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名字"
      >
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Life",
    data() {
      return {
        message: '',

      }
    },
    props: {
      data: {
        type: Array,
        default: [],
      }
    },
    beforeCreate() {
      console.group("-------son-创建前的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
    },
    created() {
      console.group("-------son-created的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
    },
    beforeMount() {
      console.group("-------son-beforeMount的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
    },
    mounted() {
      console.group("-------son-mounted的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
      this.$refs.table.toggleRowSelection(this.data[0]);
    },
    beforeUpdate() {
      console.group("-------son-beforeUpdate的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
    },
    updated() {
      console.group("-------son-updated的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
    },
    beforeDestroy() {
      console.group("-------son-beforeDestroy的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
    },
    destroyed() {
      console.group("-------son-destroyed的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
    }
  }
</script>

<style scoped>

</style>
