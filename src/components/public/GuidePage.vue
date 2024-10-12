<!-- 引导页 -->
<template>
  <div class="guide">
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item style="background-color: rgb(175, 245, 243)"
        ><img src="../../assets/img/guide1.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/img/guide2.png" alt=""
      /></van-swipe-item>
      <van-swipe-item>
        <van-button @click="goHome">进入首页</van-button>
        <img src="../../assets/img/guide3.png" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goHome() {
      window.localStorage.setItem("guidePage", "true");
      this.$router.push("/home");
    },
  },
  //生命周期 - 创建完成(可以访问当前this实例)
  created() {},
  //生命周期 - 挂载完成(可以访问DOM元素)
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能,这个函数会触发
};
</script>
<style lang="scss" scoped>
.guide {
  max-width: 750px;
  min-width: 375px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  .my-swipe {
    height: 100vh;
    .van-swipe-item {
      height: 100vh;
      img {
        width: 100%;
        height: 100vh;
      }

      .van-button {
        position: absolute;
        top: 0;
        right: 0;
        border: 0;
        background-color: rgba(0, 0, 0, 0);
      }
    }
  }
}
</style>