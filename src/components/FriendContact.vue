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
  // props: [ 'name','phoneNumber','emailAddress', 'isFavorite'],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      validator: function (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    },
    isFavorite: {
      type: String,
      required: false,
      default: '0',
      validator: function (value){
        return value === '1' || value === '0';
      }
    },
  },
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