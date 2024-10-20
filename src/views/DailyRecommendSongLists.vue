<!-- 每日推荐 -->
<template>
  <div class="dailyRecommendSongList" v-if="dailyRecommendSongList">
    <div class="tapNav">
      <router-link tag="div" to="/home" class="title">
        <!-- 返回 -->
        <span class="iconfont"
          ><svg
            t="1657242104414"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3312"
            width="18"
            height="18"
          >
            <path
              d="M643.84 164.885333a22.122667 22.122667 0 0 0-0.362667-30.72 20.522667 20.522667 0 0 0-29.674666 0.362667L256 512.810667l357.802667 378.304c8.042667 8.533333 21.290667 8.746667 29.674666 0.341333 8.32-8.32 8.533333-22.016 0.384-30.72L316.330667 512.832l327.530666-347.946667z"
              fill="#8a8a8a"
              p-id="3313"
            ></path>
          </svg>
        </span>
        歌单
      </router-link>
      <div class="icons" @click="toSearch">
        <span class="iconfont">
          <svg
            t="1657247275652"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="22648"
            width="18"
            height="18"
          >
            <path
              d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"
              p-id="22649"
              fill="#515151"
            ></path>
          </svg>
        </span>
        <span class="iconfont">
          <svg
            t="1657247321752"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="23769"
            width="18"
            height="18"
          >
            <path
              d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
              p-id="23770"
              fill="#515151"
            ></path>
          </svg>
        </span>
      </div>
    </div>
    <div class="infos">
      <div
        class="bg"
        :style="{
          'background-image':
            'url(https://s2.music.126.net/style/web2/img/recmd_daily.jpg?34d75a94bf3fd4fa68897df4c34f0bcd)',
        }"
      ></div>
    </div>

    <van-sticky :offset-top="40">
      <div class="playerAll">
        <div class="btn">
          <span class="iconfont">
            <svg
              t="1657242278127"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4474"
              width="16"
              height="16"
            >
              <path
                d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                fill="#ffffff"
                p-id="4475"
              ></path>
            </svg>
          </span>
        </div>
        <h3 @click="playAll">播放全部</h3>
        <p>({{ dailyRecommendSongList.length }})</p>
      </div>
    </van-sticky>

    <van-loading v-if="!dailyRecommendSongList"/>
    <ul class="listsData" v-if="dailyRecommendSongList">
      <li
        v-for="(item, index) in dailyRecommendSongList"
        :key="item.id"
        @click="setId(item.id)"
      >
        <i>{{ index + 1 }}</i>
        <div class="title">
          <h2>
            {{ item.name }}
          </h2>
          <p>{{ item.ar[0].name }}</p>
        </div>
        <div class="icons" v-show="false">
          <span class="iconfont">
            <svg
              t="1657247613469"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="24020"
              width="18"
              height="18"
            >
              <path
                d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                p-id="24021"
                fill="#515151"
              ></path>
            </svg>
          </span>
        </div>
      </li>
    </ul>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 《组件名称》 from '《组件路径》';
