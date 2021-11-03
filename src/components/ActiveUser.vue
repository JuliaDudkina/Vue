<template>
  <li>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </li>
</template>

<script>
export default {
  name: "ActiveUser",
  props: {
    name:{
      type: String,
      required: true,
    },
    age:{
      type: Number,
      required: false,
    }
  }
}
</script>

<style scoped>

</style>