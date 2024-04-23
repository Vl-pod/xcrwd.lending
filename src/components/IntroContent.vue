<template>
  <div class="information-container">
    <div class="keypoint-text">
        <h2 class="keypoint-header">Welcome to the new era in web3 bug-bounties:</h2>
        <p>for now our team is building:</p>
        <p>* Powerful bug tracking system as a core of xcrwd.io platform</p>
        <p>* Full-fledged community of experts in Web3 QA and development</p>
        <p>* Education portal for contributors</p>
        <div class="keypoint-buttons">
          <AnimatedButton
          class="join-button--intro"
          title="Join xcrwd"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
          target="_blank"
          type="button"
        />
        <AnimatedButton
          class="join-button--intro"
          title="Launch Demo"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
          target="_blank"
          type="button"
        />
        </div>
      </div>
      <div class="keypoint-logo">
        <img src="../assets/images/logo-intro.png" alt="" class="keypoint-logo--img" />
      </div>
  </div>



  <!-- <div class="intro-container">
    <div class="keypoint-container">
      <div class="keypoint-text">
        <h2 class="keypoint-header">The new era in web3 bug-bounties:</h2>
        <p>for now our team is building:</p>
        <p>* Powerful bug tracking system as a core of xcrwd.io platform</p>
        <p>* Full-fledged community of experts in Web3 QA and development</p>
        <p>* Education portal for contributors</p>
        <AnimatedButton
          class="join-button--intro"
          title="Join xcrwd"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
          target="_blank"
          type="button"
        />
      </div>
      <div class="keypoint-logo">
        <img src="../assets/images/logo-intro.png" alt="" class="keypoint-logo--img" />
      </div>
    </div>
  </div> -->

	<div class="what-about--container">
		<h2 class="what-about--header">What is xcrwd.io?</h2>
		<p>
			xcrwd.io is a beta and crowd testing platform that helps Web3 projects with enhanced product
			quality.
		</p>
		<p>
			Our platform designed to involve web3 users and QA-engineers to actively
			participate in the testing and release web3 products processes. The platform is actually a
			synergy of 3 main components: the bugtracker, expert web3 QA community and education portal.
			We aim to transform xcrwd.io into an expert and full-fledged testing community that not only
			benefits from testers feedback but also actively contributes to the advancement of web3
			technology.<br />
			Our platform underscores the principle that all valuable work should be compensated, and we
			are committed to ensuring that our dedicated testing community is properly rewarded for
			their contributions.
		</p>
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

.information-container {
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 100%;
  justify-content: space-between;
}

.keypoint-buttons {
  display: flex;
  gap: 3rem;
}

.intro-container {
  display: flex;
  flex-direction: column;
	width: 100%;	
}

.about-intro {
  font-size: 60px;
  text-align: center;
}

.keypoint-container {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  /* background-color: #111;
  box-shadow: 0px 0px 68px #000000; */
  box-shadow: 0 0 10px #0000001a;
  border-radius: 24px;
  font-size: 20px;
}

.keypoint-text {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 3rem;
}

.keypoint-header {
  font-size: 35px;
	text-align: start;
	line-height: 3rem;
}

.information-container p:nth-of-type(1),
.keypoint-container p:nth-of-type(1) {
  font-size: 15px;
  padding-bottom: 30px;
  margin: 0;
}

.information-container p:nth-last-child(-n + 4),
.keypoint-container p:nth-last-child(-n + 4) {
  margin-top: 20px;
}

.information-container p:last-of-type,
.keypoint-container p:last-of-type {
  margin-bottom: 20px;
}

.join-button--intro {
  position: relative;
  bottom: -20px;
}

.keypoint-logo--img {
  width: 420px;
  margin-right: 2rem;
	padding: 1rem;
  filter: grayscale(800%) contrast(10%) blur(200%);
  /* opacity: 5%; */
}

.what-about--container {
  margin-top: 3em;
  font-size: 25px;
  text-align: justify;
  line-height: 36px;
  display: flex;
  flex-direction: column;
}

.what-about--header {
  margin-bottom: 30px;
}

.what-about--container p:last-of-type {
  margin-top: 25px;
}

/* media */
@media screen and (width < 1267px) {
	.keypoint-logo {
		margin: auto;
	}
}

@media screen and (width < 1024px) {
	
	.intro-container {
    margin-left: 10px;
    margin-right: 10px;
    /* height: 210px; */
  }
	
	.about-intro {
		margin-top: 2rem;
	}

	.keypoint-container {
		flex-direction: column;
	}

	.keypoint-logo--img {
		display: none;
	}

	.about-intro {
    font-size: 24px;
	}

	.keypoint-header {
		font-size: 1rem;
		padding-top: 10px;
	}

	.keypoint-container p:nth-of-type(1) {
  	font-size: 8px;
  	padding-bottom: 1rem;
  	margin: 0;
	}

	p {
		font-size: 10px;
	}

	.keypoint-container p:nth-last-child(-n + 4) {
  	margin-top: 8px;
	}

	.join-button--intro {
		font-size: 50%;
	}

	.what-about--container {
		margin-top: 3	rem;
		line-height: 16px;
	}

	.what-about--header {
		font-size: 20px;
	}

	.what-about--container p:last-of-type {
 		margin-top: 10px;
	}
}
</style>
