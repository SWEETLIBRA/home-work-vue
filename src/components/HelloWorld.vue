<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{text}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    text: 'hello'
  }),
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
