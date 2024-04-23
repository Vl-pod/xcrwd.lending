<template>
  <div class="footer-section">
    <div class="social-container">
      <div>
        <span class="rigths">All rights reserved 2024©</span>
      </div>
      
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
      <AnimatedButton
      class="join-button--footer"
      title="Join xcrwd"
      href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
      target="_blank"
      type="button"
    />
    </div>
    <!-- <AnimatedButton
      class="join-button--footer"
      title="Join xcrwd"
      href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
      target="_blank"
      type="button"
    /> -->
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

.social-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 10rem;
  width: 80vw;
  height: 80px;
  margin-top: 2rem;

  border-top: 1px dashed;
  border-image: linear-gradient(to right,    #ee00ff,
    #ff008c,
    #00fff7,
    #00a2ff,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ee00ff) 1 0 0 0;
}

.social-container span{
  font-size: 15px;
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
  font-size: 22px;
  margin: 3rem 0 3rem;
}

/* media */

@media screen and (width < 1024px) {
	.footer-section {
    padding: 1rem;
	}

  .social-container {
    gap: 1rem;
  }
  .social-container span {
    font-size: 12px;
  }
	
	.footer-header {
		font-size: 20px;
	}

	.join-button--footer {
		display: none;
	}
}
</style>
