<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view
      @get-player-id="getPlayerId"
      @get-play-all-id="getPlayAllId"
      @get-mini-List="getMiniList"
    ></router-view>

    <!-- 播放器 -->
    <miniplayer
      v-show="playerId"
      :player-id="playerId"
      :list-id="listId"
      :mini-list="miniList"
      @get-player-id="getPlayerId"
    >
    </miniplayer>
    
  </div>
</template>

<script>
import miniplayer from "./components/basce/MiniPlayer.vue";
export default {
  props: [],
  //import引入的组件需要注入到对象中才能使用
  components: { miniplayer },
  data() {
    //这里存放数据
    return {
      playerId: "",
      listId: null,
      miniList: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getPlayerId(id) {
      console.log(id, "歌曲Id");
      console.log("获取歌曲中...");
      this.playerId = id;
    },
    getPlayAllId(id) {
      this.listId = id;
    },
    getMiniList(item) {
      this.miniList = item;
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

<style lang="scss">
/* 初始化样式 */
.van-sticky van-sticky--fixed {
  min-width: 375px;
  max-width: 750px;
  left: unset;
  right: unset;
}
html,
body {
  width: 100%;
  height: 100%;
}
ul,
ol {
  list-style: none;
}
h1 {
  font-weight: normal;
  font-size: 22px;
}
h2 {
  font-weight: normal;
  font-size: 20px;
}
h3 {
  font-weight: normal;
  font-size: 18px;
}
h4 {
  font-weight: normal;
  font-size: 16px;
}
h5 {
  font-weight: normal;
  font-size: 14px;
}
h6 {
  font-weight: normal;
  font-size: 12px;
}
#app {
  max-width: 750px;
  min-width: 375px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
