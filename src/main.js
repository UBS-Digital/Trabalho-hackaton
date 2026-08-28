import './assets/main.css'
import 'v-calendar/style.css'

import { createApp } from 'vue'
import { setupCalendar, DatePicker } from 'v-calendar'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(setupCalendar, {})
app.component('VDatePicker', DatePicker)

app.mount('#app')