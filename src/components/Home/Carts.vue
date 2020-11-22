<template>
    <div class="cartpage">
        <!-- 未登录 -->
        <div class="middle-page1" v-if="isdenglu==false">
            <div class="car" style="height: 100%">
                <div class="mycar">
                    <span class="left" style="font-size: .48rem;padding-left: 20px">购物车</span>
                    <span
                        class="right"
                        style="vertical-align: middle;color: #DD1A21; font-size: .4rem;float: right;line-height: 30px;padding-right: 20px"
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
        <!-- 已登录 -->
        <div class="middle-page1" v-else>
            <div class="car" style="height: 100%">
                <div class="mycar">
                    <span class="left">购物车</span>
                    <div class="right2">
                        <a href="https://m.you.163.com/coupon/cartCoupon" class="quan">领券</a>
                        <span class="action">编辑</span>
                    </div>
                </div>
                <div class="m-notice">
                    再购¥53免邮 , 去凑单>
                    <i class="arrow"></i>
                </div>
                <div class="huangou">
                    <div class="promotion">
                        <span class="cart-tag tag">全场换购</span>
                        <p class="promTip">再购54元享低至11.4元换购</p>
                        <div class="promBtn">
                            去凑单
                            <i class="jiantou"></i>
                        </div>
                    </div>
                    <a
                        href="https://m.you.163.com/cart#/chooseGift/128308376/2"
                        class="promGuide getGift"
                    >
                        查看换购商品
                        <i class="jiantou2"></i>
                    </a>
                </div>
                <div class="listwrap">
                    <div class="list1" v-for="item in cartlist">
                        <div class="check" :class="{active:isAcitive}" @click="checktab"></div>
                        <div class="pic">
                            <img :src="item.img" alt />
                        </div>
                        <div class="xinxi">
                            <div class="name">{{item.name}}</div>
                            <div class="weight">{{item.weight}}</div>
                            <div class="boxwrap">
                                <div class="left">￥{{item.price}}</div>
                                <div class="right">
                                    <div
                                        class="jian"
                                        :class="{isjian:item.number==1}"
                                        @click="reduce"
                                    >-</div>
                                    <div class="num">{{item.number}}</div>
                                    <div class="jia" @click="increase">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sub">
                    <div class="left">
                        <div class="check check2" :class="{active:isAcitive}" @click="checktab"></div>
                        <span class="text">已选(1)</span>
                    </div>
                    <div class="right">
                        <div class="price">
                            <span>合计: ¥</span>
                            <span>{{total}}</span>
                        </div>
                        <div class="xiadan">下单</div>
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
            isAcitive: false,
        };
    },
    computed: {
        isexist() {
            return this.$store.state.isexist;
        },
        isdenglu() {
            return this.$store.state.isdenglu;
        },
        cartlist() {
            return this.$store.state.cartlist;
        },
        total() {
            return this.$store.state.total;
        },
    },
    methods: {
        deltopbar() {
            this.$store.commit("deltopbar");
        },
        // 加
        increase() {
            this.$store.commit("increase");
        },
        // 减
        reduce() {
            this.$store.commit("reduce");
        },
        checktab() {
            this.isAcitive = !this.isAcitive;
        },
    },
};
</script>

