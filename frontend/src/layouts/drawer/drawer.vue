<template>
<q-drawer overlay class="myDrawer bg-grey-7 overflow-hidden text-white" side="left" v-model="showDrawer">

    <!-- HAMBURGER -->
    <div class="burgerBg bg-primary q-pt-xs">
      <q-btn class="mobBtn" flat dense @click="toggleDaDrawer">
        <button class="hamburger hamburger--arrowturn" :class="{'is-active': showDrawer}" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </q-btn>
    </div>

    <div class="drawerHeader" @click="goHome">
      <transition name="fade" leave-active-class="driveOutRight" mode="out-in" >
        <img v-if="showDrawer" class="vivify daLogo delay-200" src="../../statics/img/breachr_logo.png" alt="">
      </transition>
      <transition name="custom" enter-active-class="popInRight" leave-active-class="popOutRight" mode="out-in" >
        <img v-if="!showDrawer" class="vivify daLogo_vert" src="../../statics/img/breachr_logo_vertical.png" alt="">
      </transition>
    </div>

    <q-list grey no-border separator>

      <!-- Routes -->
      <router-link to="/" v-scroll-to="{ el: '#homy', onStart: closeDrawer,}">
        <q-item clickable v-ripple :active="currentSite=='/'" active-class="activeDrawer">
          <q-item-section>Home</q-item-section>
          <q-item-section avatar><q-icon name="class" /></q-item-section>
        </q-item>
      </router-link>

      <router-link to="/about" v-scroll-to="{ el: '#homy', onStart: closeDrawer,}">
        <q-item clickable v-ripple :active="currentSite=='/about'" active-class="activeDrawer">
          <q-item-section >Home</q-item-section>
          <q-item-section avatar><q-icon name="class" /></q-item-section>
        </q-item>
      </router-link>

      <!-- Route + automatic scroll to -->
      <router-link to="/work" v-scroll-to="{ el: '#homy', onStart: closeDrawer,}">
        <q-item clickable v-ripple :active="currentSite=='/work'" active-class="activeDrawer">
          <q-item-section>Banane</q-item-section>
          <q-item-section avatar><q-icon name="class" /></q-item-section>
        </q-item>
      </router-link>

      <!-- Route + automatic scroll to -->
      <router-link to="/contact" v-scroll-to="{ el: '#homy', onStart: closeDrawer,}">
        <q-item clickable v-ripple :active="currentSite=='/contact'" active-class="activeDrawer">
          <q-item-section>Banane</q-item-section>
          <q-item-section avatar><q-icon name="class" /></q-item-section>
        </q-item>
      </router-link>

    </q-list>

    <!-- Drawer Footer -->
    <div class="draworFooter">
      <div class="times q-list-header">
        <transition name="custom" enter-active-class="popInTop">
          <div v-if="showDrawer" class="vivify delay-200">
            <q-btn class="draworBtn" icon="phone" label="+49 5222 9661392" />
          </div>
        </transition>
      </div>

      <div class="drawerSocialLinks row">
        <transition name="custom" enter-active-class="popInLeft">
          <div v-if="showDrawer" class="vivify delay-400">
            <a href="https://www.facebook.com/ma.cy.90">
              <q-icon class="fbLink" name="ion-logo-facebook" />
            </a>
          </div>
        </transition>
        <transition name="custom" enter-active-class="popInBottom">
          <div v-if="showDrawer" class="vivify delay-400">
            <a href="https://github.com/mymacy">
              <q-icon class="xiLink" name="ion-logo-github" />
            </a>
          </div>
        </transition>
        <transition name="custom" enter-active-class="popInRight">
          <div v-if="showDrawer" class="vivify delay-400">
            <a href="https://www.instagram.com/marcelalbrink/">
              <q-icon class="inLink" name="ion-logo-instagram" />
            </a>
          </div>
        </transition>
      </div>
    </div>

</q-drawer>
</template>

<script>
import {
  openURL
} from 'quasar' // for tel links etc.

var VueScrollTo = require('vue-scrollto') // directives dont work here

