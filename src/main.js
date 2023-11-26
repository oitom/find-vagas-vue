import { createApp } from 'vue'
import App from './App.vue'

import mitt from 'mitt'
const emitter = mitt();

const app = createApp(App)
app.config.globalProperties.emitter = emitter // add o mitt no app
app.mount("#app")

// createApp(App).mount('#app')