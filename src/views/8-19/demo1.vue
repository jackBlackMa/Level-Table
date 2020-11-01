<template>
  <v-model :model="value" ref="model"></v-model>
</template>

<script>
  import model from "../../components/props"
  export default {
    name: "demo1",
    components: {
      'v-model': model,
    },
    mounted() {
      const self = this;
      setTimeout(
        () => {
          self.value = {
            title: 1,
          };
          self.$refs.model.$emit('bus', [1,2])
        }, 2000
      )

    },
    data() {
      return {
        value: {
          title: ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
