<!-- 个人中心 -->
<template>
  <div class="userInfo">
    <!-- 顶部按钮 -->
    <div class="top">
      <div class="leftMore">
        <svg
          t="1656415694172"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1299"
          width="16"
          height="16"
        >
          <path
            d="M81.28 222.016h861.44c27.264 0 49.28-21.504 49.28-48s-22.016-48-49.28-48H81.28c-27.2 0-49.28 21.504-49.28 48s22.08 48 49.28 48zM942.72 462.016H81.28c-27.264 0-49.28 21.504-49.28 48s22.016 48 49.28 48h861.44c27.264 0 49.28-21.504 49.28-48s-22.144-48-49.28-48zM942.72 801.984H81.28c-27.2 0-49.28 21.504-49.28 48s22.08 48 49.28 48h861.44c27.264 0 49.28-21.504 49.28-48s-22.016-48-49.28-48z"
            p-id="1300"
            fill="#707070"
          ></path>
        </svg>
      </div>
      <router-link tag="div" class="rightSearch" to="/searchsong">
        <svg
          t="1656415809608"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2403"
          width="16"
          height="16"
        >
          <path
            d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"
            p-id="2404"
          ></path>
        </svg>
      </router-link>
    </div>
    <!-- 用户信息 -->
    <van-loading v-if="!UserDetail" />
    <div class="user" v-if="UserDetail">
      <div class="profilePicture">
        <img :src="UserDetail.profile.avatarUrl" alt="" />
      </div>
      <h3>
        {{ UserDetail.profile.nickname
        }}<span>
          <img
            src="https://p6.music.126.net/obj/wovDmcKXw6PCn2_CmsOk/4189721408/7a2f/2750/5084/9122db92c1927ed189539ab5b116cb49.png"
            alt=""
        /></span>
      </h3>
      <div class="miniUserDetail">
        <div class="focus">{{ UserDetail.profile.follows }} 关注</div>
        |
        <div class="fans">{{ UserDetail.profile.followeds }} 粉丝</div>
        |
        <div class="level">Lv.{{ UserDetail.level }}</div>
      </div>
    </div>
    <!-- 八个按钮 -->
    <div class="buttons" @click="unFinish">
      <ul>
        <li>
          <div class="recentlyPlayed">
            <svg
              t="1657872411403"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2263"
              width="23"
              height="23"
            >
              <path
                d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m196.546667 500.493333l-266.666667 176A37.333333 37.333333 0 0 1 384 688V336.033333a37.333333 37.333333 0 0 1 57.893333-31.16l266.666667 176a37.333333 37.333333 0 0 1 0 62.32z"
                fill="#d81e06"
                p-id="2264"
              ></path>
            </svg>
            <br />
            最近播放
          </div>
          <div class="localDownload">
            <svg
              t="1657872735188"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="22072"
              width="23"
              height="23"
            >
              <path
                d="M885.333333 256H138.666667a53.393333 53.393333 0 0 0-53.333334 53.333333v576a53.393333 53.393333 0 0 0 53.333334 53.333334h746.666666a53.393333 53.393333 0 0 0 53.333334-53.333334V309.333333a53.393333 53.393333 0 0 0-53.333334-53.333333zM624.84 596.42a21.333333 21.333333 0 0 1-26.593333-14.246667C593.333333 566 586.18 552 577.513333 541.8a64.24 64.24 0 0 0-13.333333-12 21.473333 21.473333 0 0 1-2.953333-2.366667q-3.38-3.233333-6.586667-6.813333V725.333333c0 23.626667-12.22 46.34-33.526667 62.32C501.333333 802.493333 475.38 810.666667 448 810.666667s-53.333333-8.173333-73.14-23.013334c-21.333333-16-33.526667-38.666667-33.526667-62.32s12.22-46.34 33.526667-62.32C394.666667 648.173333 420.62 640 448 640c23.333333 0 45.666667 5.946667 64 16.893333V405.333333a21.333333 21.333333 0 0 1 20.773333-21.333333h0.56a21.333333 21.333333 0 0 1 21.333334 20.22c0.74 14.14 3.52 35.473333 12.553333 56.78 5.833333 13.753333 13.546667 25.613333 22.36 34.42a107.46 107.46 0 0 1 20.493333 18.78c12.6 14.853333 22.373333 33.573333 29.04 55.626667a21.333333 21.333333 0 0 1-14.273333 26.593333zM512 725.333333c0 23.126667-29.333333 42.666667-64 42.666667s-64-19.54-64-42.666667 29.333333-42.666667 64-42.666666 64 19.54 64 42.666666zM170.666667 106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h640a21.333333 21.333333 0 0 1 0 42.666667H192a21.333333 21.333333 0 0 1-21.333333-21.333333z m-42.666667 85.333333a21.333333 21.333333 0 0 1 21.333333-21.333333h725.333334a21.333333 21.333333 0 0 1 0 42.666666H149.333333a21.333333 21.333333 0 0 1-21.333333-21.333333z"
                fill="#d81e06"
                p-id="22073"
              ></path>
            </svg>
            <br />本地/下载
          </div>
          <div class="cloud">
            <svg
              t="1657873139602"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9216"
              width="23"
              height="23"
            >
              <path
                d="M266.24 409.6h491.52c124.416 0 225.28 100.864 225.28 225.28s-100.864 225.28-225.28 225.28H266.24C141.824 860.16 40.96 759.296 40.96 634.88s100.864-225.28 225.28-225.28z"
                fill="#d81e06"
                p-id="9217"
              ></path>
              <path
                d="M512 409.6m-245.76 0a245.76 245.76 0 1 0 491.52 0 245.76 245.76 0 1 0-491.52 0Z"
                fill="#d81e06"
                p-id="9218"
              ></path>
              <path
                d="M531.53792 392.9088l2.19136 1.98656 115.85536 115.85536a30.72 30.72 0 0 1-41.2672 45.44512l-2.19136-1.98656-63.42656-63.46752L542.72 706.56a30.72 30.72 0 0 1-61.44 0V490.78272l-63.40608 63.42656a30.72 30.72 0 0 1-41.2672 1.98656l-2.19136-1.98656a30.72 30.72 0 0 1-1.98656-41.2672l1.98656-2.19136 115.85536-115.85536a30.72 30.72 0 0 1 41.2672-1.98656z"
                fill="#d81e06"
                p-id="9219"
              ></path>
            </svg>
            <br />云盘
          </div>
          <div class="buyed">
            <svg
              t="1657872927797"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="14597"
              width="23"
              height="23"
            >
              <path
                d="M384 256h-42.666667v-42.666667a170.666667 170.666667 0 1 1 341.333334 0v42.666667h-42.666667v-42.666667c0-70.58-57.42-128-128-128s-128 57.42-128 128z m550 665.386667l-77.333333-618.666667a53.42 53.42 0 0 0-52.913334-46.72H682.666667v133.74a42.666667 42.666667 0 1 1-42.666667 0V256H384v133.74a42.666667 42.666667 0 1 1-42.666667 0V256H220.246667A53.42 53.42 0 0 0 167.333333 302.72l-77.333333 618.666667a53.333333 53.333333 0 0 0 52.913333 59.946666h738.173334a53.333333 53.333333 0 0 0 52.92-59.946666z"
                fill="#d81e06"
                p-id="14598"
              ></path>
            </svg>
            <br />已购
          </div>
        </li>
        <li>
          <div class="myFriends">
            <svg
              t="1657872856835"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9837"
              width="23"
              height="23"
            >
              <path
                d="M128 405.333333c0-103.013333 81.126667-187.066667 182.973333-191.78a299.126667 299.126667 0 0 0 130.866667 340.173334A191.206667 191.206667 0 0 1 320 597.333333c-106.04 0-192-85.96-192-192z m20.146667 391A256.886667 256.886667 0 0 1 242.44 682.666667H181.333333A181.333333 181.333333 0 0 0 0 864v21.333333a53.393333 53.393333 0 0 0 53.333333 53.333334h75.26a97.213333 97.213333 0 0 1-0.593333-10.666667v-32a254.446667 254.446667 0 0 1 20.146667-99.666667z m813.366666-51.18A211.94 211.94 0 0 0 810.666667 682.666667H384a213.333333 213.333333 0 0 0-213.333333 213.333333v32a53.393333 53.393333 0 0 0 53.333333 53.333333h746.666667a53.393333 53.393333 0 0 0 53.333333-53.333333v-32a211.94 211.94 0 0 0-62.486667-150.846667zM853.333333 298.666667c0 141.386667-114.613333 256-256 256S341.333333 440.053333 341.333333 298.666667 455.946667 42.666667 597.333333 42.666667s256 114.613333 256 256z"
                fill="#d81e06"
                p-id="9838"
              ></path>
            </svg>
            <br />我的好友
          </div>
          <div class="collectLike">
            <svg
              t="1657872823979"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9581"
              width="24"
              height="24"
            >
              <path
                d="M1003.333333 399.646667a21.333333 21.333333 0 0 0-17.226666-14.513334l-314.373334-45.686666L531.133333 54.56a21.333333 21.333333 0 0 0-38.266666 0L352.266667 339.446667 37.88 385.133333a21.333333 21.333333 0 0 0-11.826667 36.386667l227.5 221.753333-53.706666 313.12a21.333333 21.333333 0 0 0 30.953333 22.486667L512 831.046667l281.2 147.833333a21.333333 21.333333 0 0 0 30.953333-22.486667l-53.706666-313.12 227.5-221.753333a21.333333 21.333333 0 0 0 5.386666-21.873333z"
                fill="#d81e06"
                p-id="9582"
              ></path>
            </svg>
            <br />收藏和赞
          </div>
          <div class="myBoker">
            <svg
              t="1657873183758"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11186"
              width="23"
              height="23"
            >
              <path
                d="M512.58 384.75A127.25 127.25 0 1 0 639.83 512a127.4 127.4 0 0 0-127.25-127.25z m0 174.5A47.25 47.25 0 1 1 559.83 512a47.3 47.3 0 0 1-47.25 47.25zM342.71 292.35a40 40 0 0 0-56.57 0 310.62 310.62 0 0 0 0 439.29 40 40 0 1 0 56.57-56.57c-89.92-89.92-89.92-236.23 0-326.15a40 40 0 0 0 0-56.57z"
                fill="#d81e06"
                p-id="11187"
              ></path>
              <path
                d="M89.44 512c0-111.21 43.31-215.76 121.94-294.4a40 40 0 0 0-56.57-56.6 496 496 0 0 0 0 701.94 40 40 0 0 0 56.57-56.57C132.75 727.76 89.44 623.21 89.44 512zM737.86 292.35a40 40 0 0 0-56.57 56.57 230.62 230.62 0 0 1 0 326.15 40 40 0 1 0 56.57 56.57 310.62 310.62 0 0 0 0-439.29z"
                fill="#d81e06"
                p-id="11188"
              ></path>
              <path
                d="M978.21 325.25A493.26 493.26 0 0 0 869.19 161a40 40 0 1 0-56.57 56.57C891.25 296.24 934.56 400.79 934.56 512s-43.31 215.76-121.94 294.4a40 40 0 1 0 56.57 56.6 496.86 496.86 0 0 0 109-537.72z"
                fill="#d81e06"
                p-id="11189"
              ></path>
            </svg>
            <br />我的播客
          </div>
          <div class="musicPot">
            <svg
              t="1657874022473"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="20003"
              width="23"
              height="23"
            >
              <path
                d="M512.5 674.5m-65.2 0a65.2 65.2 0 1 0 130.4 0 65.2 65.2 0 1 0-130.4 0Z"
                p-id="20004"
                fill="#d81e06"
              ></path>
              <path
                d="M679.9 63.9H345.1c-84.2 0-152.6 68.5-152.6 152.6v590.8c0 84.2 68.5 152.6 152.6 152.6h334.8c84.2 0 152.6-68.5 152.6-152.6V216.6c0-84.2-68.4-152.7-152.6-152.7zM512.5 808.6c-74 0-134.2-60.2-134.2-134.2s60.2-134.2 134.2-134.2 134.2 60.2 134.2 134.2-60.2 134.2-134.2 134.2z"
                p-id="20005"
                fill="#d81e06"
              ></path>
            </svg>
            <br />音乐罐子
          </div>
        </li>
      </ul>
      <div class="bottom">
        <div class="mission">
          <!-- <div class="img"><img :src="UserDetail.profile.avatarUrl" alt="" /></div> -->
          <div class="text">&nbsp;观看直播领黑胶♫</div>
        </div>
        <div class="del">
          <svg
            t="1657333247283"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2333"
            width="12"
            height="12"
          >
            <path
              d="M557.3 512l329.3-329.4a32 32 0 1 0-45.2-45.2L512 466.7 182.6 137.4a32 32 0 1 0-45.2 45.2L466.7 512 137.4 841.4a31.9 31.9 0 0 0 0 45.2 31.9 31.9 0 0 0 45.2 0L512 557.3l329.4 329.3a31.9 31.9 0 0 0 45.2 0 31.9 31.9 0 0 0 0-45.2z"
              fill="rgb(204,204,204)"
              p-id="2334"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- 我喜欢的音乐 -->
    <!-- <van-loading v-if="!userPlaylist"> -->
    <div class="myMusic" v-if="userPlaylist">
      <router-link
        tag="div"
        :to="'/songlist?id=' + userPlaylist.playlist[0].id"
        class="left"
      >
        <div class="img">
          <img :src="userPlaylist.playlist[0].coverImgUrl" alt="" />
        </div>
        <div class="text">
          <div class="iLike">我喜欢的音乐</div>
          <div class="num">{{ userPlaylist.playlist[0].trackCount }}首</div>
        </div>
      </router-link>
      <div class="right">
        <svg
          t="1658064835662"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1779"
          width="14"
          height="14"
        >
          <path
            d="M853.112 577.182c17.451 15.834 18.762 42.817 2.928 60.269l-8.372 8.812-10.324 10.129-12.28 11.453-22.107 19.677-17.203 14.792-29.522 24.714-59.169 47.985-56.364 44.56-64.449 50.102-78.209 60.02L338.77 822.067l-38.069-26.79c-36.09-25.934-66.447-49.504-92.9-72.5-27.6-23.992-50.205-46.799-67.743-68.921-14.638-18.466-11.536-45.302 6.93-59.94 18.465-14.64 45.301-11.537 59.94 6.928 13.892 17.524 32.933 36.735 56.857 57.532 28.401 24.69 62.513 50.713 104.836 80.484l40.954 28.196 85.415 57.44 75.852-58.642 56.944-44.782 60.056-48.293 30.06-24.837 33.065-28.245 19.508-17.5 10.473-9.9 8.44-8.48 3.455-3.706c15.834-17.452 42.817-18.763 60.269-2.929z m-4.344-363.574c44.16 44.16 71.038 101.155 77.606 161.987a274.166 274.166 0 0 1 1.576 28.135c0.11 23.564-18.904 42.756-42.467 42.866-23.564 0.11-42.756-18.903-42.866-42.467a188.7 188.7 0 0 0-1.083-19.374c-4.497-41.648-22.837-80.538-53.105-110.807-69.567-69.566-180.755-72.143-253.404-7.73l-8.207 7.73-29.62 29.62-35.734-34.453c-72.716-67.546-186.184-65.579-256.596 4.833-35.343 35.343-54.344 82.427-54.185 131.429 0.076 23.564-18.964 42.728-42.528 42.804-23.564 0.077-42.729-18.964-42.806-42.528-0.23-71.502 27.6-140.465 79.18-192.045 93.253-93.253 238.159-104.357 344.067-31.71l7.873 5.727c106.153-78.71 256.33-69.986 352.3 25.983z"
            fill="#333333"
            p-id="1780"
          ></path>
          <path
            d="M370.227 318.682c18.126-19.116 48.566-17.167 64.352 2.78l3.37 4.92 142.204 241.374 138.691-104.68a42.667 42.667 0 0 1 20.185-8.258l5.526-0.36h205.754c23.564 0 42.667 19.103 42.667 42.668 0 21.6-16.052 39.451-36.877 42.277l-5.79 0.39-191.525-0.026L593.401 664.72c-18.65 14.081-44.729 10.39-58.913-7.242l-3.559-5.152L393.16 418.48 290.785 526.483a42.668 42.668 0 0 1-24.018 12.74l-6.943 0.57H53.639c-23.565 0-42.667-19.103-42.667-42.667 0-21.6 16.051-39.452 36.877-42.278l5.79-0.39 187.797-0.025 128.79-135.75z"
            fill="#EF502F"
            p-id="1781"
          ></path>
        </svg>

        <span>心动模式</span>
      </div>
    </div>
    <!-- 歌单 -->
    <van-loading v-if="!userPlaylist"/>
    <div class="mySongList" v-if="userPlaylist">
      <van-tabs v-model="active" background="transparent">
        <van-tab title="创建歌单">
          <!-- 创建歌单 -->
          <div class="createSongList">
            <!-- 顶部信息 -->
            <div class="tops">
              <van-loading v-if="!userSubcount"/>
              <div class="leftTop" v-if="userSubcount">
                创建歌单({{ userSubcount.artistCount }})个
              </div>
              <div class="rightMore">
                <div class="adds" style="margin-right: 10px">
                  <svg
                    t="1658068143416"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1616"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z"
                      fill="#8a8a8a"
                      p-id="1617"
                    ></path>
                  </svg>
                </div>
                <div class="moreList">
                  <svg
                    t="1658068187555"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2736"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                      p-id="2737"
                      fill="#707070"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <!-- 列表 -->
            <van-loading v-if="!userPlaylist.playlist" />
            <div class="myCreateList" v-if="userPlaylist.playlist">
              <ul>
                <li v-for="(item, index) in userPlaylist.playlist" :key="index">
                  <router-link
                    tag="div"
                    :to="'/songlist?id=' + item.id"
                    class="myCreateListBox"
                    v-if="item.subscribed != true && index != 0"
                  >
                    <div class="myCreateListLeft">
                      <div class="myCreateListLeftImg">
                        <img :src="item.coverImgUrl" alt="" />
                      </div>
                      <div class="myCreateListLeftInfo">
                        <div class="myCreateListLeftInfoTop">
                          {{ item.name }}
                        </div>
                        <div class="myCreateListLeftInfoBottom">
                          {{ item.trackCount }}首
                        </div>
                      </div>
                    </div>
                    <div class="myCreateListRight">
                      <svg
                        t="1658068187555"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2736"
                        width="12"
                        height="12"
                      >
                        <path
                          d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          p-id="2737"
                          fill="#707070"
                        ></path>
                      </svg>
                    </div>
                  </router-link>
                </li>
                <li>
                  <div class="myCreateListBox">
                    <div class="myCreateListLeft">
                      <div class="myCreateListLeftImg">
                        <img src="../assets/img/moreList.png" alt="" />
                      </div>
                      <div
                        class="myCreateListLeftInfo"
                        style="line-height: 40px"
                        @click="unFinish"
                      >
                        一键导入外部歌单
                      </div>
                    </div>
                    <div class="myCreateListRight"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 收藏歌单 -->
          <van-loading v-if="!userPlaylist.playlist" />
          <div class="createSongList" v-if="userPlaylist.playlist">
            <!-- 顶部信息 -->
            <div class="tops">
              <van-loading v-if="!userSubcount" />
              <div class="leftTop" v-if="userSubcount">
                收藏歌单({{ userSubcount.subPlaylistCount }})个
              </div>
              <div class="rightMore">
                <div class="adds" style="margin-right: 10px"></div>
                <div class="moreList">
                  <svg
                    t="1658068187555"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2736"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                      p-id="2737"
                      fill="#707070"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <!-- 列表 -->
            <van-loading v-if="!userPlaylist.playlist" />
            <div class="myCreateList" v-if="userPlaylist.playlist">
              <ul>
                <li v-for="(item, index) in userPlaylist.playlist" :key="index">
                  <router-link
                    tag="div"
                    :to="'/songlist?id=' + item.id"
                    class="myCreateListBox"
                    v-if="item.subscribed == true"
                  >
                    <div class="myCreateListLeft">
                      <div class="myCreateListLeftImg">
                        <img :src="item.coverImgUrl" alt="" />
                      </div>
                      <div class="myCreateListLeftInfo">
                        <div class="myCreateListLeftInfoTop">
                          {{ item.name }}
                        </div>
                        <div class="myCreateListLeftInfoBottom">
                          {{ item.trackCount }}首,{{ item.creator.nickname }}
                        </div>
                      </div>
                    </div>
                    <div class="myCreateListRight">
                      <svg
                        t="1658068187555"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2736"
                        width="12"
                        height="12"
                      >
                        <path
                          d="M512 704c35.2 0 64 28.8 64 64s-28.8 64-64 64-64-28.8-64-64 28.8-64 64-64z m-64-192c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z m0-256c0 35.2 28.8 64 64 64s64-28.8 64-64-28.8-64-64-64-64 28.8-64 64z"
                          p-id="2737"
                          fill="#707070"
                        ></path>
                      </svg>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </van-tab>
        <van-tab title="收藏歌单">
          <div class="likedSongList"></div>
        </van-tab>
      </van-tabs>
    </div>
    <button
      style="margin-bottom: 130px; border-radius: 12px; font-size: 15px"
      @click="logoutFun"
    >
      点击退出登陆
    </button>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 《组件名称》 from '《组件路径》';
