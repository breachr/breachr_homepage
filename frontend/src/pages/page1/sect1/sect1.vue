<template>
<div class="tabLeftRightSwipe bg-primary">

  <h2 class="withUnder centered">Unsere Leistungen</h2>
  <p class="lighted centered">Wir machen alles für Geld! Wirklich alles lol.. haha was geht</p>

  <div class="btnContainer row justify-center q-gutter-sm q-mt-md">

  <q-btn class="shadow-14 shadow-transition" label="Reperatur"  :class="{'active bg-secondary text-white no-shadow': activeTab === 1}" @click="switchTab(1)" />
  <q-btn class="shadow-14 shadow-transition" label="Inspektion" :class="{'active bg-secondary text-white no-shadow': activeTab === 2}" @click="switchTab(2)" />
  <q-btn class="shadow-14 shadow-transition" label="TÜV/AU"     :class="{'active bg-secondary text-white no-shadow': activeTab === 3}" @click="switchTab(3)" />
  <q-btn class="shadow-14 shadow-transition" label="Reifen"     :class="{'active bg-secondary text-white no-shadow': activeTab === 4}" @click="switchTab(4)" />

  </div>

  <div class="contentContainer centered">
    <transition :name="activeTransition" mode="out-in">

      <div class="deTabContent" v-if="activeTab ===1" key="daTab1">
        <p>Ich bin der Content</p>
      </div>

      <div class="deTabContent" v-if="activeTab ===2" key="daTab2">
        <p>Ich bin der Content</p>
      </div>

      <div class="deTabContent" v-if="activeTab ===3" key="daTab3">
        <p>Ich bin der Content</p>
      </div>

      <div class="deTabContent" v-if="activeTab ===4" key="daTab4">
        <p>Ich bin der Content</p>
      </div>

    </transition>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 1,
      activeTransition: 'fade'
    }
  },
  methods: {
    switchTab (target) {
      if (target < this.activeTab) {
        this.activeTransition = 'slideLeft'
      } else if (target > this.activeTab) {
        this.activeTransition = 'slideRight'
      }
      this.activeTab = target
    }
  }
}
</script>

<style lang="sass">
.tabLeftRightSwipe
  padding: 20px 15px 15px 15px
.contentContainer
  margin-top: 60px
  min-height: 40vh

// ANIMATIONS ----------------------------------------------
.slideLeft-enter
  opacity: 0
  transform: translateX(-100%)
.slideLeft-enter-active
  transition: opacity 1.2s, transform 0.6s
.slideLeft-leave
  // opacity: 1; not neccessary its the default anyway */
.slideLeft-leave-active
  transition: opacity 0.4s, transform 0.4s
  transform: translateX(100%)
  opacity: 0
.slideRight-enter
  opacity: 0
  transform: translateX(100%)
.slideRight-enter-active
  transition: opacity 1.2s, transform 0.6s
.slideRight-leave
  // opacity: 1; // not neccessary its the default anyway */
.slideRight-leave-active
  transition: opacity 0.4s, transform 0.4s
  transform: translateX(-100%)
  opacity: 0
</style>
