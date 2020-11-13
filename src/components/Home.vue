<template>
    <div class="page">
        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
        <div class="bottom-bar">
            <div class="bottom-button" @click="btnClick('first')">
                <div class="bottom-img bottom-img1" :class="{active1:componentName=='first'}"></div>
                <div class="bottom-title" :class="{active:componentName=='first'}">首页</div>
            </div>
            <div class="bottom-button" @click="btnClick('sorts')">
                <div class="bottom-img bottom-img2" :class="{active2:componentName=='sorts'}"></div>
                <div class="bottom-title" :class="{active:componentName=='sorts'}">分类</div>
            </div>
            <div class="bottom-button" @click="btnClick('buy')">
                <div class="bottom-img bottom-img3" :class="{active3:componentName=='buy'}"></div>
                <div class="bottom-title" :class="{active:componentName=='buy'}">值得买</div>
            </div>
            <div class="bottom-button" @click="btnClick('carts')">
                <div class="bottom-img bottom-img4" :class="{active4:componentName=='carts'}"></div>
                <div class="bottom-title" :class="{active:componentName=='carts'}">购物车</div>
            </div>
            <div class="bottom-button" @click="btnClick('personage')">
                <div class="bottom-img bottom-img5" :class="{active5:componentName=='personage'}"></div>
                <div class="bottom-title" :class="{active:componentName=='personage'}">个人</div>
            </div>
        </div>
    </div>
</template>

<script>
import First from "./Home/First.vue";
import Sorts from "./Home/Sorts.vue";
import Buy from "./Home/Buy.vue";
import Carts from "./Home/Carts.vue";
import Personage from "./Home/Personage.vue";

export default {
    data() {
        return {
            componentName: "first",
        };
    },
    components: {
        first: First,
        sorts: Sorts,
        buy: Buy,
        carts: Carts,
        personage: Personage,
    },
    methods: {
        btnClick(componentName) {
            this.componentName = componentName;
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
.bottom-bar {
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    background-color: #fafafa;
    border-top: 1px solid #d9d9d9;
    padding-top: 0.16rem;
}

.bottom-button {
    width: 20%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
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
    font-size: 13px;
    color: #333;
    margin-top: 5px;
}
.active {
    color: #dd1a21;
}

</style>