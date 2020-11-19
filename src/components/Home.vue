<template>
    <div class="page">
        <div class="top-bar" v-if="isexist" v-show="isshow">
            <div class="iconwrap">
                <i class="u-icon u-icon-hd-miniOpenAppClose close" @click="deltopbar"></i>
            </div>
            <div class="imgwrap">
                <img
                    src="https://yanxuan.nosdn.127.net/1fe7a46449e44c20d508bf514e195c9f.png?type=webp&imageView&thumbnail=750x0&quality=75"
                />
            </div>
        </div>
        <component :is="componentName"></component>
        <div class="bottom-bar">
            <div class="bottom-button" @click="btnClick('first')">
                <i class="bottom-img bottom-img1" :class="{ active1: componentName == 'first' }"></i>
                <span class="bottom-title" :class="{ active: componentName == 'first' }">首页</span>
            </div>
            <div class="bottom-button" @click="btnClick('sorts')">
                <div class="bottom-img bottom-img2" :class="{ active2: componentName == 'sorts' }"></div>
                <div class="bottom-title" :class="{ active: componentName == 'sorts' }">分类</div>
            </div>
            <a
                href="https://m.you.163.com/topic/index#/"
                class="bottom-button"
                @click="btnClick('buy')"
            >
                <div class="bottom-img bottom-img3" :class="{ active3: componentName == 'buy' }"></div>
                <div class="bottom-title" :class="{ active: componentName == 'buy' }">值得买</div>
            </a>
            <div class="bottom-button" @click="btnClick('carts')">
                <div class="bottom-img bottom-img4" :class="{ active4: componentName == 'carts' }"></div>
                <div class="bottom-title" :class="{ active: componentName == 'carts' }">购物车</div>
            </div>
            <div class="bottom-button" @click="topersonage">
                <div class="bottom-img bottom-img5"></div>
                <div class="bottom-title">个人</div>
            </div>
        </div>
        <div id="1605572681952" v-if="isactive3">
            <div class="m-userTypeModal">
                <div class="msk"></div>
                <i class="u-icon u-icon-index-modalClose close" @click="delAd"></i>
                <div class="wrap">
                    <div
                        class="modal"
                        style="height: 11rem; background-image: url('https://yanxuan.nosdn.127.net/61694f382ffef2efadc058087405c59f.png?quality=75&type=webp&imageView'); background-size: 100% 100%;"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import First from "./Home/First.vue";
import Sorts from "./Home/Sorts.vue";
import Carts from "./Home/Carts.vue";

export default {
    data() {
        return {
            componentName: "first",
            isactive3: true,
        };
    },
    computed: {
        isexist() {
            return this.$store.state.isexist;
        },
        isshow() {
            return this.$store.state.isshow;
        },
    },
    components: {
        first: First,
        sorts: Sorts,
        carts: Carts,
    },
    methods: {
        btnClick(componentName) {
            this.componentName = componentName;
        },
        topersonage() {
            this.$router.push({
                path: "/e",
            });
        },
        deltopbar() {
            this.$store.commit("deltopbar");
        },
        delAd() {
            this.isactive3 = false;
        },
    },
};
</script>

<style>
.page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.top-bar {
    flex-shrink: 0;
    height: 1.38667rem;
    opacity: 1;
    transition: opacity 0.2s;
    overflow: hidden;
    background-color: rgb(170, 36, 36);
    position: relative;
    z-index: 2;
}
.iconwrap {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
}

.u-icon-hd-miniOpenAppClose {
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/hd-4de7d1dc8847215399843e49de640d68.png);
    display: inline-block;
    vertical-align: top;
    background-size: 3.1733333333333333rem 2.7066666666666666rem;
    width: 0.5066666666666667rem;
    height: 0.5066666666666667rem;
    background-position: -0.6666666666666666rem -2.12rem;
}
.imgwrap {
    width: 100%;
    height: 100%;
}
/* .imgwrap > a {
    display: block;
    width: 100%;
    height: 100%;
} */
.imgwrap img {
    width: 100%;
    height: 100%;
}
.bottom-bar {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    position: relative;
    z-index: 6;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.30667rem;
    background: #fff;
    border-top: 1px solid #d9d9d9;
}
.bottom-button {
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.bottom-img {
    background-image: url(http://localhost:8080/logo2.png);
    display: inline-block;
    vertical-align: middle;
    width: 0.5333333333333333rem;
    height: 0.5333333333333333rem;
    background-size: 2.2133333333333334rem 1.6533333333333333rem;
}
.bottom-img1 {
    background-position: -1.12rem -0.56rem;
}
.active1 {
    background-position: -1.12rem 0;
}
.bottom-img2 {
    background-position: -0.56rem -0.56rem;
}
.active2 {
    background-position: 0 -0.56rem;
}
.bottom-img3 {
    background-position: -0.56rem -1.12rem;
}
.active3 {
    background-position: 0 -1.12rem;
}
.bottom-img4 {
    background-position: -0.56rem 0;
}
.active4 {
    background-position: 0 0;
}
.bottom-img5 {
    background-position: -1.68rem 0;
}
.active5 {
    background-position: -1.12rem -1.12rem;
}
.bottom-title {
    display: block;
    margin-top: 0.09333rem;
    font-size: 0.32rem;
    color: #666;
    line-height: 1;
}
.active {
    color: #dd1a21;
}
.m-userTypeModal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
}
.m-userTypeModal .msk {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.m-userTypeModal .close {
    position: fixed;
    right: 0.4rem;
    top: 0.8rem;
    z-index: 2;
}
.u-icon-index-modalClose {
    width: 0.8533333333333334rem;
    height: 0.8533333333333334rem;
    background-position: -1.68rem -3.92rem;
}
.u-icon-index-modalClose {
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/index-20a8c6c35d0ec7b54782d2098282371f.png);
    display: inline-block;
    vertical-align: middle;
    background-size: 5.013333333333334rem 5.013333333333334rem;
}
.m-userTypeModal > .wrap {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
}
.m-userTypeModal > .wrap .modal {
    width: 7.2rem;
}
</style>