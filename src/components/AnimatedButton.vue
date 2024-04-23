<template>
  <a class="demo-button" :href="href" :target="target" :type="type">{{ title }} </a>
</template>

<script>
export default {
  props: {
    title: String,
    href: String,
    target: String,
    type: String
  }
}
</script>

<style scoped>
.demo-button {
  text-decoration: none;
  color: #000000;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  padding: 8px;
  z-index: 0;
  animation: glowing 20s linear infinite;
  background-size: 400%;
  transition: 0.7s ease;

  font-family: "Kode Mono", monospace;
  font-weight: 600;
}

.demo-button:before {
  content: '';
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
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.demo-button:active {
  color: #000000;
}

.demo-button:active:after {
  background-color: #000000;
}

.demo-button:hover:before {
  opacity: 1;
}

.demo-button:hover::after {
  background: transparent;
  transition: 0.4s;
}

.demo-button:hover {
  color: #ffffff;
  transition: 0.4s;
  transform: scale(1.3);
}

.demo-button:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffff;
  background-size: 400%;
  left: 0;
  top: 0;
  border-radius: 10px;
  filter: blur(3px);
  transition: opacity 0.3s ease-in-out;
  animation: glowing 20s linear infinite;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
