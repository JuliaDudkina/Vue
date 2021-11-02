const app = Vue.createApp({
    data(){
        return{
            myName: 'Julia',
            namesArr: ['Julia','Kate', 'Alex'],
            myAge: 23,
            imageUrl: 'https://miro.medium.com/max/1024/0*AotcC6GhXMHgyjmz.png',
        }
    },
    methods:{
        displayName(){
            const num = Math.random();
            if(num < 0.5){
                return this.namesArr[0];
            }else if( num > 0.5 && num < 0.8){
                return this.namesArr[1];
            }else{
                return this.namesArr[2];
            }

        },
        displayRandomNum(){
            const num = Math.ceil(Math.random()*100);
            return num;
        }
    }
});
app.mount('#assignment');