<template>
	<div class="page">
    <IntroContent />
    <TickerBox />
    <BenefitsCards />
    <PlatformTeam />
	</div>
</template>

<script>
import IntroContent from '../components/IntroContent.vue'
import TickerBox from  '../components/TickerBox.vue'
import PlatformTeam from '@/components/PlatformTeam.vue'
import BenefitsCards from '@/components/BenefitsCards.vue'

export default {
  components: {
    IntroContent,
    TickerBox,
    BenefitsCards,
    PlatformTeam
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>