const app = Vue.createApp({
    data(){
        return{
            message: "Button Clicked",
            output: '',
            output2: '',
        }
    },
    methods:{
        alertMessage(){
            alert(this.message)
        },
        keyDownEvent(event){
            this.output = event.target.value;
        },
        keyupEvent(event){
            this.output2 = event.target.value;
        }
    }
})
app.mount('#assignment');