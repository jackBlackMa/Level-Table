<template>
  <div>
    {{value}}
  </div>
</template>

<script>
  export default {
    name: "props",
    props : {
      model: {
        type: Object,
        default() {
          return {
            title: ''
          }
        }
      }
    },
    created() {
      this.initRender(this.model);

      console.log('mounted')
    },
    mounted() {
      this.$on('bus', (data) => {
        console.log(data)
      })
    },
    data() {
      return {
        value: {}
      }
    },
    methods: {
      initRender(data) {
        const self = this;
        this.value = data.title
      }
    },
    watch: {
      model(newValue) {
        this.initRender(newValue)
      }
    }
  }
</script>

<style scoped>

</style>
