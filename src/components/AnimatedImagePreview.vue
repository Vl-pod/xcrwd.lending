<template>
    <div class="hoverImageWrapper">
    <img class="hoverImage" alt="" src="/public/images/platform-image.png" />
    <!-- <img class="hoverImage" alt="" src="../assets/images/logo-intro.png" /> -->
</div>
</template>

<script>
window.onload = function() {
      const imageElement = document.querySelector('.hoverImage');
      if (imageElement) {
        const handleMouseMove = (e) => {
          let rect = imageElement.getBoundingClientRect();
          let x = e.clientX - rect.left;
          let y = e.clientY - rect.top;
  
          let dx = (x - rect.width / 2) / (rect.width / 2);
          let dy = (y - rect.height / 2) / (rect.height / 2);
  
          imageElement.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
        };

        const handleMouseLeave = () => {
          imageElement.style.transform = "";
        };

        imageElement.addEventListener('mousemove', handleMouseMove);
        imageElement.addEventListener('mouseleave', handleMouseLeave);
      }
    }
</script>

<style>

.hoverImageWrapper {
    width: 450px;
    margin-top: 1rem;
}

.hoverImage {
  position: relative;
  align-self: stretch;
  /* height: 450px; */
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 10px;
  max-width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(238, 0, 255, 0.5);
  background: linear-gradient(20deg, rgba(28, 194, 255, 0.292), rgba(212, 0, 255, 0.152));
}


/* .hoverImage:hover {
  box-shadow: 0px 0px 20px 0px rgba(238, 0, 255, 0.5);
} */

@media screen and (width < 1024px) { 
    .hoverImageWrapper {
        display: none;
    }
}


</style>