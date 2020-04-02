<template>
  <div>
    <div>second</div>
    <button v-on:click="say">Say</button>
    <p>{{msg}}</p>
  </div>

</template>

<script>
    export default {
      name: "secondPage",
      data() {
        return  {
          msg: 'Hello Vue.js'
        }
      },
      methods: {
        say: function () {
          alert(this.msg);
        }
      }
    }
</script>

<style scoped>

</style>
