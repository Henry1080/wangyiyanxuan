<template>
    <div class="page1">
        <!-- <div class="top-bar" v-if="isexist">
            <div class="iconwrap">
                <i class="u-icon u-icon-hd-miniOpenAppClose close" @click="deltopbar"></i>
            </div>
            <div class="imgwrap">
                <img
                    src="https://yanxuan.nosdn.127.net/1fe7a46449e44c20d508bf514e195c9f.png?type=webp&imageView&thumbnail=750x0&quality=75"
                />
            </div>
        </div>-->
        <div class="title-wrap">
            <div class="bd">
                <div class="row">
                    <!-- 首页图标 -->
                    <a class="u-icon-u-icon-home" @click="$router.go(-1)"></a>
                    <i class="logo u-icon u-icon-logo"></i>
                    <div class="right">
                        <!-- 搜索图标 -->
                        <a class="u-icon-search1"></a>
                        <!-- 购物车图标 -->
                        <a class="u-icon-cart" @click="$router.push('/Carts')"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="swiperwrap">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in piclist" :key="item.id">
                        <img :src="item.img" />
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="dt-section-1">
                <div class="content">
                    <div class="priceInfo">
                        <div class="priceCol priceCol1">
                            <div class="price">
                                <span class="priceArea">
                                    <span class="currentPrice">￥46</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="spmcBanner">
                        <div class="spmcPrice">
                            <span class="spmcDiscount">天天免邮</span>
                            <span class="spmcDesc">
                                Pro会员立享免邮，到手价
                                <span class="spmcEconomizePrice">43.7</span>
                            </span>
                            <i class="u-icon u-icon-questionMark"></i>
                        </div>
                        <span class="spmcBtn">开通</span>
                    </div>
                    <div class="baseInfo">
                        <div class="info">
                            <div class="name">2020新果上市，南非碧根果仁 150克</div>
                            <div class="desc">推荐理由</div>
                        </div>
                        <div class="comment single-line">
                            <div class="wrap">
                                <div class="info-wrap">
                                    <div class="num">90.9%</div>
                                    <div class="com">好评率</div>
                                </div>
                                <i class="icon u-icon u-address-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="rcmdBanner">
                        <div class="angleTop">
                            <span class="angleContent"></span>
                        </div>
                        <ul>
                            <li>
                                <div class="key">1</div>
                                <div class="recommendReason">大颗完整果仁，颗颗优等生</div>
                            </li>
                            <li>
                                <div class="key">2</div>
                                <div class="recommendReason">南非进口 ，肉厚饱满，奶香浓郁</div>
                            </li>
                            <li>
                                <div class="key">3</div>
                                <div class="recommendReason">告别剥壳烦恼，美味轻松享</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style="border-top: 0.26667rem solid rgb(244, 244, 244);">
                    <div class="savingCardBanner">
                        <div class="content">
                            <i class="u-icon u-icon-card-yellow"></i>
                            <span class="title">省钱月卡</span>
                            <span class="text">| 专享无门槛红包权益</span>
                            <span class="bannerBtn">立即省钱</span>
                        </div>
                    </div>
                </div>
                <div style="border-top: 0.26667rem solid rgb(244, 244, 244);">
                    <div class="m-points">
                        <div class="m-listItem undefined">
                            <div class="inner">
                                <div class="freigh">邮费 : 满99元包邮</div>
                            </div>
                            <i class="icon u-icon u-address-right"></i>
                        </div>
                    </div>
                    <div class="m-hdrkDetail">
                        <div class="m-listItem listItem-custom">
                            <div class="inner">
                                <div class="m-actEntry">
                                    <label>促销:</label>
                                    <div class="m-actInfoWrap">
                                        <div class="m-actInfo" style="margin-top: 0px;">
                                            <span class="tag-status-new gradients">全场换购</span>
                                            <div style="overflow: hidden;">
                                                <span class="txt longTxt">低至11.4元换购</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i class="icon u-icon u-address-right"></i>
                        </div>
                    </div>
                    <div class="m-shoppingReward">
                        <div class="m-listItem listItem-custom">
                            <div class="inner">
                                <div class="m-shoppingRewardEntry">
                                    <label class="label">购物返 :</label>
                                    <div class="txt">
                                        最高返
                                        <span style="color: rgb(221, 26, 33);">4积分</span>
                                    </div>
                                </div>
                            </div>
                            <i class="icon u-icon u-address-right"></i>
                        </div>
                    </div>
                </div>
                <div style="border-top: 0.26667rem solid rgb(244, 244, 244);"></div>
                <div class="specSelect">
                    <div class="m-listItem undefined">
                        <div class="inner">
                            <span class="it it11">已选择:</span>
                            <span class="it">150克</span>
                            <span class="it">x1</span>
                        </div>
                        <i class="icon u-icon u-address-right"></i>
                    </div>
                </div>
            </div>
            <div class="m-deliveryInfo">
                <div class="m-listItem undefined">
                    <div class="inner">
                        <div class="left">配送:</div>
                        <div class="right">
                            <div class="pickAddr" v-show="isaddress">请选择配送地址</div>
                            <div class="deliveryAddr" v-show="!isaddress">至 北京市东城区东华门街道</div>
                            <div class="deliveryTime" v-show="!isaddress">18:00前支付, 预计明天11月20日送达</div>
                        </div>
                    </div>
                    <i class="icon u-icon u-address-right"></i>
                </div>
            </div>
            <div class="service-wraper dt-section">
                <div class="m-serviceEntry">
                    <div class="left">服务&nbsp;:</div>
                    <div class="right">
                        <div>
                            <div class="right-item">网易自营品牌</div>
                            <div class="right-item">不支持无忧退换</div>
                        </div>
                        <div>
                            <div class="right-item">国内部分地区不可配送</div>
                        </div>
                    </div>
                    <i class="icon u-icon u-address-right"></i>
                </div>
            </div>
            <div class="m-adBanner">
                <a href="https://act.you.163.com/act/pub/wYXLIP37RRbg.html" class="m-carousel">
                    <img
                        src="https://yanxuan.nosdn.127.net/dca642d9d27b48c971ae79991c4fa048.jpg?quality=75&type=webp&imageView&thumbnail=750x0"
                        alt
                    />
                </a>
            </div>
            <div class="dt-section">
                <div class="pingjia">
                    <a href="https://m.you.163.com/item/comment?id=3996656">
                        <h3 class="title">用户评价(13)</h3>
                        <div class="comment-checkAll">
                            <span>
                                <span class="rate">84.6%</span>
                                好评率
                            </span>
                            <i class="icon u-icon u-address-right"></i>
                        </div>
                    </a>
                </div>
                <div class="allpingjia">
                    <header>
                        <img
                            class="avatar"
                            src="https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png?quality=75&type=webp&imageView&thumbnail=64x64"
                            alt
                        />
                        <span class="name">俺****</span>
                        <i class="dengji"></i>
                        <ul class="m-rate">
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                        </ul>
                    </header>
                    <div class="extraInfo">
                        <span class="time">2020-11-16 20:06:45</span>
                        <p class="skus">150克</p>
                    </div>
                    <div class="content">
                        <div class="inner">包装高端大气上档次，比之前那款严选包装的走心了，里面包装也很6奶香浓郁</div>
                    </div>
                </div>
            </div>
            <div class="relatedItem">
                <div class="titleWrap">
                    <div class="title">升级前的老款有95828条评价哦</div>
                </div>
                <div class="itemWrap">
                    <div class="line">
                        <div class="imgWrap">
                           <img src="https://yanxuan-item.nosdn.127.net/280e8ab7aff25ac5ccbb7626547e8967.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
                        </div>
                        <div class="itemInfo">
                            <div class="tag">老款</div>
                            <div class="name">碧根果仁 128克</div>
                        </div>
                        <div class="goodCmtRateWrap">
                            <div class="goodCmtRate">99.9%</div>
                            <div class="txt">好评率</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            piclist: [],
            isaddress: true,
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                },
                loop: true,
                autoplay: true,
            },
        };
    },
    computed: {
        isexist() {
            return this.$store.state.isexist;
        },
    },
    methods: {
        deltopbar() {
            this.$store.commit("deltopbar");
        },
        address() {
            this.isaddress = false;
        },
    },
    created() {
        let url = "http://localhost:8080/GoodsD.json";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        let that = this;
        xhr.onload = function () {
            that.piclist = JSON.parse(xhr.response).piclist;
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        // console.log("Current Swiper instance object", this.swiper);
        // this.swiper.slideTo(3, 1000, false);
    },
};
</script>

