<!-- 主页 -->
<template>
  <div class="home">
    <!-- 顶部搜索栏 -->
    <div class="topSearch">
      <router-link tag="div" class="leftmore" to="/userinfo">
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
      </router-link>

      <router-link tag="div" class="search" to="/searchsong">
        <div class="search-in">
          <div class="searchIcon">
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
          </div>
          <div class="searchText">新人必听</div>
        </div>
      </router-link>
      <div class="microphone">
        <svg
          t="1656416012014"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="7697"
          width="16"
          height="16"
        >
          <path
            d="M544 830.4V960h-64V830.4c-161.6-16-288-152.8-288-318.4h64c0 140.8 115.2 256 256 256s256-115.2 256-256h64c0 165.6-126.4 302.4-288 318.4zM512 640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128s-128 57.6-128 128v320c0 70.4 57.6 128 128 128z"
            p-id="7698"
            fill="#2c2c2c"
          ></path>
        </svg>
      </div>
    </div>

    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in banners" :key="item.bannerId">
          <img :src="item.pic" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 分类 -->
    <div class="classify">
      <ul>
        <router-link tag="li" to="/dailyrecommend">
          <div class="svg">
            <svg
              t="1656904190825"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1086"
              width="32"
              height="32"
            >
              <path
                d="M525.983479 811.499212h53.049217v-81.537038h44.205804v-44.206828h-44.205804v-218.087017H525.983479l-147.356092 206.789716v55.504129h147.356092v81.537038z m-104.131639-125.743866l103.149265-151.285588h0.982374v151.285588H421.85184z"
                p-id="1087"
                fill="#d81e06"
              ></path>
              <path
                d="M838.026378 126.409015h-59.445904V79.237669c0-6.723122-5.64251-12.254092-12.603039-12.254092h-34.219359c-7.118118 0-12.602016 5.485945-12.602016 12.254092v47.171346h-415.973969V79.237669c0-6.723122-5.64251-12.254092-12.602016-12.254092h-34.220383c-7.118118 0-12.602016 5.485945-12.602016 12.254092v47.171346H184.311773c-65.738213 0-118.828362 53.168943-118.828363 118.755707v594.434478c0 65.448618 53.200666 118.755708 118.828363 118.755707h653.715628c65.738213 0 118.828362-53.168943 118.828363-118.755707V245.164722c-0.001023-65.448618-53.202713-118.755708-118.829386-118.755707z m59.402925 713.191208c0 32.806173-26.523073 59.331293-59.402925 59.331293H184.310749c-32.757055 0-59.402925-26.65201-59.402925-59.331293V364.107695h772.521479v475.492528z m0-534.916942H124.907824v-59.518559c0-32.806173 26.523073-59.331293 59.402925-59.331293h59.445904v47.171346c0 6.723122 5.64251 12.254092 12.602016 12.254091h34.220382c7.118118 0 12.602016-5.485945 12.602016-12.254091v-47.171346h415.972947v47.171346c0 6.723122 5.64251 12.254092 12.602015 12.254091h34.21936c7.119141 0 12.603039-5.485945 12.603039-12.254091v-47.171346h59.445904c32.757055 0 59.402925 26.65201 59.402924 59.331293v59.518559z"
                p-id="1088"
                fill="#d81e06"
              ></path>
            </svg>
            <p>每日推荐</p>
          </div>
        </router-link>

        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656904557227"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4160"
              width="32"
              height="32"
            >
              <path
                d="M913.4 895.6H110.6C86.6 895.6 67 876 67 852V299.4c0-24 19.5-43.5 43.5-43.5h802.8c24 0 43.5 19.5 43.5 43.5V852c0.2 24-19.4 43.6-43.4 43.6z m-766.4-80h730V335.8H147v479.8z"
                p-id="4161"
                fill="#d81e06"
              ></path>
              <path
                d="M358.7 740.8c-91.1 0-165.1-74.1-165.1-165.1 0-91.1 74.1-165.1 165.1-165.1s165.1 74.1 165.1 165.1c0.1 91-74 165.1-165.1 165.1z m0-250.3c-46.9 0-85.1 38.2-85.1 85.1 0 46.9 38.2 85.1 85.1 85.1s85.1-38.2 85.1-85.1c0.1-46.9-38.1-85.1-85.1-85.1zM787.6 529H603.4c-22.1 0-40-17.9-40-40s17.9-40 40-40h184.2c22.1 0 40 17.9 40 40s-17.9 40-40 40zM787.6 702.4H603.4c-22.1 0-40-17.9-40-40s17.9-40 40-40h184.2c22.1 0 40 17.9 40 40s-17.9 40-40 40zM127.5 336.6c-15 0-29.3-8.4-36.2-22.9-9.5-20-0.9-43.8 19-53.3l271.1-128.5c20-9.5 43.8-1 53.3 19s0.9 43.8-19 53.3L144.6 332.7c-5.5 2.6-11.3 3.9-17.1 3.9z"
                p-id="4162"
                fill="#d81e06"
              ></path>
            </svg>
            <p>私人FM</p>
          </div>
        </li>

        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656904971575"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4760"
              width="32"
              height="32"
            >
              <path
                d="M600 855.2c-61.3 0-118.9-23.9-162.2-67.2s-67.2-100.9-67.2-162.2 23.9-118.9 67.2-162.2 100.9-67.2 162.2-67.2 118.9 23.9 162.2 67.2c43.3 43.3 67.2 100.9 67.2 162.2S805.5 744.7 762.2 788s-101 67.2-162.2 67.2z m0-378.7c-82.4 0-149.4 67-149.4 149.4s67 149.4 149.4 149.4 149.4-67 149.4-149.4S682.3 476.5 600 476.5z"
                p-id="4761"
                fill="#d81e06"
              ></path>
              <path
                d="M789.3 665.8c-22.1 0-40-17.9-40-40V209.3c0-22.1 17.9-40 40-40s40 17.9 40 40v416.6c0 22-17.9 39.9-40 39.9z"
                p-id="4762"
                fill="#d81e06"
              ></path>
              <path
                d="M915.6 400.7c-11.5 0-22.8-4.9-30.8-14.4L758.6 234.9c-14.1-17-11.8-42.2 5.1-56.3s42.2-11.8 56.3 5.1l126.2 151.5c14.1 17 11.8 42.2-5.1 56.3-7.4 6.2-16.5 9.2-25.5 9.2z"
                p-id="4763"
                fill="#d81e06"
              ></path>
              <path
                d="M562.1 249.3H107.7c-22.1 0-40-17.9-40-40s17.9-40 40-40h454.5c22.1 0 40 17.9 40 40s-18 40-40.1 40zM259.1 552.2H107.7c-22.1 0-40-17.9-40-40s17.9-40 40-40h151.5c22.1 0 40 17.9 40 40s-18 40-40.1 40zM334.9 855.2H107.7c-22.1 0-40-17.9-40-40s17.9-40 40-40h227.2c22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                p-id="4764"
                fill="#d81e06"
              ></path>
            </svg>
            <p>歌单</p>
          </div>
        </li>

        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656905116964"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7204"
              width="32"
              height="32"
            >
              <path
                d="M315.597609 894.219711c-62.13867 0-124.393261 0-188.573147 0 0-126.355131 0-252.968887 0-382.249435 63.490354 0 125.046818 0 188.573147 0C315.597609 639.418067 315.597609 765.974062 315.597609 894.219711zM603.685685 893.767018c-60.901509 0-122.853905 0-186.300688 0 0-254.759673 0-508.683912 0-766.051617 62.799822 0 123.42252 0 186.300688 0C603.685685 382.423109 603.685685 637.024689 603.685685 893.767018zM895.189246 894.492526c-62.46245 0-124.032506 0-187.932981 0 0-174.161518 0-348.696784 0-525.524295 61.721953 0 123.860622 0 187.932981 0C895.189246 543.870248 895.189246 718.462275 895.189246 894.492526z"
                p-id="7205"
                fill="#d81e06"
              ></path>
            </svg>
            <p>排行榜</p>
          </div>
        </li>

        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656905209623"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8384"
              width="32"
              height="32"
            >
              <path
                d="M273.7 98.8v619.9c0 4.5-3.6 8.1-8.1 8.1h-82.9v-628h91z"
                fill="#d81e06"
                p-id="8385"
              ></path>
              <path
                d="M185.8 823.4h-36.1V140.9c0-42.3 34.4-76.7 76.7-76.7h571.2c42.3 0 76.7 34.4 76.7 76.7V723h-36.1V140.9c0-22.4-18.2-40.6-40.6-40.6H226.4c-22.4 0-40.6 18.2-40.6 40.6v682.5z"
                fill="#d81e06"
                p-id="8386"
              ></path>
              <path
                d="M873.5 956.8H284.6c-74.4 0-134.9-60.5-134.9-134.9S210.2 687 284.6 687h559.2v36H284.6c-54.5 0-98.8 44.3-98.8 98.8s44.3 98.8 98.8 98.8h588.9v36.2z"
                fill="#d81e06"
                p-id="8387"
              ></path>
              <path
                d="M246.7 810.5h626.9v24.1H246.7zM480.4 211.5H775v24.1H480.4zM480.4 318.3H775v24.1H480.4z"
                fill="#d81e06"
                p-id="8388"
              ></path>
            </svg>
            <p>有声书</p>
          </div>
        </li>

        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656905260165"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9126"
              width="32"
              height="32"
            >
              <path
                d="M150.588235 542.117647a30.117647 30.117647 0 1 1 60.235294 0 271.058824 271.058824 0 0 0 271.058824 271.058824 30.117647 30.117647 0 1 1 0 60.235294C298.917647 873.411765 150.588235 725.082353 150.588235 542.117647z m722.82353-60.235294a30.117647 30.117647 0 1 1-60.235294 0 271.058824 271.058824 0 0 0-271.058824-271.058824 30.117647 30.117647 0 1 1 0-60.235294c182.964706 0 331.294118 148.329412 331.294118 331.294118zM512 1024C229.225412 1024 0 794.774588 0 512S229.225412 0 512 0s512 229.225412 512 512-229.225412 512-512 512z m0-60.235294c249.494588 0 451.764706-202.270118 451.764706-451.764706 0-249.494588-202.270118-451.764706-451.764706-451.764706C262.505412 60.235294 60.235294 262.505412 60.235294 512c0 249.494588 202.270118 451.764706 451.764706 451.764706z m0-331.294118a120.470588 120.470588 0 1 1 0-240.941176 120.470588 120.470588 0 0 1 0 240.941176z m0-60.235294a60.235294 60.235294 0 1 0 0-120.470588 60.235294 60.235294 0 0 0 0 120.470588z"
                fill="#d81e06"
                p-id="9127"
              ></path>
            </svg>
            <p>数字专辑</p>
          </div>
        </li>

        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656905383047"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="17060"
              width="32"
              height="32"
            >
              <path
                d="M510.5 105C290.3 105 112 283.5 112 503.5 112 723.7 290.5 902 510.5 902S909 723.7 909 503.5 730.5 105 510.5 105z m0 597.8c-110.1 0-199.2-89.2-199.2-199.2H371c0 77 62.5 139.5 139.5 139.5S650 580.5 650 503.5 587.5 364 510.5 364c-33.4 0-63.7 12.3-87.7 31.8l-42.7-42.7c35-30.3 80.5-48.8 130.4-48.8 110.1 0 199.2 89.2 199.2 199.2s-89.1 199.3-199.2 199.3z m-69.7-194.2c0-19.7 1.2-39.1 3.5-58 2.4-19.8 21.1-31.9 37.9-24.7 30.9 13.4 59.9 30.9 86.3 52 15.7 12.5 15.7 38.2 0 50.7-26.8 21.4-56.2 39.1-87.6 52.5-17.3 7.4-36-5.8-37.9-26.1-1.6-15.3-2.2-30.7-2.2-46.4z"
                p-id="17061"
                fill="#d81e06"
              ></path>
            </svg>
            <p>直播</p>
          </div>
        </li>

        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656919536610"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9089"
              width="28"
              height="28"
            >
              <path
                d="M260.196721 537.180328h503.606558a251.803279 251.803279 0 0 1 251.803278 251.803279v134.295082a100.721311 100.721311 0 0 1-100.721311 100.721311H109.114754a100.721311 100.721311 0 0 1-100.721311-100.721311V788.983607a251.803279 251.803279 0 0 1 251.803278-251.803279zM516.196721 0h209.836066a50.360656 50.360656 0 0 1 50.360656 50.360656v209.836065a243.409836 243.409836 0 0 1-243.409836 243.409836h-16.786886a243.409836 243.409836 0 0 1-243.409836-243.409836v-16.786885a243.409836 243.409836 0 0 1 243.409836-243.409836z"
                fill="#d81e06"
                p-id="9090"
              ></path>
              <path
                d="M532.983607 512h-8.393443A96.776393 96.776393 0 0 0 428.065574 608.52459v92.327869a96.944262 96.944262 0 0 0 58.754098 88.802623V1024h83.934426V789.655082a96.944262 96.944262 0 0 0 58.754099-88.802623v-92.327869A96.776393 96.776393 0 0 0 532.983607 512z"
                fill="#d81e06"
                p-id="9091"
              ></path>
            </svg>
            <p>关注新歌</p>
          </div>
        </li>

        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656919596639"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11748"
              width="32"
              height="32"
            >
              <path
                d="M509.606998 143.114488c9.082866 0 17.327644 4.840238 20.996197 12.331863l97.262184 197.441814c5.613858 11.403724 16.663518 19.358907 29.438473 21.216207l223.738737 32.552393c8.420787 1.215688 15.604396 6.851035 18.23327 14.254655 2.520403 7.18361 0.595564 15.062044-5.084808 20.586874L730.253304 601.611947c-8.949836 8.751315-12.994965 21.171182-10.916631 33.370015l38.011732 222.060515c1.325182 7.737218-2.165316 15.426341-8.905834 19.978007-4.088108 2.741437-8.861832 4.155646-13.812587 4.155646-4.022617 0-7.999185-0.972141-11.425214-2.740414L528.149307 775.671215c-5.768377-3.006474-12.155854-4.552689-18.542308-4.552689-6.364965 0-12.727882 1.547239-18.518772 4.552689L296.254819 878.348736c-3.559059 1.855254-7.602142 2.828418-11.668761 2.828418-4.861728 0-9.723455-1.459235-13.546527-4.022617-6.961552-4.684696-10.475586-12.419867-9.127891-20.155039l38.011732-222.016513c2.078335-12.198833-1.988284-24.619724-10.939143-33.370015L125.02397 441.443038c-5.635347-5.492084-7.55814-13.348006-5.061272-20.453844 2.63092-7.481392 9.812483-13.116739 18.298761-14.332427l223.674269-32.552393c12.839423-1.857301 23.867594-9.813506 29.481452-21.216207l97.194646-197.396789C492.325403 147.965983 500.590648 143.114488 509.606998 143.114488M509.606998 104.904235c-24.043602 0-45.922912 13.226233-56.177464 33.95637L356.189863 336.302419l-223.674269 32.54216c-22.983457 3.304256-42.100864 18.718317-49.481971 39.659255-7.381108 21.048385-1.812275 44.23241 14.431687 60.033281l163.916257 160.125931-38.011732 222.016513c-3.868097 22.408359 6.03239 44.819788 25.458835 57.94676 10.69662 7.116071 23.204491 10.784624 35.757388 10.784624 10.298554 0 20.663622-2.475378 30.055526-7.337105l194.987926-102.7205L704.662463 912.072815c9.369392 4.861728 19.712971 7.337105 29.990035 7.337105 12.57541 0 25.082258-3.668553 35.778878-10.784624 19.426445-13.126972 29.305443-35.538401 25.460882-57.94676l-38.012755-222.016513 163.937746-160.125931c16.22145-15.812127 21.810748-38.984896 14.408151-60.033281-7.402597-20.940938-26.51898-36.353976-49.503461-39.659255L663.04767 336.302419l-97.240695-197.441814C555.619962 118.131491 533.695626 104.904235 509.606998 104.904235L509.606998 104.904235z"
                p-id="11749"
                fill="#d81e06"
              ></path>
            </svg>
            <p>歌房</p>
          </div>
        </li>
        <li @click="unFinish">
          <div class="svg">
            <svg
              t="1656919696377"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2183"
              width="32"
              height="32"
            >
              <path
                d="M812.221666 596.623329c39.231513 0 71.148433-31.917944 71.148433-71.151503 0-39.23049-31.91692-71.14741-71.148433-71.14741-39.23356 0-71.151503 31.91692-71.151503 71.14741C741.069139 564.705386 772.988106 596.623329 812.221666 596.623329zM812.221666 491.163439c18.917862 0 34.30941 15.391549 34.30941 34.308387 0 18.919908-15.391549 34.31248-34.30941 34.31248-18.919908 0-34.31248-15.392572-34.31248-34.31248C777.908162 506.553964 793.300734 491.163439 812.221666 491.163439z"
                p-id="2184"
                fill="#d81e06"
              ></path>
              <path
                d="M664.837944 467.568045c39.231513 0 71.14741-31.917944 71.14741-71.151503 0-39.23049-31.915897-71.14741-71.14741-71.14741s-71.14741 31.91692-71.14741 71.14741C593.690534 435.649078 625.606431 467.568045 664.837944 467.568045zM664.837944 362.107131c18.917862 0 34.308387 15.391549 34.308387 34.308387 0 18.919908-15.390525 34.31248-34.308387 34.31248s-34.308387-15.392572-34.308387-34.31248C630.529557 377.49868 645.920082 362.107131 664.837944 362.107131z"
                p-id="2185"
                fill="#d81e06"
              ></path>
              <path
                d="M981.344504 494.64575l0-95.1685c0-38.181601-6.478552-71.91796-19.254529-100.272751-11.484565-25.486464-28.085662-46.812165-49.343825-63.382563-44.128033-34.399461-96.464005-39.535435-123.733069-39.535435L530.602683 196.286502l0-47.291073c0-10.172687-8.246825-18.419512-18.419512-18.419512s-18.419512 8.246825-18.419512 18.419512l0 47.291073L220.949204 196.286502c-27.269064 0-79.605036 5.136997-123.733069 39.535435-21.25714 16.570397-37.859259 37.896098-49.342802 63.382563-12.777001 28.354791-19.254529 62.09115-19.254529 100.272751l0 95.158267-0.01535 27.733645 0 151.796218c0 65.411779 53.218062 118.628818 118.631888 118.628818l47.955198 0c3.240811 0.156566 17.126053 0.596588 33.735335-2.153036 26.479071-4.379751 46.794769-14.349823 60.382229-29.635971 14.512529-16.32685 22.955828-28.534893 24.713868-31.140231 14.757099-19.72525 36.772508-31.719422 65.444525-35.655058 5.853311-0.803295 11.965519-1.336438 18.674315-1.626034l70.296019 0 0.316202 0.002047 0.37453-0.01535c0.423649-0.008186 42.156122-1.160429 61.145615 22.577205 6.353708 7.942903 17.944697 9.234315 25.889647 2.877537 7.943926-6.354731 9.231245-17.945721 2.877537-25.889647-29.641087-37.052894-84.874039-36.561707-90.896196-36.390815l-70.39528 0-0.76748 0.016373c-8.03193 0.334621-15.400758 0.974188-22.526039 1.952468-39.023782 5.354961-69.39858 22.364357-90.282213 50.554396l-0.567935 0.811482c-0.075725 0.113587-7.688099 11.539824-21.830191 27.450189-16.142655 18.159592-52.369741 20.199041-64.925708 19.462261l-0.587378-0.037862-49.0266 0c-45.101197 0-81.792864-36.68962-81.792864-81.789795L65.442478 522.379395l0.01535-27.733645 0-95.1685c0-61.172221 18.305925-106.458637 54.407144-134.601604 35.43914-27.626197 78.543867-31.751145 101.084233-31.751145l568.062853 0c22.540366 0 65.645093 4.124947 101.084233 31.751145 36.102243 28.142967 54.408167 73.429383 54.408167 134.601604l0 95.178733 0.01535 27.713178 0 151.796218c0 45.099151-36.691667 81.789795-81.792864 81.789795l-48.439222 0-1.174756 0.037862c-11.68718 0.750083-48.713468-1.222851-64.924685-19.462261-14.143115-15.910365-21.75549-27.336602-21.816888-27.429723l-0.581238-0.831948c-20.883633-28.190039-51.259454-45.199435-90.278119-50.553373-5.613858-0.772596-19.290345-1.197268-36.586267-1.673106-4.142343-0.113587-7.53358-0.205685-9.326413-0.280386-10.161431-0.423649-18.74697 7.472182-19.170618 17.635659s7.472182 18.74697 17.635659 19.170618c1.973958 0.081864 5.449106 0.178055 9.849322 0.298805 8.532327 0.234337 28.514427 0.784876 32.586163 1.343601 28.6669 3.934612 50.682309 15.928784 65.440431 35.653011 1.75804 2.604314 10.200316 14.813381 24.714891 31.142278 13.586436 15.284101 33.902134 25.255197 60.381206 29.634948 11.480472 1.899256 21.658276 2.275833 27.919886 2.275833 2.797719 0 4.814656-0.074701 5.815449-0.122797l47.956222 0c65.413825 0 118.631888-53.217039 118.631888-118.628818L981.359854 522.358929 981.344504 494.64575z"
                p-id="2186"
                fill="#d81e06"
              ></path>
              <path
                d="M268.360004 585.593112c0.013303 0 0.025583 0 0.039909 0 10.153244 0 18.396999-8.221242 18.418488-18.380626l0.220011-105.304348 105.065917-0.23843c10.172687-0.022513 18.400069-8.28878 18.377556-18.461467-0.022513-10.159384-8.264221-18.377556-18.418488-18.377556-0.014326 0-0.028653 0-0.042979 0l-104.905258 0.23843 0.220011-105.146758c0.021489-10.172687-8.207939-18.436908-18.380626-18.458397-0.013303 0-0.025583 0-0.039909 0-10.154267 0-18.396999 8.222265-18.418488 18.380626l-0.220011 105.307418-105.065917 0.23843c-10.172687 0.022513-18.400069 8.28878-18.377556 18.461467 0.022513 10.159384 8.264221 18.377556 18.418488 18.377556 0.013303 0 0.028653 0 0.042979 0l104.905258-0.23843-0.220011 105.142665C249.957889 577.307402 258.187317 585.572646 268.360004 585.593112z"
                p-id="2187"
                fill="#d81e06"
              ></path>
            </svg>
            <p>游戏专区</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 每日推荐 -->
    <div class="recommendedDaily">
      <div class="songlist">
        <div class="title">
          <h3>推荐歌单</h3>
          <div class="more">
            更多
            <svg
              t="1656638034812"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2138"
              width="12"
              height="12"
            >
              <path
                d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z"
                p-id="2139"
                fill="#707070"
              ></path>
            </svg>
          </div>
        </div>

        <!-- 每日推荐歌单列表 -->
        <div class="lists">
          <van-loading v-if="!creatives" />
          <ul v-if="creatives">
            <router-link
              tag="li"
              :to="'/songlist?id=' + songlist.creativeId"
              v-for="songlist in creatives"
              :key="songlist.creativeId"
            >
              <div class="img">
                <img :src="songlist.uiElement.image.imageUrl" alt="" />
                <div class="playView">
                  <div class="num">
                    <svg
                      t="1656938202462"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2833"
                      width="12"
                      height="12"
                    >
                      <path
                        d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                        fill="#ffffff"
                        p-id="2834"
                      ></path>
                    </svg>
                    {{
                      songlist.resources[0].resourceExtInfo.playCount
                        | playCountNum
                    }}
                  </div>
                </div>
              </div>
              <p>
                {{ songlist.uiElement.mainTitle.title }}
              </p>
            </router-link>
          </ul>
        </div>
      </div>
    </div>

    <!-- 滑动歌单 -->
    <div class="selectedSong">
      <div class="title">
        <h3 v-if="BLOCK_STYLE_RCMD.uiElement">
          <span></span>
          {{ BLOCK_STYLE_RCMD.uiElement.subTitle.title }}
        </h3>
        <div
          class="more"
          @click="setMiniListId(BLOCK_STYLE_RCMD.resourceIdList)"
        >
          <svg
            t="1657000679304"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5419"
            width="10"
            height="10"
          >
            <path
              d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
              fill="#3D3D3D"
              p-id="5420"
            ></path>
          </svg>
          播放
        </div>
      </div>
      <!-- 滑动歌单列表 -->
      <div class="lists">
        <van-swipe
          :loop="false"
          :width="340"
          :lazy-render="true"
          :show-indicators="false"
        >
          <van-swipe-item
            v-for="(item, index) in BLOCK_STYLE_RCMD.creatives"
            :key="index"
          >
            <!-- 歌单块儿 -->
            <div
              class="swiper-in"
              v-for="data in item.resources"
              :key="data.resourceId"
              @click="setId(data.resourceId)"
            >
              <img :src="data.uiElement.image.imageUrl" alt="" />
              <h4>
                {{ data.resourceExtInfo.songData.name }}
                <span>-{{ data.resourceExtInfo.songData.album.name }}</span>
              </h4>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!-- 个人雷达歌单 -->
    <div class="IndividualSongLists">
      <div class="songlist">
        <div class="title">
          <h3 v-if="HOMEPAGE_BLOCK_MGC_PLAYLIST.uiElement">{{HOMEPAGE_BLOCK_MGC_PLAYLIST.uiElement.subTitle.title}}</h3>
          <div class="more">
            更多
            <svg
              t="1656638034812"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2138"
              width="12"
              height="12"
            >
              <path
                d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z"
                p-id="2139"
                fill="#707070"
              ></path>
            </svg>
          </div>
        </div>
        <div class="lists">
          <ul v-if="HOMEPAGE_BLOCK_MGC_PLAYLIST">
            <router-link
              tag="li"
              :to="'/songlist?id=' + songlist.creativeId"
              v-for="songlist in HOMEPAGE_BLOCK_MGC_PLAYLIST"
              :key="songlist.creativeId"
            >
              <div class="img" v-if="songlist && songlist.uiElement && songlist.uiElement.image">
                <img
                  :src="songlist.uiElement.image.imageUrl"
                  alt=""
                />
                <div class="playView">
                  <div class="num">
                    <svg
                      t="1656938202462"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2833"
                      width="12"
                      height="12"
                    >
                      <path
                        d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                        fill="#ffffff"
                        p-id="2834"
                      ></path>
                    </svg>
                    {{
                      songlist.resources[0].resourceExtInfo
                        .playCount | playCountNum
                    }}
                  </div>
                </div>
              </div>
              <p v-if="songlist && songlist.uiElement && songlist.uiElement.mainTitle">
                {{ songlist.uiElement.mainTitle.title }}
              </p>
            </router-link>
          </ul>
        </div>
      </div>
    </div>

    <bottomnav> </bottomnav>
  </div>
