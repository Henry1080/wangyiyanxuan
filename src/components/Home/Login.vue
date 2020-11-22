<template>
    <div class="page1">
        <!-- 头部 -->
        <div class="bd">
            <div class="row">
                <!-- 首页图标 -->
                <a class="u-icon-u-icon-home" @click="$router.go(-1)"></a>
                <i class="logo u-icon u-icon-logo"></i>
                <div class="right">
                    <!-- 搜索图标 -->
                    <a class="u-icon-search1" @click="$router.push('/Search')"></a>
                    <!-- 购物车图标 -->
                    <a class="u-icon-cart" @click="$router.push('/Carts')"></a>
                </div>
            </div>
        </div>
        <!-- 第二部分:LOGO,登录框 -->
        <div class="view">
            <!-- logo -->
            <div class="logoWrap">
                <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt />
            </div>
            <!-- 登录输入框 -->
            <div class="register-content">
                <div class="inputwrap">
                    <input type="text" placeholder="请输入手机号" class="zhanghao" v-model.trim="acout" />
                    <div class="clear" @click="clearinput"></div>
                </div>
                <div class="inputwrap inputwrap2">
                    <input type="text" placeholder="请输入短信验证码" class="mima" v-model.trim="pasd" />
                    <a class="yangzhengma">获取验证码</a>
                </div>
                <p class="otherchoice">
                    <a href="https://aq.reg.163.com/ydaq/offline" class="span1">遇到问题?</a>
                    <span class="span2">使用密码验证登录</span>
                </p>
                <p class="denglu">
                    <a href="#" class="a1" @click="denglu">登录</a>
                </p>
                <div class="box1">
                    <div class="u-zcagree" @click="gouxuan" :class="{active:isgouxuan}"></div>
                    <div class="fur-item">
                        <label>
                            <span>我同意</span>
                            <a
                                target="_blank"
                                href="https://reg.163.com/agreement_mobile_wap.shtml"
                                class="fuwu"
                            >《服务条款》</a>
                            <span>和</span>
                            <a
                                href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml"
                                target="_blank"
                                class="wangyi"
                            >《网易隐私政策》</a>
                        </label>
                    </div>
                </div>

                <div class="btn-btn1" @click="$router.go(-1)">
                    <span>其他登录方式</span>
                    <i class="icon-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            acout: "",
            pasd: "",
            isgouxuan: false,
        };
    },
    computed: {
        isdenglu() {
            return this.$store.state.isdenglu;
        },
        bottomButton() {
            return this.$store.state.bottomButton;
        },
        componentName() {
            return this.$store.state.componentName;
        },
    },
    methods: {
        denglu() {
            if (this.acout == "" && this.pasd == "") {
                alert("请输入账号验证码");
            } else if (this.acout == "17756599558" && this.pasd == "123456") {
                this.acout = "";
                this.pasd = "";
                this.$router.push("/");
                this.$store.state.componentName = "personage";
                this.$store.state.isdenglu = true;
                this.$store.state.bottomButton = true;
            } else {
                alert("账号17756599558验证码123456");
            }
        },
        gouxuan() {
            this.isgouxuan = !this.isgouxuan;
        },
        clearinput() {
            this.acout = "";
        },
    },
};
</script>

