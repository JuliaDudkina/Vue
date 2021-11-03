<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input @input="validateName" v-model="enteredName" type="text" id="name">
    </div>
    <div>
      <label for="age">Age</label>
      <input @input="validateAge" v-model="enteredAge" id="age" type="tel">
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "UserData",
  data(){
    return{
      enteredName: '',
      enteredAge: '',
    }
  },
  methods:{
    submitData(){
      this.$emit(
          'submit-data',
          this.enteredName,
          this.enteredAge,
      );
      this.enteredName= '';
      this.enteredAge= '';
    },
    validateAge(){
      if(this.enteredAge > 100){
        alert('Don\'t lie')
        this.enteredAge = '';
      }
    },
    validateName(){
      const validInp =/[a-zA-Z]+/g;
      if(!validInp.test(this.enteredName)){
        this.enteredName= '';
        alert('Enter your name!')
      }
    }
  }
}
</script>

<style scoped>

</style>