</template>



<script>
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 《组件名称》 from '《组件路径》';
import Vue from "vue";
import { Swipe, SwipeItem, CountDown, Loading, Toast } from "vant";
import { getBanner, getHomepage } from "../api/home";
import bottomnav from "../components/basce/BottomNav.vue";
Vue.use(Swipe).use(SwipeItem).use(CountDown).use(Loading);
import Swiper from "swiper";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { bottomnav },
  data() {
    //这里存放数据
    return {
      id: "null",
      banners: [],
      creatives: [],
      BLOCK_STYLE_RCMD: {
        uiElement: "",
        creatives: [],
      },
      HOMEPAGE_BLOCK_MGC_PLAYLIST: {
        uiElement: "",
        creatives: [],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    /* 获取轮播图数据方法 */
    getBannerFun() {
      getBanner().then((data) => {
        console.log("轮播图数据==>", data);
        this.banners = data.banners;
      });
    },
    /* 获取页面数据方法 */
    getHomepageFun() {
      getHomepage().then((data) => {
        console.log("页面数据==>", data);
        let blocks = data.data.blocks;

        /* 推荐歌单 */
        let creativesIndex = blocks.findIndex(
          (item) => item.blockCode == "HOMEPAGE_BLOCK_PLAYLIST_RCMD"
        );
        this.creatives = data.data.blocks[creativesIndex].creatives;
        console.log("推荐歌单数据==>" + this.creatives);

        /* 猜你喜欢 */
        let BLOCK_STYLE_RCMDIndex = blocks.findIndex(
          (item) => item.blockCode == "HOMEPAGE_BLOCK_STYLE_RCMD"
        );
        this.BLOCK_STYLE_RCMD = data.data.blocks[BLOCK_STYLE_RCMDIndex];
        console.log("猜你喜欢歌曲数据==>" + this.BLOCK_STYLE_RCMD);

        /* 个人雷达歌单 */
        let HOMEPAGE_BLOCK_MGC_PLAYLISTIndex = blocks.findIndex(
          (item) => item.blockCode == "HOMEPAGE_BLOCK_MGC_PLAYLIST"
        );
        this.HOMEPAGE_BLOCK_MGC_PLAYLIST =
          data.data.blocks[HOMEPAGE_BLOCK_MGC_PLAYLISTIndex].creatives;
        this.HOMEPAGE_BLOCK_MGC_PLAYLIST.uiElement =
          data.data.blocks[HOMEPAGE_BLOCK_MGC_PLAYLISTIndex].uiElement;
        console.log("个人雷达歌单数据==>" + this.HOMEPAGE_BLOCK_MGC_PLAYLIST);
        console.log("个人雷达歌单标题名==>" + this.HOMEPAGE_BLOCK_MGC_PLAYLIST.uiElement);
      });
    },
    /* 获取歌曲id方法 */
    setId(id) {
      this.$emit("get-player-id", id);
    },
    /* 获取Mini歌单方法 */
    setMiniListId(item) {
      this.$emit("get-mini-List", item);
    },

    /* 未完成提示方法 */
    unFinish() {
      Toast("该功能维护中，请稍后再试吧~");
    },
  },
  filters: {
    /* 播放量 */
    playCountNum(value) {
      if (value < 10000) {
        return value;
      }
      let w = value > 10000 ? value / 10000 : value;
      let y = w > 10000 ? parseInt(w / 10000) + "亿" : parseInt(w) + "万";
      return y;
    },
  },
  //生命周期 - 创建完成(可以访问当前this实例)
  created() {
    this.getBannerFun();
    this.getHomepageFun();
  },
  //生命周期 - 挂载完成(可以访问DOM元素)
  mounted() {
    new Swiper(".swiper-container-selectedSong", {
      slidesPerView: "auto",
      spaceBetween: 12,
      observer: true,
      observeParents: true,
    });
  },
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
* {
  margin: 0;
  padding: 0;
}

.home {
  //padding: 0 0.6rem;
  padding-bottom: 100px;
  margin: 0 auto;
  background-image: linear-gradient(#e8ecec 40%, #ffffff 60%);
  /* 搜索框 */
  .topSearch {
    padding-left: 0.625rem;
    padding-top: 0.625rem;
    display: flex;
    justify-content: space-between;
    .leftmore {
      line-height: 1.8125rem;
    }
    .search {
      width: 18.625rem;
      height: 1.8125rem;
      background-color: white;
      border-radius: 3.125rem;
      .search-in {
        width: 4.375rem;
        line-height: 1.8125rem;
        display: flex;
        margin: 0 auto;
        .searchText {
          font-size: 0.5rem;
        }
      }
    }
    .microphone {
      line-height: 1.8125rem;
    }
  }

  /* 轮播图 */
  .banner {
    margin: 0 auto;
    margin-top: 10px;
    padding: 0 0.6rem;
    .my-swipe {
      border-radius: 0.4375rem;
      .van-swipe-item {
        img {
          width: 100%;
        }
      }
    }
  }

  /* 分类 */
  .classify {
    margin: 0.75rem 0 0 0;
    padding-bottom: 0.75rem;
    padding-left: 0.75rem;
    overflow-x: scroll;
    border-bottom: 1px solid #f5f5f5;

    ul {
      display: flex;
      li {
        width: 3rem;
        margin-right: 2rem;
        font-size: 0.125rem;
        flex-direction: column;
        svg {
          width: 1rem;
          height: 1rem;
          padding: 0.5rem;
          margin: 0 auto;
          background-color: rgb(255, 241, 241);
          border-radius: 3.125rem;
        }
        p {
          width: 3rem;
        }
      }
    }
  }

  /* 每日推荐 */
  .recommendedDaily {
    margin: 0 0.6rem;
    padding: 0 0.6rem;
    background-color: white;
    border-radius: 0.4375rem;
    .songlist {
      .title {
        margin-left: 0.5rem;
        height: 1.9375rem;
        line-height: 1.9375rem;
        padding-left: 1.25rem 0;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        .more {
          height: 1.25rem;
          line-height: 1.3125rem;
          width: 2.625rem;
          border: 1px solid #f7f7f7;
          border-radius: 0.625rem;
          font-size: 0.625rem;
          text-align: center;
          margin-right: 0.75rem;
          margin-top: 0.3125rem;
        }
      }
    }
    /* 歌单块儿 */
    .lists {
      ul {
        display: flex;
        overflow-x: scroll;
        li {
          width: 6.875rem;
          margin-right: 0.4375rem;

          .img {
            width: 6.875rem;
            height: 6.875rem;
            box-shadow: 0px -2px 1px #f2f2f2;
            border-radius: 8px;
            position: relative;
            .playView {
              position: absolute;
              top: 2px;
              right: 2px;
              height: 14px;
              line-height: 14px;
              color: #fff;
              background-color: #c5c5c5;
              border-radius: 7px;
              font-size: 10px;
              .num {
                transform: scale(0.8);
              }
            }
            img {
              width: 6.875rem;
              height: 6.875rem;
              border-radius: 6px;
            }
          }
          p {
            text-align: left;
            height: 2.1875rem;
            overflow: hidden;
            font-size: 0.4rem;
          }
        }
      }
    }
  }

  /* 滑动歌单 */
  .selectedSong {
    margin: 0 0.6rem;
    padding: 0 0.6rem;
    margin-top: 0.5rem;
    background-color: #fff;
    border-radius: 0.4375rem;
    height: 222px;
    .title {
      display: flex;
      justify-content: space-between;
      h3 {
        height: 1.9375rem;
        line-height: 1.9375rem;
        //padding-left: 1.25rem;
        //background: url("../assets/img/01.png") no-repeat left center;
        background-size: 1.125rem;
      }
      .more {
        height: 1.25rem;
        line-height: 1.3125rem;
        width: 2.625rem;
        border: 1px solid #f7f7f7;
        border-radius: 0.625rem;
        font-size: 0.625rem;
        text-align: center;
        margin-right: 0.75rem;
        margin-top: 0.3125rem;
      }
    }
    /* 歌单块儿 */
    .lists {
      height: 3 * 3.625rem;
      .van-swipe {
        .van-swipe-item {
          text-align: center;
          .swiper-in {
            display: flex;
            margin: 5px;
            img {
              box-shadow: 0 -0.125rem 0.0625rem #f2f2f2;
              width: 3.625rem;
              height: 3.625rem;
              border-radius: 0.5rem;
              overflow: hidden;
              position: relative;
            }
            h4 {
              margin-left: 5px;
              text-align: left;
              width: 270px;
              font-size: 1rem;
              border-bottom: 1px solid rgb(236, 236, 236);
              span {
                font-size: 0.5rem;
              }
            }
          }
        }
      }
    }
  }

  /* 个人雷达歌单 */
  .IndividualSongLists {
    margin: 0 0.6rem;
    padding: 0 0.6rem;
    background-color: white;
    border-radius: 0.4375rem;
    .songlist {
      .title {
        margin-left: 0.5rem;
        height: 1.9375rem;
        line-height: 1.9375rem;
        padding-left: 1.25rem 0;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        .more {
          height: 1.25rem;
          line-height: 1.3125rem;
          width: 2.625rem;
          border: 1px solid #f7f7f7;
          border-radius: 0.625rem;
          font-size: 0.625rem;
          text-align: center;
          margin-right: 0.75rem;
          margin-top: 0.3125rem;
        }
      }
    }
    /* 歌单块儿 */
    .lists {
      ul {
        display: flex;
        overflow-x: scroll;
        li {
          width: 6.875rem;
          margin-right: 0.4375rem;

          .img {
            width: 6.875rem;
            height: 6.875rem;
            box-shadow: 0px -2px 1px #f2f2f2;
            border-radius: 8px;
            position: relative;
            .playView {
              position: absolute;
              top: 2px;
              right: 2px;
              height: 14px;
              line-height: 14px;
              color: #fff;
              background-color: #c5c5c5;
              border-radius: 7px;
              font-size: 10px;
              .num {
                transform: scale(0.8);
              }
            }
            img {
              width: 6.875rem;
              height: 6.875rem;
              border-radius: 6px;
            }
          }
          p {
            text-align: left;
            height: 2.1875rem;
            overflow: hidden;
            font-size: 0.4rem;
          }
        }
      }
    }
  }
}
</style>