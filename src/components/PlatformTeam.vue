<template>
  <div class="team-section">
    <h2 class="team-header">Platform team</h2>
    <div class="team-container">
      <TeamMemberCard :member="teamMembers[0]"/>
      <TeamMemberCard :member="teamMembers[1]"/>
      <TeamMemberCard :member="teamMembers[2]"/>
      <TeamMemberCard :member="teamMembers[3]"/>
    </div>
  </div>
</template>

<script>
import TeamMemberCard from './TeamMemberCard.vue'

export default {
  components: {
    TeamMemberCard
  },
  data() {
    return {
      teamMembers: [
        {
          name: 'Danya',
          role: 'Founder',
          description:
            '7+ years as QA Engineer (fullstack); Worked in fields as UGC, social networks, e-commerce, O2O, telecom, foodtech, streaming and now Web3; strong experience in developing and optimizing teamwork processes, and setting up release management; experience of leadership in small QA and dev teams; mentoring and educating interns and new employees.',
					// imageUrl: '/assets/images/danya_wbcg.png'
        },
        {
          name: 'Anton',
          role: 'Fullstack developer',
          description: 'Anton, Fullstack developer: 8+ years as Android & iOS Software Engineer with experience in Backend & Web. 3+ years of experience in management of teams;',
          // imageUrl: '/public/images/anton_wbcg.png'
        },
        {
          name: 'Danil',
          role: 'Frontend developer',
          description: 'Danil, Frontend developer, (ex QA Engineer): 5 years as full-stack QA& AQA, 2 years in web3.',
          // imageUrl: '/public/images/danil_wbcg.png'
        },
        {
          name: 'Max',
          role: 'Smart contracts developer',
          description: 'Max, Smart contracts developer:3+ years as Blockchain engineer; Solidity, Rust, Node.js, Typescript, Substrate, Soroban; Develop production-ready DeFi products and backend infrastructure;',
          // imageUrl: '/public/images/max_wbcg.png'
        }
      ]
    }
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
