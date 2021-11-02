const app = Vue.createApp({
   data(){
       return{
           result: 0,
       }
   },
    watch:{
        showResult(value){
            that = this;
           setTimeout(function (){
               that.result = 0;
           }, 5000)
       }

    },
    computed:{ // has to return !!!!
       showResult(){
           if (this.result < 37){
               return this.result + " " +  'Not there yet';
           } else if(this.result === 37){
               return this.result;
           }else if (this.result > 37){
               return this.result + " " + 'Too much!';
           }
       }
    },
    methods:{
       add(num){
           this.result = this.result + num;
       }
    }
});
app.mount('#assignment');
