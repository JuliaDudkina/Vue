<template>
  <li>
    <h2>{{ name }} {{ isFriendFavorite === '1' ? '(My Favorite)': ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: [ 'name','phoneNumber','emailAddress', 'isFavorite'],
  data() {
    return {
      detailsAreVisible: false,
      isFriendFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      if (this.isFriendFavorite === '1'){
        this.isFriendFavorite = '0';
      }else{
        this.isFriendFavorite = '1';
      }
    }
  }
};
</script>