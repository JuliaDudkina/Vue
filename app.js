const app = Vue.createApp({
    data(){
        return{
            enteredValue: '',
            blockVisible: true,
            bkgColor: ''
        }
    },
    computed:{
        pClasses(){
            return {
                user1: this.enteredValue === 'user1',
                user2: this.enteredValue === 'user2',
                visible: this.blockVisible,
                hidden: !this.blockVisible
            }
        }
    },
    methods:{
        hideBlock(){
            this.blockVisible = !this.blockVisible;
        }
    }

});
app.mount('#assignment')