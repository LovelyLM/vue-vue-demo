import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementUiIcons from "@element-plus/icons-vue";
import '@/styles/index.scss'

let app = createApp(App)
for (const name in ElementUiIcons) {
    app.component(name, ElementUiIcons[name]);
}
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount("#app")
