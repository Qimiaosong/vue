import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import elementplus from 'element-plus'
import 'element-plus/dist/index.css'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(elementplus)
app.mount('#app')

