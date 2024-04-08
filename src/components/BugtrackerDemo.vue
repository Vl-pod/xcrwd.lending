<template>
  <div class="demo-section">
    <h2 class="demo-header">Bugtracker Demo</h2>
    <div class="demo-container">
      <div class="demo-slider">
        <!-- to do slider with images -->
        <img src="../assets/images/demoPreviewL.png" class="demo-left" alt="demo image" />
        <img src="../assets/images/landingPreview.png" class="demo-preview" alt="demo image" />
        <img src="../assets/images/demoPreviewR.png" class="demo-right" alt="demo image" />
      </div>
      <div class="demo-footer">
        <p>
          The platform provide ability to create, manage, and grant testing products to beta-testers
          and a built-in bug-tracking system to report, track, and manage issues found during
          testing.
        </p>
        <AnimatedButton
          class="try-demo--btn"
          title="Try Demo"
          href="https://xcrwd.io/"
          target="_blank"
          type="button"
        />
      </div>
    </div>
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
.demo-section {
  margin-top: 3em;
  width: 100%;
}

.demo-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  background-color: #111;
  box-shadow: 0px 0px 68px #000000;
  border-radius: 24px;
}

.demo-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
}

.demo-preview {
  height: 450px;
	width: 60%;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 5px 8px 10px #3e3e3e;
  border-style: solid;
  border-width: 2px 2px 0px 2px;
  border-color: #a361fb;
  opacity: 90%;
}

.demo-left {
  height: 350px;
	width: 30%;
  border-radius: 12px 0px 0px 12px;
  border-style: solid;
  border-width: 2px 0px 2px 2px;
  border-color: #4f8afe;
  opacity: 90%;
}

.demo-right {
  height: 350px;
	width: 30%;
  border-radius: 0px 12px 12px 0px;
  border-style: solid;
  border-width: 2px 2px 2px 0px;
  border-color: #e232f8;
  opacity: 90%;
}

.demo-footer {
  background-color: #201d1d14;
  display: flex;
  align-items: center;
  font-size: 20px;
  border-radius: 16px;
  flex-direction: column;
  padding: 10px 80px 20px 80px;
}

.demo-footer p {
  padding: 20px 0;
}

/* media */
@media screen and (width < 1024px) {
	
	.demo-section {
		margin-top: 3rem;
	}

	.demo-container {
		margin-top: 1rem;
	}

	.demo-header {
		font-size: 20px;
	}

	.demo-left {
		display: none;
	}

	.demo-right {
		display: none;
	}

	.demo-preview {
		width: 90%;
	}

	.demo-footer p {
  	padding: 20px 0;
		font-size: 15px;
}
}
</style>
