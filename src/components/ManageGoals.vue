<template>
<!--  We can get rid of this parent div in Vue3-->
  <div>
    <h2>ManageGoals</h2>
    <input ref="enteredValue" type="text">
    <button @click="setGoal">Set Goal</button>
<!--  renders in body, but logic still works as if it was in the component   -->
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <button @click="closeErrorDialog">Okay</button>
      </error-alert>
    </teleport>
  </div>
<!--  info will be lost in input when switching between components-->
</template>

<script>
import ErrorAlert from "./ErrorAlert";
export default {
  components:{
    ErrorAlert
  },
  name: "ManageGoals",
  data(){
    return{
      inputIsInvalid: false
    }
  },
  methods:{
    setGoal(){
      if(this.$refs.enteredValue.value === ''){
        this.inputIsInvalid = true;
      }
    },
    closeErrorDialog(){
      this.inputIsInvalid = false;
    }
  }
}
</script>

<style scoped>

</style>