<template>
  <div class="songLists">
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
    <van-loading v-if="!playlist" />
    <div class="infos" v-if="playlist">
      <div
        class="bg"
        :style="{
          'background-image': 'url(' + playlist.coverImgUrl + '?param=140y140)',
        }"
      ></div>
      <div class="img">
        <img :src="playlist.coverImgUrl + '?param=140y140'" alt="" />
        <div class="player">
          <div class="num">
            <span class="iconfont icon-bofang"></span>
            {{ playlist.playCount | playCountNum }}
          </div>
        </div>
      </div>
      <div class="content">
        <div class="title">
          {{ playlist.name }}
          <span class="iconfont">
            <svg
              t="1657247824842"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="25085"
              width="18"
              height="18"
            >
              <path
                d="M512 66.56c-246.00576 0-445.44 199.42912-445.44 445.44s199.43424 445.44 445.44 445.44 445.44-199.42912 445.44-445.44-199.43424-445.44-445.44-445.44z m0 830.13632c-212.1216 0-384.6912-172.57472-384.6912-384.69632S299.8784 127.30368 512 127.30368c212.13184 0 384.70656 172.57984 384.70656 384.69632S724.13184 896.69632 512 896.69632z"
                fill="#ffffff"
                p-id="25086"
              ></path>
              <path
                d="M628.27008 421.81632L511.8464 547.29728 395.12576 424.47872c-12.02688-9.984-31.2576-9.66144-42.94656 0.70144-11.68896 10.36288-11.42784 26.84928 0.60416 36.82304l138.48576 140.88704c12.03712 9.97888 31.26272 9.66144 42.95168-0.70144l137.6-144.25088c11.68384-10.36288 11.42784-26.84416-0.59904-36.82816-12.03712-9.97888-31.26784-9.66144-42.95168 0.70656z"
                fill="#ffffff"
                p-id="25087"
              ></path>
            </svg>
          </span>
        </div>
        <div class="description">
          {{ playlist.description }}
        </div>
      </div>
      <div class="bottomNav">
        <div class="item">
          <span class="iconfont">
            <svg
              t="1657243005099"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="20572"
              width="19"
              height="19"
            >
              <path
                d="M802.19 923.46H221.81c-66.67 0-120.9-54.24-120.9-120.9V222.19c0-66.67 54.24-120.9 120.9-120.9h580.37c66.67 0 120.9 54.24 120.9 120.9v66.2c0 16.02-12.98 29-29 29s-29-12.98-29-29v-66.2c0-34.68-28.22-62.9-62.9-62.9H221.81c-34.68 0-62.9 28.22-62.9 62.9v580.37c0 34.68 28.22 62.9 62.9 62.9h580.37c34.68 0 62.9-28.22 62.9-62.9V423.78c0-16.02 12.98-29 29-29s29 12.98 29 29v378.79c0.01 66.66-54.23 120.89-120.89 120.89z"
                p-id="20573"
                fill="#515151"
              ></path>
              <path
                d="M715.28 541.38H308.72c-16.02 0-29-12.98-29-29s12.98-29 29-29h406.56c16.02 0 29 12.98 29 29 0 16.01-12.99 29-29 29z"
                p-id="20574"
                fill="#515151"
              ></path>
              <path
                d="M512 744.65c-16.02 0-29-12.98-29-29V309.1c0-16.02 12.98-29 29-29s29 12.98 29 29v406.56c0 16.01-12.98 28.99-29 28.99z"
                p-id="20575"
                fill="#515151"
              ></path>
            </svg>
          </span>
          {{ playlist.subscribedCount | playCountNum }}
        </div>
        <div class="item">
          <span class="iconfont">
            <svg
              t="1657179682696"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="22096"
              width="18"
              height="18"
            >
              <path
                d="M514.57 959.33H152.86l0.09-180.67C95.16 701.06 64.67 609.1 64.67 512 64.67 265.34 265.34 64.67 512 64.67S959.33 265.34 959.33 512c0 235.23-183.66 429.49-415.12 446.13v1.14l-29.64 0.06z m-302.4-59.3l302.21-0.06C727.03 898.68 900.03 724.65 900.03 512c0-213.96-174.07-388.03-388.03-388.03-213.96 0-388.04 174.07-388.04 388.03 0 87.21 28.36 169.66 82.01 238.42l6.28 8.05-0.08 141.56z"
                p-id="22097"
                fill="#bfbfbf"
              ></path>
              <path
                d="M663.46 477.27h-310.1c-16.37 0-29.65-13.28-29.65-29.65 0-16.37 13.28-29.65 29.65-29.65h310.1c16.37 0 29.65 13.28 29.65 29.65 0 16.37-13.27 29.65-29.65 29.65zM538.74 636.8H353.37c-16.37 0-29.65-13.28-29.65-29.65S337 577.5 353.37 577.5h185.37c16.37 0 29.65 13.28 29.65 29.65s-13.28 29.65-29.65 29.65z"
                p-id="22098"
                fill="#bfbfbf"
              ></path>
            </svg>
          </span>
          {{ playlist.commentCount | playCountNum }}
        </div>
        <div class="item">
          <span class="iconfont">
            <svg
              t="1657113375817"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3275"
              width="18"
              height="18"
            >
              <path
                d="M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333c47.128 0 85.333 38.205 85.333 85.333 0 47.128-38.205 85.333-85.333 85.333M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333c-47.128 0-85.333-38.205-85.333-85.333 0-47.128 38.205-85.333 85.333-85.333M763.84 682.667c-0.021 0-0.047 0-0.072 0-39.16 0-74.203 17.626-97.628 45.378l-289.885-167.063c4.932-13.101 7.787-28.245 7.787-44.055 0-0.105 0-0.209 0-0.314 0-0.072 0-0.177 0-0.281 0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509 0.020 0 0.039 0 0.059 0 70.689 0 127.997-57.308 127.997-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 18.965 4.224 36.907 11.627 53.099l-292.288 168.747c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128 0 0.188 0 0.376 0.001 0.564-0.001 0.123-0.001 0.304-0.001 0.484 0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z"
                fill="#3D3D3D"
                p-id="3276"
              ></path>
            </svg>
          </span>
          {{ playlist.shareCount | playCountNum }}
        </div>
      </div>
    </div>
    <van-sticky :offset-top="40" v-if="playlist">
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
        <p>({{ playlist.tracks.length }})</p>
      </div>
    </van-sticky>

    <van-loading v-if="!playlist" style="margin-top:20px" />
    <ul class="listsData" v-if="playlist">
      <li
        v-for="(item, index) in playlist.tracks"
        :key="item.id"
        @click="setId(item.id)"
      >
        <i>{{ index + 1 }}</i>
        <div class="title">
          <h2>
            {{ item.name }}
          </h2>
          <p>
            <!-- 是否无损 -->
            <span
              v-show="item.sq != null"
              style="
                width: 12px;
                height: 7px;
                color: rgb(255, 96, 96);
                font-size: 10px;
                border: 1px solid rgb(255, 96, 96);
                border-radius: 2px;
                margin-right: 3px;
                text-align: center;
              "
            >
              SQ
            </span>
            {{ item.ar[0].name }}
          </p>
        </div>
        <!-- <div class="icons">
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
        </div> -->
      </li>
    </ul>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
