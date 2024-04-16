<template>
  <div class="team-section">
		<h2 class="team-header">Platform team</h2>
    <div class="team-container">
			<TeamMemberCard/>
			<TeamMemberCard/>
			<TeamMemberCard/>
			<TeamMemberCard/>
			
      <!-- <div class="team-member--card">
        <img src="../assets/images/danya_wbcg.png" alt="" class="member-photo dan" />
        <div class="member-card--background background-1"></div>
        <div class="member-card--info">
          <h4>Danya</h4>
          <p>owner</p>
        </div>
      </div>
      <div class="team-member--card">
        <img src="../assets/images/anton_wbcgl.png" alt="" class="member-photo" />
        <div class="member-card--background background-2"></div>
        <div class="member-card--info">
          <h4>Anton</h4>
          <p>Fullstack developer</p>
        </div>
      </div>
      <div class="team-member--card">
        <img src="../assets/images/danil_wbcg.png" alt="" class="member-photo" />
        <div class="member-card--background background-3"></div>
        <div class="member-card--info">
          <h4>Danil</h4>
          <p>Frontend developer</p>
        </div>
      </div>
      <div class="team-member--card">
        <img src="../assets/images/max_wbcgl.png" alt="" class="member-photo" />
        <div class="member-card--background background-4"></div>
        <div class="member-card--info">
          <h4>Max</h4>
          <p>Smart contracts developer</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
	import TeamMemberCard from './TeamMemberCard.vue';

	export default {
		components: {
			TeamMemberCard
		}
	}
</script>

<style scoped>
.team-section {
  margin-top: 3em;
  width: 100%;
}

.team-container {
  /* margin-top: 3em; */
  display: flex;
  align-items: center;
  justify-content: space-around;
	gap: 5px;
  box-shadow: 0px 0px 68px #000000;
  border-radius: 24px;
  /* height: 350px;  */
  width: 100%;
  padding: 20px;
}

.team-member--card {
  width: 200px;
  position: relative;
  margin-bottom: 30px;
}

.member-photo {
  width: 100%;
  filter: grayscale(100%) contrast(120%);
  /* border-radius: 24px; */
}

.dan {
  height: 256px;
}

.member-card--info {
  position: absolute;
  background-color: #000000;
  width: 18rem;
  height: 70px;
  left: -25px;
  bottom: 0px;
  opacity: 70%;
  border-radius: 0 0 24px 24px;

  display: flex;
  flex-direction: column;
  padding: 10px;
}

h4 {
  font-size: 20px;
}

.member-card--background {
  width: 18rem;
  height: 180px;
  padding: 20px 10px 20px 10px;
  box-shadow: 0px 0px 68px #000000;
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
  position: absolute;
  bottom: 0px;
  left: -25px;
  z-index: -2;
  filter: grayscale(70%);

  animation: glowing 20s linear infinite;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  border: 2px solid #494949;
  background-size: 500% 300%; /* чтобы градиент был большим и плавно переходил */
  background-position: 0% 40%;
}

.background-1 {
  animation: gradientMove1 30s linear infinite;
}

.background-2 {
  animation: gradientMove2 30s linear infinite;
}

.background-3 {
  animation: gradientMove3 30s linear infinite;
}

.background-4 {
  animation: gradientMove4 30s linear infinite;
}

@keyframes gradientMove1 {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@keyframes gradientMove2 {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 50% 100%;
  }
}

@keyframes gradientMove3 {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 50% 0%;
  }
}

@keyframes gradientMove4 {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 0%;
  }
}

@media screen and (width < 1024px) {
	.team-header {
		font-size: 20px;
	}

	.team-container {
		flex-wrap: wrap;
		justify-content: space-evenly;

		font-size: 10px;
	}
}
</style>
