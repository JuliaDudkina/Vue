<template>
  <ul >
    <li v-for="goal in this.goals" :key="goal">
      <slot :item="goal"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CourseGoals",
  data(){
    return {
      goals: ['Finish the course', 'learn Vue']
    }
  }
}
</script>

<style scoped>

</style>