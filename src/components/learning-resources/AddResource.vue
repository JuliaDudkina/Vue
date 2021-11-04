<template>
  <dialog-element
    v-if='inputIsInvalid'
    title='Invalid Input'
    @close='confirmError'
  >
    <template #default>
      <p>Check your inputs. Something is wrong!</p>
    </template>
    <template #actions>
      <button-element @click='confirmError'>Okay</button-element>
    </template>
  </dialog-element>
  <base-card>
    <form @submit.prevent='submitData'>
      <div class='form-control'>
        <label for='title'>Title</label>
        <input ref='enteredTitle' id='title' name='title' type='text'>
      </div>
      <div class='form-control'>
        <label for='description'>Description</label>
        <textarea ref='enteredDesc' id='description' name='description' rows='3'></textarea>
      </div>
      <div class='form-control'>
        <label for='link'>Link</label>
        <input ref='enteredLink' id='link' name='link' type='url'>
      </div>
      <div>
        <button-element type='sumbit'>Add Resource</button-element>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard';
import ButtonElement from '../UI/ButtonElement';
import DialogElement from '../UI/DialogElement';
export default {
  name: 'AddResource',
  components: { DialogElement, ButtonElement, BaseCard },
  inject: [ 'addResource'],
  data(){
    return{
      inputIsInvalid: false,
    }
  },
  methods:{
    submitData(){
      const enteredTitle = this.$refs.enteredTitle.value;
      const enteredDesc = this.$refs.enteredDesc.value;
      const enteredLink = this.$refs.enteredLink.value;
      // this.$emit(
      //   'input-data',
      //   enteredTitle,
      //   enteredDesc,
      //   enteredLink
      // ) // can't be used with a dynamic component in THeResources

      if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === '' ){ // removes spaces
        this.inputIsInvalid = true;
        return; // stops function, the next line is not executed
      }
      this.addResource(enteredTitle,enteredDesc,enteredLink);
    },
    confirmError(){
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>