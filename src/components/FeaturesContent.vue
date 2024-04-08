<template>
  <div class="features-section">
    <h2 class="features-header">Platform key features:</h2>
    <div class="keypoints-container">
      <div class="keypoint">
        <p class="keypoint-header">Bugtracker</p>
        <p class="keypoint-text">Built-in bug-tracking system</p>
      </div>
      <div class="keypoint">
        <p class="keypoint-header">Community</p>
        <p class="keypoint-text">Strong expert community</p>
      </div>
      <div class="keypoint">
        <p class="keypoint-header">Education</p>
        <p class="keypoint-text">Education portal for skills growthing</p>
      </div>
    </div>

    <div class="feautures-text--container">
      <h2 class="feautures-text--header">Benefits to web3 projects:</h2>
      <p>
        * Motivated beta testers community would help with increasing web3 products quality and
        stability;
        <br />
        * Internal projects teams would get useful and detailed feedback from beta-testers and
        experts about product issues - structured reports with steps, screenshots/casts, logs and
        other usefull additional information;
        <br />
        * Stable releases with minimum issues and boost for delivering complex features to users -
        by beta and crowd testing flow for releases;
        <br />
        * Crowd testing around the world: user-stories testing, corner cases testing, A/B testing,
        special tasks for beta testers to check necessary for project cases at time, testing on a
        plenty number of devices, conditions, regions and environments, collecting feedback about
        features and other cases from community of beta testers, etc…;
        <br />
        * Internal QA teams would be more focused on autotests, business features testing, products
        stability and growth;
        <br />
        * Potential hiring for QA (Dev, etc.) engineers from platform in future;
        <br />
        * And so much more.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.features-section {
  color: #cccccc;
}

.features-header {
  margin-top: 5rem;
}

.keypoints-container {
  margin-top: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 68px #000000;
  border-radius: 24px;
  width: 100%;
}

.keypoint {
  padding: 3rem;
  display: flex;
	flex-direction: column;
  align-items: center;
	text-align: center;
}

.keypoint-header {
  font-size: 32px;
  justify-content: center;
  display: flex;
}

.keypoint-text {
  font-size: 20px;
}

.feautures-text--container {
  margin-top: 3em;
  font-size: 25px;
  text-align: justify;
  line-height: 36px;
  display: flex;
  flex-direction: column;
}

.feautures-text--header {

  margin-bottom: 30px;
}

/* media */

@media screen and (width < 1024px) {
	.features-header {
		font-size: 20px;
		margin-top: 3rem;
	}

	.keypoint-header {
		font-size: 20px;
	}

	.keypoint-text {
		font-size: 10px;
	}

	.keypoints-container {
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.feautures-text--container {
		margin-top: 3rem;
	}

	.feautures-text--header {
		font-size: 20px;
	}

	.feautures-text--container p {
		font-size: 10px;
		line-height: 16px;
	}
}
</style>
