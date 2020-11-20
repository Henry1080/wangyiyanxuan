<template>
    <div class="hasHd-isOpenAppClosed">
        <div id="j-bd" class="g-bd">
               <!-- 头部 -->
            <div class="bd">
                <div class="row">
                    <!-- 首页图标 -->
                    <a class="u-icon-u-icon-home" @click="$router.push('/')"></a>
                    <i class="logo u-icon u-icon-logo"></i>
                    <div class="right">
                        <!-- 搜索图标 -->
                        <a class="u-icon-search1"  @click="$router.push('/Search')"></a>
                        <!-- 购物车图标 -->
                        <a class="u-icon-cart" @click="$router.push('/Carts')"></a>
                    </div>
                </div>
            </div>
             <!-- 第二部分:LOGO,登录框 -->
            <div class="view">
                <!-- logo -->
                <div class="logoWrap">
                    <img
                        src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
                        alt
                    />
                </div>
            </div>
            <!-- 登录框 -->
            <div class="register-content">
                <div class="register-content-div">
                     <input
                            type="text"
                            placeholder="邮箱账号"
                            class="register-content-input"
                            v-model.trim="acout"
                        />
                         <input
                            type="password"
                            placeholder="密码"
                            class="register-content-input input2"
                            v-model.trim="pasd"
                        />
                         <p class="register-content-p">
                            <span class="span2">注册账号</span>
                            <span class="span1">忘记密码</span>
                        </p>
                         <p class="denglu">
                            <a href="#" class="a1" @click="denglu">登录</a>
                        </p>

                        
                        <div class="btn-btn1" @click="$router.go(-1)">
                            <span>其他登录方式</span>
                            <i class="icon-arrow-right"></i>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
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
                alert("请输入账号密码")
            }else if(this.acout=="17756599558@qq.com"&&this.pasd=="123456"){
                this.$router.push("/Personal")
                this.$store.state.denglu=false;
            }else{
                alert("账号17756599558@qq.com密码123456")
            }
            }
        }
    }
</script>

<style scoped>
.hasHd-isOpenAppClosed{
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
    margin-bottom: 31px;
}
.input2 {
    margin-top: 15px;
}
.register-content-p {
    height: 15%;
    font-size: 13px;
    font-weight: bold;
    line-height: 350%;
    margin-top: -30px;
}
.span1 {
    position: absolute;
    right: 0;
    color: #7f7f7f;
}
.span2 {
    color: #7f7f7f;
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
}
.a1 {
    color: #fff;
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