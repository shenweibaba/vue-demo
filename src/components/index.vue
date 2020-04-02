<template>
  <div>
    <div>hello</div>
    <div>
      <ul>
        <router-link id="Home" to="/Home">Home</router-link>
        <router-link id="FirstPage" to="/first">FirstPage</router-link>
        <router-link id="SecondPage" to="/second">SecondPage</router-link>
      </ul>
    </div>
  </div>


</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
