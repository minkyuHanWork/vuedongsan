import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import VueGeolocation from 'vue-geolocation-api'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify, VueGeolocation).mount('#app')