<style scoped>
.page1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.bd {
    height: 1.16rem;
    background-color: #fafafa;
    position: relative;
}
.bd .row {
    z-index: 1;
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
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp);
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
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp);
    width: 2.29333rem;
    height: 0.72rem;
    background-position: 0 -1.70667rem;
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
}
.u-icon-search1 {
    position: relative;
    bottom: 0;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp);
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
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp);
    background-size: 2.29333rem 5.6rem;
    width: 0.85333rem;
    height: 0.85333rem;
    background-position: 0 0;
    background-position-x: 0px;
    background-position-y: 0px;
    display: inline-block;
    vertical-align: middle;
}
.logoWrap {
    text-align: center;
    margin-top: 0.74667rem;
}
.logoWrap img {
    width: 3.57333rem;
    height: 1.2rem;
}
.register-content {
    width: 100%;
    margin-top: 0.53333rem;
    padding: 0 0.555556rem;
    padding-top: 0.3rem;
}
.inputwrap {
    width: 100%;
    line-height: 1.28rem;
    font-size: 12px;
    border-bottom: 1px solid #ececec;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.inputwrap2 {
    margin-top: 16px;
}
.inputwrap > .zhanghao {
    width: 8.27rem;
    height: 0.6rem;
    font-size: 0.375rem;
    line-height: 0.6rem;
    margin: 0.39rem 0;
    border: none;
    outline: none;
}
.inputwrap > .clear {
    width: 0.88rem;
    height: 0.88rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAp1JREFUSA29lr9v2kAUx8/mh0BCMGQAxRMC0REKqtQOVafskeiUvyVj/pYubaXsnaoMrVRBYUD8WMqAUwnhCQkGI+j7XnyXs302kJCeZHz33rv34fne3T2DHdB6vd7r7XZ7Sc97MrcMwzjHtN1ud08v2zTNO3puG43Gb8jjmhGn7Ha7HwlyQzav4uwU3ZjA181m84si83W1wH6/X95sNp8ogrc+6wMH9AV+JpPJq3q9/ic4JQSkqD5QVF/J8CxofOTYoWjbFO13dZ4P6MG+kUFKNXpG3yXohQqVQHxG13V/kfPnRhb8f04qlXojPq8ptFizF4DB/Znnm6M4ENn41AThXvb8wDcYMONAL/W109LpNCuVSoyyTqsXwmw2y4rFIqMMFSLfWzAMbGoKuevTKgPALMti6/WaTSYTRraK9qGby+VYtVpliUSCDYdDtlqtQjYQ0J9umkS+1Go94WKx4DBEUKvVQpGqMMdxImFwBxaAOK4iGyJCZIgwCA3CptNppB8owMIaWrFWpNRBC4WC/IyIbB/MY1imOIiPhVYqFb5mR8CQUOdyH+4DQo9IbdvGLcGzEePZbHbIVG5D83YmPbhiDmpYs3K5LGHYKrpEinH2FxHaMQZSFUyQwWCgTSQ5Qd/B3Wne6XWP0iAMCaJLpH2HA1gA3j66DvewFcSmDiaIDkr+wk48CVimVxaMo6zy+XxsNgahmUwmytUYLH5AEvmaNuVnneV8PmfL5TL2BAF0NBoxwKKONTDgX560nU7nB2Xsk0oK3R9VZSg5Wq3WO8jkB6cFv6KxoxqeqO94vrk7CcSNTGG3SeqeCAQ3KDHa4raHQAIxQO1BBhfUPUWkKKJ89QwYcg0xEO2/lokCijfKAsrely+EVSj6pyz1/wFrT2LaPTPA3AAAAABJRU5ErkJggg==)
        no-repeat 50% 50%;
    background-size: 0.37rem 0.37rem;
}
.inputwrap > .mima {
    width: 5.33rem;
    height: 0.6rem;
    font-size: 0.375rem;
    line-height: 0.6rem;
    margin: 0.39rem 0;
    border: none;
    outline: none;
}
.inputwrap > .yangzhengma {
    display: block;
    width: 2.3rem;
    height: 0.75rem;
    text-align: center;
    color: #333;
    font-size: 14px;
    background: #fff;
    line-height: 0.75rem;
    border-radius: 4px;
    margin-right: 0.22rem;
    border: 1px solid #7f7f7f;
}
.otherchoice {
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0.5866rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.otherchoice > .span1 {
    height: 0.6rem;
    cursor: pointer;
    color: #7f7f7f !important;
    font-size: 0.375rem;
    line-height: 0.6rem;
}
.otherchoice > .span2 {
    height: 0.6rem;
    line-height: 0.6rem;
    color: #333;
    font-size: 0.375rem;
}

.denglu {
    height: 20%;
}
.denglu a {
    width: 100%;
    height: 1.28rem;
    display: inline-block;
    border-radius: 3px;
    text-align: center;
    line-height: 1.28rem;
    font-weight: 600;
    font-size: 0.4rem;
    background: #dd1a21;
    color: #fff;
}
.box1 {
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.u-zcagree {
    cursor: pointer;
    width: 14px;
    height: 14px;
}
.u-zcagree {
    width: 0.48rem;
    height: 0.48rem;
    background-image: url(https://yanxuan.nosdn.127.net/6830e38fbcc7c038eea164ecb53365ca.png);
    background-size: 100%;
    background-repeat: no-repeat;
    margin-right: 5px;
}
.active {
    background-image: url(https://yanxuan.nosdn.127.net/8019540df709c25d3a056630b327195f.png);
}
.fur-item span {
    color: #7f7f7f;
    font-size: 12px;
}
.fur-item a {
    color: #007aff;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
}
.fuwu {
    padding: 0px 3px 0px 3px;
}
.wangyi {
    padding-left: 3px;
}
.btn-btn1 span {
    color: #333;
    font-size: 0.37333rem;
}
.btn-btn1 {
    text-align: center;
    margin-top: 20px;
}
.icon-arrow-right {
    display: inline-block;
    margin-left: 0.05333rem;
    position: relative;
    top: 1.8px;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-6264a71cf0.png?imageView&type=webp);
    background-size: 100% 100%;
    width: 0.37333rem;
    height: 0.37333rem;
}
</style>