<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 class="title">项目2home

      <button @click="handleClick">验证状态</button>
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  mounted () {
    console.log('Home')
  },
  methods: {
    handleClick () {
      this.$store.commit('todo')
    }
  }
}
</script>
