<template>
<div class="middle-page1">
   <div class="car" style="height: 100%">
        <div class="mycar">
            <span class="left" style="font-size: .48rem;padding-left: 20px">购物车</span>
            <span class="right" style="vertical-align: middle;color: #DD1A21; font-size: .4rem;float: right;line-height: 54px;padding-right: 20px">领劵</span>
        </div>
        <div class="chengnuo">
           <div class="item"> <i></i> <span>30天无忧退货</span></div>
           <div class="item"> <i></i> <span>48小时快速退款</span></div>
           <div class="item"> <i></i> <span>满99元免邮费</span></div>
           
        </div>
        <div class="m-defaultPage">
            <div class="img"></div>
            <div class="text" @click="$router.push('/Login')">登录</div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
  .middle-page1 {
    flex-grow: 1;
    overflow: auto;
    background: rgb(247, 247, 247);
}
   .chengnuo {
        display: flex;
        justify-content: space-around;
        background: #eee;
        height: .9333rem;
    }
    .chengnuo .item {
        display: flex;
        align-items: center;
        font-size: .32rem;
        color: #666;
    }
    .chengnuo i {
        width: .1rem;
        height: .1rem;
        border-radius: 50%;
        border:  2px solid #bbb;
        margin-right: .13rem;
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
        margin-bottom: .10667rem;
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .m-defaultPage .text {
        position: absolute;
        top:7.4rem;
        left: 50%;
        transform: translateX(-50%);
        margin: auto;
        width: 6.4rem;
        height: 1.22667rem;
        font-size: .4rem;
        line-height: 1.22667rem;
        color: #fff;
        background-color: #DD1A21;
        border-radius: .04rem;
        text-align: center;
    }
</style>