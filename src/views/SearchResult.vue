<!-- 搜索结果页 -->
<template>
  <div class="Search">
    <!-- 搜索视图 -->
    <div class="view">
      <!-- 搜索头部 -->
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
          <input type="text" v-model="keywords" @click="showSearchViewFun" />
        </div>
        <div class="right">
          <h2>搜索</h2>
        </div>
      </div>
      <!-- 推荐搜索关键词视图 -->
      <div class="searchView" v-show="showSearchView">
        <ul>
          <!--  <li v-for="(item, index) in searchResult" :key="index"> -->
          <router-link
            tag="li"
            to="/searchresult"
            v-for="(item, index) in searchResult"
            :key="index"
          >
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
          </router-link>
          <!-- </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件(比如:组件,工具js,第三方插件js,json文件,图片文件等等)
//例如:import 《组件名称》 from '《组件路径》';
import { getSearch } from "../api/search";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      keywords: null,
      showSearchView: false,
      searchResult: null,
      chooseSearch: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    /* 输入框搜索监听 */
    keywords: function () {
      if (this.showSearchView == true) {
        console.log(this.keywords);
        this.getSearchFun();
        this.showSearchView = true;
      }
    },
    /* 搜索结果监听 */
    SearchResult: function () {
      console.log(this.SearchResult);
      this.keywords = this.SearchResult;
      this.showSearchView = false;
    },
  },
  //方法集合
  methods: {
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

    chooseSearchFun(choose) {
      this.chooseSearch = choose;
      this.keywords = choose;
      console.log(this.chooseSearch);
      this.showSearchView = false;
      this.$emit("get-search-result", this.chooseSearch);
    },
    showSearchViewFun() {
      this.showSearchView = true;
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
.Search {
  padding: 13px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
    }
    .searchBox {
    }
    .right {
    }
  }
  .searchView {
    width: 100%;
    height: 100%;
    z-index: 100;
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
}
</style>