<template>
  <div class="page">
		<HeaderMain />
    <IntroContent />
    <FeaturesContent />
    <BugtrackerDemo />
  </div>
  <TickerBox />
  <div class="page">
    <PlatformTeam />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain.vue'
import IntroContent from './components/IntroContent.vue'
import FeaturesContent from './components/FeaturesContent.vue'
import BugtrackerDemo from './components/BugtrackerDemo.vue'
import PlatformTeam from './components/PlatformTeam.vue'
import FooterMain from './components/FooterMain.vue'
import TickerBox from './components/TickerBox.vue'

export default {
  components: {
    HeaderMain,
    IntroContent,
    FeaturesContent,
    BugtrackerDemo,
    PlatformTeam,
    FooterMain,
    TickerBox
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>
