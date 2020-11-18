<template>
    <div class="hasHd isOpenAppClosed">
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

<style>

</style>