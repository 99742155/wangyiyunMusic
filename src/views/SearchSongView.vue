<!-- 搜索页 -->
<template>
  <div class="Search">
    <!-- 搜索视图 -->
    <div class="view">
      <!-- 搜索头部 -->
      <div class="bigTop">
        <div class="top">
          <router-link tag="div" class="left" to="/home">
            <svg
              t="1657617525712"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2264"
              width="15"
              height="15"
            >
              <path
                d="M929.70745 487.72513 167.942967 487.72513l358.793666-318.918493c12.390191-11.012821 13.505595-29.982872 2.493797-42.37204-11.010775-12.388145-29.979802-13.506619-42.369993-2.492774L74.839499 490.168786c-6.407943 5.695722-10.073426 13.859659-10.073426 22.432918 0 8.573259 3.665483 16.737196 10.073426 22.432918l412.019914 366.227985c5.717212 5.082762 12.83533 7.581676 19.926842 7.581676 8.275477-0.002047 16.515139-3.403516 22.443152-10.07445 11.012821-12.389168 9.897418-31.359218-2.493797-42.37204L179.893136 548.100196l749.814314 0c16.575514 0 30.013571-13.612019 30.013571-30.187533S946.283987 487.72513 929.70745 487.72513z"
                p-id="2265"
                fill="#515151"
              ></path>
            </svg>
          </router-link>
          <div class="searchBox">
            <div class="ser">
              <svg
                t="1657630031555"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2264"
                width="13"
                height="13"
              >
                <path
                  d="M934.242232 884.637975 738.287281 695.561689l1.836835-2.302439c52.767807-65.338101 81.829703-147.602709 81.829703-231.593636 0-203.716728-165.742858-369.473913-369.411491-369.473913-203.731054 0-369.505635 165.757185-369.505635 369.473913 0 203.715705 165.774581 369.45754 369.505635 369.45754 89.26607 0 175.511339-32.450063 242.841817-91.288123l2.209318-1.929955 195.485253 186.963159 1.959631 0 0.031722 1.61887c4.947685 3.483334 10.517541 5.319146 16.5837 5.319146 16.180518 0 29.308513-13.192464 29.308513-29.310559C940.96126 896.276037 938.72329 890.239554 934.242232 884.637975zM452.541305 772.413008c-171.358763 0-310.74637-139.388631-310.74637-310.74637 0-171.34239 139.387607-310.700321 310.74637-310.700321 171.309644 0 310.700321 139.357931 310.700321 310.700321C763.241626 633.024377 623.851972 772.413008 452.541305 772.413008z"
                  p-id="2265"
                  fill="#707070"
                ></path>
              </svg>
            </div>
            <input type="text" v-model="keywords" @click="showSearchViewFun" />
            <div class="del" @click="delFun">
              <svg
                v-show="showSearchView"
                t="1657635023874"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3656"
                width="13"
                height="13"
              >
                <path
                  d="M964.794062 100.92562 923.057495 59.190077 511.999488 470.263433 100.938412 59.190077 59.203892 100.92562 470.263945 512 59.232544 923.045727 100.968088 964.78127 511.999488 553.736567 923.057495 964.8089 964.794062 923.073356 553.732985 512Z"
                  p-id="3657"
                  fill="#707070"
                ></path>
              </svg>
            </div>
          </div>
          <div class="right" @click="searchFun" @keydown.enter="keyDown">
            <h2>搜索</h2>
          </div>
        </div>
      </div>
      <!-- 推荐搜索关键词视图 -->
      <div class="searchView" v-show="showSearchView">
        <ul>
          <li v-for="(item, index) in searchResult" :key="index">
            <svg
              t="1657630031555"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2264"
              width="13"
              height="13"
            >
              <path
                d="M934.242232 884.637975 738.287281 695.561689l1.836835-2.302439c52.767807-65.338101 81.829703-147.602709 81.829703-231.593636 0-203.716728-165.742858-369.473913-369.411491-369.473913-203.731054 0-369.505635 165.757185-369.505635 369.473913 0 203.715705 165.774581 369.45754 369.505635 369.45754 89.26607 0 175.511339-32.450063 242.841817-91.288123l2.209318-1.929955 195.485253 186.963159 1.959631 0 0.031722 1.61887c4.947685 3.483334 10.517541 5.319146 16.5837 5.319146 16.180518 0 29.308513-13.192464 29.308513-29.310559C940.96126 896.276037 938.72329 890.239554 934.242232 884.637975zM452.541305 772.413008c-171.358763 0-310.74637-139.388631-310.74637-310.74637 0-171.34239 139.387607-310.700321 310.74637-310.700321 171.309644 0 310.700321 139.357931 310.700321 310.700321C763.241626 633.024377 623.851972 772.413008 452.541305 772.413008z"
                p-id="2265"
                fill="#707070"
              ></path>
            </svg>
            <p @click="chooseSearchFun(item.keyword)">
              {{ item.keyword }}
            </p>
          </li>
        </ul>
      </div>
      <!-- 未搜索视图 -->
      <div class="unSearched" v-show="unShowSearchView">
        <!-- 顶部 -->
        <div class="top" >
          <div class="singer" @click="unFinish">
            <span>
              <svg
                t="1657698249240"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7385"
                width="18"
                height="18"
              >
                <path
                  d="M933.701818 931.467636a417.373091 417.373091 0 0 0-159.511273-300.125091l-5.632-3.863272a33.605818 33.605818 0 0 0-17.594181-4.980364 28.811636 28.811636 0 0 0-34.210909 27.648 33.652364 33.652364 0 0 0 12.474181 25.972364l4.980364 3.537454a324.375273 324.375273 0 0 1 131.165091 252.509091v4.049455a34.164364 34.164364 0 0 0 68.282182 1.908363h0.698182zM823.668364 359.703273a311.854545 311.854545 0 0 0-623.429819 0 304.64 304.64 0 0 0 111.383273 235.566545 419.84 419.84 0 0 0-221.370182 340.433455l-0.372363 5.957818a1.070545 1.070545 0 0 0 0 0.372364v1.396363a28.997818 28.997818 0 0 0 57.949091 0v-0.884363h0.372363l0.465455-5.957819a356.491636 356.491636 0 0 1 219.880727-303.941818 369.058909 369.058909 0 0 0 143.313455 34.862546 312.226909 312.226909 0 0 0 134.981818-30.766546l31.557818-18.338909 25.832727-16.942545a304.965818 304.965818 0 0 0 119.202909-241.803637z m-311.854546 245.853091a247.761455 247.761455 0 0 1-249.064727-245.899637 249.111273 249.111273 0 0 1 498.036364 0 247.808 247.808 0 0 1-249.111273 245.899637z m0 0"
                  fill="#d81e06"
                  p-id="7386"
                ></path>
              </svg>
            </span>
            <span>歌手</span>
          </div>
          |
          <div class="musicStyle" @click="unFinish">
            <span>
              <svg
                t="1657698413867"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11373"
                width="18"
                height="18"
              >
                <path
                  d="M958.716134 906.900002 67.459415 906.900002 67.459415 246.709915l891.257743 0L958.717158 906.900002zM100.468203 873.89019l825.238121 0L925.706323 279.718703 100.468203 279.718703 100.468203 873.89019zM133.478014 180.690292l759.219521 0L892.697535 213.700103 133.478014 213.700103 133.478014 180.690292zM199.496613 114.671693l627.181299 0 0 33.009811L199.496613 147.681504 199.496613 114.671693zM709.084681 337.481268c-1.382487-1.329275-3.441379-2.059915-6.187933-2.059915l-307.402205 53.633524c-5.501294 1.382487-8.257058 4.858658-8.257058 10.316973l0 278.521434c0 12.375865-5.501294 18.564821-16.504906 18.564821l-45.385677 0c-24.761963 0-44.699038 5.889127-59.830667 17.543561-15.131629 11.69025-22.692838 26.812669-22.692838 45.385677 0 18.564821 7.561209 33.740452 22.692838 45.385677 15.131629 11.69025 34.725896 17.534352 58.801221 17.534352 24.066115 0 43.669592-5.845125 58.792011-17.534352 15.131629-11.646248 22.702048-27.120684 22.702048-46.416146L405.811516 514.905166l288.829198-51.573609L694.640714 624.25055c0 12.376888-6.187933 18.573008-18.564821 18.573008l-45.394886 0c-23.379477 0-42.630936 5.501294-57.762565 16.504906-15.131629 11.038404-22.692838 26.126031-22.692838 45.385677 0 19.295462 7.561209 34.769898 22.692838 46.416146 15.131629 11.69025 34.725896 17.534352 58.801221 17.534352 24.066115 0 43.325761-5.845125 57.762565-17.534352 14.44499-11.646248 21.663392-27.120684 21.663392-46.416146L711.145619 345.738325C711.144596 341.609285 710.457958 338.854545 709.084681 337.481268z"
                  p-id="11374"
                  fill="#d81e06"
                ></path>
              </svg>
            </span>
            <span>曲风</span>
          </div>
          |
          <div class="prefecture" @click="unFinish">
            <span>
              <svg
                t="1657698459612"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="13344"
                width="18"
                height="18"
              >
                <path
                  d="M232.448 263.509333c31.914667 17.749333 62.976 17.066667 89.258667-1.792l-19.029334-29.525333c-24.832 18.005333-52.906667 3.242667-72.021333-12.373333a22.784 22.784 0 0 0-28.245333-0.768A26.197333 26.197333 0 0 0 192.938667 247.466667l65.706666 241.664c-35.157333-11.690667-70.4 0-80.213333 28.416-10.24 29.269333 11.264 64.768 47.957333 79.36s74.752 2.56 85.333334-26.709334a54.442667 54.442667 0 0 0-9.386667-49.664zM773.376 233.728v-19.2l-330.752 136.533333 0.597333 1.536h-2.986666v281.6a77.824 77.824 0 0 0-13.568-5.717333c-34.816-11.178667-68.266667 4.352-75.264 34.133333s15.957333 63.914667 50.773333 75.008 68.266667-4.266667 75.264-34.133333a50.432 50.432 0 0 0 0-20.224h2.389333V421.376l256-107.008L733.866667 527.274667a80.213333 80.213333 0 0 0-13.141334-6.144c-34.816-12.544-68.266667 4.778667-75.264 38.656s15.957333 71.338667 51.2 83.797333 68.266667-4.864 75.264-38.656a62.890667 62.890667 0 0 0 0-22.613333h2.389334V233.728z"
                  fill="#d81e06"
                  p-id="13345"
                ></path>
              </svg>
            </span>
            <span>专区</span>
          </div>
          |
          <div class="findSong" @click="unFinish">
            <span>
              <svg
                t="1657698512456"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="14589"
                width="18"
                height="18"
              >
                <path
                  d="M498.2 642.3c-87.4 0-158.4-71.1-158.4-158.4v-241c0-87.4 71.1-158.4 158.4-158.4 87.4 0 158.4 71.1 158.4 158.4v241c0.1 87.4-71 158.4-158.4 158.4z m0-509.8c-60.9 0-110.4 49.5-110.4 110.4v241c0 60.9 49.5 110.4 110.4 110.4 60.9 0 110.4-49.5 110.4-110.4v-241c0.1-60.9-49.5-110.4-110.4-110.4z"
                  fill="#d81e06"
                  p-id="14590"
                ></path>
                <path
                  d="M498 497.5c-43.6 0-79.1-35.5-79.1-79.1h24c0 30.4 24.7 55.1 55.1 55.1s55.1-24.7 55.1-55.1h24c0.1 43.6-35.4 79.1-79.1 79.1z"
                  fill="#d81e06"
                  p-id="14591"
                ></path>
                <path
                  d="M498.2 787.5c-163.9 0-307.2-122.1-333.4-284l47.4-7.6c22.4 138.9 145.4 243.6 286 243.6 141.2 0 264.2-105.2 286.2-244.8l47.4 7.5c-25.5 162.7-169 285.3-333.6 285.3z"
                  fill="#d81e06"
                  p-id="14592"
                ></path>
                <path
                  d="M522.5 906h-48l-0.5-149.5h48z"
                  fill="#d81e06"
                  p-id="14593"
                ></path>
                <path
                  d="M292.6 891.5h411.3v48H292.6z"
                  fill="#d81e06"
                  p-id="14594"
                ></path>
              </svg>
            </span>
            <span>识曲</span>
          </div>
        </div>
        <!-- 广告 -->
        <div class="adv">
          <img src="../assets/img/advInSearch.png" alt="" />
        </div>
        <!-- 历史记录 -->
        <div class="history">
          <div class="top">
            <h4>历史</h4>
            <div class="del">
              <svg
                t="1657700782549"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="15627"
                width="16"
                height="16"
              >
                <path
                  d="M607.897867 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L575.903242 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 351.94087C639.892491 753.593818 625.61532 768.043004 607.897867 768.043004z"
                  p-id="15628"
                  fill="#515151"
                ></path>
                <path
                  d="M415.930119 768.043004c-17.717453 0-31.994625-14.277171-31.994625-31.994625L383.935495 383.935495c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 351.94087C447.924744 753.593818 433.647573 768.043004 415.930119 768.043004z"
                  p-id="15629"
                  fill="#515151"
                ></path>
                <path
                  d="M928.016126 223.962372l-159.973123 0L768.043004 159.973123c0-52.980346-42.659499-95.983874-95.295817-95.983874L351.94087 63.989249c-52.980346 0-95.983874 43.003528-95.983874 95.983874l0 63.989249-159.973123 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l832.032253 0c17.717453 0 31.994625-14.277171 31.994625-31.994625S945.73358 223.962372 928.016126 223.962372zM319.946246 159.973123c0-17.545439 14.449185-31.994625 31.994625-31.994625l320.806316 0c17.545439 0 31.306568 14.105157 31.306568 31.994625l0 63.989249L319.946246 223.962372 319.946246 159.973123 319.946246 159.973123z"
                  p-id="15630"
                  fill="#515151"
                ></path>
                <path
                  d="M736.048379 960.010751 288.123635 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874L192.139761 383.591466c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 480.435411c0 17.717453 14.449185 31.994625 31.994625 31.994625l448.096758 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L768.215018 384.795565c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 479.231312C832.032253 916.835209 789.028725 960.010751 736.048379 960.010751z"
                  p-id="15631"
                  fill="#515151"
                ></path>
              </svg>
            </div>
          </div>
          <div class="list">
            <ul>
              <li
                v-for="(item, index) in historySearch"
                :key="index"
                @click="chooseHistoryFun(item.name)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 榜单 -->
        <div class="list">
          <van-swipe :loop="false" :width="195">
            <!-- 热搜榜 -->
            <van-swipe-item>
              <div class="top">
                <h4>热搜榜</h4>
                <div class="play">
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
              <div class="list">
                <ul>
                  <li
                    v-for="(item, index) in searchHot"
                    :key="index"
                    @click="chooseSearchFun(item.searchWord)"
                  >
                    <span class="index">
                      <!--  :style="[index < 3 ? color : 'red' , 'black']" -->
                      {{ index + 1 }} </span
                    >&nbsp;
                    {{ item.searchWord }}
                    <span class="img" v-show="item.iconUrl != null"
                      ><img :src="item.iconUrl" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
            </van-swipe-item>
            <!-- 话题榜 -->
            <van-swipe-item>
              <div class="top">
                <h4>话题榜</h4>
                <div class="play" @click="1">
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
              <div class="list">
                <ul>
                  <li
                    v-for="(item, index) in topicHot"
                    :key="index"
                    @click="chooseSearchFun(item.title)"
                  >
                    <span class="index">
                      <!--  :style="[index < 3 ? color : 'red' , 'black']" -->
                      {{ index + 1 }} </span
                    >&nbsp;
                    {{ item.title }}
                    <span class="img" v-show="item.iconUrl != null"
                      ><img :src="item.iconUrl" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
            </van-swipe-item>
            <!-- 有声说书榜 -->
            <van-swipe-item>
              <div class="top">
                <h4>有声说书榜</h4>
                <div class="play" @click="1">
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
              <div class="list">
                <ul>
                  <li
                    v-for="(item, index) in searchHot"
                    :key="index"
                    @click="chooseSearchFun(item.searchWord)"
                  >
                    <span class="index">
                      <!--  :style="[index < 3 ? color : 'red' , 'black']" -->
                      {{ index + 1 }} </span
                    >&nbsp;
                    {{ item.searchWord }}
                    <span class="img" v-show="item.iconUrl != null"
                      ><img :src="item.iconUrl" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
            </van-swipe-item>
            <!-- 博客榜 -->
            <van-swipe-item>
              <div class="top">
                <h4>博客榜</h4>
                <div class="play" @click="1">
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
              <div class="list">
                <ul>
                  <li
                    v-for="(item, index) in searchHot"
                    :key="index"
                    @click="chooseSearchFun(item.searchWord)"
                  >
                    <span class="index">
                      <!--  :style="[index < 3 ? color : 'red' , 'black']" -->
                      {{ index + 1 }} </span
                    >&nbsp;
                    {{ item.searchWord }}
                    <span class="img" v-show="item.iconUrl != null"
                      ><img :src="item.iconUrl" alt="" />
                    </span>
                  </li>
                </ul>
              </div>
            </van-swipe-item>
            <!-- 视频榜 -->
            <van-swipe-item>
              <div class="top">
                <h4>视频榜</h4>
                <div class="play" @click="1">
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
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <!-- 搜索后视图 -->
      <div class="searched" v-show="!unShowSearchView">
        <div class="song">
          <div class="top">
            <div class="leftText">
              <h3>单曲</h3>
            </div>
            <div class="rightPlayAll" @click="playAll">
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
          <van-loading v-if="!result"/>
          <div class="list">
            <ul>
              <li
                v-for="(item, index) in result"
                :key="index"
                @click="setId(item.id)"
              >
                <div class="songInfo">
                  <div class="songName">{{ item.name }}</div>
                  <!-- 是否原唱 -->
                  <span
                    v-show="item.originCoverType == 1"
                    style="
                      width: 12px;
                      height: 7px;
                      color: rgb(255, 255, 255);
                      background-color: rgb(255, 58, 58);
                      font-size: 10px;
                      border-radius: 2px;
                      margin-right: 3px;
                      padding: 0 3px;
                    "
                    >原唱</span
                  >
                  <!-- 是否无损 -->
                  <span
                    v-show="item.sq != null"
                    style="
                      width: 14px;
                      height: 7px;
                      padding:0 2px;
                      color: rgb(255, 96, 96);
                      font-size: 10px;
                      border: 1px solid rgb(255, 96, 96);
                      border-radius: 2px;
                      margin-right: 3px;
                      text-align: center;
                    "
                    >SQ</span>
                  <span
                    class="artists"
                    v-for="(artists, index) in item.ar"
                    :key="index"
                    >{{ artists.name }}
                    <span v-show="artists.length >= 1">/</span>
                  </span>
                  <span v-show="item.al.name != ''" class="album"
                    >-{{ item.al.name }}</span
                  >
                  <div
                    class="originAr"
                    v-if="item.originSongSimpleData != null"
                  >
                    原唱：
                    <span
                      v-for="(originAr, index) in item.originSongSimpleData
                        .artists"
                      :key="index"
                      >{{ originAr.name }}</span
                    >
                  </div>
                </div>
                <div class="more" v-show="false">
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
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <bottomnav></bottomnav>
  </div>
