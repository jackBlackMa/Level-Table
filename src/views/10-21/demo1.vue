<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "demo1",
    data() {
      return {
        e: 1
      }
    },
    mounted() {
      const self = this;
      setTimeout(() => {
        self.e = 2;
      }, 1000)
    },
    watch: {
      e: [
        function handle2(oldValue, newValue) {
          console.log("%c handle2", 'color: green', oldValue + "\n\r" + newValue)
        },
        {
          handler: (oldValue, newValue) => {
            console.log("%c handler", 'color: yellow', oldValue + "\n\r" + newValue)
          }
        }
      ]
    }
  }
</script>

<style scoped>

</style>
