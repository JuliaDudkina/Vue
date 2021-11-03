import { createApp } from 'vue'
import App from './App.vue';
import UserData from "./components/UserData";
import ActiveUser from "./components/ActiveUser";

const app = createApp(App);
app.component('user-data',UserData);
app.component('active-user', ActiveUser);

app.mount('#app');
