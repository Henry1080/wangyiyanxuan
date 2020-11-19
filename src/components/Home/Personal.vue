<template>
    <div class="profile">
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
                <span class="value">100</span>
              </p>
              <p class="assetName">回馈金</p>
            </div>
            <div class="assetItem">
              <p class="assetCout">
                
                <!-- <span class="unit">¥</span> -->
                <span class="value">100</span>
              </p>
              <p class="assetName">红包</p>
            </div>
             <div class="assetItem">
              <p class="assetCout">
                <!-- <span class="unit">¥</span> -->
                <span class="value">100</span>
              </p>
              <p class="assetName">优惠卷</p>
            </div>
             <div class="assetItem">
              <p class="assetCout">
                <span class="unit">¥</span>
                <span class="value">100</span>
              </p>
              <p class="assetName">津贴</p>
            </div>
             <div class="assetItem">
              <p class="assetCout">
                <!-- <span class="unit">¥</span> -->
                <span class="value">100</span>
              </p>
              <p class="assetName">礼品卡</p>
            </div>
          </div>
        </div>

        <div class="m-uMenu">
          <ul class="list">
            <li class="item">
             <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">我的订单</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">账号管理</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">我的手机号</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">周六一起拼</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">售后管理</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">邀请返利</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">优先购</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">积分中心</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">会员俱乐部</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">地址管理</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">支付安全</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">帮助与客服</span>
             </a>
            </li>
            <li class="item">
               <a href="" class="m-uMenuItem">
               <i class="img-u-icon-ulist"></i>
               <span class="txt">意见与反馈</span>
             </a>
            </li>
          </ul>
        </div>

         <div class="g-row" style="margin-bottom: 1rem">
                <button class="w-button">退出登录</button>
            </div>

            
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.m-profile{
  background-image:url(//yanxuan.nosdn.127.net/5905098f74e04c39fa5e76ebb9ff591b.png?imageView&type=webp);
  background-size: 100%;
  height: 3.6rem;
  overflow: hidden;
  background-position: bottom center;
}
.avatar{
    vertical-align: middle;
    width: 1.89333rem;
    height: 1.89333rem;
    border-radius: 50%;
}
.left{
    display: flex;
    padding: .85333rem 0;
    width: 7.2rem;
    margin-left: 20px;
} 
 .info{
    margin-left: .4rem;
    line-height: 1;
    overflow: hidden;
}
.left .nickname {
    width: 4.5rem;
    color: #fff;
    font-size: .48rem;
    line-height: 2.2;
    text-align: left;
    margin-bottom: .13333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.membershipLevel{
  color: #fff;
  font-size: .37333rem;
  vertical-align: middle;
  line-height: 0;
}
.right{
  position: relative;
    width: 2.8rem;
    padding-left: .22667rem;
    height: 100%;
    display: block;
}
.surveryIcon{
    width: .58667rem;
    height: .58667rem;
    position: absolute;
    top:-2.65333rem;
    left: 7.5rem;
} 
 .icon-qrCodeInUcenter{
  position: absolute;
   right: -6.81333rem;
    top:-2.708667rem;
    width: .85333rem;
    height: .85333rem;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s7e83b8ad5c-083f9c5dc0.png?imageView&type=webp);
    background-size: 1.12rem 19.30667rem;
}
/* .m-profile .right .m-supermcEntrance{
  animation: shake 1s linear 3;
    margin-top: 1.38667rem;
    width: 2.70667rem;
    height: 1.12rem;
    border-top-left-radius: .85333rem;
    border-bottom-left-radius: .85333rem;
    overflow: hidden;
    background-image: linear-gradient(180deg,#574E44 0,#0E0E0E 100%);
} */
.m-myAsset .tt{
    margin-left: .4rem;
    border-bottom: .01333rem solid #D9D9D9;
    text-align: left;
    line-height: 1.38667rem;
    font-size: .37333rem;
}
.assetList{
  text-align: center;
  display: flex;
  justify-content: space-between;
  border-bottom: .26667rem solid #f4f4f4;
}
.assetItem{
    padding-top: .42667rem;
    height: 2.13333rem;
    flex-shrink: 0;
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.assetCount{
  margin-bottom: .05333rem;
    line-height: .64rem;

}
.unit{
    margin-right: .05333rem;
    font-size: .5rem;
    line-height: .48rem;
    font-weight:bold;
}
.value{
  font-weight:bold;
  font-size: .5rem;
}
/* .assstName{
  font-size: .32rem;
    line-height: .48rem;
} */
.m-uMenu{
  margin-bottom: .53333rem;
    background: #fff;
}
.list{
  zoom:1
}
.item{
    float: left;
    width: 33.33333%;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
    list-style: none;
}
.m-uMenuItem{
    display: block;
    height: 2.4rem;
    padding-top: .6rem;
    text-align: center;
}
.img-u-icon-ulist{
  background-position: 0 -10.81333rem;
  background-repeat: no-repeat;
    display: inline-block;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-s7e83b8ad5c-083f9c5dc0.png?imageView&type=webp);
    background-size: 1.12rem 19.30667rem;
    width: .66667rem;
    height: .66667rem;
    vertical-align: middle;
    margin-bottom: .21333rem;
}
.txt{
  display: block;
    font-size: .32rem;
    line-height: .45333rem;
    color: #333;
}
.w-button{
 
    display: block;
    width: 100%;
    line-height: 1.28rem;
    border: 1px solid #fff;
    border-bottom: .01333rem solid #D9D9D9;
    border-top: 0.2333rem solid #d9d9d9;
    border-bottom: 0.2333rem solid #D9D9D9;
    background-color: #fff;
    color: #333;
    text-align: center;
    font-size: .37333rem;
    border-radius: 4px;
    overflow: hidden;
}
</style>