</template>

<script>
import { Toast } from "vant";
import bottomnav from "../components/basce/BottomNav.vue";
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 《组件名称》 from '《组件路径》';
import {
  getSearch,
  getSearchResult,
  getSearchHot,
  getTopicHot,
} from "../api/search";
import { getTopList } from "../api/toplist";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { bottomnav },
  data() {
    //这里存放数据
    return {
      keywords: null,
      showSearchView: false,
      searchResult: null,
      chooseSearch: null,
      unShowSearchView: true,
      showSearched: false,
      result: null,
      searchHot: null,
      topicHot: null,
      TopList: null,
      historySearch: [
        {
          name: "ハルノユキ",
        },
        {
          name: "恋音と雨空",
        },
        {
          name: "雅俗共赏",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    keywords: function () {
      if (this.showSearchView == true && this.keywords != "") {
        console.log(this.showSearchView);
        console.log(this.keywords);
        this.getSearchFun();
        this.unShowSearchView = false;
        this.showSearchView = true;
      } else {
        this.showSearchView = false;
      }
    },
  },
  //方法集合
  methods: {
    /* 获取搜索建议方法 */
    getSearchFun() {
      if (this.searchResult != "" || null) {
        getSearch({
          keywords: this.keywords,
          type: "mobile",
        }).then((data) => {
          this.searchResult = data.result.allMatch;
        });
        console.log(this.searchResult);
      }
    },
    /* 选择该条搜索建议方法 */
    chooseSearchFun(choose) {
      this.chooseSearch = choose;
      this.keywords = choose;
      console.log(this.chooseSearch);
      this.showSearchView = false;
      this.unShowSearchView = false;
      /* 获取搜索结果方法 */
      getSearchResult({
        keywords: this.keywords,
      }).then((data) => {
        this.result = data.result.songs;
        console.log(this.result);
      });
    },
    /* 显示搜索建议视图方法 */
    showSearchViewFun() {
      this.showSearchView = true;
    },
    /* 搜索框清空方法 */
    delFun() {
      this.keywords = null;
      this.showSearchView = false;
    },
    /* 搜索方法 */
    searchFun() {
      if (this.keywords == "" || this.keywords == null) {
        Toast("请输入文字");
        return;
      } else {
        this.keywords;
        this.showSearchView = false;
        this.unShowSearchView = false;
        this.historySearch.push({ name: this.keywords });
        /* 获取搜索结果方法 */
        getSearchResult({
          keywords: this.keywords,
        }).then((data) => {
          this.result = data.result.songs;
          console.log(this.result, "搜索结果");
        });
      }
    },
    /* 歌曲播放方法 */
    setId(id) {
      this.$emit("get-player-id", id);
      this.$emit("get-play-all-id", this.$route.query.id);
    },
    /* 选择该条历史记录方法 */
    chooseHistoryFun(item) {
      this.keywords = item;
      this.searchFun();
    },
    /* 获取热搜方法 */
    getSearchHotFun() {
      getSearchHot().then((data) => {
        this.searchHot = data.data;
        /* console.log(this.searchHot); */
      });
    },
    /* 获取热门话题方法 */
    getTopicHotFun() {
      getTopicHot().then((data) => {
        this.topicHot = data.hot;
        console.log("热门话题data:", this.topicHot);
      });
    },
    /* 获取所有榜单方法 */
    getTopListFun() {
      getTopList().then((data) => {
        this.topList = data;
        console.log("榜单data", this.topList);
      });
    },
    playAll() {
      console.log(this.result);
      this.$emit("get-player-id", this.result[0].id);
      /* this.$emit("get-play-all-id", this.$route.query.this.result); */
    },
    keyDown(e) {
      if (e.ctrlKey && e.keyCode == 13) {
        //用户点击了ctrl+enter触发
        this.textarea += "\n";
      } else {
        //用户点击了enter触发
        this.searchFun();
      }
    },
    /* 未完成方法 */
    unFinish(){
      Toast("该功能维护中，请稍后再试")
    }
  },
  //生命周期 - 创建完成(可以访问当前this实例)
  created() {
    this.getSearchHotFun();
    this.getTopicHotFun();
    this.getTopListFun();
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
.Search {
  background-color: rgb(247, 247, 247);
  //padding: 13px;
  .bigTop {
    padding: 0 13px;
    box-sizing: border-box;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
      }
      .searchBox {
        width: 250px;
        height: 28px;
        display: flex;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        .ser {
          margin: auto;
        }
        input {
          height: 28px;
          border: none;
          background-color: rgb(255, 255, 255);
        }
        .del {
          margin: auto;
        }
      }
      .right {
        h2 {
          font-size: 16px;
        }
      }
    }
  }
  .searchView {
    padding: 0 13px;
    box-sizing: border-box;
    height: 100vh;
    ul {
      li {
        height: 40px;
        line-height: 40px;
        display: flex;
        text-align: left;
        svg {
          margin: auto 0;
          margin-right: 7px;
        }
        p {
          width: 100%;
          height: 40px;
          line-height: 40px;
          margin: 0;
          border-bottom: 1px solid rgb(234, 234, 234);
        }
      }
    }
  }
  .unSearched {
    padding: 0 13px;
    box-sizing: border-box;
    color: black;
    .top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-weight: bolder;
      .singer {
        span {
          width: 100%;
          height: 100%;
          color: black;
          svg {
            margin-right: 5px;
          }
          font-size: 18px;
        }
      }
      .musicStyle {
        span {
          width: 100%;
          height: 100%;
          font-size: 18px;
          color: black;
          svg {
            margin-right: 5px;
          }
        }
      }
      .prefecture {
        span {
          width: 100%;
          height: 100%;
          font-size: 18px;
          color: black;
          svg {
            margin-right: 5px;
          }
        }
      }
      .findSong {
        span {
          width: 100%;
          height: 100%;
          font-size: 18px;
          color: black;
          svg {
            margin-right: 5px;
          }
        }
      }
    }
    .adv {
      margin: 10px 0;
      img {
        width: 100%;
        border-radius: 8px;
      }
    }
    .history {
      .top {
        display: flex;
        justify-content: space-between;
        h4 {
          margin: 0;
          color: black;
        }
      }

      .list {
        ul {
          display: flex;
          li {
            margin: 6px;
            padding: 6px 12px;
            color: rgb(192, 192, 192);
            background: white;
            border-radius: 16px;
          }
        }
      }
    }
    .list {
      .van-swipe-item {
        padding: 12px;
        background-color: white;
        margin-right: 8px;
        border-radius: 10px;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h4 {
            margin: 0;
          }
          .play {
            display: flex;
            height: 1.25rem;
            line-height: 1.3125rem;
            width: 2.625rem;
            border: 1px solid #f7f7f7;
            border-radius: 0.625rem;
            font-size: 0.625rem;
            text-align: center;
            margin-right: 0.75rem;
            margin-top: 0.3125rem;
            svg {
              margin-top: 4px;
            }
            h4 {
              margin: 0;
            }
          }
        }
        .list {
          ul {
            li {
              height: 30px;
              line-height: 30px;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              .index {
              }
              .img {
                img {
                  height: 11px;
                }
              }
            }
            li:nth-child(-n + 3) {
              font-weight: bolder;
              .index {
                color: red;
              }
            }
          }
        }
      }
    }
    width: 100%;
    height: 100vh;
    z-index: 100;
  }

  .searched {
    padding: 15px;
    background: rgb(255, 255, 255);
    border-radius: 15px;
    .song {
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid rgb(244, 244, 244);
        .leftText {
          h3 {
            font-weight: bolder;
            margin: 0;
          }
        }
      }
      .list {
        ul {
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: left;
            padding: 10px 0;
            border-bottom: 1px solid rgb(244, 244, 244);
            .songInfo {
              .songName {
                width: 80vw;
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .artists {
                width: 100%;
                text-align: left;
                font-size: 12px;
                color: rgb(163, 163, 163);
                overflow: hidden;
              }
              .album {
                width: 100%;
                text-align: left;
                font-size: 12px;
                color: rgb(163, 163, 163);
              }
              .originAr {
                width: 100%;
                text-align: left;
                font-size: 12px;
                color: rgb(163, 163, 163);
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
}
</style>