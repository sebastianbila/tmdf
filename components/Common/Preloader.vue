<template>
  <div v-show="show" class="no-freeze-spinner">
    <div id="no-freeze-spinner">
      <div>
        <!-- Loding.... -->
        <!-- <img src="/img/common/preloader/bullseye.svg" alt="bullseye" /> -->
        <!-- <img src="/img/common/preloader/wework.svg" alt="wework" /> -->
        <div></div>
      </div>
    </div>
    <div class="text">
      <div v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show', 'text'],
  methods: {
    getText() {
      return this.$props.text
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

$dark: rgba(0, 0, 0, 0.8);

body {
  margin: 0;
  overflow: hidden;
}
body * {
  box-sizing: border-box;
}
img {
  width: 100%;
}
#no-freeze-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.1s linear;
  opacity: 0;
  height: 100vh;
  transform: scale(10);
  background: rgba(255, 255, 255, 1);
  z-index: 9999;
}
.no-freeze-spinner #no-freeze-spinner,
.no-freeze-spinner .text {
  z-index: 999;
  opacity: 1;
  transform: scale(1);
}
#no-freeze-spinner > div > div {
  animation-play-state: paused;
  border: 5px solid rgba(0, 0, 0, 1);
  border-radius: 50%;
  animation: rotate 1s infinite linear;
  border-left-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
}
#no-freeze-spinner > div,
.text > div {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 5px;
}
.no-freeze-spinner #no-freeze-spinner div div {
  animation-play-state: running;
}
@keyframes loadicons {
  0% {
    transform: scale(0) translate3d(0, 0, 0);
  }
  11% {
    transform: scale(1.2) translate3d(0, 0, 0);
  }
  22% {
    transform: scale(1) translate3d(0, 0, 0);
  }
  33% {
    transform: scale(0) translate3d(0, 0, 0);
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
.no-freeze-spinner #no-freeze-spinner img,
.no-freeze-spinner .text img {
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  color: #fff;
  width: 24px;
  height: 24px;
  line-height: 1;
  transform: scale(0) translate3d(0, 0, 0);
}
.no-freeze-spinner #no-freeze-spinner img:nth-of-type(1) {
  animation: loadicons 3s infinite ease-in-out;
}
.no-freeze-spinner #no-freeze-spinner img:nth-of-type(2) {
  animation: loadicons 3s 1s infinite ease-in-out;
}
.no-freeze-spinner .text div {
  color: white;
  font-size: 27px;
  padding-top: 100px;
  width: 600px;
  height: 100px;
  text-align: center;
}
</style>