import Vue from 'vue';
import bottomnav from "../components/basce/BottomNav.vue";
import { getdailyRecommendSongList } from "../api/dailyrecommendsonglist";
import { Loading } from 'vant';
Vue.use(Loading)
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { bottomnav },
  data() {
    //这里存放数据
    return {
      dailyRecommendSongList: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    /* 获取推荐歌单方法 */
    getdailyRecommendSongListFun() {
      getdailyRecommendSongList().then((data) => {
        console.log(data);
        this.dailyRecommendSongList = data.data.dailySongs;
        console.log(this.dailyRecommendSongList);
      });
    },
    /* 获取ID方法 */
    setId(id) {
      this.$emit("get-player-id", id);
      this.$emit("get-play-all-id", this.$route.query.id);
    },
    // 播放列表
    playAll() {
      this.$emit("get-player-id", this.dailyRecommendSongList[0].id);
      this.$emit("get-play-all-id", this.$route.query.id);
    },
    /* 前往搜索页方法 */
    toSearch() {
      this.$router.push({ name: "searchsong" });
    },
  },
  //生命周期 - 创建完成(可以访问当前this实例)
  created() {
    this.getdailyRecommendSongListFun();
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
a {
  text-decoration: none;
  color: #404040;
}
img {
  display: block;
}

.dailyRecommendSongList {
  max-width: 750px;
  min-width: 375px;
  .tapNav {
    position: fixed;
    top: 0px;
    //left: 0px;
    z-index: 10;
    min-width: 375px;
    max-width: 750px;
    width: 100%;
    //background-color: transparent;
    background-color: white;
    color: gray;
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    box-shadow: 0px 10px 15px 1px rgba(0, 0, 0, 0.3);
    .title {
      .iconfont {
        margin: 0 5px;
        svg {
          margin: 0 auto;
        }
      }
    }
    .icons {
      .iconfont {
        font-size: 20px;
        margin-right: 14px;
        &.icon-gengduo {
          display: inline-block;
          transform: rotate(90deg);
        }
      }
    }
  }
  .infos {
    padding-top: 40px;
    height: 148px;
    border-bottom-right-radius: 50% 5px;
    border-bottom-left-radius: 50% 5px;
    display: flex;
    position: relative;
    margin-bottom: 30px;
    .bg {
      background: url("https://p1.music.126.net/HV_1x-4T4KlTiEuhh1Bw9A==/109951164531899910.jpg?param=140y140")
        no-repeat center;
      background-size: 100% 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-bottom-right-radius: 50% 5px;
      border-bottom-left-radius: 50% 5px;
      filter: blur(1px);
    }
    .img {
      margin: 10px;
      width: 95px;
      height: 95px;
      position: relative;
      border-radius: 7px;
      overflow: hidden;
      .player {
        position: absolute;
        top: 2px;
        right: 2px;
        height: 14px;
        line-height: 14px;
        color: #fff;
        background-color: rgba(197, 197, 197, 0.6);
        border-radius: 7px;
        font-size: 10px;

        .num {
          transform: scale(0.8);
          .iconfont {
            font-size: 8px;
          }
        }
      }
      img {
        width: 95px;
        height: 95px;
      }
    }
    .content {
      flex: 1;
      padding-top: 10px;
      .title {
        font-size: 15px;
        color: #fff;
        line-height: 18px;
        padding-right: 33px;
        height: 36px;
        overflow: hidden;
        position: relative;
        span {
          display: inline-block;
          position: absolute;
          top: 0px;
          right: 15px;
          font-size: 18px;
        }
      }
      .description {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        height: 14px;
        width: 90%;
        margin-top: 42px;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        overflow: hidden;
      }
    }
    .bottomNav {
      position: absolute;
      bottom: -17px;
      left: 0px;
      right: 0px;
      margin: auto;
      width: 60%;
      display: flex;
      height: 34px;
      line-height: 34px;
      background-color: #fff;
      border-radius: 17px;
      box-shadow: 0px 3px 8px #f6f6f6;
      .item {
        text-align: center;
        flex: 1;
        position: relative;
        .iconfont {
          line-height: 19px;
          svg {
          }
        }
        &::after {
          content: "";
          display: block;
          width: 1px;
          height: 16px;
          background-color: #e8e8e9;
          position: absolute;
          top: 9px;
          right: 0px;
        }
        &:last-of-type::after {
          width: 0px;
        }
      }
    }
  }
  .playerAll {
    height: 41px;
    line-height: 41px;
    display: flex;
    z-index: 20;
    background-color: #fff;
    width: 100%;
    .btn {
      margin: 13px 11px 0px 11px;
      height: 16px;
      width: 16px;
      line-height: 16px;
      background-color: #ff3a29;
      border-radius: 50%;
      color: #fff;
      text-align: center;
      font-size: 10px;
      .iconfont {
        display: inline-block;
        transform: scale(0.5);
      }
    }
    h3 {
      margin-top: 3px;
      color: #141414;
    }
    p {
      margin-top: 3px;
      font-size: 13px;
      color: #a3a3a3;
      line-height: 44px;
    }
  }
  .listsData {
    li {
      height: 47px;
      display: flex;
      i {
        font-style: normal;
        width: 38px;
        line-height: 47px;
        color: #9e9e9e;
        font-size: 13px;
        text-align: center;
      }
      .title {
        text-align: left;
        flex: 1;
        h2 {
          font-size: 15px;
          color: #111111;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          margin-bottom: 5px;
          span {
            color: #8e8e8e;
          }
        }
        p {
          margin: 0;
          height: 17px;
          line-height: 17px;
          font-size: 12px;
          color: #8e8e8e;
        }
      }
      .icons {
        width: 27px;
        font-size: 20px;
        line-height: 47px;
        .iconfont {
          height: 20px;
          line-height: 20px;
          width: 20px;
          margin-top: 10px;
          display: inline-block;
        }
      }
    }
  }
}
</style>