<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <img src="../assets/images/demologo1.png" alt="xcrwd logo" />
      </div>
			<nav class="nav-center">
				<ul class="nav-list ">
          <li class="nav-item">
						<RouterLink to="/" class="nav-link">About</RouterLink>
					</li>
          <li class="nav-item">
						<RouterLink to="/platform" class="nav-link">Platform</RouterLink>
					</li>
          <li class="nav-item">
						<RouterLink to="/community" class="nav-link">Community</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink to="/team" class="nav-link">Team</RouterLink>
					</li>
        </ul>
			</nav>
      <nav class="nav-right">	
        <ul class="nav-list ">
          <li class="nav-item">Chat</li>
          <li class="nav-item">News</li>
          <!-- <li class="nav-item">Demo</li> -->
          <li class="nav-item">
            <AnimatedButton
              title="Launch Demo"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe_wXZwonmQvWU2wdsJh_9BRGYFZSPyq6vuqfRg3btATF-pJQ/viewform"
              target="_blank"
              type="button"
              class="nav-item"
            />
          </li>
        </ul>
      </nav>
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

.header {
  color: white;
  /* background-color: rgb(22 22 22 / 45%); */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  padding: 20px;
  font-family: "Kode Mono", monospace;
  font-weight: 600;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 120px;
}

.nav {
  display: flex;
  font-size: 1.3em;
}

.nav-link,
.nav-link a {
  text-decoration: none;
  color: rgb(0, 0, 0); 
}

.nav-center {
  margin-left: 10%;
}


ul {
  display: flex;
  gap: 15px;
}

.nav-item {
  text-decoration: none;
  border-radius: 0.8rem;
	font-size: 1.2rem;
  padding: 10px;
  color: #000000;
  transition: 0.7s ease;
  cursor: pointer;
}

.nav-item:hover {
  transition: 0.4s;
  transform: scale(1.3);
}

/* media queries */

@media screen and (max-width: 1024px) {
  
	/* .header-container {
  } */

  .nav-item {
    font-size: 8px;
    padding: 5px;
  }

  .logo img {
    width: 60px;
    margin: 0;
    padding-top: 3px;
  }

  nav ul {
    gap: 0px;
  }
}
</style>
