<template>
    <div class="middle-page" @scroll="fun1">
        <div class="container" style="height:71.09px">
            <div class="m-indexHd" :class="{isactive:isshow2}">
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
                                <div
                                    class="list"
                                    style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
                                >
                                    <div
                                        class="tab"
                                        :class="{ active: activeName == 'one' }"
                                        @click="tabClick('one')"
                                    >
                                        <span class="txt">推荐</span>
                                    </div>
                                    <a
                                        href="https://m.you.163.com/item/list?categoryId=1005000"
                                        class="tab"
                                        :class="{ active: activeName == 'two' }"
                                        @click="tabClick('two')"
                                    >
                                        <span class="txt">居家生活</span>
                                    </a>
                                    <a
                                        href="https://m.you.163.com/item/list?categoryId=1010000"
                                        class="tab"
                                        :class="{ active: activeName == 'three' }"
                                        @click="tabClick('three')"
                                    >
                                        <span class="txt">服饰鞋包</span>
                                    </a>
                                    <a
                                        href="https://m.you.163.com/item/list?categoryId=1005002"
                                        class="tab"
                                        :class="{ active: activeName == 'four' }"
                                        @click="tabClick('four')"
                                    >
                                        <span class="txt">美食酒水</span>
                                    </a>
                                    <a
                                        href="https://m.you.163.com/item/list?categoryId=1013001"
                                        class="tab"
                                        :class="{ active: activeName == 'five' }"
                                        @click="tabClick('five')"
                                    >
                                        <span class="txt">个护清洁</span>
                                    </a>
                                    <a
                                        href="https://m.you.163.com/item/list?categoryId=1011000"
                                        class="tab"
                                        :class="{ active: activeName == 'six' }"
                                        @click="tabClick('six')"
                                    >
                                        <span class="txt">母婴亲子</span>
                                    </a>
                                    <a
                                        href="https://m.you.163.com/item/list?categoryId=109243029"
                                        class="tab"
                                        :class="{ active: activeName == 'seven' }"
                                        @click="tabClick('seven')"
                                    >
                                        <span class="txt">运动旅行</span>
                                    </a>
                                    <a
                                        href="https://m.you.163.com/item/list?categoryId=1043000"
                                        class="tab"
                                        :class="{ active: activeName == 'eight' }"
                                        @click="tabClick('eight')"
                                    >
                                        <span class="txt">数码家电</span>
                                    </a>
                                    <a
                                        href="https://m.you.163.com/item/list?categoryId=1019000"
                                        class="tab"
                                        :class="{ active: activeName == 'nine' }"
                                        @click="tabClick('nine')"
                                    >
                                        <span class="txt">严选全球</span>
                                    </a>
                                </div>
                            </div>
                        </header>
                    </div>

                    <div class="toggleWrap">
                        <div class="linear"></div>
                        <div class="toggle" :class="{ toggleActive: allCate }" @click="allCatetab">
                            <div class="icon"></div>
                        </div>
                    </div>
                    <div class="moreCate" v-show="allCate">
                        <div
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'one' }"
                            @click="tabClick2('one')"
                        >推荐</div>
                        <a
                            href="https://m.you.163.com/item/list?categoryId=1005000"
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'two' }"
                            @click="tabClick2('two')"
                        >居家生活</a>
                        <a
                            href="https://m.you.163.com/item/list?categoryId=1010000"
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'three' }"
                            @click="tabClick2('three')"
                        >服饰鞋包</a>
                        <a
                            href="https://m.you.163.com/item/list?categoryId=1005002"
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'four' }"
                            @click="tabClick2('four')"
                        >美食酒水</a>
                        <a
                            href="https://m.you.163.com/item/list?categoryId=1013001"
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'five' }"
                            @click="tabClick2('five')"
                        >个护清洁</a>
                        <a
                            href="https://m.you.163.com/item/list?categoryId=1011000"
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'six' }"
                            @click="tabClick2('six')"
                        >母音亲子</a>
                        <a
                            href="https://m.you.163.com/item/list?categoryId=109243029"
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'seven' }"
                            @click="tabClick2('seven')"
                        >运动旅行</a>
                        <a
                            href="https://m.you.163.com/item/list?categoryId=1043000"
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'eight' }"
                            @click="tabClick2('eight')"
                        >数码家电</a>
                        <a
                            href="https://m.you.163.com/item/list?categoryId=1019000"
                            class="cateTag"
                            :class="{ cateTagactive: active2Name == 'nine' }"
                            @click="tabClick2('nine')"
                        >严选全球</a>
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
                        <i
                            class="u-icon u-icon-index-servicePolicy special-icon"
                            style="
                background-image: url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png');
              "
                        ></i>
                        <span class="text">网易自营品牌</span>
                    </a>
                </li>
                <li class="item">
                    <a>
                        <i
                            class="u-icon u-icon-index-servicePolicy special-icon"
                            style="
                background-image: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');
              "
                        ></i>
                        <span class="text">30天无忧退货</span>
                    </a>
                </li>
                <li class="item">
                    <a>
                        <i
                            class="u-icon u-icon-index-servicePolicy special-icon"
                            style="
                background-image: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');
              "
                        ></i>
                        <span class="text">48小时快速退款</span>
                    </a>
                </li>
            </ul>
        </div>
        <div
            class="m-kingKongModule"
            style="
        background: url('https://yanxuan.nosdn.127.net/fe0bd37a552434cc0d27c1889ff3e1fe.png')
          rgb(255, 255, 255);
      "
        >
            <div v-for="item in modulelist" :key="item.id">
                <a :href="item.url" class="kingkong-item mb-9">
                    <div class="icon">
                        <img class="img" :src="item.img" alt />
                    </div>
                    <div class="txt" style="color: rgb(51, 51, 51)">{{ item.txt }}</div>
                </a>
            </div>
        </div>
        <a
            href="https://act.you.163.com/act/pub/WYWjjqrCaOWX.html"
            class="m-indexBigPromotionModule"
            style="
        background-color: initial;
        background-image: none;
        background-size: 100% 100%;
      "
        >
            <div class="floor floorTop" style="height: 4.28444rem">
                <a
                    class="promItem promItem-1"
                    style="
            background-image: url('https://yanxuan.nosdn.127.net/c267451e10bc75f513770f14f1232ddc.gif?imageView&quality=75');
            background-size: 100% 100%;
          "
                ></a>
            </div>
            <div class="floor floorFirst" style="height: 1.06667rem">
                <a
                    class="promItem promItem-1"
                    style="
            background-image: url('https://yanxuan.nosdn.127.net/5f3f87d0e21eadcd780c4aafeb2cda00.jpg?quality=75&type=webp&imageView&thumbnail=750x0');
            background-size: 100% 100%;
          "
                ></a>
            </div>
        </a>
        <div class="page-content">
            <div class="lazy-component-wrapper">
                <div class="m-freshmanModule m-indexFloor">
                    <div class="moduleTitle">
                        <span class="txt">新人专享礼</span>
                    </div>
                    <div class="content">
                        <div class="left">
                            <div class="name">新人专享礼包</div>
                            <div class="imgWrap">
                                <div class="m-lazyload img m-lazyload-loaded">
                                    <img
                                        src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                                        class="swiper-lazy"
                                    />
                                </div>
                                <div class="animate"></div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="module1">
                                <div class="m-activityItem">
                                    <div class="picWrap">
                                        <div class="m-lazyload pic m-lazyload-loaded">
                                            <img
                                                src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?quality=75&type=webp&imageView&thumbnail=200x200"
                                                alt
                                                class="swiper-lazy"
                                            />
                                        </div>
                                        <div class="discount">
                                            <div class="line1">￥30</div>
                                            <div class="line2">￥139</div>
                                        </div>
                                    </div>
                                    <div class="cnt">
                                        <div class="title">福利社</div>
                                        <div class="subTitle">今日特价</div>
                                    </div>
                                </div>
                            </div>
                            <div class="module2">
                                <div class="m-activityItem">
                                    <div class="picWrap">
                                        <div class="m-lazyload pic m-lazyload-loaded">
                                            <img
                                                src="https://yanxuan-item.nosdn.127.net/2c0147161faaa160cf10b6770f1e290d.png?quality=75&type=webp&imageView&thumbnail=200x200"
                                                alt
                                                class="swiper-lazy"
                                            />
                                        </div>
                                        <div class="discount">
                                            <div class="line1">￥35.9</div>
                                            <div class="line2">￥49.9</div>
                                        </div>
                                    </div>
                                    <div class="cnt">
                                        <div class="title">新人拼团</div>
                                        <div class="subTitle"></div>
                                        <div class="tag">一元起包邮</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lazy-component-wrapper">
                <div class="m-categoryHotSellModule m-indexFloor">
                    <div class="moduleTitle">
                        <div class="left">类目热销榜</div>
                    </div>
                    <div class="content">
                        <div class="line1">
                            <div class="item-big item-1">
                                <div>
                                    <div class="name">
                                        <span class="txt">热销榜</span>
                                    </div>
                                </div>
                                <div class="imgWrap">
                                    <div class="m-lazyload undefined m-lazyload-loaded">
                                        <img
                                            src="https://yanxuan-item.nosdn.127.net/c40842640f6a1a2509960c2029aca1b8.png?quality=75&type=webp&imageView&thumbnail=200x200"
                                            class="swiper-lazy"
                                            alt
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="item-big item-2">
                                <div>
                                    <div class="name">
                                        <span class="txt">好评榜</span>
                                    </div>
                                </div>
                                <div class="imgWrap">
                                    <div class="m-lazyload undefined m-lazyload-loaded">
                                        <img
                                            src="https://yanxuan-item.nosdn.127.net/ed4850fd42f32616ff4783f7bf173622.png?quality=75&type=webp&imageView&thumbnail=200x200"
                                            class="swiper-lazy"
                                            alt
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line2" v-for="item in bangdanlist" :key="item.id">
                            <a :href="item.url" class="item">
                                <div class="name">{{ item.txt }}</div>
                                <div class="imgWrap">
                                    <div class="m-lazyload undefined m-lazyload-loaded">
                                        <img :src="item.img" alt class="swiper-lazy" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lazy-component-wrapper">
                <div class="m-newItemModule m-indexFloor">
                    <div class="moduleTitle">
                        <div class="left">新品首发</div>
                        <a href="https://m.you.163.com/item/newItem" class="right">
                            更多
                            <i class="icon u-icon u-icon-index-titleArrow"></i>
                        </a>
                    </div>
                    <div class="m-indexItem m-goodGrid">
                        <ul class="list">
                            <li
                                class="item"
                                v-for="item in newproductlist"
                                :key="item.id"
                                @click="toGoodsD(item)"
                            >
                                <div class="good">
                                    <div class="hd">
                                        <div class="wraper">
                                            <div class="m-lazyload undefined m-lazyload-loaded">
                                                <img :src="item.img" />
                                            </div>
                                        </div>
                                        <!-- <div class="desc">配赠马克杯，单手可握，3秒即热，7档调温，折叠设计</div> -->
                                    </div>
                                    <div class="name">{{ item.name }}</div>
                                    <!-- <div class="newItemDesc">配赠马克杯，单手可握，3秒即热，7档调温，折叠设计</div> -->
                                    <div class="price">
                                        <span class="priceInner">{{ item.price }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="lazy-component-wrapper">
                <div class="m-sceneLightShoppingGuideModule">
                    <div class="m-styleBanner">
                        <div class="title" style="color: rgb(51, 51, 51)">超值专区</div>
                        <div class="desc" style="color: rgb(127, 127, 127)">低至9.9元</div>
                        <div class="picList">
                            <img
                                src="https://yanxuan-item.nosdn.127.net/6f4174968ff47cb68d1f5dd4edb569cb.png?quality=75&type=webp&imageView&thumbnail=150x150"
                                alt
                                class="pic"
                            />
                            <img
                                src="https://yanxuan-item.nosdn.127.net/1f0c3f5d32b0e804deb9b3d56ea6c3b2.png?quality=75&type=webp&imageView&thumbnail=150x150"
                                alt
                                class="pic"
                            />
                        </div>
                    </div>
                    <div class="m-styleBanner">
                        <div class="title" style="color: rgb(51, 51, 51)">员工精选</div>
                        <div class="desc" style="color: rgb(127, 127, 127)">天天内部价</div>
                        <div class="picList">
                            <img
                                src="https://yanxuan-item.nosdn.127.net/44b26f36153072a5cc6dd253aab3cb82.png?quality=75&type=webp&imageView&thumbnail=150x150"
                                alt
                                class="pic"
                            />
                            <img
                                src="https://yanxuan-item.nosdn.127.net/30cac9e78ffe7e3f1e247793d107a338.png?quality=75&type=webp&imageView&thumbnail=150x150"
                                alt
                                class="pic"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lazy-component-wrapper">
            <div class="m-ftWrap">
                <div class="m-ft g-row">
                    <div class="bd">
                        <a
                            href="https://m.you.163.com/downloadapp?_stat_from=search_pz_baidu_29&appAwakeUrl=http%3a%2f%2fm.you.163.com"
                            class="goApp w-button w-button-ghost w-button-s"
                        >下载APP</a>
                        <a
                            href="https://you.163.com/?_m_forcepc_=true&_m_anonid_=3d6fb301-2b06-4a09-b13b-900bfdf82ff9"
                            class="goWeb w-button w-button-ghost w-button-s"
                        >电脑版</a>
                    </div>
                    <p class="copyright">
                        网易公司版权所有 © 1997-2020
                        <br />食品经营许可证：JY13301080111719
                    </p>
                </div>
            </div>
        </div>
        <el-backtop target=".middle-page" :bottom="57.6" :right="11.04">
            <div
                style="
           {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        "
            >
                <img
                    src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/go-1d03abe0594ead4dabcf6bb70fc54966.png"
                    width="100%"
                    height="100%"
                />
            </div>
        </el-backtop>
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
            swiper1List: [],
            modulelist: [],
            bangdanlist: [],
            newproductlist: [],
            isshow2: false,
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    bulletClass: "my-bullet",
                    bulletActiveClass: "my-bullet-active",
                },
                loop: true,
                autoplay:true,
                // autoplay: {
                //     disableOnInteraction: false,
                // },
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
        isexist() {
            return this.$store.state.isexist;
        },
        isshow() {
            return this.$store.state.isshow;
        },
    },
    watch: {
        "$store.state.isexist"(newVal) {
            if (newVal == false) {
                this.isshow2 = true;
            } else if (newVal == true) {
                this.isshow2 = false;
            }
        },
        "$store.state.isshow"(newVal) {
            if (newVal == false) {
                this.isshow2 = true;
            } else if (newVal == true) {
                this.isshow2 = false;
            }
        },
    },
    created() {
        let url = "http://localhost:8080/database.json";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        let that = this;
        xhr.onload = function () {
            that.swiper1List = JSON.parse(xhr.response).list1;
            that.modulelist = JSON.parse(xhr.response).list2;
            that.bangdanlist = JSON.parse(xhr.response).list3;
            that.newproductlist = JSON.parse(xhr.response).list4;
        };
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
        fun1() {
            this.$store.commit("fun1");
        },
        toGoodsD(item) {
            this.$router.push({
                path: "./GoodsD",
                query: {
                    id: item.id,
                },
            });
        },
    },
};
</script>