import Vue from "vue";
import { getPlaylistDetail } from "../api/song";
import bottomnav from "../components/basce/BottomNav.vue";
import { Loading } from "vant";
Vue.use(Loading);
export default {
  data() {
    return {
      playlist: null,
    };
  },
  components: { bottomnav },
  methods: {
    /* 获取歌单详情方法 */
    getPlaylistDetailFun() {
      let id = this.$route.query.id;
      if (!id) {
        return;
      }
      getPlaylistDetail({ id: id }).then((data) => {
        console.log(data);
        this.playlist = data.playlist;
      });
    },
    /* 获取ID方法 */
    setId(id) {
      this.$emit("get-player-id", id);
      this.$emit("get-play-all-id", this.$route.query.id);
    },
    // 播放列表
    playAll() {
      this.$emit("get-player-id", this.playlist.tracks[0].id);
      this.$emit("get-play-all-id", this.$route.query.id);
    },
    /* 前往搜索页方法 */
    toSearch() {
      this.$router.push({ name: "searchsong" });
    },
  },
  created() {
    this.getPlaylistDetailFun();
  },
  filters: {
    playCountNum(value) {
      if (value < 10000) {
        return value;
      }
      let w = value > 10000 ? value / 10000 : value;
      let y = w > 10000 ? parseInt(w / 10000) + "亿" : parseInt(w) + "万";
      return y;
    },
  },
};
</script>

<style lang="scss" >
a {
  text-decoration: none;
  color: #404040;
}
img {
  display: block;
}

.songLists {
  min-width: 375px;
  max-width: 750px;
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
      background-size: 3000px;
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