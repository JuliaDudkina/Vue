<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input v-model="enteredName" type="text" name="name" id="name">
    </div>
    <div>
      <label for="phone">Phone number</label>
      <input v-model="enteredPhone" type="tel" name="phone" id="phone">
    </div>
    <div>
      <label for="email">Email address</label>
      <input v-model="enteredEmail" type="email" name="email" id="email">
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits:['add-contact'],
  data(){
    return{
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    }
  },
  methods:{
    submitData(){
      this.$emit(
          'add-contact',
          this.enteredName,
          this.enteredPhone,
          this.enteredEmail,
      )
    }
  }
}
</script>

<style scoped>

</style>