<style scoped>
@keyframes carousel {
    from {
        transform: translateX(0);
    }
    25% {
        transform: translateX(5px);
    }
    50% {
        transform: translateX(10px);
    }
    to {
        transform: translateX(15px);
    }
}
.middle-page {
    flex-grow: 1;
    overflow: auto;
}
.m-indexHd {
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9;
    position: fixed !important;
    left: 0;
    top: 1.38667rem;
    z-index: 11;
}
.isactive {
    top: 0;
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
/* .m-indexHd .tabWrap .m-tabs {
    padding-right: 1.33333rem;
} */
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
}
.m-tabs.scroll > header .tab:first-of-type {
    margin-left: 0;
}
.m-indexHd .tabWrap .m-tabs .tab {
    margin-left: 0.26667rem;
}
.m-tabs.scroll > header .tab {
    display: block;
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
    display: block;
    color: #333;
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
.swiper-pagination /deep/.my-bullet {
    width: 0.53333rem;
    height: 0.05333rem;
    background-color: #fff;
    opacity: 0.4;
    margin-right: 0.133333rem;
    display: inline-block;
}
.swiper-pagination /deep/.my-bullet-active {
    opacity: 1;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 3px;
    left: 0;
    width: 100%;
}
.m-indexServicePolicy {
    background: #fff;
}
.m-indexServicePolicy .g-grow {
    width: 100%;
    height: 0.96rem;
    padding: 0 0.4rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    zoom: 1;
}
.m-indexServicePolicy .item {
    flex: 1;
    float: left;
}
.m-indexServicePolicy .item a {
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
    width: 0.4266666666666667rem;
    height: 0.4266666666666667rem;
}
.u-icon-index-servicePolicy {
    display: inline-block;
    vertical-align: middle;
}
.m-indexServicePolicy .text {
    font-size: 0.32rem;
    color: #333;
    margin-left: 0.10667rem;
    line-height: 0.42667rem;
}
.m-indexServicePolicy .item a,
.m-indexServicePolicy .text {
    display: inline-block;
    vertical-align: middle;
    zoom: 1;
}
.m-kingKongModule {
    width: 100%;
    height: 4.96rem;
    padding-bottom: 0.42667rem;
    display: flex;
    flex-flow: row wrap;
}
.m-kingKongModule .mb-9 {
    margin-bottom: 0.12rem;
}
.m-kingKongModule .kingkong-item {
    display: block;
    width: 1.46667rem;
    height: 2.08rem;
    float: left;
    margin: 0.13333rem 0.26667rem 0;
}
.m-kingKongModule .kingkong-item .icon .img {
    display: block;
    width: 1.46667rem;
    height: 1.46667rem;
}
.m-kingKongModule .kingkong-item .txt {
    margin-top: 0.13333rem;
    text-align: center;
    font-size: 0.32rem;
    color: #fff;
    line-height: 0.48rem;
    white-space: nowrap;
}
.m-indexBigPromotionModule {
    display: block;
    overflow: hidden;
}
.m-indexBigPromotionModule .floor {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.26667rem 0.10667rem;
}
.m-indexBigPromotionModule .promItem {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    height: 100%;
    color: #333;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
}
.m-indexBigPromotionModule .floorFirst {
    margin: 0.26667rem;
    margin-bottom: 0.5rem;
    background: #eee;
}
.page-content {
    background-color: #eee;
}
.m-freshmanModule {
    background: #fff;
    margin-top: 0.26667rem;
    padding-bottom: 0.4rem;
}
.m-indexFloor {
    margin-bottom: 0.26667rem;
    background-color: #fff;
}
.m-freshmanModule .moduleTitle {
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.42667rem;
}
.moduleTitle {
    width: 100%;
    height: 1.33333rem;
    line-height: 1.33333rem;
    padding: 0 0.4rem;
    background: #fff;
    overflow: hidden;
}
.m-freshmanModule .moduleTitle .txt {
    display: inline-block;
    position: relative;
}
.m-freshmanModule .moduleTitle .txt:before {
    content: "";
    position: absolute;
    left: -0.53333rem;
    top: 0.6rem;
    width: 0.32rem;
    height: 0.04rem;
    background: #333;
}
.m-freshmanModule .moduleTitle .txt:after {
    content: "";
    position: absolute;
    right: -0.53333rem;
    top: 0.6rem;
    width: 0.32rem;
    height: 0.04rem;
    background: #333;
}
.m-freshmanModule .content {
    padding-left: 0.4rem;
    overflow: hidden;
}
.m-freshmanModule .left {
    display: block;
    width: 4.57333rem;
    height: 5.78667rem;
    background: #f9e9cf;
    border-radius: 0.05333rem;
    margin-right: 0.05333rem;
    float: left;
    color: #333;
}
.m-freshmanModule .left .name {
    font-family: PingFangSC-Medium;
    font-size: 0.42667rem;
    padding: 0.4rem 0 0 0.4rem;
}
.m-freshmanModule .left .imgWrap {
    margin: 0.49333rem auto;
    width: 3.44rem;
    height: 3.42667rem;
    position: relative;
}
.m-freshmanModule .left .imgWrap .img {
    width: 3.44rem;
    height: 3.42667rem;
}
.m-freshmanModule .left .imgWrap .img img {
    height: 100%;
}
.m-lazyload > img {
    width: 100%;
    height: auto;
}
.m-freshmanModule .left .imgWrap .animate {
    position: absolute;
    width: 0.4rem;
    height: 0.26667rem;
    bottom: 0.24rem;
    right: 0.86667rem;
    background: url(https://yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* animation: carousel 1s linear infinite; */
}
.m-freshmanModule .right {
    float: left;
}
.m-freshmanModule .right .module1 {
    background: #fbe2d3;
    border-radius: 4px;
    width: 4.57333rem;
    height: 2.86667rem;
    margin-bottom: 0.05333rem;
}
.m-freshmanModule .right .module2 {
    background: #ffecc2;
    border-radius: 4px;
    width: 4.57333rem;
    height: 2.86667rem;
}
.m-freshmanModule .m-activityItem {
    height: 2.86667rem;
}
.m-activityItem,
.m-activityItem .cnt {
    position: relative;
}
.m-activityItem {
    display: block;
    color: #333;
    width: 4.57333rem;
    height: 2.93333rem;
    float: left;
    border-radius: 0.05333rem;
    margin: 0 0.05333rem 0.05333rem 0;
    font-size: 0.32rem;
    padding: 0.26667rem 0 0 0.4rem;
}
.m-freshmanModule .right .module1 .picWrap {
    top: 0.2rem;
}
.m-activityItem .picWrap,
.m-activityItem .picWrap .pic {
    width: 2.66667rem;
    height: 2.66667rem;
}
.m-activityItem .picWrap {
    position: absolute;
    right: 0;
    top: 0;
}
.m-activityItem .picWrap,
.m-activityItem .picWrap .pic {
    width: 2.66667rem;
    height: 2.66667rem;
}
.m-lazyload > img {
    width: 100%;
    height: auto;
}
.m-freshmanModule .m-activityItem .discount {
    top: 0;
    right: 0.4rem;
}
.m-activityItem .picWrap .discount {
    position: absolute;
    top: 0.4rem;
    right: 0.45333rem;
    width: 1.06667rem;
    height: 1.06667rem;
    opacity: 0.8;
    background: #f59524;
    border-radius: 50%;
    padding-top: 0.13333rem;
    color: #fff;
    text-align: center;
}
.m-activityItem .picWrap .discount .line1 {
    font-size: 0.32rem;
}
.m-activityItem .picWrap .discount .line2 {
    font-size: 0.26667rem;
    margin-top: -0.09333rem;
    text-decoration: line-through;
}
.m-activityItem,
.m-activityItem .cnt {
    position: relative;
}
.m-activityItem .title {
    font-family: PingFangSC-Medium;
    font-size: 0.42667rem;
}
.m-activityItem .subTitle {
    color: #7f7f7f;
}
.m-activityItem .tag {
    position: relative;
    display: inline-block;
    padding: 0 0.13333rem;
    height: 0.42667rem;
    background: #cbb693;
    border-radius: 0.05333rem;
    color: #fff;
    font-size: 0.29333rem;
    line-height: 0.42667rem;
    text-align: center;
}
.m-indexFloor {
    margin-bottom: 0.26667rem;
    background-color: #fff;
}
.moduleTitle {
    width: 100%;
    height: 1.33333rem;
    line-height: 1.33333rem;
    padding: 0 0.4rem;
    background: #fff;
    overflow: hidden;
}
.moduleTitle .left {
    float: left;
    font-size: 0.42667rem;
    font-family: PingFangSC-Regular;
}
.m-categoryHotSellModule .content {
    padding: 0 0.26667rem 0.26667rem 0.4rem;
    overflow: hidden;
}
.m-categoryHotSellModule .content .item-1 {
    background: #f9f3e4;
}
.m-categoryHotSellModule .content .item-big {
    width: 4.53333rem;
    height: 2.66667rem;
    float: left;
    border-radius: 0.05333rem;
    margin: 0 0.13333rem 0.13333rem 0;
    position: relative;
}
.m-categoryHotSellModule .content .item-big .name {
    position: relative;
    padding-left: 0.32rem;
    color: #333;
    font-family: PingFangSC-Medium;
    font-size: 0.37333rem;
    margin-top: 0.88rem;
    z-index: 5;
}
.m-categoryHotSellModule .content .item-big .imgWrap {
    position: absolute;
    right: 0;
    top: 0;
    width: 2.66667rem;
    height: 2.66667rem;
}
.m-lazyload {
    width: 100%;
}
.m-categoryHotSellModule .content .item-2 {
    background: #ebeff6;
}
.m-categoryHotSellModule .content .item {
    display: block;
    width: 2.2rem;
    height: 2.4rem;
    background: #f5f5f5;
    border-radius: 0.05333rem;
    float: left;
    margin: 0 0.13333rem 0.13333rem 0;
}
.m-categoryHotSellModule .content .item .name {
    margin-top: 0.13333rem;
    text-align: center;
    font-size: 0.32rem;
    color: #333;
    font-family: PingFangSC-Medium;
}
.m-categoryHotSellModule .content .item .imgWrap {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0.02667rem 0 0 0.30667rem;
}
.m-categoryHotSellModule .content .item-big .name .txt:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.21333rem;
    width: 0.64rem;
    height: 0.05333rem;
    background: #333;
}
.m-categoryHotSellModule .content .item-big .name .txt {
    display: inline-block;
    position: relative;
}
.m-newItemModule {
    padding-bottom: 0.34667rem;
}
.m-indexFloor {
    margin-bottom: 0.26667rem;
    background-color: #fff;
}
.moduleTitle {
    width: 100%;
    height: 1.33333rem;
    line-height: 1.33333rem;
    padding: 0 0.4rem;
    background: #fff;
    overflow: hidden;
}
.moduleTitle .left {
    float: left;
    font-size: 0.42667rem;
    font-family: PingFangSC-Regular;
}
.moduleTitle .right {
    display: block;
    font-size: 0.37333rem;
    float: right;
    color: #333;
    line-height: 1.33333rem;
}
.moduleTitle .right .u-icon {
    margin: -0.06667rem 0 0 0.10667rem;
}
.u-icon-index-titleArrow {
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/index-20a8c6c35d0ec7b54782d2098282371f.png);
    display: inline-block;
    vertical-align: middle;
    width: 0.17333333333333334rem;
    height: 0.30666666666666664rem;
    background-size: 5.013333333333334rem 5.013333333333334rem;
    background-position: -4rem -3.36rem;
}
.m-indexItem {
    padding-left: 0.13333rem;
}
.m-goodGrid {
    background-color: #fff;
}
.m-indexItem .list {
    display: -moz-flex;
    display: flex;
    flex-wrap: wrap;
}
.m-goodGrid .list {
    position: relative;
    z-index: 0;
    overflow: hidden;
}
.m-goodGrid .list .item {
    float: left;
    position: relative;
    width: 50%;
    padding: 0 0.26667rem 0.44rem;
    overflow: hidden;
    background-color: #fff;
}
.m-indexItem .list .item {
    padding: 0 0 0.17333rem !important;
    margin-left: 0.26667rem;
    width: 2.88rem;
}
.m-indexItem .list .item .good {
    display: block;
}
.m-goodGrid .list .item .good {
    width: 100%;
}
.m-goodGrid .list .item .hd {
    border-radius: 0.05333rem;
    position: relative;
    z-index: 0;
    background-color: #f4f4f4;
}
.m-indexItem .list .item .good .hd {
    background-color: #f5f5f5;
}
.m-indexItem .list .item .good .hd .wraper {
    background-color: #f5f5f5;
    border-radius: 4;
    padding-bottom: 100%;
    margin-bottom: 0.16rem;
}
.m-goodGrid .list .item .good .wraper {
    position: relative;
    padding-bottom: 113%;
}
.m-goodGrid .list .item .hd .wraper img {
    position: absolute;
    display: block;
    width: 100%;
    height: 4.6rem;
    border-radius: 0.05333rem 0.05333rem 0 0;
    background-color: #f4f4f4;
}
.m-indexItem .list .item .good .hd img {
    background-color: #f5f5f5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.m-indexItem .list .item .good .hd .desc {
    display: none;
}
.m-goodGrid .list .item .hd .desc {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #f1ece2;
    border-radius: 0 0 0.05333rem 0.05333rem;
    font-size: 0.32rem;
    color: #9f8a60;
    letter-spacing: 0;
    line-height: 0.48rem;
    padding: 0.08rem 0.13333rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.m-indexItem .list .item .good .name {
    margin-top: 0;
    padding: 0;
    font-size: 0.32rem;
    white-space: normal;
    line-height: 0.48rem;
}
.m-goodGrid .list .item .name {
    margin-top: 0.21333rem;
    line-height: 0.53333rem;
    text-align: left;
    font-size: 0.37333rem;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    font-family: PingFangSC-Regular;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-break: break-all;
}
.m-indexItem .list .item .good .newItemDesc {
    display: none;
}
.m-goodGrid .list .item .price {
    font-size: 0.42667rem;
    line-height: 0.64rem;
    text-align: left;
    color: #dd1a21;
    font-family: PingFangSC-Regular;
}
.m-goodGrid .list .item .price .priceInner {
    font-size: 0.42667rem;
    display: flex;
    align-items: center;
}
.m-sceneLightShoppingGuideModule {
    overflow: hidden;
    padding: 0.13333rem 0.4rem 0.4rem 0.34667rem;
    background: #fff;
    margin-bottom: 0.26667rem;
}
.m-sceneLightShoppingGuideModule .m-styleBanner {
    background-color: #f5f5f5;
}
.m-styleBanner {
    display: block;
    width: 4.57333rem;
    height: 3.52rem;
    float: left;
    margin: 0.05333rem 0 0 0.05333rem;
    padding: 0.26667rem 0 0 0.26667rem;
    border-radius: 0.05333rem;
}
.m-styleBanner .title {
    padding-left: 0.13333rem;
    font-size: 0.42667rem;
    font-family: PingFangSC-Medium;
}
.m-styleBanner .desc {
    padding-left: 0.13333rem;
    font-size: 0.32rem;
}
.m-styleBanner .picList {
    width: 100%;
}
.m-styleBanner .picList .pic {
    width: 2rem;
    height: 2rem;
    float: left;
    margin-right: 0.05333rem;
}
.m-ftWrap {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    background-color: #414141;
}
.m-ft {
    padding: 0.72rem 0.26667rem 0.37333rem;
    text-align: center;
}
.m-ft .bd {
    margin-bottom: 0.48rem;
    line-height: 0;
}
.w-button {
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    overflow: hidden;
}
.m-ft .goApp {
    margin-right: 0.66667rem;
}
.m-ft .goApp,
.m-ft .goWeb {
    width: 2.29333rem;
    font-size: 0.32rem;
    color: #fff;
}
.w-button-s {
    height: 0.82667rem;
    line-height: 0.82667rem;
}
.w-button-ghost {
    border: 1px solid #999;
    background-color: transparent;
}
.m-ft .copyright {
    font-size: 0.32rem;
    line-height: 0.42667rem;
    color: #999;
}
</style>