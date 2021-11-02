const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      enteredName: '',
      name: '',
      wholename: '',
      confirmedName: ''
    };
  },
  methods:{
    add(num){
      this.counter = this.counter + num;
    },
    reduce(num){
      this.counter = this.counter - num;
    },
    setName(event){
      this.name = event.target.value;
    },
    setNameSurname(event, surname){
      this.wholename = event.target.value + ' ' + surname;
    },
    confirmInput(){
      this.confirmedName = this.wholename;
    }
  }
});

app.mount('#events');
