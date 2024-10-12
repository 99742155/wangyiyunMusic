<template>
  <div class="login">
    <div class="loginGuide" v-show="showPhoneLogin">
      <router-link tag="div" class="playnow" to="/home">立即体验</router-link>
      <div class="login-in">
        <svg
          width="308"
          height="308"
          viewBox="0 0 308 308"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="114.667"
            y="114.667"
            width="78"
            height="78"
            rx="39"
            fill="#F12A24"
          ></rect>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M158.228 158.289C157.638 159.064 156.768 159.643 155.782 159.918C153.97 160.418 152.574 159.815 151.72 159.218C150.325 158.243 149.4 156.599 149.245 154.823C149.169 153.923 149.248 153.033 149.487 152.179C150.196 149.627 152.264 147.411 154.88 146.396C155.583 146.125 156.3 145.918 157.019 145.777C157.292 146.789 157.591 147.842 157.889 148.887C158.291 150.298 158.69 151.695 159.009 152.959C159.38 154.433 159.546 156.557 158.228 158.289ZM160.926 140.446C160.734 139.719 160.445 138.606 160.223 137.772C160.053 137.156 159.976 136.456 160.156 135.834C160.207 135.659 160.284 135.501 160.371 135.341C160.742 134.645 161.437 134.165 162.209 134.037C162.56 133.979 162.919 133.996 163.263 134.087C163.622 134.183 163.961 134.354 164.257 134.578C164.567 134.814 164.809 135.119 165.093 135.383C165.551 135.815 166.167 136.079 166.842 136.079C168.26 136.079 169.411 134.921 169.411 133.495C169.411 133.07 169.308 132.672 169.128 132.319C169.112 132.289 169.096 132.258 169.08 132.227C169.069 132.207 169.057 132.186 169.044 132.166C168.757 131.679 168.343 131.256 167.914 130.887C167.091 130.175 166.12 129.639 165.087 129.308C164.602 129.152 164.102 129.041 163.595 128.983C162.48 128.854 161.341 128.971 160.276 129.327C156.079 130.721 154.065 134.658 155.269 139.128C155.388 139.574 155.593 140.363 155.702 140.775C154.804 140.97 153.911 141.235 153.036 141.575C148.935 143.163 145.681 146.693 144.542 150.785C144.138 152.241 143.999 153.749 144.13 155.272C144.416 158.559 146.158 161.621 148.79 163.462C151.271 165.197 154.239 165.706 157.148 164.898C159.209 164.327 161.04 163.094 162.305 161.43C164.306 158.798 164.903 155.339 163.986 151.69C163.651 150.363 163.231 148.889 162.825 147.461C162.677 146.946 162.53 146.429 162.386 145.915C164.126 146.366 165.732 147.218 167.037 148.445C171.57 152.705 172.444 160.045 169.069 165.518C166.106 170.325 160.331 173.431 154.362 173.431C144.293 173.431 136.102 165.187 136.102 155.055C136.102 154.155 136.171 153.245 136.307 152.349C136.418 151.629 136.571 150.909 136.767 150.21C136.958 149.522 137.194 148.838 137.465 148.176C137.736 147.519 138.048 146.875 138.391 146.256C138.732 145.643 139.114 145.042 139.526 144.469C139.933 143.901 140.38 143.35 140.853 142.831C141.325 142.313 141.831 141.819 142.36 141.358C142.886 140.899 143.447 140.465 144.025 140.069C144.606 139.671 145.214 139.303 145.834 138.978C146.176 138.799 146.521 138.631 146.872 138.475C147.06 138.39 147.252 138.31 147.443 138.234C148.76 137.705 149.402 136.201 148.877 134.876C148.351 133.55 146.859 132.903 145.54 133.433C145.293 133.533 145.045 133.639 144.793 133.75C144.342 133.951 143.896 134.167 143.46 134.397C142.661 134.816 141.88 135.287 141.134 135.797C140.394 136.306 139.675 136.862 138.998 137.451C138.323 138.04 137.672 138.676 137.07 139.338C136.462 140.003 135.89 140.71 135.366 141.438C134.838 142.173 134.348 142.946 133.911 143.732C133.469 144.525 133.069 145.355 132.721 146.198C132.372 147.048 132.069 147.929 131.823 148.816C131.572 149.713 131.374 150.637 131.233 151.565C131.056 152.718 130.966 153.892 130.966 155.055C130.966 168.038 141.461 178.599 154.362 178.599C162.067 178.599 169.553 174.534 173.432 168.242C178.15 160.592 176.934 150.677 170.541 144.668C167.924 142.208 164.518 140.764 160.926 140.446Z"
            fill="white"
          ></path>
          <circle
            opacity="0.12"
            cx="154"
            cy="154"
            r="71.835"
            stroke="#FF3A3A"
            stroke-width="0.33"
            fill="none"
          ></circle>
          <circle
            opacity="0.08"
            cx="154"
            cy="154"
            r="111.835"
            stroke="#FF3A3A"
            stroke-width="0.33"
            fill="none"
          ></circle>
          <circle
            opacity="0.05"
            cx="154"
            cy="154"
            r="153.835"
            stroke="#FF3A3A"
            stroke-width="0.33"
            fill="none"
          ></circle>
        </svg>
        <div class="phoneLogin" @click="showPhoneLoginFun">手机号登陆</div>
        <div class="wechatLogin" @click="wechatLoginFun">微信登陆</div>
        <van-checkbox v-model="checked" icon-size="16px"
          >服务条款、隐私政策</van-checkbox
        >
      </div>
    </div>
    <div class="phoneIn" v-show="showPhoneNext">
      <div class="top"><span @click="goback">←</span><span> 手机号登陆</span></div>
      <div class="text">
        <div class="text1">登陆体验更多精彩</div>
        <div class="text2">未注册手机号登录后将自动创建账号</div>
        <input type="text" placeholder="请输入手机号" v-model="phone" /><span
          @click="clear"
          >X</span
        >
        <div class="getCode" @click="getCode">下一步</div>
      </div>
    </div>

    <div class="code" v-show="showCodeNext">
      <div class="top"><span @click="goback">←</span><span> 手机号登陆</span></div>
      <div class="text">
        <div class="text1">请输入验证码</div>
        <div class="text2">已发送至+86 {{ this.phone }}</div>
        <input type="password" placeholder="请输入密码" v-model="password" />
        <input type="text" placeholder="请输入验证码" v-model="code" />
        <div class="getCode" @click="submit">登陆</div>
      </div>
    </div>
    <!--  <div class="form">
      <div class="item">
        <span class="iconfont">
          <svg
            t="1657679299333"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3391"
            width="20"
            height="20"
          >
            <path
              d="M288 384v-74.666667c0-123.722667 100.266667-224 224-224s224 100.224 224 224v74.666667h10.677333C811.445333 384 864 436.597333 864 501.333333v320c0 64.821333-52.469333 117.333333-117.322667 117.333334H277.333333C212.554667 938.666667 160 886.069333 160 821.333333V501.333333c0-64.821333 52.469333-117.333333 117.322667-117.333333H288z m64 0h320v-74.666667c0-88.426667-71.605333-160-160-160-88.384 0-160 71.626667-160 160v74.666667zM224 501.333333v320c0 29.397333 23.914667 53.333333 53.322667 53.333334H746.666667A53.269333 53.269333 0 0 0 800 821.333333V501.333333c0-29.397333-23.914667-53.333333-53.322667-53.333333H277.333333A53.269333 53.269333 0 0 0 224 501.333333z"
              p-id="3392"
              fill="#707070"
            ></path>
          </svg>
        </span>
        <input type="password" placeholder="密码" v-model="password" />
      </div>
      <div class="item">
        <span class="iconfont icon-yanzhengma"></span>
        <input type="text" placeholder="验证码" v-model="code" />
        <div class="submit" @click="submit">下一步</div>
      </div>
      <div class="item">
        <div class="submit" @click="submit">提交</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { Toast } from "vant";