import { getLoginstutas, logout } from "../api/login";
import bottomnav from "../components/basce/BottomNav.vue";
import {
  getUserInfo,
  getUserDetail,
  getUserPlaylist,
  getUserSubcount,
} from "@/api/userinfo";
import { Toast, Dialog } from "vant";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    bottomnav,
  },
  data() {
    //这里存放数据
    return {
      loginStutas: null,
      userId: null,
      userAccount: null,
      UserDetail: null,
      userPlaylist: null,
      active: 2,
      userSubcount: null,
      myList: null,
      subscribedList: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    /* 查看用户状态方法 */
    getLoginstutasFun() {
      getLoginstutas().then((data) => {
        this.loginStutas = data;
        console.log("获取用户状态", this.loginStutas);
      });
    },
    /* 退出登陆方法 */
    logoutFun() {
      Dialog.confirm({
        title: "确认退出登录?",
        message: "您确定要退出登录吗?",
      }).then(() => {
        logout();
        console.log("退出登陆,", this.loginStutas);
        window.localStorage.removeItem("token");
        Toast("退出登录成功!");
        this.$router.push("/home");
      });
    },
    /* 获取用户信息方法 */
    getUserInfoFun() {
      getUserInfo().then((data) => {
        console.log("用户账户信息", data);
        this.userAccount = data;
        this.userId = data.account.id;
        if (this.userId != null) {
          console.log("用户账号Id", this.userId);
          /* 获取用户详情 */
          getUserDetail({ uid: this.userId }).then((data) => {
            this.UserDetail = data;
            console.log("用户详情", data);
          });
          /* 获取用户歌单 */
          this.getUserPlaylist();
          /* 获取用户歌单数量 */
          this.getUserSubcountFun();
        }
      });
    },
    /* 获取个人歌单列表 */
    getUserPlaylist() {
      getUserPlaylist({ uid: this.userId }).then((data) => {
        this.userPlaylist = data;
        console.log("用户歌单", this.userPlaylist);
      });
    },
    /* 获取个人歌单数量 */
    getUserSubcountFun() {
      getUserSubcount().then((data) => {
        this.userSubcount = data;
        console.log("用户歌单数量", this.userSubcount);
      });
    },
    /* 未完成提示 */
    unFinish() {
      Toast("该功能维护中，请稍后再试~");
    },
  },
  //生命周期 - 创建完成(可以访问当前this实例)
  created() {
    this.getUserInfoFun();
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
.userInfo {
  max-width: 750px;
  min-width: 375px;
  margin: 0 auto;
  background-color: rgb(242, 241, 240);

  /* 顶部 */
  .top {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 13px;

    background-color: width;
    .leftMore {
    }
    .rightSearch {
    }
  }
  /* 用户 */
  .user {
    width: 93%;
    height: 85px;
    margin: auto;
    margin-top: 50px;
    padding-top: 27px;
    position: relative;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    .profilePicture {
      top: -45%;
      left: 41%;
      position: absolute;
      width: 57px;
      height: 57px;
      margin: 0 auto;
      img {
        width: 57px;
        height: 57px;
        border-radius: 50%;
      }
    }
    h3 {
      margin-top: 35px;
      font-weight: bolder;
      margin: 0 auto;
      img {
        width: 40px;
        height: 12px;
        margin-left: 3px;
        border-radius: 10px;
      }
    }
    .miniUserDetail {
      width: 135px;
      margin: 5px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 10px;
      color: rgb(161, 161, 161);
      .focus {
      }
      .fans {
      }
      .level {
      }
    }
  }
  /* 八个按钮 */
  .buttons {
    width: 93%;
    height: 195px;
    margin: auto;
    margin-top: 12px;
    position: relative;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    div {
      width: 80px;
      height: 45px;
      font-size: 10px;
    }
    ul {
      li {
        padding-top: 27px;
        path {
          fill: rgb(255, 81, 81);
        }
        display: flex;
        justify-content: space-around;
        align-items: center;
        .recenetlyPlayed {
        }
        .localDownload {
        }
        .cloud {
        }
        .buyed {
        }
        .myFriends {
        }
        .collectLike {
        }
        .myBoker {
        }
        .musicPot {
        }
      }
    }
    .bottom {
      border-top: 1px solid rgb(247, 247, 247);
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 45px;
      line-height: 45px;
      .mission {
        height: 45px;
        line-height: 45px;
        width: 200px;
        display: flex;
        .img {
          height: 45px;
          line-height: 45px;
          img {
            margin: 0;
            width: 30px;
            height: 30px;
            line-height: 45px;
            border-radius: 50%;
          }
        }
        .text {
          width: 100px;
        }
      }
      .del {
        width: 24px;
      }
    }
  }
}
/* 我喜欢的音乐 */
.myMusic {
  width: 93%;
  height: 67px;
  line-height: 67px;
  margin: auto;
  margin-top: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    height: 67px;
    display: flex;
    .img {
      width: 40px;
      height: 40px;
      margin: auto 13px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 8px;
      }
    }
    .text {
      .iLike {
        height: 15px;
      }
      .num {
        height: 50px;
        text-align: left;
        font-size: 8px;
        color: rgb(174, 174, 174);
      }
    }
  }
  .right {
    font-size: 12px;
    margin-right: 13px;
    line-height: 50px;
    text-align: center;
  }
}
/* 歌单 */
.mySongList {
  margin-bottom: 20px;
  .van-tabs {
    width: 93%;
    margin: 0 auto;
    background-color: transparent;
    .createSongList {
      margin: 16px auto;
      background: white;
      border-radius: 10px;
      .tops {
        padding: 13px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        .leftTop {
          width: 100%;
          font-size: 12px;
          text-align: left;
          color: rgb(195, 195, 195);
        }
        .rightMore {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .add {
          }
          .moreList {
          }
        }
      }
    }
    .myCreateList {
      ul {
        li {
          .myCreateListBox {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 13px;
            margin-right: 13px;
            .myCreateListLeft {
              display: flex;
              .myCreateListLeftImg {
                width: 40px;
                height: 40px;
                margin: auto 13px;
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 8px;
                }
              }
              .myCreateListLeftInfo {
                align-items: center;
                .myCreateListLeftInfoTop {
                  font-size: 14px;
                  text-align: left;
                }
                .myCreateListLeftInfoBottom {
                  font-size: 10px;
                  color: rgb(162, 162, 162);
                  margin-top: 3px;
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>