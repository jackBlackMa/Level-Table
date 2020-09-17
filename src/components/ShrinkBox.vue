<template>
  <div style="position:relative; padding-right: 20px;">
    <p>{{User}}</p>
    <span @click="status = !status" style="position: absolute; top: 10px; right: 10px; color: red" :class="{'arraw': !status}" v-if="isShow">^</span>
  </div>
</template>

<script>
  import ElCollapseTransition from "element-ui/src/transitions/collapse-transition";
  export default {
    name: "ShrinkBox",
    components: {ElCollapseTransition},
    props: {
      list : {
        default: [],
        type: Array,
      }
    },
    data() {
      return {
        status: false,
      }
    },
    computed: {
      isShow() {
        return this.list && this.list.length > 10;
      },
      User() {
        if(this.status) {
          return this.list.map(item => item.name).join(',')
        } else {
          return this.list.slice(0,10).map(item => item.name).join(',')
        }
      },
    },
    methods: {

    }
  }
</script>

<style scoped>
  .arraw {
    transform: rotate(180deg);
  }
</style>
