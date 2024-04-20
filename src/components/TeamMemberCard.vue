<template>
  <div class="card-container" @click="toggleDescription">
		<div class="card-image--container">
      <img src='/public/images/danil_wbcg.png' :alt="member.name + ' фото'" class="member-photo" />
    </div>
    <div class="card-background"></div>
    <div class="card-footer" :class="{ 'expanded': isExpanded }">
      <div class="footer-text--container">
        <div class="member-card--info">
          <h4 class="member-name">{{ member.name }}</h4>
          <p class="member-role">{{ member.role }}</p>
        </div>
        <div class="footer-info--icon">
          <span class="material-symbols-outlined"> info </span>
        </div>
      </div>
				<p class="member-description--text" v-show="isExpanded">
					{{ member.description }}
				</p>
    </div>
  </div>
</template>

<script >
	export default {
  props: {
		// imageUrl: {
		// 	type: String,
		// 	required: true
		// },

    member: {
      type: Object,
      required: true
    },
		
  },
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleDescription() {
      if (!this.isExpanded) {
        // Если описание не отображается, то развернуть card-footer
        this.isExpanded = true;
        // Добавить обработчик клика для закрытия описания при клике вне card-container
        document.addEventListener('click', this.handleClickOutside);
      } else {
        // Иначе свернуть card-footer
        this.isExpanded = false;
        // Удалить обработчик клика вне card-container
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    handleClickOutside(event) {
      // Проверить, был ли клик вне card-container
      const cardContainer = this.$el;
      if (!cardContainer.contains(event.target)) {
        // Если был клик вне card-container, свернуть card-footer
        this.isExpanded = false;
        // Удалить обработчик клика вне card-container
        document.removeEventListener('click', this.handleClickOutside);
      }
    }
  }
}
</script>

<style scoped>
.card-container {
  margin-top: 10%;
	width: 280px;
  height: 200px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  box-shadow: 0px 0px 20px 0px rgba(238, 0, 255, 0);
  transition: box-shadow 0.3s ease;
	cursor: pointer;
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
  opacity: 80%;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  z-index: 2;

	padding: 0 5%;
	transition: height 0.5s ease, border-radius 0.5s ease;
  overflow: hidden;
}

.card-footer.expanded {
  height: 125%;
	border-radius: 24px;
}

.member-description--text {
	display: none;
	opacity: 0;
  transition: opacity 0.5s ease;
}

.card-footer.expanded .member-description--text {
  display: block;
  opacity: 10;
	margin-top: 5px;
	font-size: 12px;
}

.footer-text--container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.member-card--info {
  display: inline-block;
}

.member-name {
  font-size: 20px;
}

.member-role {
  font-size: 14px;
}

.material-symbols-outlined {
  font-size: 35px;
  font-weight: 100;
  cursor: pointer;
}

.card-container:hover .material-symbols-outlined {
  font-weight: 300;
}

.card-container:not(:hover) .card-footer:not(.expanded) .member-description--text {
  opacity: 0;
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
  background-size: 500% 300%; 
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
