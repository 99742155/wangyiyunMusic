<template>
  <div class="advertisement">
    <img src="../../assets/img/adv.png" alt="" />
    <div class="times" @click="goHome">跳过广告{{ num }}s</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3,
      clearNum: null,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/home");
    },
  },
  mounted() {
    this.clearNum = setInterval(() => {
      this.num -= 1;
      if (this.num <= 0) {
        clearInterval(this.clearNum);
        this.$router.push("/home");
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.clearNum);
  },
};
</script>

<style lang="scss" scoped>
.advertisement {
  max-width: 750px;
  min-width: 375px;
  margin: 0 auto;
  position: relative;
  img {
    width: 100%;
    height: 100vh;
    /* height: 41.6875rem; */
  }
  .times {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>