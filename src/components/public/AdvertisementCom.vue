<template>
  <div class="advertisement" v-if="showAdver">
    <img src="../../assets/img/adv.png" alt="" />
    <div class="times" @click="goHome">跳过广告{{ num }}s</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAdver: true,
      num: 5,
      clearNum: null,
    };
  },
  methods: {
    lockScroll() {
      document.body.style.overflow = "hidden";
    },
    unlockScroll() {
      document.body.style.overflow = "";
    },
    goHome() {
      this.showAdver = false;
      this.unlockScroll();
    },
  },
  mounted() {
    this.lockScroll();
    this.clearNum = setInterval(() => {
      this.num -= 1;
      if (this.num <= 0) {
        clearInterval(this.clearNum);
        this.unlockScroll();
        this.showAdver = false;
      }
    }, 1000);
  },
  beforeDestroy() {
    this.unlockScroll();
    clearInterval(this.clearNum);
  },
};
</script>

<style lang="scss" scoped>
.advertisement {
  width: 100%;
  max-width: 750px;
  min-width: 375px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  z-index: 999;
  img {
    width: 100%;
    height: 100vh;
    /* height: 41.6875rem; */
  }
  .times {
    width: 100px;
    height: 25px;
    font-size: 15px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 15px;
    right: 10px;
  }
}
[data-vue-app] body {
  overflow: hidden !important;
}

[data-vue-app].advertisement {
  display: none;
}
</style>