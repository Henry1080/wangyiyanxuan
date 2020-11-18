<template>
    <div class="cartpage">
         <!-- <div class="top-bar" v-if="isexist">
            <div class="iconwrap">
                <i class="u-icon u-icon-hd-miniOpenAppClose close" @click="deltopbar"></i>
            </div>
            <div class="imgwrap">
                <img
                    src="https://yanxuan.nosdn.127.net/1fe7a46449e44c20d508bf514e195c9f.png?type=webp&imageView&thumbnail=750x0&quality=75"
                />
            </div>
        </div> -->
        <div class="middle-page1">
            <div class="car" style="height: 100%">
                <div class="mycar">
                    <span class="left" style="font-size: .48rem;padding-left: 20px">购物车</span>
                    <span
                        class="right"
                        style="vertical-align: middle;color: #DD1A21; font-size: .4rem;float: right;line-height: 54px;padding-right: 20px"
                    >领劵</span>
                </div>
                <div class="chengnuo">
                    <div class="item">
                        <i></i>
                        <span>30天无忧退货</span>
                    </div>
                    <div class="item">
                        <i></i>
                        <span>48小时快速退款</span>
                    </div>
                    <div class="item">
                        <i></i>
                        <span>满99元免邮费</span>
                    </div>
                </div>
                <div class="m-defaultPage">
                    <div class="img"></div>
                    <div class="text" @click="$router.push('/Login')">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isexist() {
            return this.$store.state.isexist;
        },
    },
    methods: {
        deltopbar() {
            this.$store.commit("deltopbar");
        },
    },
};
</script>

<style  scoped>
.cartpage{
    height: 100%;
     display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.middle-page1 {
    flex-grow: 1;
    overflow: auto;
    background: rgb(247, 247, 247);
}
.chengnuo {
    display: flex;
    justify-content: space-around;
    background: #eee;
    height: 0.9333rem;
}
.chengnuo .item {
    display: flex;
    align-items: center;
    font-size: 0.32rem;
    color: #666;
}
.chengnuo i {
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    border: 2px solid #bbb;
    margin-right: 0.13rem;
}
.m-defaultPage {
    position: relative;
    background-color: #f4f4f4;
}
.m-defaultPage .img {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp);
    display: inline-block;
    vertical-align: middle;
    width: 3.30667rem;
    height: 3.30667rem;
    margin-bottom: 0.10667rem;
    background-size: 3.30667rem 3.30667rem;
    background-position: center center;
    background-repeat: no-repeat;
}
.m-defaultPage .text {
    position: absolute;
    top: 7.4rem;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    width: 6.4rem;
    height: 1.22667rem;
    font-size: 0.4rem;
    line-height: 1.22667rem;
    color: #fff;
    background-color: #dd1a21;
    border-radius: 0.04rem;
    text-align: center;
}
</style>