<template>
    <div class="page4">
        <!-- 未登录 -->
        <div class="m-loginTypes" v-if="isdenglu==false">
            <div class="bd">
                <div class="row">
                    <!-- 首页图标 -->
                    <div class="u-icon-u-icon-home" @click="tohomepage"></div>
                    <div class="logo u-icon u-icon-logo"></div>
                    <div class="right">
                        <!-- 搜索图标 -->
                        <a class="u-icon-search1" @click="$router.push('/Search')"></a>
                        <!-- 购物车图标 -->
                        <a class="u-icon-cart" @click="$router.push('/Carts')"></a>
                    </div>
                </div>
            </div>
            <div class="cont">
                <div class="logoWrap">
                    <img
                        src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
                        alt
                    />
                </div>
                <div class="btnWrap">
                    <!-- 手机登录 -->
                    <div class="w-button-w-button-xl" @click="$router.push('/Login')">
                        <i class="u-icon-loginphone"></i>
                        <span>手机号快捷登录</span>
                    </div>
                    <!-- 邮箱登录 -->
                    <div class="w-button-w-button-ghostRed" @click="$router.push('/Logind')">
                        <i class="u-icon-loginMail"></i>
                        <span
                            style="color: #DD1A21; font-size: .37333rem;box-sizing: border-box;line-height: 1.25333rem;"
                        >邮箱账号登录</span>
                    </div>
                </div>
            </div>
            <div class="thirdWrap">
                <div class="item">
                    <i class="icon-weixin"></i>
                    <span class="name">微信</span>
                </div>

                <div class="item">
                    <i class="icon-qq"></i>
                    <span class="name">QQ</span>
                </div>

                <div class="item">
                    <i class="icon-weibo"></i>
                    <span class="name">微博</span>
                </div>
            </div>
        </div>
        <!-- 已经登录 -->
        <div class="profile" v-else>
            <div class="m-profile">
                <div class="left">
                    <img
                        class="avatar"
                        src="https://yanxuan.nosdn.127.net/df56828787a99c95d2c493cc3de78c64.jpg"
                    />
                    <div class="info">
                        <p class="nickname">小炫</p>
                        <div class="membershipLevel">
                            <span class="membershipLevel">普通用户</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img
                        src="https://yanxuan.nosdn.127.net/1e58f571cde8227c68ad7342ef40b766.png"
                        class="surveryIcon"
                    />
                    <i class="icon-qrCodeInUcenter"></i>
                    <div class="m-supermcEntrance">
                        <i class="u-icon-supermember"></i>
                        <div class="word">
                            <div class="line1">Pro会员</div>
                            <div class="line2">
                                <span>立即试用</span>
                                <i class="u-icon-arrow"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-myAsset">
                <div class="tt">我的资产</div>
                <div class="assetList">
                    <div class="assetItem">
                        <p class="assetCout">
                            <span class="unit">¥</span>
                            <span class="value">0</span>
                        </p>
                        <p class="assetName">回馈金</p>
                    </div>
                    <div class="assetItem">
                        <p class="assetCout">
                            <!-- <span class="unit">¥</span> -->
                            <span class="value">2</span>
                        </p>
                        <p class="assetName">红包</p>
                    </div>
                    <div class="assetItem">
                        <p class="assetCout">
                            <!-- <span class="unit">¥</span> -->
                            <span class="value">0</span>
                        </p>
                        <p class="assetName">优惠卷</p>
                    </div>
                    <div class="assetItem">
                        <p class="assetCout">
                            <span class="unit">¥</span>
                            <span class="value">0</span>
                        </p>
                        <p class="assetName">津贴</p>
                    </div>
                    <div class="assetItem">
                        <p class="assetCout">
                            <!-- <span class="unit">¥</span> -->
                            <span class="value">0</span>
                        </p>
                        <p class="assetName">礼品卡</p>
                    </div>
                </div>
            </div>

            <div class="m-uMenu">
                <ul class="list">
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">我的订单</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">账号管理</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">我的手机号</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">周六一起拼</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">售后管理</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">邀请返利</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">优先购</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">积分中心</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">会员俱乐部</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">地址管理</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">支付安全</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">帮助与客服</span>
                        </a>
                    </li>
                    <li class="item">
                        <a href class="m-uMenuItem">
                            <i class="img-u-icon-ulist"></i>
                            <span class="txt">意见与反馈</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="g-row">
                <button class="w-button" @click="exitdenglu">退出登录</button>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    data() {
        return {};
    },
    computed: {
        isexist() {
            return this.$store.state.isexist;
        },
        bottomButton() {
            return this.$store.state.bottomButton;
        },
        isdenglu() {
            return this.$store.state.isdenglu;
        },
        componentName() {
            return this.$store.state.componentName;
        },
    },
    methods: {
        exitdenglu() {
            this.$store.state.isdenglu = false;
            this.$store.state.bottomButton = false;
            this.$store.state.componentName = "first";
            this.$store.state.bottomButton = true;
        },
        deltopbar() {
            this.$store.commit("deltopbar");
        },
        tohomepage() {
            this.$store.state.componentName = "first";
            this.$store.state.bottomButton = true;
        },
    },
    created() {
        if (this.$store.state.isdenglu == false) {
            this.$store.state.bottomButton = false;
        }
        if (this.$store.state.isdenglu == true) {
            this.$store.state.bottomButton = true;
        }
    },
};
</script>

