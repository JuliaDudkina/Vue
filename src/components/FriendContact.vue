<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.name }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "FriendContact",
  data(){
    return{
      detailsAreVisible: false,
      friend: {
        id: 'john',
        name: 'John Doe',
        phone: '53483764093',
        email: 'ramdom@email.com'
      },
    }
  },
  methods:{
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}
</script>

<style scoped>

</style>