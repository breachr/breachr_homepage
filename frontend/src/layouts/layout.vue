<template>
<q-layout view="lHr Lpr fff">
  <div id="homy" v-waypoint="{active: true, callback: onWaypoint}"></div>

  <!-- PRELOADER -->
  <!-- <preloader></preloader> -->

  <!-- HEADER -->
  <drawor></drawor>

  <!--  PAGES -->
  <q-page-container class="containr">
    <transition appear enter-active-class="animated slow fadeInTop" leave-active-class="animated slow fadeOutBottom" mode="out-in">
      <router-view />
    </transition>
  </q-page-container>

  <!-- FOOTER -->
  <footor></footor>

  <!-- BACK TO TOP -->
  <q-page-scroller round position="bottom-right" :scroll-offset="150" :duration="400" :offset="[18, 18]">
    <q-btn fab icon="keyboard_arrow_up" color="primary" />
  </q-page-scroller>

</q-layout>
</template>

<script>
// import preloader from './preloader/preloader'
import drawor from './drawer/drawer'
// drawer is inside header!
import footor from './footer/footer'

export default {
  components: {
    // preloader,
    drawor,
    footor
  },
  methods: {
    onWaypoint ({
      going,
      direction,
      el
    }) {
      if (going === 'in') {
        console.log(el.id)
        this.$store.state.daWaypoint = el.id
      }
      if (el.id === 'homy') {
        if (going === 'out') {
          this.$store.state.homyOut = true
        } else {
          this.$store.state.homyOut = false
        }
      }
    }
  }
}
</script>

<style lang="sass">

// /* LAYOUT ------------------------------------------------*/
.q-layout
  overflow: hidden
  max-width: 1920px
  margin-left: auto
  margin-right: auto
.containr
  // margin-left: 20

// /* BACK TO TOP -------------------------------------------*/
.goHomeBtn
  z-index: 10
  margin: 0 15px 15px 0

</style>
