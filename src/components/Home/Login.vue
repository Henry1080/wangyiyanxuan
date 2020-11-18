<template>
    <div class="page">
        <div id="j-bd" class="g-bd">
            <!-- 头部 -->
            <div class="bd">
                <div class="row">
                    <!-- 首页图标 -->
                    <a class="u-icon-u-icon-home" @click="$router.push('/First')"></a>
                    <i class="logo u-icon u-icon-logo"></i>
                    <div class="right">
                        <!-- 搜索图标 -->
                        <a class="u-icon-search1"></a>
                        <!-- 购物车图标 -->
                        <a class="u-icon-cart" @click="$router.push('/Carts')"></a>
                    </div>
                </div>
            </div>
            <div class="logoWrap">
                <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt />
            <!-- 第二部分:LOGO,登录框 -->
            <div class="view">
                <!-- logo -->
                <div class="logoWrap">
                    <img
                        src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
                        alt
                    />
                </div>
                <!-- 登录输入框 -->
                <div class="register-content">
                    <div class="register-content-div">
                        <input
                            type="text"
                            placeholder="请输入手机号"
                            class="register-content-input"
                            v-model.trim="acout"
                        />
                        <input
                            type="password"
                            placeholder="请输入短信验证码"
                            class="register-content-input input2"
                            v-model.trim="pasd"
                        />
                        <a class="tabfocus-getsmscode">获取验证码</a>
                        <p class="register-content-p">
                            <span class="span2">遇到问题?</span>
                            <span class="span1">使用密码验证登录</span>
                        </p>
                        <p class="denglu">
                            <a href="#" class="a1" @click="denglu">登录</a>
                        </p>
                        <div class="box1">
                            <span class="u-zcagree">
                                <input type="checkbox" class="zc-un-login" checked="true" background-color="#fff"/>
                            </span>
                            <div class="fur-item">
                                <label>
                                    <span>我同意</span>
                                    <a
                                        target="_blank"
                                        href="//https://reg.163.com/agreement_mobile_wap.shtml" class="fuwu">
                                        
                                    《服务条款》</a>
                                    <span>和</span>
                                    <a
                                        href="//https://reg.163.com/agreement_mobile_ysbh_wap.shtml"
                                        target="_blank"
                                        class="wangyi"
                                    >《网易隐私政策》</a>
                                </label>
                            </div>
                        </div>

                        <div class="btn-btn1"  @click="$router.go(-1)">
                            <span >其他登录方式</span>
                            <i class="icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                acout:"",
                pasd:""
            }
        },
        methods: {
            denglu(){
                 if(this.acout==""&&this.pasd==""){
                alert("请输入账号验证码")
            }else if(this.acout=="17756599558"&&this.pasd=="123456"){
                this.$router.push("/Personal")
                this.$store.state.denglu=false;
            }else{
                alert("账号17756599558验证码123456")
            }
            }
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
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
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp);
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
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp);
    width: 2.29333rem;
    height: 0.72rem;
    background-position: 0 -1.70667rem;
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
}
.u-icon-search1 {
    position: relative;
    bottom: 0;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp);
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
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp);
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
    padding-top: 2.13333rem;
    padding-bottom: 3.09333rem;
}
.logoWrap img {
    width: 3.57333rem;
    height: 1.2rem;
}
.register-content {
    width: 100%;
    height: 50%;
}
.register-content-div {
    width: 85%;
    height: 100%;
    margin: 0 auto;
    position: relative;
}
.register-content-input {
    width: 100%;
    height: 10%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #e5e5e5;
    outline: none;
}
.input2 {
    margin-top: 15px;
}
.register-content-p {
    height: 15%;
    font-size: 13px;
    font-weight: bold;
    line-height: 350%;
}
.tabfocus-getsmscode {
    display: inline-block;
    width: 2.3rem;
    height: 0.75rem;
    text-align: center;
    color: #333;
    font-size: 14px;
    background: #fff;
    line-height: 0.75rem;
    border-radius: 4px;
    border: 1px solid #7f7f7f;
    position: absolute;
    right: 0;
    top: 16%;
}
.register-content-p {
    height: 15%;
    font-size: 13px;
    font-weight: bold;
    line-height: 350%;
}
.span1 {
    position: absolute;
    right: 0;
    color: #333;
}
.span2 {
    color: #7f7f7f;
}
.denglu {
    height: 20%;
    margin-top: 20px;
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
}
.a1 {
    color: #fff;
}
.u-zcagree {
    cursor: pointer;
    width: 14px;
    height: 14px;
}
input {
    background: #fff;
    color: #333;
}
.fur-item span {
    color: #7f7f7f;
    font-size: 12px;
}
.fur-item {
    position: absolute;
    top: 228px;
    left: 21px;
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
}
.icon-arrow-right {
    display: inline-block;
    margin-left: 0.05333rem;
    position: relative;
    top: 0;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-6264a71cf0.png?imageView&type=webp);
    background-size: 100% 100%;
    width: 0.37333rem;
    height: 0.37333rem;
}
</style>