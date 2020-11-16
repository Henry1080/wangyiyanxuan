<template>
  <div class="middle-page">
    <div class="m-indexHd">
      <div class="line">
        <a class="logo" href="https://m.you.163.com/"></a>
        <div class="m-topSearchIpt ipt">
          <i class="icon u-icon-hd-search2"></i>
          <span class="placeholder">搜索商品, 共47629款好物</span>
        </div>
        <div class="loginBtn" @click="topersonage">登录</div>
      </div>
      <div class="tabWrap">
        <div class="tabAlter" v-show="allCate">全部频道</div>
        <div class="m-tabs scroll" v-show="atab">
          <header>
            <div class="inner">
              <div class="list">
                <div
                  class="tab"
                  :class="{ active: activeName == 'one' }"
                  @click="tabClick('one')"
                >
                  <span class="txt">推荐</span>
                </div>
                <div
                  class="tab"
                  :class="{ active: activeName == 'two' }"
                  @click="tabClick('two')"
                >
                  <span class="txt">居家生活</span>
                </div>
                <div
                  class="tab"
                  :class="{ active: activeName == 'three' }"
                  @click="tabClick('three')"
                >
                  <span class="txt">服饰鞋包</span>
                </div>
                <div
                  class="tab"
                  :class="{ active: activeName == 'four' }"
                  @click="tabClick('four')"
                >
                  <span class="txt">美食酒水</span>
                </div>
                <div
                  class="tab"
                  :class="{ active: activeName == 'five' }"
                  @click="tabClick('five')"
                >
                  <span class="txt">个护清洁</span>
                </div>
                <div
                  class="tab"
                  :class="{ active: activeName == 'six' }"
                  @click="tabClick('six')"
                >
                  <span class="txt">母婴亲子</span>
                </div>
                <div
                  class="tab"
                  :class="{ active: activeName == 'seven' }"
                  @click="tabClick('seven')"
                >
                  <span class="txt">运动旅行</span>
                </div>
                <div
                  class="tab"
                  :class="{ active: activeName == 'eight' }"
                  @click="tabClick('eight')"
                >
                  <span class="txt">数码家电</span>
                </div>
                <div
                  class="tab"
                  :class="{ active: activeName == 'nine' }"
                  @click="tabClick('nine')"
                >
                  <span class="txt">严选全球</span>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="toggleWrap">
          <div class="linear"></div>
          <div
            class="toggle"
            :class="{ toggleActive: allCate }"
            @click="allCatetab"
          >
            <div class="icon"></div>
          </div>
        </div>
        <div class="moreCate" v-show="allCate">
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'one' }"
            @click="tabClick2('one')"
          >
            推荐
          </div>
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'two' }"
            @click="tabClick2('two')"
          >
            居家生活
          </div>
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'three' }"
            @click="tabClick2('three')"
          >
            服饰鞋包
          </div>
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'four' }"
            @click="tabClick2('four')"
          >
            美食酒水
          </div>
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'five' }"
            @click="tabClick2('five')"
          >
            个护清洁
          </div>
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'six' }"
            @click="tabClick2('six')"
          >
            母音亲子
          </div>
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'seven' }"
            @click="tabClick2('seven')"
          >
            运动旅行
          </div>
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'eight' }"
            @click="tabClick2('eight')"
          >
            数码家电
          </div>
          <div
            class="cateTag"
            :class="{ cateTagactive: active2Name == 'nine' }"
            @click="tabClick2('nine')"
          >
            严选全球
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="allCate"></div>
    <div class="slideWarp" v-if="atab">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in swiper1List" :key="item.id">
          <img :src="item.img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="m-indexServicePolicy">
        <ul class="g-grow">
            <li class="item">
                <a>
                    <i class="u-icon u-icon-index-servicePolicy special-icon" style="background-image: url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png');"></i>
                    <span class="text">网易自营品牌</span>
                </a>
            </li>
            <li class="item">
                <a>
                    <i class="u-icon u-icon-index-servicePolicy special-icon" style="background-image: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');"></i>
                    <span class="text">30天无忧退货</span>
                </a>
            </li>
            <li class="item">
                <a>
                    <i class="u-icon u-icon-index-servicePolicy special-icon" style="background-image: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');"></i>
                    <span class="text">48小时快速退款</span>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: "one",
            active2Name: "one",
            allCate: false,
            atab: true,
            swiper1List:[],
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    // bulletClass: "my-bullet",
                    // bulletActiveClass: "my-bullet-active",
                },
                loop: true,
                autoplay: true,
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    created(){
        let url = "http://localhost:8080/swiper1.json";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        let that = this;
        xhr.onload = function(){
            that.swiper1List = JSON.parse(xhr.response).list;
        }
    },
    mounted() {
        console.log("Current Swiper instance object", this.swiper);
        this.swiper.slideTo(1, 2000, false);
    },
    methods: {
        tabClick(item) {
            this.activeName = item;
        },
        tabClick2(item) {
            this.active2Name = item;
        },
        allCatetab() {
            this.allCate = !this.allCate;
            this.atab = !this.atab;
        },
        topersonage() {
            this.$router.push({
                path: "/e",
            });
        },
    },
};
</script>

