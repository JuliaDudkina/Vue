import { createApp } from 'vue';
import App from './App';

import BaseCard from './components/UI/BaseCard';
import ButtonElement from './components/UI/ButtonElement';
import DialogElement from './components/UI/DialogElement';

const app = createApp(App);
app.component('base-card',BaseCard);
app.component('button-element', ButtonElement);
app.component('dialog-element', DialogElement);

app.mount('#app');
