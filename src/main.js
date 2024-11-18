import 'core-js/stable'
import 'regenerator-runtime/runtime'
 
import { createApp } from 'vue'
import App from './App.vue'

import AppIcon from '@/components/utility/AppIcon.vue'
import AppImage from '@/components/utility/AppImage.vue'

const app = createApp(App)

app.component(AppIcon.name, AppIcon)
app.component(AppImage.name, AppImage)

app.mount('#app')
