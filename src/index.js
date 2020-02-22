import Vue from "vue"
import Vuelidate from 'vuelidate'

import { store } from "./_store"
import { router } from "./_helpers"
import App from "./app/App"

//import custom styles
import styles from "./css/styles.css"
// import bootstrap files
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// import v-lazy-load
import { VLazyImagePlugin } from "v-lazy-image"
// import font-awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// import Pagination
import Paginate from "vuejs-paginate"
// import bootstrap vue dialog helper
import Dialog from "bootstrap-vue-dialog"

Vue.use(BootstrapVue)
Vue.use(VLazyImagePlugin)
Vue.use(Vuelidate)
Vue.use(Dialog, { "context": store })

// register components
Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.component("paginate", Paginate)

Vue.config.productionTip = false

new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    render: h => h(App)
})