<template>
  <div class="card-container">
    <div class="card-image--container">
      <img src="../assets/images/danil_wbcg.png" alt="team member photo" class="member-photo" />
    </div>
    <div class="card-background"></div>
    <div class="card-footer">
      <div class="footer-text--container">
        <div class="member-card--info">
          <h4 class="member-name">Danya</h4>
          <p class="member-role">owner</p>
        </div>
        <div class="footer-info--icon">
          <span class="material-symbols-outlined"> info </span>
        </div>
      </div>
			<div class="member-description">
				<p class="member-description--text">
					7+ years as QA Engineer (fullstack); Worked in fields as UGC, social networks,
					e-commerce, O2O, telecom, foodtech, streaming and now Web3; strong experience in
					developing and optimizing teamwork processes, and set upping release management;
					experience of leaderships in small QA and dev teams; mentoring and educating interns and
					new employees.
				</p>
			</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card-container {
  margin-top: 5%;
	width: 280px;
  height: 200px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  box-shadow: 0px 0px 20px 0px rgba(238, 0, 255, 0);
  transition: box-shadow 0.3s ease;
}

.card-container:hover {
  box-shadow: 0px 0px 20px 0px rgba(238, 0, 255, 0.5);
}

.card-image--container {
  width: 80%;
  height: 100%;
  position: relative;
  align-self: center;
  z-index: 1;
}

.member-photo {
  width: 100%;
  height: 110%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  filter: grayscale(100%) contrast(120%);
}

.card-footer {
  width: 100%;
  height: 30%;
  border-radius: 0 0 24px 24px;
  background-color: #000000;
  opacity: 70%;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  z-index: 2;
}

.footer-text--container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.member-card--info {
  display: inline-block;
  margin-left: 10%;
}

.member-name {
  font-size: 20px;
}

.member-role {
  font-size: 14px;
}

.footer-info--icon {
  margin-right: 5%;
}

.material-symbols-outlined {
  font-size: 35px;
  font-weight: 100;
  cursor: pointer;
}

.card-container:hover .material-symbols-outlined {
  font-weight: 300;
}

.member-description--text {
	display: none;
}

.card-background {
  width: 100%;
  height: 100%;

  position: absolute;
  bottom: 0;

  border: 2px solid #494949;
  border-radius: 24px;
  background: linear-gradient(
    45deg,
    #ee00ff,
    #ff008c,
    #00fff7,
    #00a2ff,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ee00ff
  );

  animation: gradientMove 20s ease infinite;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  border: 2px solid #494949;
  background-size: 500% 300%; /* чтобы градиент был большим и плавно переходил */
  background-position: 0% 40%;

  filter: grayscale(70%);
  backdrop-filter: blur(10px);
  opacity: 1;
  z-index: -1;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
