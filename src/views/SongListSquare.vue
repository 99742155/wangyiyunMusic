<!-- 歌单广场 -->
<template>
  <div class="songListSquare">
    <!-- 顶部 -->
    <div class="top">
      <router-link tag="div" class="left" to="/home">
        <svg
          t="1658145828304"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2223"
          width="16"
          height="16"
        >
          <path
            d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
            fill="#2c2c2c"
            p-id="2224"
          ></path>
        </svg>
        <h3>歌单广场</h3>
      </router-link>
    </div>
    <!-- 歌单列表 -->
    <div class="songListSquareContent">
      <van-tabs v-model="activeName">
        <van-tab title="推荐" name="a">推荐</van-tab>
        <van-tab title="官方" name="b">官方</van-tab>
        <van-tab title="精品" name="c">精品</van-tab>
        <van-tab title="滚石专区" name="d">滚石专区</van-tab>
        <van-tab title="华语" name="e">华语</van-tab>
        <van-tab title="共享歌单" name="f">共享歌单</van-tab>
        <van-tab title="民谣" name="g">民谣</van-tab>
        <van-tab title="电子" name="h">电子</van-tab>
        <van-tab title="轻音乐" name="i">轻音乐</van-tab>
        <van-tab title="摇滚" name="j">摇滚</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 《组件名称》 from '《组件路径》';
import { getPlaylistSquare, getPlaylistLabel } from "../api/songlistsquare";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      activeName: "a",
      playlistSquare: null,
      playlistLabel: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    /* 获取歌单广场方法 */
    getPlaylistSquareFun() {
      getPlaylistSquare().then((data) => {
        this.playlistSquare = data;
        console.log(this.playlistSquare);
      });
    },
    /* 获取 */
    getPlaylistLabelFun() {
      getPlaylistLabel().then((data) => {
        this.playlistLabel = data;
        console.log(this.playlistLabel);
      });
    },
  },
  //生命周期 - 创建完成(可以访问当前this实例)
  created() {
    this.getPlaylistSquareFun();
    this.getPlaylistLabelFun()
  },
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
.songListSquare {
  max-width: 750px;
  min-width: 375px;
  margin: 0 auto;
  padding: 13px;
  box-sizing: border-box;
  .top {
    .left {
      display: flex;
      svg {
        margin: auto 0;
      }
    }
    h3 {
      font-size: 15px;
      text-align: left;
      margin: 0 0 0 5px;
    }
  }
}
</style>