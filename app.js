const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: '',
    };
  },
  watch:{ // for http requests
    // Whenever name changes we call this methods - watcher
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + " " + value;
    //   }
    // }
    counter(value){
      if (value > 50){
        this.counter = 0;
      }
    }
  },
  // We use computed to display info, better for perforamnce
  computed:{ // works only if this.name changes
    fullname(){
        if(this.name === '' || this.lastName === ''){
          return '';
        }
        return this.name + " " + this.lastName;
    } // like data property not method
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    }
  }
});

app.mount('#events');