<style scoped>
.middle-page {
  flex-grow: 1;
  overflow: auto;
}
.m-indexHd {
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
}
.m-indexHd .line {
  position: relative;
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: #fff;
  padding: 0.21333rem 0.4rem;
}
.m-indexHd .line .logo {
  background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/index-20a8c6c35d0ec7b54782d2098282371f.png);
  vertical-align: middle;
  width: 1.84rem;
  height: 0.5333333333333333rem;
  background-size: 5.013333333333334rem 5.013333333333334rem;
  background-position: -1.68rem -3.36rem;
  display: inline-block;
  margin-right: 0.26667rem;
}
.m-indexHd .line > .ipt {
  flex-grow: 1;
}
.m-topSearchIpt {
  display: flex;
  flex-flow: row nowrap;
  -moz-align-items: center;
  align-items: center;
  justify-content: center;
  height: 0.74667rem;
  font-size: 0.37333rem;
  background-color: #ededed;
  border-radius: 0.10667rem;
}
.m-topSearchIpt .icon {
  width: 0.37333rem;
  height: 0.37333rem;
  margin-right: 0.13333rem;
}
.u-icon-hd-search2 {
  background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/hd-4de7d1dc8847215399843e49de640d68.png);
  display: inline-block;
  vertical-align: middle;
  background-size: 3.1733333333333333rem 2.7066666666666666rem;
}
.u-icon-hd-search2 {
  background-position: -1.8666666666666667rem -0.7466666666666667rem;
}
.m-topSearchIpt .placeholder {
  color: #666;
}
.m-indexHd .line .loginBtn {
  width: 0.98667rem;
  height: 0.53333rem;
  line-height: 0.53333rem;
  text-align: center;
  color: #dd1a21;
  border: 1px solid #dd1a21;
  border-radius: 0.10667rem;
  margin-left: 0.21333rem;
  font-size: 0.32rem;
}
.m-indexHd .tabWrap {
  position: relative;
  z-index: 2;
  background: #fff;
  margin-top: -0.01333rem;
}
.m-indexHd .tabWrap .tabAlter {
  height: 0.8rem;
  line-height: 0.8rem;
  padding-left: 0.4rem;
  font-size: 0.37333rem;
}
.m-indexHd .tabWrap .m-tabs {
  padding-right: 1.33333rem;
}
.m-tabs {
  width: 100%;
  height: 0.8rem;
}
.m-tabs > header {
  display: flex;
  flex-flow: row nowrap;
  background-color: #fff;
  position: relative;
}
.m-tabs.scroll > header .inner {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
}
.m-tabs.scroll > header .inner::-webkit-scrollbar {
  display: none;
}
.m-tabs.scroll > header .inner,
.m-tabs.scroll > header .list {
  display: flex;
  flex-flow: row nowrap;
}
.m-tabs.scroll > header .list {
  flex-shrink: 0;
  padding: 0 0.4rem;
  background: #fff;
  transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
  transition-duration: 0ms;
  transform: translate(0px, 0px) translateZ(0px);
}
.m-tabs.scroll > header .tab:first-of-type {
  margin-left: 0;
}
.m-indexHd .tabWrap .m-tabs .tab {
  margin-left: 0.26667rem;
}
.m-tabs.scroll > header .tab {
  flex-shrink: 0;
  position: relative;
  margin-left: 0.64rem;
}
.m-tabs > header .tab.active {
  color: #dd1a21;
}
.m-tabs > header .tab {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  text-align: center;
}
.m-tabs > header .tab.active .txt {
  position: relative;
  color: #dd1a21;
}
.m-tabs > header .tab .txt {
  display: inline-block;
  padding: 0 0.21333rem;
  line-height: 0.8rem;
  font-size: 0.37333rem;
  color: #333;
  text-align: center;
}
.m-tabs > header .tab.active .txt::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.05333rem;
  background-color: #dd1a21;
}
.m-indexHd .tabWrap .toggleWrap {
  display: flex;
  flex-grow: 0;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
}
.m-indexHd .tabWrap .toggleWrap .linear {
  width: 0.8rem;
  height: 0.8rem;
  background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff);
}
.m-indexHd .tabWrap .toggleWrap .toggle {
  width: 1.33333rem;
  height: 0.8rem;
  background: #fff;
}
.m-indexHd > .tabWrap .toggleWrap .toggle > .icon {
  margin: 0.2rem auto 0;
  background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/arrow-ed08e408f2e4b8dfd7d541c758377dcb.png);
  vertical-align: middle;
  width: 0.4rem;
  height: 0.4rem;
  background-size: 1.2rem 1.1333333333333333rem;
  background-position: -0.4533333333333333rem 0;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.m-indexHd .tabWrap .toggleWrap .toggle.toggleActive .icon {
  transform: rotate(180deg);
}
.m-indexHd .tabWrap .moreCate {
  padding-top: 0.32rem;
  overflow: hidden;
  font-size: 0.32rem;
}
.m-indexHd .tabWrap .moreCate .cateTag {
  width: 2rem;
  height: 0.74667rem;
  line-height: 0.74667rem;
  text-align: center;
  float: left;
  margin-bottom: 0.53333rem;
  margin-left: 0.4rem;
  background: #fafafa;
  border: 1px solid #ccc;
  border-radius: 0.05333rem;
}
.m-indexHd .tabWrap .moreCate .cateTagactive {
  border: 1px solid #dd1a21;
  color: #dd1a21;
}
.mask {
  position: fixed;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slideWarp {
  width: 100%;
  height: 3.94667rem;
  display: flex;
}
.slideWarp img {
  width: 100%;
  height: 100%;
}
.my-bullet {
  width: 0.53333rem;
  height: 0.05333rem;
  background-color: #fff;
  opacity: 0.4;
}
.my-bullet-active {
  opacity: 1;
}
.m-indexServicePolicy {
    background: #fff;
}
.m-indexServicePolicy .g-grow {
    width: 100%;
    height: .96rem;
    padding: 0 .4rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    zoom: 1;
}
.m-indexServicePolicy .item {
    flex: 1;
    float: left;
}
.m-indexServicePolicy .item a{
    display: -moz-inline-stack;
    display: inline-block;
    vertical-align: middle;
    zoom: 1;
}
.m-indexServicePolicy .item .special-icon {
    background-size: 100% 100%;
    background-position: 50%;
}
.u-icon-index-servicePolicy {
    width: .4266666666666667rem;
    height: .4266666666666667rem;
}
.u-icon-index-servicePolicy {
    display: inline-block;
    vertical-align: middle;
}
.m-indexServicePolicy .text {
    font-size: .32rem;
    color: #333;
    margin-left: .10667rem;
    line-height: .42667rem;
}
.m-indexServicePolicy .item a, .m-indexServicePolicy .text {
    display: inline-block;
    vertical-align: middle;
    zoom: 1;
}
</style>