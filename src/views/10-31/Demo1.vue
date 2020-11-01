<template>
  <div>
    <v-son v-show="visible" :data="data" :key="new Date().getTime()"></v-son>
  </div>
</template>

<script>
  import Son from '@/components/Life'

  export default {
    name: "Demo1",
    components: {
      'v-son': Son,
    },
    data() {
      return {
        message: 'father',
        visible: false,
        data: []
      }
    },
    beforeCreate() {
      console.group("-------father-创建前的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
    },
    created() {
      console.group("-------father-created的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
      const self = this;
      setTimeout(() =>
        {

          self.visible = true;
          self.data = [
            {
              name: "张三",
              age: 13
            },
            {
              name: "李四",
              age: 14
            }
          ]
        }
        , 2000
      )
    },
    beforeMount() {
      console.group("-------father-beforeMount的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
    },
    mounted() {
      console.group("-------father-mounted的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
    },
    beforeUpdate() {
      console.group("-------father-beforeUpdate的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
    },
    updated() {
      console.group("-------father-updated的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
    },
    beforeDestroy() {
      console.group("-------father-beforeDestroy的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
    },
    destroyed() {
      console.group("-------father-destroyed的状态--------");
      console.log("%c%s", "color: red", "el: " + this.$el);
      console.log("%c%s", "color: red", "data: " + this.$data);
      console.log("%c%s", "color: red", "message: " + this.message);
    }
  }
</script>

<style scoped>

</style>
