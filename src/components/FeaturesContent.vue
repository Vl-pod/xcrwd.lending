<template>
  <h2 class="features-header">Platform products:</h2>


  <div class="platform-products-section">

    <h2 class="keypoint-header">xcrwd bugtracker</h2>
    <div class="xcrwd-app-container">
      <div class="keypoint-text">
        <p>our platform provide:</p>
        <p>* Powerful bug tracking system as a core of xcrwd.io platform</p>
        <p>* Full-fledged community of experts in Web3 QA and development</p>
        <p>* Education portal for contributors</p>
        <div class="keypoint-buttons">
          <AnimatedButton class="join-button--intro" title="Learn more"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
            target="_blank" type="button" />
          <AnimatedButton class="join-button--intro" title="Launch Demo" href="https://demo.xcrwd.io" target="_blank"
            type="button" />
        </div>
      </div>
      <div class="keypoint-logo">
        <img src="/public/images/products-preview/xcrwd-app.png" alt="" class="keypoint-logo--img" />
      </div>
    </div>


    <div class="xcrwd-app-container">
      <div class="keypoints-logo">
        <img src="/public/images/products-preview/submit-main.png" alt="" class="keypoint-logo--img" />
        <img src="/public/images/products-preview/submit-reports.png" alt="" class="keypoint-logo--img" />
      </div> 
      <div class="keypoint-text">
        <h2 class="keypoint-header">xcrwd sumbit</h2>
        <p>our platform provide:</p>
        <p>* Powerful bug tracking system as a core of xcrwd.io platform</p>
        <p>* Full-fledged community of experts in Web3 QA and development</p>
        <p>* Education portal for contributors</p>
        <div class="keypoint-buttons">
          <AnimatedButton class="join-button--intro" title="Learn more"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
            target="_blank" type="button" />
          <AnimatedButton class="join-button--intro" title="Launch App" href="https://submit.xcrwd.io" target="_blank"
            type="button" />
        </div>
      </div>
    </div>

  </div> 

  <div class="features-section">


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
import AnimatedButton from './AnimatedButton.vue'

export default {
  components: {
    AnimatedButton
  }
}

</script>




<style scoped>
.features-section {
  color: #cccccc;
}

.features-header {
  margin-top: 5rem;
  font-family: "Kode Mono", monospace;
  font-weight: 600;
}

.xcrwd-app-container {
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 100%;
  justify-content: space-between;
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

.keypoint-logo--img {
  width: 420px;
  margin-right: 2rem;
  padding: 1rem;
  filter: grayscale(800%) contrast(10%) blur(200%);
  /* opacity: 5%; */
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
