<template>
	<div class="page">
    <IntroContent />
    <TickerBox />
	</div>
</template>

<script>
import IntroContent from '../components/IntroContent.vue'
import TickerBox from  '../components/TickerBox.vue'
export default {
  components: {
    IntroContent,
    TickerBox
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>