export default {
  methods: {
    openURL,
    toggleDaDrawer () {
      this.$store.state.showDrawer = !this.$store.state.showDrawer
    },
    goHome () {
      location.reload()
    },
    closeDrawer () {
      this.$store.state.showDrawer = false
    },
    scrollTo (target) {
      this.closeDrawer()
      setTimeout(() => { VueScrollTo.scrollTo(target) }, 500)
    }
  },
  computed: { // basic states
    selectedTab () {
      return this.$store.state.daWaypoint
    },
    currentSite () {
      return this.$route.path
    },
    showDrawer: { // FOR V-MODELS
      get () {
        // return true
        return this.$store.state.showDrawer
      },
      set (value) {
        this.$store.commit('setDrawerState', value)
      }
    }
  }
}
</script>

<style lang="sass">
.q-drawer
  visibility: unset !important
  width: 250px !important
  padding-left: 0px
  transition: translate 0.5s ease-in
.q-drawer.q-layout--prevent-focus
  transform: translatex(-220px) !important
.q-drawer__opener // Slide Opener
  z-index: 3001
  height: 50vh
  width: 30px
  top: 500px

.daLogo
  width: 240px
  position: absolute
  top: 40px
  left: 4px
.daLogo_vert
  position: absolute
  left: 220px
  width: 30px
.myDrawer .q-item // padding right of the icons
  padding-right: 4px

.activeDrawer
  background-color: $secondary
.drawerHeader
  background-color: $primary
  position: relative
  height: 150px
.drawerHeader h2
  font-size: 22px
  position: absolute
  bottom: 0px
  left: 15px
  color: white

.q-drawer__content
  background-color: #888
  overflow: hidden

/* Footer ------------------------------------------------- */
.draworFooter
  position: absolute
  bottom: 10px
/* Times / Phone ------------------------------------------*/
.times
  position: unset
  bottom: 45px
  margin-top: 20vh
  margin-left: 30px
.draworBtn
  margin-top: 20px
  background-color: $secondary

/* SocialLinks ---------------------------------------------*/
.drawerSocialLinks
  margin-top: 5px
  margin-left: 70px
  margin-right: auto
  font-size: 25px
.fbLink
  transition: color 0.3s linear
  margin-right: 10px
.fbLink:hover
  color: #3D68AE
.xiLink
  transition: color 0.3s linear
.xiLink:hover
  color: #282D31
.inLink
  transition: color 0.3s linear
  margin-left: 10px
.inLink:hover
  color: #DC3076

/* Hamburger ---------------------------------------------*/
.mobBtn
  position: relative
  left: 218px
.hamburger
  z-index: 3001
  padding: 0px
  display: inline-block
  cursor: pointer
  transition-property: opacity, filter
  transition-duration: 0.15s
  transition-timing-function: linear
  font: inherit
  color: inherit
  text-transform: none
  background-color: transparent
  border: 0
  margin: 0
  overflow: visible
.hamburger:hover
  opacity: 0.7
.hamburger-box
  /* CHANGE THIS */
  width: 25px
  height: 27px
  display: inline-block
  position: relative
.hamburger-inner
  display: block
  top: 50%
  margin-top: -2px
  background-color: $secondary
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after
  /* AND THIS */
  width: 25px
  height: 3px
  /* BACKGROUND */
  background-color: $secondary
  position: absolute
  /* z-index: 3000 */
  border-radius: 5px
  transition-property: transform
  transition-duration: 0.25s
  transition-timing-function: ease
.hamburger-inner::before,
.hamburger-inner::after
  content: ""
  display: block
.hamburger-inner::before
  /* position: relative */
  top: -10px
.hamburger-inner::after
  /* position: relative */
  bottom: -10px
// hamburger--arrowturn- -----------------------------------
.hamburger--arrowturn.is-active .hamburger-inner
  transform: rotate(-180deg)
.hamburger--arrowturn.is-active .hamburger-inner::before
  transform: translate3d(6px, 5px, 0) rotate(45deg) scale(0.6, 1)
.hamburger--arrowturn.is-active .hamburger-inner::after
  transform: translate3d(6px, -5px, 0) rotate(-45deg) scale(0.6, 1)
</style>