<style  scoped>
.cartpage {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.middle-page1 {
    flex-grow: 1;
    overflow: auto;
    background: #eee;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.middle-page1::-webkit-scrollbar {
    display: none;
}
.car {
    display: flex;
    flex-direction: column;
}
.mycar {
    height: 1.17333rem;
    padding: 0 0.4rem;
    line-height: 1.17333rem;
    text-align: center;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mycar > .left {
    font-size: 0.48rem;
}
.mycar > .right {
    color: #dd1a21;
    font-size: 0.4rem;
    margin-right: 0.4rem;
}
.mycar > .right2 {
    display: flex;
    align-items: center;
    font-size: 0.4rem;
}
.mycar > .right2 > .quan {
    display: block;
    min-width: 0.82667rem;
    line-height: 0.4rem;
    text-align: center;
    color: #fff;
    font-size: 0.26667rem;
    border-radius: 0.02rem;
    padding: 0.05333rem 0.16rem;
    background-image: linear-gradient(-45deg, #fc865f 0, #fc625f 100%);
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 1;
    white-space: nowrap;
    margin-right: 0.4rem;
    position: relative;
}
.mycar > .right2 > .quan::before {
    position: absolute;
    width: 0.21333rem;
    height: 0.21333rem;
    left: -0.16rem;
    top: 50%;
    margin-top: -0.10667rem;
    border-radius: 0.21333rem;
    background-color: #fff;
    content: "";
}
.mycar > .right2 > .quan::after {
    position: absolute;
    width: 0.21333rem;
    height: 0.21333rem;
    right: -0.16rem;
    top: 50%;
    margin-top: -0.10667rem;
    border-radius: 0.21333rem;
    background-color: #fff;
    content: "";
}
.chengnuo {
    height: 0.93333rem;
    padding: 0 0.4rem;
    background: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.chengnuo > .item {
    display: flex;
    align-items: center;
    font-size: 0.32rem;
    color: #666;
}
.chengnuo > .item > i {
    display: block;
    width: 0.13333rem;
    height: 0.13333rem;
    background: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp);
    background-size: 98%;
    background-repeat: no-repeat;
    margin-right: 0.08rem;
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
.m-notice {
    height: 1.06667rem;
    font-size: 0.4rem;
    padding: 0 0.4rem;
    line-height: 0.8rem;
    color: #f48f18;
    background-color: #fff8d8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}
.m-notice > .arrow {
    width: 0.2rem;
    height: 0.37333rem;
    background: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noticeArrow-99d6c25467.png?imageView&type=webp);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.huangou {
    background-color: #fff;
    padding-bottom: 0.13333rem;
    margin-bottom: 0.26667rem;
}
.promotion {
    margin-left: 0.4rem;
    padding: 0.26667rem 0.4rem 0.26667rem 0;
    display: flex;
    align-items: center;
}
.cart-tag {
    background-color: #fc865f;
    background-image: linear-gradient(-225deg, #fc865f 0, #fc625f 100%);
    border-radius: 0.05333rem;
    padding: 0 0.10667rem;
    line-height: 0.42667rem;
    font-size: 0.26667rem;
    text-align: center;
    color: #fff;
    margin: 0 0.21333rem 0 0.05333rem;
    white-space: nowrap;
    flex-shrink: 0;
}
.promTip {
    font-size: 0.37333rem;
    line-height: 0.53333rem;
    color: #333;
    flex-grow: 1;
}
.promBtn {
    flex-shrink: 0;
    margin-left: 0.4rem;
    color: #dd1a21;
    font-size: 0.32rem;
    line-height: 0.48rem;
    display: flex;
    align-items: center;
}
.jiantou {
    display: block;
    width: 0.13333rem;
    height: 0.24rem;
    background: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow_red_ic-8ef796200c.png?imageView&type=webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-left: 0.10667rem;
}
.promGuide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    white-space: nowrap;
    margin: 0 0.4rem 0 1.14667rem;
    padding: 0 0.26667rem;
    font-size: 0.32rem;
    line-height: 0.74667rem;
    background-image: linear-gradient(
        -225deg,
        rgba(252, 134, 95, 0.05),
        rgba(252, 98, 95, 0.05) 100%
    );
    border-radius: 0.05333rem;
}
.promGuide > .jiantou2 {
    display: block;
    width: 0.13333rem;
    height: 0.24rem;
    background: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow_black_ic-b6eb851bba.png?imageView&type=webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.listwrap {
    flex-grow: 1;
    overflow-y: scroll;
}
.listwrap::-webkit-scrollbar {
    display: none;
}
.list1 {
    padding: 0.32rem 0.4rem 0.32rem 0.35rem;
    height: 2.93333rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 0.26667rem;
}
.check {
    display: block;
    width: 0.54667rem;
    height: 0.50667rem;
    background: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-s5698dc1449-767bf63b53.png?imageView&type=webp);
    background-size: 0.5rem 7.01333rem;
    background-position: 0 -3.09333rem;
    background-repeat: no-repeat;
    flex-shrink: 0;
}
.check.active {
    background-position: 0 -6.50667rem;
}
.list1 > .pic {
    width: 2.29333rem;
    height: 2.29333rem;
    margin: 0 0.26667rem;
    border-radius: 4px;
    overflow: hidden;
    background-color: #eee;
    flex-shrink: 0;
}
.list1 > .pic > img {
    width: 100%;
}
.list1 > .xinxi {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.list1 > .xinxi > .name {
    max-height: 0.96rem;
    line-height: 0.48rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 0.37333rem;
}
.list1 > .xinxi > .weight {
    font-size: 0.32rem;
    color: #7f7f7f;
    border-radius: 0.01333rem;
    margin-top: 0.13333rem;
    padding: 0 0.13333rem;
    background: #fafafa;
    border: 0.01333rem solid #efefef;
    width: 1.34667rem;
    line-height: 0.48rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.list1 > .xinxi > .boxwrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.list1 > .xinxi > .boxwrap > .left {
    font-size: 0.37333rem;
    line-height: 0.53333rem;
}
.list1 > .xinxi > .boxwrap > .right {
    padding-top: 0.02667rem;
    width: 2.37333rem;
    height: 0.72rem;
    border: 1px solid #c1c5c2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.4rem;
}
.list1 > .xinxi > .boxwrap > .right > .jian {
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.list1 > .xinxi > .boxwrap > .right > .jia {
    width: 33%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.list1 > .xinxi > .boxwrap > .right > .num {
    width: 34%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #c1c5c2;
    border-right: 1px solid #c1c5c2;
}
.isjian {
    color: #e4e3dc;
}
.sub {
    height: 1.57333rem;
    background-color: #fff;
    padding-left: 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sub > .left {
    line-height: 0.50667rem;
    font-size: 0.37333rem;
    display: flex;
    align-items: center;
}
.sub > .left > .check2 {
    margin-right: 0.21333rem;
}
.sub > .left > .text {
    color: #7f7f7f;
}
.sub > .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.sub > .right > .price {
    color: #dd1a21;
    font-size: 0.37333rem;
    margin-right: .10667rem;
}
.sub > .right > .xiadan {
    width: 3.01333rem;
    line-height: 1.57333rem;
    height: 1.57333rem;
    font-size: 0.37333rem;
    text-align: center;
    color: #fff;
    background-color: #dd1a21;
}
</style>