<style scoped>
.page1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.m-loginTypes {
    flex-grow: 1;
    background: rgb(247, 247, 247);
}
.bd {
    height: 1.16rem;
    background-color: #fafafa;
    position: relative;
}
.bd .row {
    z-index: 1;
    width: 10rem;
    margin: auto;
    overflow: hidden;
    position: relative;
    padding: 0 0.21333rem 0 0.32rem;
    height: 1.17333rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.u-icon-u-icon-home {
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp");
    width: 0.64rem;
    height: 0.58667rem;
    background-position: 0 -0.98667rem;
    background-position-x: 0px;
    background-position-y: -0.98667rem;
    background-size: 2.29333rem 5.6rem;
}
.row .logo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp");
    width: 2.29333rem;
    height: 0.72rem;
    background-position: 0 -1.70667rem;
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
}
.u-icon-search1 {
    position: relative;
    bottom: 0;
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp");
    background-size: 2.29333rem 5.6rem;
    width: 0.85333rem;
    height: 0.85333rem;
    background-position: 0 -4.74667rem;
    background-position-x: 0px;
    background-position-y: -4.74667rem;
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
}
.u-icon-cart {
    position: relative;
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp");
    background-size: 2.29333rem 5.6rem;
    width: 0.85333rem;
    height: 0.85333rem;
    background-position: 0 0;
    background-position-x: 0px;
    background-position-y: 0px;
    display: inline-block;
    vertical-align: middle;
}
.page1 > .main {
    flex-grow: 1;
    margin-bottom: 1.6rem;
    background-color: #fff;
}
.swiperwrap {
    width: 100%;
}
.swiperwrap img {
    width: 100%;
    height: 100%;
}
.swiper-pagination-fraction {
    left: auto;
    right: 0.4rem;
    bottom: 0.4rem;
    width: 0.72rem;
    height: 0.3733rem;
    border-radius: 2px;
    line-height: 0.42667rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 0.26667rem;
    text-align: center;
    color: #333;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dt-section-1 .content {
    position: relative;
    padding: 0.34667rem 0 0.48rem 0.4rem;
}
.content .priceInfo {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
.content .priceCol1 {
    margin-right: 0.21333rem;
}
.content .price {
    height: 0.8rem;
    line-height: 0.8rem;
    white-space: nowrap;
}
.content .price .currentPrice {
    color: #dd1a21;
    font-family: PingFang SC;
    font-size: 0.72rem;
    font-weight: 700;
}
.spmcBanner {
    margin: 0.21333rem 0 0.32rem;
    width: 9.2rem;
    height: 0.90667rem;
    font-size: 0.32rem;
    line-height: 0.90667rem;
    background-image: url(https://yanxuan.nosdn.127.net/2f8ed50ef024bc371c7f01828d6209c3.png?imageView&type=webp);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
}
.spmcBanner .spmcPrice {
    line-height: 0.48rem;
    width: 85%;
    overflow: hidden;
}
.spmcBanner .spmcDiscount {
    float: left;
    background-image: linear-gradient(123deg, #f1c698 0, #c3945b 100%);
    line-height: 0.90667rem;
    font-size: 0.26667rem;
    color: #333;
    font-weight: 700;
    padding: 0 0.11467rem 0 0.112rem;
    border-top-left-radius: 0.10667rem;
    border-bottom-left-radius: 0.10667rem;
    clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
}
.spmcBanner .spmcDesc {
    float: left;
    line-height: 0.90667rem;
    color: #fff1d2;
    margin-left: 0.10667rem;
}
.spmcBanner .spmcEconomizePrice {
    font-family: PingFang SC;
    font-weight: 700;
    color: #f3ca84;
    line-height: 0.48rem;
    margin-left: 0.05333rem;
}
.spmcBanner .u-icon-questionMark {
    display: inline-block;
    position: relative;
    width: 0.32rem;
    height: 0.32rem;
    margin-top: 0.29333rem;
    margin-left: 0.05333rem;
    z-index: 1;
}
.u-icon-questionMark {
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/questionMark-a4153bf816.png?imageView&type=webp);
}
.u-icon-questionMark {
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.spmcBanner .spmcBtn {
    position: absolute;
    right: 0.32rem;
    top: 0.21333rem;
    height: 0.48rem;
    padding-left: 0.16rem;
    padding-right: 0.16rem;
    line-height: 0.48rem;
    background-image: linear-gradient(140deg, #ffe3c4 0, #ce7f29 100%);
    font-size: 0.32rem;
    text-align: center;
    color: #333;
    border-radius: 0.26667rem;
}
.content .baseInfo {
    display: flex;
    margin-top: 0.18667rem;
}
.content .info {
    padding-right: 0.32rem;
    -webkit-box-flex: 1;
    flex: 1;
}
.content .info .name {
    font-size: 0.42667rem;
    color: #333;
    line-height: 0.64rem;
    margin-bottom: 0.05333rem;
    font-weight: 700;
}
.content .info .desc {
    font-size: 0.32rem;
    line-height: 0.48rem;
    color: #333;
    font-weight: lighter;
}
.content .comment {
    width: 2.37333rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
}
.content .comment .wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 0.26667rem;
    text-align: center;
    font-size: 0.37333rem;
}
.content .comment .wrap .info-wrap .num {
    font-weight: 700;
    font-size: 0.42667rem;
    line-height: 0.6rem;
    color: #dd1a21;
    text-align: center;
}
.content .comment .wrap .info-wrap .com {
    font-family: PingFangSC-Light;
    line-height: 0.48rem;
    font-size: 0.32rem;
    color: #7f7f7f;
}
.rcmdBanner {
    border-radius: 2px;
}
.rcmdBanner {
    margin: 0.16rem 0 0;
    padding: 0.18667rem 0.26667rem;
    width: 9.2rem;
    line-height: 0.8rem;
    background: #fafafa;
    border: 1px solid #e6e6e6;
    position: relative;
}
.rcmdBanner .angleTop {
    top: -0.12rem;
    left: 0.52rem;
    border-bottom: 0.12rem solid #e6e6e6;
    z-index: 1;
}
.rcmdBanner .angleContent {
    top: 0.01333rem;
    left: -0.12rem;
    border-bottom: 0.12rem solid #fafafa;
    z-index: 2;
}
.rcmdBanner .angleContent,
.rcmdBanner .angleTop {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 0.12rem solid transparent;
    border-right: 0.12rem solid transparent;
}
.rcmdBanner li {
    height: 0.48rem;
    line-height: 0.48rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #333;
}
.rcmdBanner li:not(:last-child) {
    margin-bottom: 0.05333rem;
}
.rcmdBanner .key {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    border: 1px solid #dd1a21;
    border-radius: 50%;
    text-align: center;
    line-height: 0.32rem;
    font-size: 0.26667rem;
    color: #dd1a21;
    font-family: PingFang SC;
    font-weight: 700;
    margin-right: 0.10667rem;
    vertical-align: middle;
}
.rcmdBanner li .recommendReason {
    display: inline-block;
    height: 0.48rem;
    line-height: 0.48rem;
    vertical-align: middle;
}
.savingCardBanner {
    width: 9.46667rem;
    height: 1.09333rem;
    margin: 0 0.26667rem;
    font-size: 0.32rem;
    background-image: url("https://yanxuan.nosdn.127.net/b6f50e86f3c8734d719e85ce6d9c7cc1.png?imageView&type=webp");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
}
.savingCardBanner .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow: hidden;
    padding: 0 0.21333rem;
    font-size: 0.32rem;
}
.savingCardBanner > .content > .u-icon-card-yellow {
    display: inline-block;
    width: 0.48rem;
    height: 0.4rem;
    vertical-align: middle;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/card-yellow-f182f2e4f5.png?imageView&type=webp);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.savingCardBanner .content .title {
    margin-left: 0.05333rem;
    font-family: PingFangSC-Medium;
    font-size: 0.37333rem;
    color: #ffe8b5;
    letter-spacing: 0;
    white-space: nowrap;
}
.savingCardBanner .content .text {
    color: #fff;
    letter-spacing: 0.01333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.savingCardBanner .bannerBtn {
    margin-left: auto;
    width: 2.29333rem;
    height: 0.61333rem;
    line-height: 0.61333rem;
    background: #fff;
    font-size: 0.32rem;
    text-align: center;
    color: #dd1a21;
    border-radius: 0.27333rem;
}
.m-points {
    color: #333;
    line-height: 1.38667rem;
    font-size: 0.37333rem;
    padding-left: 0.4rem;
}
.m-points .m-listItem {
    border-bottom: 1px solid #d9d9d9;
}
.m-listItem {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    min-height: 1.38667rem;
    padding-right: 1.06667rem;
}
.m-listItem .inner {
    width: 100%;
    zoom: 1;
}
.m-points .freigh,
.m-rules .freigh {
    width: 9.2rem;
}
.m-listItem .inner::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.u-icon {
    display: inline-block;
    width: 0.66667rem;
    height: 0.66667rem;
    vertical-align: middle;
}
.u-address-right {
    background: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp)
        no-repeat;
    background-size: 100%;
}
.m-listItem > .icon {
    position: absolute;
    right: 0.21333rem;
    top: 0;
    bottom: 0;
    margin: auto;
}
.listItem-custom,
.listItem-custom2 {
    padding-right: 0.8rem;
}
.m-listItem {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    min-height: 1.38667rem;
    padding-right: 1.06667rem;
}
.m-hdrkDetail .m-actEntry {
    padding-left: 0;
    display: flex;
    align-items: center;
}
.m-listItem .inner::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.m-hdrkDetail .m-actEntry label {
    line-height: 0.48rem;
    color: #333;
}
.m-hdrkDetail .m-actEntry label,
.m-shoppingReward .label {
    margin-right: 0.13333rem;
    word-wrap: normal;
    font-size: 0.37333rem;
    white-space: nowrap;
}
.m-hdrkDetail .m-actEntry .m-actInfoWrap {
    padding: 0.42667rem 0;
    flex: 1;
}
.m-actInfo {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.m-actInfo .tag-status-new {
    margin-right: 0.16rem;
    margin-bottom: 0;
}
.tag-status-new:nth-child(1) {
    margin-left: 0;
}
.tag-status-new.gradients {
    background-image: linear-gradient(270deg, #ff8659 0, #fe2c30 100%);
    color: #fff;
    border: 0;
    font-family: PingFangSC-Regular;
}
.tag-status-new {
    margin-bottom: 0.06667rem;
    height: 0.4rem;
    padding: 0 0.10667rem;
    line-height: 0.4rem;
    color: #dd1a21;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #dd1a21;
    border-radius: 0.2rem;
    margin-left: 0.13333rem;
    white-space: nowrap;
}
.tag-status,
.tag-status-new {
    font-size: 0.24rem;
    vertical-align: top;
    display: inline-block;
    text-align: center;
}
.tag-status-new::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
}
.m-hdrkDetail .m-actEntry .m-actInfo .longTxt {
    max-width: 6rem;
}
.m-hdrkDetail .m-actEntry .m-actInfo .txt {
    max-width: 4.66667rem;
}
.m-actInfo .txt {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.37333rem;
    color: #333;
    line-height: 0.48rem;
}
.m-shoppingReward {
    margin-left: 0.4rem;
    padding: 0.42667rem 0;
}
.m-shoppingReward .m-shoppingRewardEntry {
    display: flex;
}
.m-listItem .inner:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.m-shoppingReward .label {
    color: #333;
}
.m-hdrkDetail .m-actEntry label,
.m-shoppingReward .label {
    margin-right: 0.13333rem;
    word-wrap: normal;
    font-size: 0.37333rem;
    white-space: nowrap;
}
.m-shoppingReward .txt {
    font-size: 0.37333rem;
}
.specSelect {
    padding-left: 0.4rem;
}
.specSelect .m-listItem {
    min-height: 1.38667rem;
    border-bottom: 1px solid #d9d9d9;
}
.specSelect .m-listItem .inner {
    font-size: 0.37333rem;
    line-height: 1.38667rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.specSelect .m-listItem .inner > .it11 {
    margin-right: 0.13333rem;
}
.m-listItem .inner::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.m-deliveryInfo {
    padding: 0.42667rem 0;
    font-size: 0.37333rem;
}
.m-deliveryInfo,
.m-hdrkDetail {
    margin-left: 0.4rem;
    border-bottom: 1px solid #d9d9d9;
}
.m-listItem {
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    min-height: 1.38667rem;
    padding-right: 1.06667rem;
}
.m-deliveryInfo .left {
    display: inline-block;
    color: #333;
    margin-right: 0.13333rem;
}
.m-deliveryInfo .right {
    display: inline-block;
    vertical-align: top;
    width: 6.93333rem;
}
.m-deliveryInfo .right .deliveryTime,
.m-deliveryInfo .right .pickAddr {
    color: #7f7f7f;
}
.service-wraper {
    padding: 0.32rem 0 0.10667rem;
}
.dt-section {
    background: #fff;
    border-bottom: 0.26667rem solid #eee;
}
.m-serviceEntry {
    margin-left: 0.4rem;
    font-size: 0.37333rem;
    display: flex;
    -webkit-box-align: center;
    align-items: flex-start;
}
.m-serviceEntry .left {
    align-self: flex;
    line-height: 1;
    color: #333;
    margin-right: 0.13333rem;
}
.m-serviceEntry .right {
    -webkit-box-flex: 1;
    flex: 1;
}
.m-serviceEntry .right > div {
    display: flex;
}
.m-serviceEntry .right > div > .right-item {
    position: relative;
    padding-left: 0.21333rem;
    margin-right: 0.53333rem;
    line-height: 1;
    margin-bottom: 0.21333rem;
    color: #7f7f7f;
}
.m-serviceEntry .right > div > .right-item::before {
    content: "";
    position: absolute;
    width: 0.10667rem;
    height: 0.10667rem;
    background: #dd1a21;
    border-radius: 100%;
    left: 0;
    top: 0.13333rem;
}
.m-serviceEntry > i {
    margin-right: 0.23rem;
}
.m-adBanner {
    width: 100%;
    height: 2.93333rem;
    border-bottom: 0.26667rem solid #f4f4f4;
}
.m-adBanner > .m-carousel {
    display: block;
    height: 2.66667rem;
}
.m-adBanner > .m-carousel > img {
    width: 100%;
}
.dt-section {
    background: #fff;
    border-bottom: 0.26667rem solid #eee;
}
.pingjia > a {
    display: flex;
    margin-left: 0.4rem;
    border-bottom: 1px solid #d9d9d9;
    padding: 0.4rem 0 0.4rem 0;
    justify-content: space-between;
    align-items: center;
}
.pingjia > a > .title {
    line-height: 0.4rem;
    font-size: 0.37333rem;
    color: #333;
    font-weight: 400;
}
.pingjia > a > .comment-checkAll {
    font-size: 0.37333rem;
    color: #333;
    height: 0.66667rem;
    line-height: 0.66667rem;
}
.comment-checkAll .rate {
    color: #dd1a21;
}
.pingjia > a > .comment-checkAll > i {
    margin-right: 0.09rem;
}
.allpingjia {
    padding: 0 0.4rem 0.42667rem;
}
.allpingjia > header {
    padding: 0.4rem 0 0.05333rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.37333rem;
}
.allpingjia > header > .avatar {
    width: 0.85333rem;
    height: 0.85333rem;
    border-radius: 50%;
    margin-right: 0.21333rem;
    overflow: hidden;
}
.allpingjia > header > .name {
    margin-right: 0.16rem;
}
.allpingjia > header > .dengji {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/membership-s940529e977-9b551a2d19.png?imageView&type=webp);
    background-size: 4.4rem 155.33333rem;
    background-position: 0 -152.8rem;
    vertical-align: middle;
}
.allpingjia > header > .m-rate {
    margin-left: 0.13333rem;
    display: flex;
    justify-content: flex-start;
}
.allpingjia > header > .m-rate > li {
    display: inline-block;
    width: 0.36rem;
    height: 0.34667rem;
    vertical-align: middle;
    margin-right: 0.16rem;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/star-smallYellow-2a20c63768.png?imageView&type=webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.allpingjia > .extraInfo {
    font-size: 0.32rem;
    line-height: 1;
    color: #7f7f7f;
    margin-top: 0.24rem;
}
.allpingjia > .extraInfo > .time {
    font-size: 0.32rem;
    line-height: 1;
    color: #7f7f7f;
}
.allpingjia > .extraInfo > .skus {
    display: inline-block;
    margin-left: 0.21333rem;
}
.allpingjia > .content {
    margin-top: 0.24rem;
    padding-right: 0.4rem;
}
.allpingjia > .content > .inner {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
    word-break: break-all;
    font-size: 0.37333rem;
    line-height: 0.53333rem;
    font-weight: 400;
    color: #333;
}
.relatedItem{
    padding-bottom: .37333rem;
}
.relatedItem>.titleWrap{
    padding: .16rem 0 .24rem;
    text-align: center;
}
.relatedItem>.titleWrap>.title{
    display: inline-block;
    position: relative;
    line-height: .53333rem;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: .37333rem;
}
.relatedItem>.titleWrap>.title::before{
    content: '';
    display: block;
    width: .93333rem;
    height: .08rem;
    position: absolute;
    top: .25333rem;
    left: -1.18667rem;
    background:url(https://yanxuan.nosdn.127.net/4b1a6d0b381fc28acded19de8a1dd386.png?imageView&type=webp);
    background-size: 100% 100%;
}
.relatedItem>.titleWrap>.title::after{
    content: '';
    display: block;
    width: .93333rem;
    height: .08rem;
    position: absolute;
    top: .25333rem;
    right: -1.18667rem;
    background-size: 100% 100%;
    background: url(https://yanxuan.nosdn.127.net/020843fac649d62bf8c339a1079e7636.png?imageView&type=webp);
}
.relatedItem>.itemWrap{
    width: 9.2rem;
    margin: 0 .4rem;
    border: 1px solid #D9D9D9;
    border-radius: .05333rem;
}
.relatedItem>.itemWrap>.line{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}



</style>