import { getCaptcha, getLoginCellphone } from "../../api/login";
export default {
  data() {
    return {
      code: "",
      phone: "",
      password: "",
      showPhoneLogin: true,
      showPhoneNext: false,
      showCodeNext: false,
      showPasswordLogin: false,
      checked: false,
    };
  },
  methods: {
    // 获取验证码
    getCode() {
      // 验证手机号码
      let reg =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!reg.test(this.phone)) {
        // 不正确处理
        this.$toast({ message: "手机号码错误", position: "bottom" });
        return;
      }
      // 请求数据接口
      getCaptcha({ phone: this.phone }).then((data) => {
        console.log(data);
        if (data.data) {
          this.$toast({ message: "验证码发送成功", position: "bottom" });
        } else {
          this.$toast({ message: "请输入正确手机号码", position: "bottom" });
        }
      });
      this.showPhoneNext = false;
      this.showCodeNext = true;
    },
    // 提交数据
    submit() {
      // 1.验证验证码
      // 请求用户名密码登录方法
      getLoginCellphone({
        phone: this.phone,
        password: this.password,
      }).then((data) => {
        console.log(data);
        if (data.code == 200) {
          this.$toast({ message: "登录成功", position: "bottom" });
          localStorage.setItem("token", data.token); //登录成功添加token
          this.$router.push("/home");
        } else {
          this.$toast({ message: "登录失败,请检查账号密码或验证码", position: "bottom" });
        }
      });
      //     }
      // })
    } /* 显示手机登陆方法 */,
    showPhoneLoginFun() {
      if (this.checked == false) {
        Toast("请先同意用户服务条款、隐私政策");
      } else {
        this.showPhoneLogin = false;
        this.showPhoneNext = true;
      }
    },
    /* 微信登陆方法 */
    wechatLoginFun() {
      if (this.checked == false) {
        Toast("请先同意用户服务条款、隐私政策");
      } else {
        Toast("请安装微信APP");
      }
    },
    /* 清空文本框方法 */
    clear() {
      this.phone = "";
    },

    /* 关闭mini播放器方法 */
    closeMiniPlayer() {
      this.$emit("lent-player-close", false);
    },

    /* 打开mini播放器方法 */
    showMiniPlayer() {
      this.$emit("lent-player-show", true);
    },
    /* 返回上一页方法 */
    goback(){
      console.log(11);
      this.$router.go(-1)
    }
  },
  //生命周期 - 创建完成(可以访问当前this实例)
  created() {
    this.closeMiniPlayer();
  },
  //生命周期 - 挂载完成(可以访问DOM元素)
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {
    this.showMiniPlayer();
  }, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能,这个函数会触发
};
</script>

