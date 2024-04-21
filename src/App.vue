<template>
  <div class="page">
		<HeaderMain />
		<RouterView />
    <FooterMain /> 
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain.vue'
import FooterMain from './components/FooterMain.vue'

 export default {
  components: {
  	HeaderMain,
		FooterMain
	}
}
</script>

<style>

</style>
