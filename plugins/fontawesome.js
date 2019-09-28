import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faFileAlt, faMapMarkerAlt, faUser, faChair } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faClock, faFileAlt, faMapMarkerAlt, faUser, faChair])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