<style scoped>
.page4 {
    height: 100%;
    overflow-y: scroll;
}
.m-loginTypes {
    height: 100%;
    background: rgb(247, 247, 247);
    position: relative;
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
    width: 0.64rem;
    height: 0.58667rem;
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp");
    background-position: 0 -0.98667rem;
    background-size: 2.29333rem 5.6rem;
}
.row .logo {
    width: 2.29333rem;
    height: 0.72rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp");
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
    margin-right: 0.26667rem;
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
.logoWrap {
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 3.09333rem;
}
.logoWrap img {
    width: 3.57333rem;
    height: 1.2rem;
}
.btnWrap {
    padding: 0 0.53333rem;
    margin-bottom: 2.73333rem;
}
.w-button-w-button-xl {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.42667rem;
    overflow: visible;
    overflow-x: visible;
    overflow-y: visible;
    border-radius: 2px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    border: 0 solid #dd1a21;
    background-color: #dd1a21;
    width: 100%;
    height: 1.25333rem;
    text-align: center;
}
.u-icon-loginphone {
    margin-right: 0.21333rem;
    position: relative;
    top: -0.02667rem;
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png?imageView&type=webp");
    background-size: 0.53333rem 3.86667rem;
    background-position: 0 -0.66667rem;
    background-position-x: 0px;
    background-position-y: -0.66667rem;
    width: 0.53333rem;
    height: 0.53333rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.25333rem;
    text-align: center;
    font-size: 0.37333rem;
    color: #fff;
}
span {
    display: inline;
    line-height: 1.25333rem;
    text-align: center;
    font-size: 0.37333rem;
    color: #fff;
}
.w-button-w-button-ghostRed {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.42667rem;
    overflow: visible;
    border-radius: 2px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    position: relative;
    border: none;

    width: 100%;
    height: 1.25333rem;
    border: 1px solid #dd1a21;
    text-align: center;
}
.u-icon-loginMail {
    margin-right: 0.21333rem;
    position: relative;
    top: -0.02667rem;
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png?imageView&type=webp");
    background-size: 0.53333rem 3.86667rem;
    background-position: 0 0;
    background-position-x: 0px;
    background-position-y: 0px;
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    width: 0.53333rem;
    height: 0.53333rem;
}
.m-loginTypes .thirdWrap {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 1.06667rem;
    height: 0.53333rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.itemWrap {
    border-right: 1px solid #979797;
}
.thirdWrap .item {
    position: relative;
    top: -0.13333rem;
}
.thirdWrap .item .icon-weixin {
    position: relative;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUI5M0JDMTkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDMDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ex4WyAAADVklEQVR42uyZfWiNURzH77VJGEqjeV+LeZu2+MNbyQh/IKFtJaKRl1IrLyWSmz+UoigarXlZIrIQeWkihVLSRC62P7D4wyUhL9ts1+dXv9Vaz3nuee59HjXdU5/O2nn7nvOc8/v9zrnheDwe6k6pR6ibpbTgtODuLjjTtmIkEpHJzYTFMA3GwkDtoxU+QxQewjV4BHFDX8EJpnOpsw62Q56hWk/IUYphFzTCQajWCQW/JRA7maweKl3EmtJobfcUpgYuGLFl+nknpjjGeLivXykYwYhdTnYWevl4Vqpgs++CESuHqcYwmXfQkKDPX/AEmh3KDsMcv1f4KPRxWnjIZUL55McM/YmVGAVTdN+2O4xXTR+9fRFMRzPI5hrqnqG8w0zVGercgJj+LYfto0OdXCj3y6ytcjcakQryFpcBV0KtHtYyNXNOqVy/pOcU7hxeIkg+6bgEbdogI0GdP10W47VOQmzzD21/iPHaUhXc6sX7JUjS1wk4DsNhARTBMBgA3+CDbp3rcIvxW7wK9iuafwzrYR5sg0EWbWTvHxBLgo5mWyvhhwu9ABvVju+3FBvSelK/HsGTbAVHUxRbp7b2jsVZMCVp9wDRxTaCb6cg9hPsgKvQP8WJ94PLavNdBVeZQkKLtAf2asjZNV2ES4Z2L9URxbr8XyZdg+iwm+OQxqeSECsn/jksdCgToSWwDE46lM9m3E3kSxzKxFsuSuSat8Ibj4JvwlJDWZ66+r6Q71A+QfMiQ/vVRrPWaaWlk3uQbSlYJlnqEvd+VWeR5VDWri7c5BVj6BmcKLx8QTbLw0q/dxkwpI4iy8VS5SQwd1YBfFSjrlcWguPqsoNI7V5uzeL3h1h0Ku72bUCCG7xcQud3sqlN6jpDuvIFMBQkth0Dd/UC6ne64kVwqQrdJ4FMR3BiuKaPVFuc4aPY33DEi2CJotbaRFF6fZLOK3wUvJuxm6wFU/mcxwF2iiOAQh/E1uq7RqBPVT81pHyWYj/iHVc4hbtBvK3F9EnrdJLtxX2XmLZhUI+B32ENTNfozYuNbnG7OoWT+ckgice8bL2NF6o1yVJ33ai3E9lCG2ALfIERpttPZujfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=)
        no-repeat;
    top: 0.13333rem;
    background-size: 98%;
    display: inline-block;
    width: 0.53333rem;
    height: 0.53333rem;
}

.thirdWrap .item .name {
    color: #7f7f7f;
    border-right: 1px solid #333;
    padding-right: 26px;
}
.thirdWrap .item .icon-qq {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUJBRTQ1MDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDODkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4pjhZyAAACIUlEQVR42uyZPUjDQBTHU621gq2KHdSiIurQrdgOOlhpQfzCuSAoFCelFNRdCm4u4iCujl2cRFHo5qKguDjoIC4VRBCs+K1Y/4cnhKLF9N5LKeTBjzva3OXHy+WSu9hyuZxWTlGhlVlYwpZwXtiLaZRMJn/7eQCMgyBoBTXgBWTACdgC6QLt+YTzwgdWweAf/3eAfpAA+2AOHJdqSIyC0wKy+SHEj5DhaCmEA2C7yD5SkA6bKewAe4pXZwfSdWYJL4NGRWEnWDPayGb00YysuFFkCWeqZvR5zZnhqEYbU9xDYoxYeIRbOEgsHMCQcLAIo2MvCi+xsAt0cWWYWvYnWriEa5mEXVzCj0zCT1zCHiZhD5dwgkk4Tv6kkzNEhvHd3IdznFFmeIZ5MRGnHhLTzMKTyLCNRBgdhVA0MQu75RKLJMMxk9aYMeWbTl6mW9BggvCrOA/O+ayS4V6TZEVUg4jqkAhr5kZYVbhHV88ySd7p6n5V4U5ZrjDOxQtgUdbbVIX98uab1+TODUMcov8lWe9WFRaSE7IuZosrYtl7cKFbLqWpV81iEZoiFJ5Fn+tsy3wpvYtiiED2AH31mbGRMgw2FGU3jcqqCIutVdWPIx8QjhhtZGhI4ARi31dsmbYTjuEbEELf5/852Oj+sFtm9lL73hCsklfpU2RMvgsIHoB4H3DKhatTPnbtuuPfwRuoBPWsN10pw/ooYwmXu/CXAAMA+zyBlSoNLhoAAAAASUVORK5CYII=)
        no-repeat;
    position: relative;
    top: 0.13333rem;
    background-size: 98%;
    display: inline-block;
    width: 0.53333rem;
    height: 0.53333rem;
    font-style: normal;
}
.thirdWrap .item .icon-weibo {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUJBRTQ1ODkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUJBRTQ1NzkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DmdgDAAAEUUlEQVR42uxYa2iOYRjeZlhOMwyLzWFTzsc55jj2Qw5FTEQWkR+OOS2SJWnL4QfSHHOsGRp+YDQk50aKwuaQmTRiK2ezfa67rq+enp73/b7nm8NW311Xz/s+x/u9n/v4hno8npDaRGEhtYyCDAcZDjL8jyncZnJ6enp1z2sIHARGAi3Y9xa4B5wBsnHG55ok4VHAFIVZoRhgPLAXeAmG57ltEGoTOP6AhFsCt4D2lGw4+0K1eSeAmTjv539l2LQefU0p4ZVAT43paRj3/EmVaAzMoF5eBa4Ay4E6Fh9RDhzFY19gkzI0FVhULaNTqBmQBswHIrUxMahojpsYlOs/CSQDIr07wFb056Fdy1tYw+kb8X4EKKuOhOcChbzCSIc5KT48xSTeThMyfgFMbeD4euChcoOzA1IJbBhFyewDmvuY3tRlH3Fb04FtwH7gK4fWYWwU8ItjXppgrRLYJF6kACT4+X3PlOd61M/u2Ec+9It4Cjwf595Z9BzhVDGxg/PK+t5WEsaGidwwwUJtXgITgRzgA9eLn80AdgAF2PeE6DNQwHGh7jyzlB/mtRf/JIyFPdBccrtiFx1O8TFHAsgY7t+YfV94rniZ+uyr9EvCWNQuQGZtKJ5tIduzbLspwiz2KWEwG8HFrf5yqH7OVoxwOc4t4XtHZc4Nf1RiixZ1TFQE5AOPgSfAN+AT84TWXD8cGGAIvd7rv0YBVaEpUcbyqP8isI2uoRmLB6O56cCkHLIb2AM89VOKkjcsYNRqoPR7GCEP4Mzr/l6JieHbaAYa5h4ClgFlAV5/HCCubJBh7DKQirNfWyXwWDDEwGwFk5BUjVnxqaupFi/oe88BcxxUTYxnNGCSZhJ9c5xtxTHLMGcGNsrR+2gwGTysAy1+LKPXXaCNwZi/0sC+G86R+TttGU7S3kW/Tmp9IsFjLnmEUB+G8VAD0yVMHU00jumm3wx31N4ztXepDrY77HUa+Ki8i66OcJj7wIWfGBuGVd0rxdcWGlShoeJDN1AFyoFVWg4h1MvJ2F14KrUpQotpzV5j06kLW/G9iUqmVaFEK90Nmmi4Q/8dCOmjjYTzVCPA4mht/APbXIVZJ8bEX1406HBX0VUHfjJtjU7y0F/KtS006Km3fInl82QGBp2y9DwAzErgOOxQQp3CeK6tH5YQq1aKaegbprzfYnrYicxIOD6l6LWXJJ9dqvVFsb+fgQ9xg6mB/vmRQnCXknxL+TJNGV/CQlPUI0Jb+wZYzCpYLdHl/ZGD7oraJPv6geKzzMcGog6bFaYu8j2f+in9/RkwKpgMSTJexfn1qasrgMGGI37Qy2TirMqAcwlDaZTBZNtLr8j0barFO35AXaAt0JUeJNmgKl5jzGENV2SbkPj1IwUbd6Zhpfhy7C4kiU22ZHvY73mgCbTtn58wBoOhQA8ilmG6kVLSvOdNiBHfZ2H5SP+L89cZrgkU/KEdZDjIcJBhd/otwADLKFf6Fop5QwAAAABJRU5ErkJggg==)
        no-repeat;
    top: 0.13333rem;
    position: relative;
    background-size: 98%;
    display: inline-block;
    width: 0.53333rem;
    height: 0.53333rem;
    font-style: normal;
}
.profile {
    height: 100%;
    overflow-y: scroll;
}
.m-profile {
    background-image: url(//yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp);
    background-size: 100%;
    height: 3.6rem;
    overflow: hidden;
    background-position: bottom center;
}
.avatar {
    vertical-align: middle;
    width: 1.89333rem;
    height: 1.89333rem;
    border-radius: 50%;
}
.left {
    display: flex;
    padding: 0.85333rem 0;
    width: 7.2rem;
    margin-left: 20px;
}
.info {
    margin-left: 0.4rem;
    line-height: 1;
    overflow: hidden;
}
.left .nickname {
    width: 4.5rem;
    color: #fff;
    font-size: 0.48rem;
    line-height: 2.2;
    text-align: left;
    margin-bottom: 0.13333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.membershipLevel {
    color: #fff;
    font-size: 0.37333rem;
    vertical-align: middle;
    line-height: 0;
}
.right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    width: 2.8rem;
    padding-left: 0.22667rem;
    height: 100%;
}
.surveryIcon {
    width: 0.58667rem;
    height: 0.58667rem;
    position: absolute;
    top: -2.65333rem;
    left: 7.5rem;
}
.icon-qrCodeInUcenter {
    position: absolute;
    right: -6.81333rem;
    top: -2.708667rem;
    width: 0.85333rem;
    height: 0.85333rem;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s7e83b8ad5c-083f9c5dc0.png?imageView&type=webp);
    background-size: 1.12rem 19.30667rem;
}
.m-myAsset .tt {
    margin-left: 0.4rem;
    border-bottom: 0.01333rem solid #d9d9d9;
    text-align: left;
    line-height: 1.38667rem;
    font-size: 0.37333rem;
}
.assetList {
    text-align: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.26667rem solid #f4f4f4;
}
.assetItem {
    padding-top: 0.42667rem;
    height: 2.13333rem;
    flex-shrink: 0;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.assetCout {
    margin-bottom: 0.05333rem;
    font-size: 0.42667rem;
    line-height: 0.64rem;
    font-weight: 700;
}
.assetCout > .unit {
    margin-right: 0.05333rem;
    font-size: 0.32rem;
    line-height: 0.48rem;
    color: #333;
}
.value {
    font-weight: bold;
    font-size: 0.5rem;
    color: #333;
}
.m-uMenu {
    margin-bottom: 0.53333rem;
    background: #fff;
}
.list {
    zoom: 1;
}
.list > .item {
    float: left;
    width: 33.33333%;
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    list-style: none;
}
.m-uMenuItem {
    display: block;
    height: 2.4rem;
    padding-top: 0.6rem;
    text-align: center;
}
.img-u-icon-ulist {
    background-position: 0 -10.81333rem;
    background-repeat: no-repeat;
    display: inline-block;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s7e83b8ad5c-083f9c5dc0.png?imageView&type=webp);
    background-size: 1.12rem 19.30667rem;
    width: 0.66667rem;
    height: 0.66667rem;
    vertical-align: middle;
    margin-bottom: 0.21333rem;
}
.txt {
    display: block;
    font-size: 0.32rem;
    line-height: 0.45333rem;
    color: #333;
}
.w-button {
    display: block;
    width: 100%;
    line-height: 1.28rem;
    border: 1px solid #fff;
    border-top: 0.2333rem solid #d9d9d9;
    background-color: #fff;
    color: #333;
    text-align: center;
    font-size: 0.37333rem;
    border-radius: 4px;
    overflow: hidden;
    outline: none;
}
</style>