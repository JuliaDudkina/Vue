const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '<h2>Start the course</h2>', // property
            courseGoalB: 'Finish the course', // are merged to global this obj
            vueLink: 'https://vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');