<style lang="scss" scoped>
.login {
  //background-image: url(../../assets/img/adv.png);
  background-size: 100% 100%;
  width: 100%;
  height: 100vh;
  background-color: rgb(201, 17, 29);

  .loginGuide {
    .playnow {
      font-size: 8px;
      text-align: right;
      padding: 15px 10px 0 0;
      color: rgb(237, 149, 143);
    }

    .login-in {
      .phoneLogin {
        width: 76%;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        margin: 0 auto;
        margin-top: 10px;
        background-color: #fff;
        text-align: center;
        color: #d4473c;
        border-radius: 15px;
        margin-bottom: 12px;
      }
      .wechatLogin {
        width: 76%;
        margin: 0 auto;
        font-size: 15px;
        height: 30px;
        line-height: 30px;
        background-color: transparent;
        text-align: center;
        color: rgb(254, 248, 248);
        border: 1px solid rgb(219, 44, 31);
        border-radius: 15px;
        margin-bottom: 12px;
      }
      .van-checkbox {
        width: 45%;
        height: 18px;
        margin: 0 auto;
        span {
          font-size: 16px;
          color: rgb(237, 148, 142);
        }
      }
    }
  }

  .phoneIn {
    width: 100%;
    height: 100vh;
    margin-top: 20px;

    background-color: white;
    .top {
      margin-left: 20px;
      text-align: left;
      font-weight: 550;
    }
    .text {
      margin-top: 30px;
      margin-left: 20px;
      .text1 {
        text-align: left;
        font-weight: 550;
      }
      .text2 {
        margin-top: 10px;
        color: rgb(179, 179, 179);
        font-size: 10px;
        text-align: left;
      }
    }
    input {
      width: 85vw;
      border: none;
      border-bottom: 1px solid rgb(234, 234, 234);
      margin-top: 33px;
      padding-bottom: 6px;
    }
    .getCode {
      width: 76%;
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      margin: 0 auto;
      margin-top: 32px;
      background-color: rgb(255, 58, 58);
      text-align: center;
      color: #fff;
      border-radius: 15px;
      margin-bottom: 12px;
    }
  }
  .code {
    width: 100%;
    height: 110vh;
    margin-top: 20px;

    background-color: white;
    .top {
      margin-left: 20px;
      text-align: left;
      font-weight: 550;
    }
    .text {
      margin-top: 30px;
      margin-left: 20px;
      .text1 {
        text-align: left;
        font-weight: 550;
      }
      .text2 {
        margin-top: 10px;
        color: rgb(179, 179, 179);
        font-size: 10px;
        text-align: left;
      }
    }
    input {
      width: 85vw;
      border: none;
      border-bottom: 1px solid rgb(234, 234, 234);
      margin-top: 33px;
      padding-bottom: 6px;
    }
    .getCode {
      width: 76%;
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      margin: 0 auto;
      margin-top: 32px;
      background-color: rgb(255, 58, 58);
      text-align: center;
      color: #fff;
      border-radius: 15px;
      margin-bottom: 12px;
    }
  }
}
/* .form {
  background-color: white;
  height: 100vh;
  .item {
    width: 76%;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    background-color: #f47378;
    border-radius: 30px;
    margin-bottom: 12px;
    input {
      background-color: transparent;
      border: 0px;
      outline: none;
      text-indent: 0.5em;
      font-size: 14px;
      color: #fff;
    }
    span {
      font-size: 20px;
      margin-left: 10px;
      display: inline-block;
      vertical-align: middle;
    }
    .getCode {
      border: 1px solid #fff;
      height: 20px;
      line-height: 20px;
      width: 50px;
      border-radius: 20px;
      font-size: 12px;
      color: #808080;
      float: right;
      margin: 5px;
    }
    .submit {
      font-size: 15px;
      background-color: #fff;
      text-align: center;
      color: #d4473c;
      border-radius: 15px;
    }
  }
} */
</style>