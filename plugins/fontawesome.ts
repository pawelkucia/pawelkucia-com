import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faInstagram, 
  faFacebook,
  faNodeJs,
  faVuejs,
  faAws,
  faDocker,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons'
import { 
  faSun,
  faMoon
} from '@fortawesome/free-regular-svg-icons'
import {
  faDatabase,
  faCloud,
  faServer,
  faBars,
  faTimes,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faInstagram, 
  faFacebook,
  faSun,
  faMoon,
  faNodeJs,
  faVuejs,
  faAws,
  faDatabase,
  faCloud,
  faServer,
  faBars,
  faTimes,
  faDocker,
  faGitAlt,
  faPhone,
  faLocationDot
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})