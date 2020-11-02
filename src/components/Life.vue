<template>
  <div>
    <el-table
      ref="table"
      :data="data"
      height="500"
      v-loadMore="payLoads"
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
      <el-table-column
        label="跳转"
      >
        <template>
          <router-link to="/superSelect">点这里跳转</router-link>
        </template>
      </el-table-column>
    </el-table>
    <button @click="showPosition">点击位置</button>
  </div>
</template>

<script>
  export default {
    name: "Life",
    data() {
      return {
        message: '',
        payLoads: new Date().getTime()
      }
    },
    props: {
      data: {
        type: Array,
        default: [],
      }
    },
    activated() {
      this.payLoads = new Date().getTime();
    },
    beforeCreate() {
      console.group("-------son-创建前的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      console.log("%c%s", "color: red", "table: " + this.$refs.table);
    },
    created() {
      window.sessionStorage.setItem('loadTop', 0);
      window.sessionStorage.setItem('loadLeft', 0);
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
      this.data.forEach(item => {
        this.$refs.table.toggleRowSelection(item);

      })
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
    },
    methods: {
      showPosition() {
        console.log(this.$refs.table)
      }
    },
    directives: {
      'loadMore': {
        bind(el, binding) {
          const selectWrap = el.querySelector('.el-table__body-wrapper');
          selectWrap.addEventListener('scroll', function () {
            window.sessionStorage.setItem('loadTop', this.scrollTop);
            window.sessionStorage.setItem('loadLeft', this.scrollLeft);
          });
        },
        componentUpdated(el) {
          const selectWrap = el.querySelector('.el-table__body-wrapper');
          let l = window.sessionStorage.getItem('loadLeft') || 0;
          let t = window.sessionStorage.getItem('loadTop') || 0;
          setTimeout(() => {
            selectWrap.scrollTo(l, t);
          }, 200);
        },
        update() {
        }
      }
    }
  }
</script>

<style scoped>

</style>
