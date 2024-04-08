<template>
  <div class="footer-section">
    <h2 class="footer-header">Contacts:</h2>
    <div class="social-container">
      <ul class="social-list">
        <li class="social-item tg">
          <a href="https://t.me/xxai_xo" target="_blank" class="social-anchor">
            <img src="../assets/images/icons/tg.png" alt="telegram image" class="social-img" />
          </a>
        </li>
        <li class="social-item tw">
          <a href="https://twitter.com/0xdanya_xo" target="_blank" class="social-anchor">
            <img src="../assets/images/icons/xtw.png" alt="twitter image" class="social-img" />
          </a>
        </li>
        <li class="social-item ln">
          <a href="https://www.linkedin.com/in/xxai/" target="_blank" class="social-anchor">
            <img src="../assets/images/icons/lnkdn.png" alt="linkedin image" class="social-img" />
          </a>
        </li>
        <li class="social-item inst">
          <a href="https://www.instagram.com/xxai.xo/" target="_blank" class="social-anchor">
            <img
              src="../assets/images/icons/instgrm.png"
              alt="instagram image"
              class="social-img"
            />
          </a>
        </li>
      </ul>
    </div>
    <AnimatedButton
      class="join-button--footer"
      title="Join xcrwd"
      href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
      target="_blank"
      type="button"
    />
  </div>
</template>

<script>
import AnimatedButton from './AnimatedButton.vue'

export default {
  components: {
    AnimatedButton
  }
}
</script>

<style scoped>
.footer-section {
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-container {
  margin-top: 3rem;
}

.social-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-item {
  width: 30px;
}

.social-img {
  width: 100%;
}

.join-button--footer {
  font-size: 26px;
  margin: 3rem 0 3rem;
}

/* media */

@media screen and (width < 1024px) {
	.footer-section {
		margin-top: 3rem;
	}
	
	.footer-header {
		font-size: 20px;
	}

	.join-button--footer {
		font-size: 16px;
	}
}
</style>
