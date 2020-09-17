<template>
  <div>
    <div class="box1" @click="event1">
      <div class="box2" @click.stop="event2"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {
      event1() {
        console.log('event1')
      },
      event2() {
        console.log('event2')
      }
    }
  }
</script>

<style scoped>
  .box1 {
    width: 100px;
    height: 100px;
    background: black;
  }
  .box2 {
    width: 20px;
    height: 20px;
    background: red;
  }
</style>
