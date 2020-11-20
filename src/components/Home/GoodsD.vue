<template>
    <div class="page1">
        <!-- <div class="top-bar" v-if="isexist">
            <div class="iconwrap">
                <i class="u-icon u-icon-hd-miniOpenAppClose close" @click="deltopbar"></i>
            </div>
            <div class="imgwrap">
                <img
                    src="https://yanxuan.nosdn.127.net/1fe7a46449e44c20d508bf514e195c9f.png?type=webp&imageView&thumbnail=750x0&quality=75"
                />
            </div>
        </div>-->
        <div class="title-wrap">
            <div class="bd">
                <div class="row">
                    <!-- 首页图标 -->
                    <a class="u-icon-u-icon-home" @click="$router.go(-1)"></a>
                    <i class="logo u-icon u-icon-logo"></i>
                    <div class="right">
                        <!-- 搜索图标 -->
                        <a class="u-icon-search1"></a>
                        <!-- 购物车图标 -->
                        <a class="u-icon-cart" @click="$router.push('/Carts')"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="swiperwrap">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in piclist" :key="item.id">
                        <img :src="item.img" />
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="dt-section-1">
                <div class="content">
                    <div class="priceInfo">
                        <div class="priceCol priceCol1">
                            <div class="price">
                                <span class="priceArea">
                                    <span class="currentPrice">￥46</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="spmcBanner">
                        <div class="spmcPrice">
                            <span class="spmcDiscount">天天免邮</span>
                            <span class="spmcDesc">
                                Pro会员立享免邮，到手价
                                <span class="spmcEconomizePrice">43.7</span>
                            </span>
                            <i class="u-icon u-icon-questionMark"></i>
                        </div>
                        <span class="spmcBtn">开通</span>
                    </div>
                    <div class="baseInfo">
                        <div class="info">
                            <div class="name">2020新果上市，南非碧根果仁 150克</div>
                            <div class="desc">推荐理由</div>
                        </div>
                        <div class="comment single-line">
                            <div class="wrap">
                                <div class="info-wrap">
                                    <div class="num">90.9%</div>
                                    <div class="com">好评率</div>
                                </div>
                                <i class="icon u-icon u-address-right"></i>
                            </div>
                        </div>
                    </div>
                    <div class="rcmdBanner">
                        <div class="angleTop">
                            <span class="angleContent"></span>
                        </div>
                        <ul>
                            <li>
                                <div class="key">1</div>
                                <div class="recommendReason">大颗完整果仁，颗颗优等生</div>
                            </li>
                            <li>
                                <div class="key">2</div>
                                <div class="recommendReason">南非进口 ，肉厚饱满，奶香浓郁</div>
                            </li>
                            <li>
                                <div class="key">3</div>
                                <div class="recommendReason">告别剥壳烦恼，美味轻松享</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style="border-top: 0.26667rem solid rgb(244, 244, 244);">
                    <div class="savingCardBanner">
                        <div class="content">
                            <i class="u-icon u-icon-card-yellow"></i>
                            <span class="title">省钱月卡</span>
                            <span class="text">| 专享无门槛红包权益</span>
                            <span class="bannerBtn">立即省钱</span>
                        </div>
                    </div>
                </div>
                <div style="border-top: 0.26667rem solid rgb(244, 244, 244);">
                    <div class="m-points">
                        <div class="m-listItem undefined">
                            <div class="inner">
                                <div class="freigh">邮费 : 满99元包邮</div>
                            </div>
                            <i class="icon u-icon u-address-right"></i>
                        </div>
                    </div>
                    <div class="m-hdrkDetail">
                        <div class="m-listItem listItem-custom">
                            <div class="inner">
                                <div class="m-actEntry">
                                    <label>促销:</label>
                                    <div class="m-actInfoWrap">
                                        <div class="m-actInfo" style="margin-top: 0px;">
                                            <span class="tag-status-new gradients">全场换购</span>
                                            <div style="overflow: hidden;">
                                                <span class="txt longTxt">低至11.4元换购</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <i class="icon u-icon u-address-right"></i>
                        </div>
                    </div>
                    <div class="m-shoppingReward">
                        <div class="m-listItem listItem-custom">
                            <div class="inner">
                                <div class="m-shoppingRewardEntry">
                                    <label class="label">购物返 :</label>
                                    <div class="txt">
                                        最高返
                                        <span style="color: rgb(221, 26, 33);">4积分</span>
                                    </div>
                                </div>
                            </div>
                            <i class="icon u-icon u-address-right"></i>
                        </div>
                    </div>
                </div>
                <div style="border-top: 0.26667rem solid rgb(244, 244, 244);"></div>
                <div class="specSelect">
                    <div class="m-listItem undefined">
                        <div class="inner">
                            <span class="it it11">已选择:</span>
                            <span class="it">150克</span>
                            <span class="it">x1</span>
                        </div>
                        <i class="icon u-icon u-address-right"></i>
                    </div>
                </div>
            </div>
            <div class="m-deliveryInfo">
                <div class="m-listItem undefined">
                    <div class="inner">
                        <div class="left">配送:</div>
                        <div class="right">
                            <div class="pickAddr" v-show="isaddress">请选择配送地址</div>
                            <div class="deliveryAddr" v-show="!isaddress">至 北京市东城区东华门街道</div>
                            <div class="deliveryTime" v-show="!isaddress">18:00前支付, 预计明天11月20日送达</div>
                        </div>
                    </div>
                    <i class="icon u-icon u-address-right"></i>
                </div>
            </div>
            <div class="service-wraper dt-section">
                <div class="m-serviceEntry">
                    <div class="left">服务&nbsp;:</div>
                    <div class="right">
                        <div>
                            <div class="right-item">网易自营品牌</div>
                            <div class="right-item">不支持无忧退换</div>
                        </div>
                        <div>
                            <div class="right-item">国内部分地区不可配送</div>
                        </div>
                    </div>
                    <i class="icon u-icon u-address-right"></i>
                </div>
            </div>
            <div class="m-adBanner">
                <a href="https://act.you.163.com/act/pub/wYXLIP37RRbg.html" class="m-carousel">
                    <img
                        src="https://yanxuan.nosdn.127.net/dca642d9d27b48c971ae79991c4fa048.jpg?quality=75&type=webp&imageView&thumbnail=750x0"
                        alt
                    />
                </a>
            </div>
            <div class="dt-section">
                <div class="pingjia">
                    <a href="https://m.you.163.com/item/comment?id=3996656">
                        <h3 class="title">用户评价(13)</h3>
                        <div class="comment-checkAll">
                            <span>
                                <span class="rate">84.6%</span>
                                好评率
                            </span>
                            <i class="icon u-icon u-address-right"></i>
                        </div>
                    </a>
                </div>
                <div class="allpingjia">
                    <header>
                        <img
                            class="avatar"
                            src="https://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png?quality=75&type=webp&imageView&thumbnail=64x64"
                            alt
                        />
                        <span class="name">俺****</span>
                        <i class="dengji"></i>
                        <ul class="m-rate">
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                            <li class="star star-grey star-smallGrey star-yellow star-smallYellow"></li>
                        </ul>
                    </header>
                    <div class="extraInfo">
                        <span class="time">2020-11-16 20:06:45</span>
                        <p class="skus">150克</p>
                    </div>
                    <div class="content">
                        <div class="inner">包装高端大气上档次，比之前那款严选包装的走心了，里面包装也很6奶香浓郁</div>
                    </div>
                </div>
                <div class="relatedItem">
                    <div class="titleWrap">
                        <div class="title">升级前的老款有95828条评价哦</div>
                    </div>
                    <div class="itemWrap">
                        <div class="line">
                            <div class="imgWrap">
                                <img
                                    src="https://yanxuan-item.nosdn.127.net/280e8ab7aff25ac5ccbb7626547e8967.png?quality=75&type=webp&imageView&thumbnail=200x200"
                                    alt
                                />
                            </div>
                            <div class="itemInfo">
                                <div class="tag">老款</div>
                                <div class="name">碧根果仁 128克</div>
                            </div>
                            <div class="goodCmtRateWrap">
                                <div class="goodCmtRate">99.9%</div>
                                <div class="txt">好评率</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lazy-component-wrapper">
                <div class="canshu">
                    <div class="tt">商品参数</div>
                    <div class="item">
                        <div class="left">商品名称</div>
                        <div class="right">碧根果仁</div>
                    </div>
                    <div class="item">
                        <div class="left">净含量</div>
                        <div class="right">150克</div>
                    </div>
                    <div class="item">
                        <div class="left">保质期</div>
                        <div class="right">240天</div>
                    </div>
                    <div class="item">
                        <div class="left">原料产地</div>
                        <div class="right">南非</div>
                    </div>
                    <div class="item">
                        <div class="left">产品特性</div>
                        <div class="right">无壳果仁</div>
                    </div>
                    <div class="item">
                        <div class="left">配料表</div>
                        <div class="right">碧根果仁，白砂糖，食用盐，鸡精调味料，食用香精</div>
                    </div>
                    <div class="item">
                        <div class="left">产品产地</div>
                        <div class="right">安徽省合肥市</div>
                    </div>
                    <div class="item">
                        <div class="left">贮存条件</div>
                        <div class="right">
                            1、开罐后请尽快食用
                            <br />2、一次食用不完需密封内袋后冷藏保存
                            <br />3、包装铁罐可直接接触坚果，但铁罐无密封性，建议将坚果放入密封袋存放
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">温馨提示</div>
                        <div class="right">
                            1、网易严选出售的食品，除明确质量问题外均不接受退换货
                            <br />2、 适宜五周岁以上人群食用，儿童须在成人监护下食用，如有脱氧剂请勿食用
                        </div>
                    </div>
                </div>
                <div class="m-itemDetail-hotArea show">
                    <div class="hotArea-img">
                        <img
                            src="https://yanxuan-item.nosdn.127.net/4dcd271c31cd378a42f7a699481ce498.jpg"
                            alt
                        />
                        <img
                            src="https://yanxuan-item.nosdn.127.net/531f4066ed08d4ac285c8e27c810f4b5.jpg"
                            alt
                        />
                        <img
                            src="https://yanxuan-item.nosdn.127.net/3eb7fd7ad4c324afc118c0e225f4f457.jpg"
                            alt
                        />
                        <img
                            src="https://yanxuan-item.nosdn.127.net/0806a4df1191ef372af81d16b990af06.jpg"
                            alt
                        />
                    </div>
                </div>
                <div class="guanggao">
                    <img
                        src="https://yanxuan-item.nosdn.127.net/d5bba203b43e09873f2196a2f11b4156.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/7d8fca08e386bddd46829400094bcdc2.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/1c00872139ba8bf8ddc4132b823b5d24.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/6f896fdccba0970f9d05963d5ff118f7.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/873c6523421a3a0c7ceea5bf03cb3f96.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/b741c205a6061f4f8af30238bc9a06b4.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/4314d355ba5590e3fb7e1156a9e4e31c.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/24d3baa97aaa2aeb8a3756da78d37ba4.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/9c05ed462cbb296cad9b16f6ea613024.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/e053bd1c92e44388e6a577ad7d181769.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/58424538da37d6e68ef334cc7270215b.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/c97c7450e4a4ebf45fe1d4662722688f.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/1101ea1928ad9f79b8c46821d3d1c55b.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/ce0f10cb51add74c96e77cb98b92427a.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/96e3d71c6e193f3deb3f7a1f2dcdcb01.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/389bb729d39906090f79aecbe97cf930.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/a8c1f9bc3557e71d64822d64f7a3cfc1.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/f954a73ffb72031ebbd1739837ccfc1f.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/54e68fcb1195fb6f88bc47ab4338c086.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/02316729fd5d8c7103c4e408499762c2.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/73a76750c4af7090d88c849ceb98bd40.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/f7a34d3c7798c91450b7f589a485869c.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/075016cd3ce9e39d9919cd902ef7d6b5.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/06eda5927ebce6ca86dc23e0dcb567ef.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/b7817904041ff50805947357ac3a84ce.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/4fe288349a8dc371253249dade5d68ae.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/93d5b141f2e1ce7775452df4fdc5532a.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/fb5dd56778d294995783c1f71b1f120c.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/b9d62429e6654c1d7653a7adaa7ea919.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/001aec1f62b44402da371655e33dc113.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/14d409fb4c786ac14bfa6956f9c494a0.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/63716253e7d941fd0fba4b7f7a0a5748.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/99d8f6fb63cdaa7d8cd2981eaeb86bbd.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/b636ec63233f665eb35ec71d2acbd0a0.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/57357a4221f08875fbc3b1c9a75a6ab4.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/70a6a94e11700578ee5c247deac027f8.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/2943b3b6da1cabe62650d09c878a4922.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/f439f7d0b8eba6e1f0d9af234411ac67.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/48ee33ec07ae5697082adcd549de9d03.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/931e9a8a6e1a92d830401cc50b0e2b2e.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/11cd435c5209e192814ce5bf89f1bc64.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/646af87078938f6a1f41af2897547eaf.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/7d3ff0bb596ed18eccbc505e6521a4ac.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/97da214a4851985907cb7aa44c6a23a4.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/136d46c8aec6ce06c0ea6857bb95292a.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/5caae5f3fec132f30478c096d637dc62.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/63e567dc7dc488439ea0d8aec19db454.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/47b39ff6602c6f0a213d061873261615.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/3c14fb9efb4643775efebc46731b3884.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/a264e3619326560e9f5a0d952fc9dd39.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/e945f01b6b47c5e4045e90e75de9717f.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/4d555507720ced5ce1683a3fc59062ae.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/4835479a445705dd2f72ad5a1562b689.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/7fee2655aecd42cf3d2de83dc65f2f04.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/1663aee639655e1afc3f1360792245dc.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/07fdd95b284eb90b2738848b9a699588.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/bd6bd5f49cc9aa1d5bff3498c6644b0c.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/d961cd8cedbc858db2a4e889b9045a47.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/a19992916ae8156d2f2e42b35d4f31b0.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/059984e204bcf88f88aed28b27b431e5.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/2c7a23a0967d09a81907a3bd87c242ab.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/d4f5cdf144f603bb67a174b2ecb764d1.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/0d99a5ed28c7bd09cca298a4a8820e09.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/1bab294831ef6139647475d77c8481cf.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/efeaafe5b0b7d994573f730f71393973.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/9f53b5dfee40dbccdf8984a0163fa26f.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/5dc3c96d19cb8c30832928a974b59088.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/a0bfef9cfae3dce9dc64609dc3b7e009.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/63bda201a81285037cc840f101634781.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/cfa1a84a13864af0922662069f81a6b0.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/ddd36d81610c169118a57ee173dc59db.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/f41a56ea5b48813b418dc8da8f4c0760.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/f1722bced511c369ca4aa553a1ecbe1e.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/297a714b0cb5eb03be5d00c2e2838d2b.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/64cea0ad1a3b7c8abfee0f44a0fb5ac5.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/4fde8780d9d01c5f3539b6d8cedc2144.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/842b9682a677aeb1b1eae8f3b7cd659e.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/9d8b6a2f4540757b95e812eb5ecd4d7a.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                    <img
                        src="https://yanxuan-item.nosdn.127.net/83908fd0344a9859479f30380565f754.jpg?quality=75&type=webp&imageView"
                        alt
                    />
                </div>
                <div class="changjianwenti">
                    <div class="tt">
                        <div class="line"></div>
                        <span class="text">常见问题</span>
                    </div>
                    <div class="list">
                        <div class="item">
                            <p class="qu">
                                <i class="u-icon u-detail-redNum"></i>
                                <span>网易严选的订单如何配送？</span>
                            </p>
                            <p
                                class="an"
                            >网易严选会根据商品所在地、顾客所在地和商品的尺寸重量优选物流配送商，确保优质用户体验。目前暂不支持自选快递，具体物流信息可在下单成功后“我的订单-追踪物流”中查看。</p>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <p class="qu">
                                <i class="u-icon u-detail-redNum"></i>
                                <span>如何申请退换货？</span>
                            </p>
                            <p class="an">
                                1.支持无忧退换货的商品，自收到商品之日起在无忧退换货期限内，顾客可申请无忧退换货；食品、定作类商品、贴身衣物、积分兑换等特殊商品，无质量问题不支持退换货；
                                <br />2.如果是退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
                                <br />3.退货流程：确认收 货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；
                                <br />4.换货流程：确认收货-申请换货-客服审核通过-用户寄回商品-仓库签收验货-客服确认-换货完成；
                                <br />5.质量问题和平台问题退换货运费由网易严选承担，个人原因退货运费由用户自行承担。上门取件费用由网易严选统一与快递服务商结算，顾客只需将退换货商品交给上门取件快递员寄回。如顾客选择自行寄回商品，请先垫付运费，到货验证商品后，严选将以现金券形式为用户报销运费，不接受单方面到付件。
                            </p>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <p class="qu">
                                <i class="u-icon u-detail-redNum"></i>
                                <span>食品类商品什么情况下支持退换货？</span>
                            </p>
                            <p class="an">
                                1. 为了维护消费者的权益，网易严选出售的食品一经售出非质量原因，不予退货，敬请谅解；
                                <br />2. 生鲜食品及部分酒类产品不支持任何形式的拒签，因客户原因如联系方式有误、电话停机、不接电话、无理由拒收等造成快件无法正常签收的情况，不在赔付范围内；
                                <br />3. 请在签收后，第一时间检查商品。如果商品有腐坏、破损等情况请把商品和快递面单一起拍照并在24小时内联系客服申请理赔，不能提供符合要求的照片或未能在24小时内联系客服，将不予退货退款处理；
                                <br />4. 因喜好不同，要求退货退款者将不予受理。
                            </p>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <p class="qu">
                                <i class="u-icon u-detail-redNum"></i>
                                <span>如何开具发票？</span>
                            </p>
                            <p class="an">
                                1.请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以上版本）。开具增值税专用发票需在下单时填写增票资质信息。温馨提示：请确保增票资质信息与贵司税务登记证信息一致，避免因开票信息错误给贵司带来损失。
                                <br />2.可选开票内容：
                                <br />依照国税总局开票法规，严选订单开具纸质发票、电子发票，开票内容为明细；礼品卡开票内容为预付卡；增值税专用发票开票内容为明细。
                            </p>
                        </div>
                    </div>
                    <div class="list">
                        <div class="item">
                            <p class="qu">
                                <i class="u-icon u-detail-redNum"></i>
                                <span>关于严选相关价格说明？</span>
                            </p>
                            <p class="an">
                                1.划线价、指导价：商品展示的划线价或指导价可能是商品制造厂商的零售市场指导价、品牌专柜价、商品吊牌价或该商品在严选上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
                                <br />2.活动价：如无特殊说明，促销价是商家在划线价、指导价基础上给予的优惠价格。如有疑问，您可以在购买前与客服联系。
                                <br />3.严选价：严选非会员用户购买的商品详情页显示的售价。
                                <br />4.会员价：在严选价的基础上给予不同类型会员用户的优惠价格，仅该类会员用户可以以会员价购买该商品。
                                <br />5.价格异常：因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺利购物。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="qitatuijian">
                    <div class="tt">
                        <div class="line"></div>
                        <span class="text">你可能还喜欢</span>
                    </div>
                    <ul class="m-wrap">
                        <li class="goods" v-for="item in goodslist" :key="item.id">
                            <div class="hd">
                                <img :src="item.img" alt />
                                <div class="desc">{{item.desc}}</div>
                            </div>
                            <div class="name">{{item.name}}</div>
                            <div class="price">
                                <span>{{item.price1}}</span>
                                <span class="counterPrice" v-if="item.price2">{{item.price2}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <el-backtop target=".main" :bottom="70" :right="20">
                <img
                    src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png?imageView&type=webp"
                    width="120%"
                    height="120%"
                />
            </el-backtop>
        </div>
        <div class="bottom-wrap">
            <a
                href="https://cs.you.163.com/client?k=96ee78c0d9633761581e89d5019c5595&u=yd.094c7e6526e24a69a%40163.com&d=yd.094c7e6526e24a69a%40163.com&uuid=n4oytr4ubmbiengnv7xc&gid=1129078&sid=0&qtype=0&dvctimer=0&robotShuntSwitch=1&hc=0&orderId=0&itemId=0&applyId=0&entranceType=0&robotId=0&pageId=16058601221596LShqOXrR1&n=26157348546&e=yd.094c7e6526e24a69a%40163.com&t=2020%25E6%2596%25B0%25E6%259E%259C%25E4%25B8%258A%25E5%25B8%2582%25EF%25BC%258C%25E5%258D%2597%25E9%259D%259E%25E7%25A2%25A7%25E6%25A0%25B9%25E6%259E%259C%25E4%25BB%2581%2520150%25E5%2585%258B%2520-%2520%25E7%25BD%2591%25E6%2598%2593%25E4%25B8%25A5%25E9%2580%2589"
                class="left"
            >
                <i></i>
            </a>
            <a
                href="https://m.you.163.com/order/confirm?sfrom=3996656&_stat_referer=itemDetail_buy#/?_k=lk3fcl"
                class="center"
            >
                <i>立即购买</i>
            </a>
            <div class="right">
                <i @click="addthing">加入购物车</i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            piclist: [],
            goodslist: [],
            isaddress: true,
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                },
                loop: true,
                autoplay: true,
            },
        };
    },
    computed: {
        isexist() {
            return this.$store.state.isexist;
        },
    },
    methods: {
        deltopbar() {
            this.$store.commit("deltopbar");
        },
        address() {
            this.isaddress = false;
        },
        addthing() {
            this.$store.commit("addthing");
            this.$router.push({
                path: "/Carts",
            });
        },
    },
    created() {
        let url = "http://localhost:8080/GoodsD.json";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        let that = this;
        xhr.onload = function () {
            that.piclist = JSON.parse(xhr.response).piclist;
            that.goodslist = JSON.parse(xhr.response).goodslist;
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        // console.log("Current Swiper instance object", this.swiper);
        // this.swiper.slideTo(3, 1000, false);
    },
};
</script>

<style scoped>
.page1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.m-loginTypes {
    flex-grow: 1;
    background: rgb(247, 247, 247);
}
.bd {
    height: 1.16rem;
    background-color: #fafafa;
    position: relative;
}
.bd .row {
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
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp");
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
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s2b74eb7db6-33f7d74f48.png?imageView&type=webp");
    width: 2.29333rem;
    height: 0.72rem;
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
.page1 > .main {
    flex-grow: 1;
    background-color: #fff;
    overflow-y: scroll;
}
.swiperwrap {
    width: 100%;
}
.swiperwrap img {
    width: 100%;
    height: 100%;
}
.swiper-pagination-fraction {
    left: auto;
    right: 0.4rem;
    bottom: 0.4rem;
    width: 0.72rem;
    height: 0.3733rem;
    border-radius: 2px;
    line-height: 0.42667rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 0.26667rem;
    text-align: center;
    color: #333;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dt-section-1 .content {
    position: relative;
    padding: 0.34667rem 0 0.48rem 0.4rem;
}
.content .priceInfo {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}
.content .priceCol1 {
    margin-right: 0.21333rem;
}
.content .price {
    height: 0.8rem;
    line-height: 0.8rem;
    white-space: nowrap;
}
.content .price .currentPrice {
    color: #dd1a21;
    font-family: PingFang SC;
    font-size: 0.72rem;
    font-weight: 700;
}
.spmcBanner {
    margin: 0.21333rem 0 0.32rem;
    width: 9.2rem;
    height: 0.90667rem;
    font-size: 0.32rem;
    line-height: 0.90667rem;
    background-image: url(https://yanxuan.nosdn.127.net/2f8ed50ef024bc371c7f01828d6209c3.png?imageView&type=webp);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
}
.spmcBanner .spmcPrice {
    line-height: 0.48rem;
    width: 85%;
    overflow: hidden;
}
.spmcBanner .spmcDiscount {
    float: left;
    background-image: linear-gradient(123deg, #f1c698 0, #c3945b 100%);
    line-height: 0.90667rem;
    font-size: 0.26667rem;
    color: #333;
    font-weight: 700;
    padding: 0 0.11467rem 0 0.112rem;
    border-top-left-radius: 0.10667rem;
    border-bottom-left-radius: 0.10667rem;
    clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
}
.spmcBanner .spmcDesc {
    float: left;
    line-height: 0.90667rem;
    color: #fff1d2;
    margin-left: 0.10667rem;
}
.spmcBanner .spmcEconomizePrice {
    font-family: PingFang SC;
    font-weight: 700;
    color: #f3ca84;
    line-height: 0.48rem;
    margin-left: 0.05333rem;
}
.spmcBanner .u-icon-questionMark {
    display: inline-block;
    position: relative;
    width: 0.32rem;
    height: 0.32rem;
    margin-top: 0.29333rem;
    margin-left: 0.05333rem;
    z-index: 1;
}
.u-icon-questionMark {
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/questionMark-a4153bf816.png?imageView&type=webp);
}
.u-icon-questionMark {
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.spmcBanner .spmcBtn {
    position: absolute;
    right: 0.32rem;
    top: 0.21333rem;
    height: 0.48rem;
    padding-left: 0.16rem;
    padding-right: 0.16rem;
    line-height: 0.48rem;
    background-image: linear-gradient(140deg, #ffe3c4 0, #ce7f29 100%);
    font-size: 0.32rem;
    text-align: center;
    color: #333;
    border-radius: 0.26667rem;
}
.content .baseInfo {
    display: flex;
    margin-top: 0.18667rem;
}
.content .info {
    padding-right: 0.32rem;
    -webkit-box-flex: 1;
    flex: 1;
}
.content .info .name {
    font-size: 0.42667rem;
    color: #333;
    line-height: 0.64rem;
    margin-bottom: 0.05333rem;
    font-weight: 700;
}
.content .info .desc {
    font-size: 0.32rem;
    line-height: 0.48rem;
    color: #333;
    font-weight: lighter;
}
.content .comment {
    width: 2.37333rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
}
.content .comment .wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 0.26667rem;
    text-align: center;
    font-size: 0.37333rem;
}
.content .comment .wrap .info-wrap .num {
    font-weight: 700;
    font-size: 0.42667rem;
    line-height: 0.6rem;
    color: #dd1a21;
    text-align: center;
}
.content .comment .wrap .info-wrap .com {
    font-family: PingFangSC-Light;
    line-height: 0.48rem;
    font-size: 0.32rem;
    color: #7f7f7f;
}
.rcmdBanner {
    border-radius: 2px;
}
.rcmdBanner {
    margin: 0.16rem 0 0;
    padding: 0.18667rem 0.26667rem;
    width: 9.2rem;
    line-height: 0.8rem;
    background: #fafafa;
    border: 1px solid #e6e6e6;
    position: relative;
}
.rcmdBanner .angleTop {
    top: -0.12rem;
    left: 0.52rem;
    border-bottom: 0.12rem solid #e6e6e6;
    z-index: 1;
}
.rcmdBanner .angleContent {
    top: 0.01333rem;
    left: -0.12rem;
    border-bottom: 0.12rem solid #fafafa;
    z-index: 2;
}
.rcmdBanner .angleContent,
.rcmdBanner .angleTop {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 0.12rem solid transparent;
    border-right: 0.12rem solid transparent;
}
.rcmdBanner li {
    height: 0.48rem;
    line-height: 0.48rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #333;
}
.rcmdBanner li:not(:last-child) {
    margin-bottom: 0.05333rem;
}
.rcmdBanner .key {
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    border: 1px solid #dd1a21;
    border-radius: 50%;
    text-align: center;
    line-height: 0.32rem;
    font-size: 0.26667rem;
    color: #dd1a21;
    font-family: PingFang SC;
    font-weight: 700;
    margin-right: 0.10667rem;
    vertical-align: middle;
}
.rcmdBanner li .recommendReason {
    display: inline-block;
    height: 0.48rem;
    line-height: 0.48rem;
    vertical-align: middle;
}
.savingCardBanner {
    width: 9.46667rem;
    height: 1.09333rem;
    margin: 0 0.26667rem;
    font-size: 0.32rem;
    background-image: url("https://yanxuan.nosdn.127.net/b6f50e86f3c8734d719e85ce6d9c7cc1.png?imageView&type=webp");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
}
.savingCardBanner .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    overflow: hidden;
    padding: 0 0.21333rem;
    font-size: 0.32rem;
}
.savingCardBanner > .content > .u-icon-card-yellow {
    display: inline-block;
    width: 0.48rem;
    height: 0.4rem;
    vertical-align: middle;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/card-yellow-f182f2e4f5.png?imageView&type=webp);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.savingCardBanner .content .title {
    margin-left: 0.05333rem;
    font-family: PingFangSC-Medium;
    font-size: 0.37333rem;
    color: #ffe8b5;
    letter-spacing: 0;
    white-space: nowrap;
}
.savingCardBanner .content .text {
    color: #fff;
    letter-spacing: 0.01333rem;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.savingCardBanner .bannerBtn {
    margin-left: auto;
    width: 2.29333rem;
    height: 0.61333rem;
    line-height: 0.61333rem;
    background: #fff;
    font-size: 0.32rem;
    text-align: center;
    color: #dd1a21;
    border-radius: 0.27333rem;
}
.m-points {
    color: #333;
    line-height: 1.38667rem;
    font-size: 0.37333rem;
    padding-left: 0.4rem;
}
.m-points .m-listItem {
    border-bottom: 1px solid #d9d9d9;
}
.m-listItem {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    min-height: 1.38667rem;
    padding-right: 1.06667rem;
}
.m-listItem .inner {
    width: 100%;
    zoom: 1;
}
.m-points .freigh,
.m-rules .freigh {
    width: 9.2rem;
}
.m-listItem .inner::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.u-icon {
    display: inline-block;
    width: 0.66667rem;
    height: 0.66667rem;
    vertical-align: middle;
}
.u-address-right {
    background: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp)
        no-repeat;
    background-size: 100%;
}
.m-listItem > .icon {
    position: absolute;
    right: 0.21333rem;
    top: 0;
    bottom: 0;
    margin: auto;
}
.listItem-custom,
.listItem-custom2 {
    padding-right: 0.8rem;
}
.m-listItem {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
    min-height: 1.38667rem;
    padding-right: 1.06667rem;
}
.m-hdrkDetail .m-actEntry {
    padding-left: 0;
    display: flex;
    align-items: center;
}
.m-listItem .inner::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.m-hdrkDetail .m-actEntry label {
    line-height: 0.48rem;
    color: #333;
}
.m-hdrkDetail .m-actEntry label,
.m-shoppingReward .label {
    margin-right: 0.13333rem;
    word-wrap: normal;
    font-size: 0.37333rem;
    white-space: nowrap;
}
.m-hdrkDetail .m-actEntry .m-actInfoWrap {
    padding: 0.42667rem 0;
    flex: 1;
}
.m-actInfo {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.m-actInfo .tag-status-new {
    margin-right: 0.16rem;
    margin-bottom: 0;
}
.tag-status-new:nth-child(1) {
    margin-left: 0;
}
.tag-status-new.gradients {
    background-image: linear-gradient(270deg, #ff8659 0, #fe2c30 100%);
    color: #fff;
    border: 0;
    font-family: PingFangSC-Regular;
}
.tag-status-new {
    margin-bottom: 0.06667rem;
    height: 0.4rem;
    padding: 0 0.10667rem;
    line-height: 0.4rem;
    color: #dd1a21;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid #dd1a21;
    border-radius: 0.2rem;
    margin-left: 0.13333rem;
    white-space: nowrap;
}
.tag-status,
.tag-status-new {
    font-size: 0.24rem;
    vertical-align: top;
    display: inline-block;
    text-align: center;
}
.tag-status-new::before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
}
.m-hdrkDetail .m-actEntry .m-actInfo .longTxt {
    max-width: 6rem;
}
.m-hdrkDetail .m-actEntry .m-actInfo .txt {
    max-width: 4.66667rem;
}
.m-actInfo .txt {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.37333rem;
    color: #333;
    line-height: 0.48rem;
}
.m-shoppingReward {
    margin-left: 0.4rem;
    padding: 0.42667rem 0;
}
.m-shoppingReward .m-shoppingRewardEntry {
    display: flex;
}
.m-listItem .inner:after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.m-shoppingReward .label {
    color: #333;
}
.m-hdrkDetail .m-actEntry label,
.m-shoppingReward .label {
    margin-right: 0.13333rem;
    word-wrap: normal;
    font-size: 0.37333rem;
    white-space: nowrap;
}
.m-shoppingReward .txt {
    font-size: 0.37333rem;
}
.specSelect {
    padding-left: 0.4rem;
}
.specSelect .m-listItem {
    min-height: 1.38667rem;
    border-bottom: 1px solid #d9d9d9;
}
.specSelect .m-listItem .inner {
    font-size: 0.37333rem;
    line-height: 1.38667rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.specSelect .m-listItem .inner > .it11 {
    margin-right: 0.13333rem;
}
.m-listItem .inner::after {
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.m-deliveryInfo {
    padding: 0.42667rem 0;
    font-size: 0.37333rem;
}
.m-deliveryInfo,
.m-hdrkDetail {
    margin-left: 0.4rem;
    border-bottom: 1px solid #d9d9d9;
}
.m-listItem {
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    min-height: 1.38667rem;
    padding-right: 1.06667rem;
}
.m-deliveryInfo .left {
    display: inline-block;
    color: #333;
    margin-right: 0.13333rem;
}
.m-deliveryInfo .right {
    display: inline-block;
    vertical-align: top;
    width: 6.93333rem;
}
.m-deliveryInfo .right .deliveryTime,
.m-deliveryInfo .right .pickAddr {
    color: #7f7f7f;
}
.service-wraper {
    padding: 0.32rem 0 0.10667rem;
}
.dt-section {
    background: #fff;
    border-bottom: 0.26667rem solid #eee;
}
.m-serviceEntry {
    margin-left: 0.4rem;
    font-size: 0.37333rem;
    display: flex;
    -webkit-box-align: center;
    align-items: flex-start;
}
.m-serviceEntry .left {
    align-self: flex;
    line-height: 1;
    color: #333;
    margin-right: 0.13333rem;
}
.m-serviceEntry .right {
    -webkit-box-flex: 1;
    flex: 1;
}
.m-serviceEntry .right > div {
    display: flex;
}
.m-serviceEntry .right > div > .right-item {
    position: relative;
    padding-left: 0.21333rem;
    margin-right: 0.53333rem;
    line-height: 1;
    margin-bottom: 0.21333rem;
    color: #7f7f7f;
}
.m-serviceEntry .right > div > .right-item::before {
    content: "";
    position: absolute;
    width: 0.10667rem;
    height: 0.10667rem;
    background: #dd1a21;
    border-radius: 100%;
    left: 0;
    top: 0.13333rem;
}
.m-serviceEntry > i {
    margin-right: 0.23rem;
}
.m-adBanner {
    width: 100%;
    height: 2.93333rem;
    border-bottom: 0.26667rem solid #f4f4f4;
}
.m-adBanner > .m-carousel {
    display: block;
    height: 2.66667rem;
}
.m-adBanner > .m-carousel > img {
    width: 100%;
}
.dt-section {
    background: #fff;
    border-bottom: 0.26667rem solid #eee;
}
.pingjia > a {
    display: flex;
    margin-left: 0.4rem;
    border-bottom: 1px solid #d9d9d9;
    padding: 0.4rem 0 0.4rem 0;
    justify-content: space-between;
    align-items: center;
}
.pingjia > a > .title {
    line-height: 0.4rem;
    font-size: 0.37333rem;
    color: #333;
    font-weight: 400;
}
.pingjia > a > .comment-checkAll {
    font-size: 0.37333rem;
    color: #333;
    height: 0.66667rem;
    line-height: 0.66667rem;
}
.comment-checkAll .rate {
    color: #dd1a21;
}
.pingjia > a > .comment-checkAll > i {
    margin-right: 0.09rem;
}
.allpingjia {
    padding: 0 0.4rem 0.42667rem;
}
.allpingjia > header {
    padding: 0.4rem 0 0.05333rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.37333rem;
}
.allpingjia > header > .avatar {
    width: 0.85333rem;
    height: 0.85333rem;
    border-radius: 50%;
    margin-right: 0.21333rem;
    overflow: hidden;
}
.allpingjia > header > .name {
    margin-right: 0.16rem;
}
.allpingjia > header > .dengji {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/membership-s940529e977-9b551a2d19.png?imageView&type=webp);
    background-size: 4.4rem 155.33333rem;
    background-position: 0 -152.8rem;
    vertical-align: middle;
}
.allpingjia > header > .m-rate {
    margin-left: 0.13333rem;
    display: flex;
    justify-content: flex-start;
}
.allpingjia > header > .m-rate > li {
    display: inline-block;
    width: 0.36rem;
    height: 0.34667rem;
    vertical-align: middle;
    margin-right: 0.16rem;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/star-smallYellow-2a20c63768.png?imageView&type=webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.allpingjia > .extraInfo {
    font-size: 0.32rem;
    line-height: 1;
    color: #7f7f7f;
    margin-top: 0.24rem;
}
.allpingjia > .extraInfo > .time {
    font-size: 0.32rem;
    line-height: 1;
    color: #7f7f7f;
}
.allpingjia > .extraInfo > .skus {
    display: inline-block;
    margin-left: 0.21333rem;
}
.allpingjia > .content {
    margin-top: 0.24rem;
    padding-right: 0.4rem;
}
.allpingjia > .content > .inner {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
    word-break: break-all;
    font-size: 0.37333rem;
    line-height: 0.53333rem;
    font-weight: 400;
    color: #333;
}
.relatedItem {
    padding-bottom: 0.37333rem;
}
.relatedItem > .titleWrap {
    padding: 0.16rem 0 0.24rem;
    text-align: center;
}
.relatedItem > .titleWrap > .title {
    display: inline-block;
    position: relative;
    line-height: 0.53333rem;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 0.37333rem;
}
.relatedItem > .titleWrap > .title::before {
    content: "";
    display: block;
    width: 0.93333rem;
    height: 0.08rem;
    position: absolute;
    top: 0.25333rem;
    left: -1.18667rem;
    background: url(https://yanxuan.nosdn.127.net/4b1a6d0b381fc28acded19de8a1dd386.png?imageView&type=webp);
    background-size: 100% 100%;
}
.relatedItem > .titleWrap > .title::after {
    content: "";
    display: block;
    width: 0.93333rem;
    height: 0.08rem;
    position: absolute;
    top: 0.25333rem;
    right: -1.18667rem;
    background-size: 100% 100%;
    background: url(https://yanxuan.nosdn.127.net/020843fac649d62bf8c339a1079e7636.png?imageView&type=webp);
}
.relatedItem > .itemWrap {
    width: 9.2rem;
    margin: 0 0.4rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.05333rem;
}
.relatedItem > .itemWrap > .line {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.relatedItem > .itemWrap > .line > .imgWrap {
    width: 2.66667rem;
    height: 2.66667rem;
    overflow: hidden;
}
.relatedItem > .itemWrap > .line > .imgWrap > img {
    width: 100%;
    height: 100%;
}
.relatedItem > .itemWrap > .line > .itemInfo {
    width: 4.24rem;
    padding: 0 0.48rem 0 0.10667rem;
}
.relatedItem > .itemWrap > .line > .itemInfo > .tag {
    display: inline-block;
    padding: 0 0.10667rem;
    height: 0.4rem;
    line-height: 0.4rem;
    border: 1px solid #dd1a21;
    border-radius: 0.02667rem;
    color: #dd1a21;
    margin-bottom: 0.10667rem;
}
.relatedItem > .itemWrap > .line > .itemInfo > .name {
    font-family: PingFangSC-Regular;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    font-size: 0.37333rem;
}
.relatedItem > .itemWrap > .line > .goodCmtRateWrap {
    height: 1.28rem;
    padding-left: 0.21333rem;
    border-left: 1px dashed #d9d9d9;
}
.relatedItem > .itemWrap > .line > .goodCmtRateWrap > .goodCmtRate {
    font-family: PingFangSC-Semibold;
    font-size: 32px;
    color: #dd1a21;
    text-align: center;
}
.relatedItem > .itemWrap > .line > .goodCmtRateWrap > .txt {
    width: 1.33333rem;
    font-size: 0.32rem;
    color: #7f7f7f;
    text-align: center;
}
.lazy-component-wrapper > .canshu {
    padding: 0.4rem;
}
.lazy-component-wrapper > .canshu > .tt {
    padding: 0.53333rem 0 0.32rem;
    font-size: 0.37333rem;
    line-height: 1;
}
.lazy-component-wrapper > .canshu > .item {
    zoom: 1;
    font-size: 0.32rem;
    line-height: 0.58667rem;
    padding: 0.13333rem 0.4rem 0.13333rem 0;
    background-image: linear-gradient(
        to right,
        #919191 33%,
        rgba(255, 255, 255, 0) 0
    );
    background-position: top;
    background-size: 12px 1px;
    background-repeat: repeat-x;
    display: flex;
    align-items: center;
}
.lazy-component-wrapper > .canshu > .item > .left {
    width: 2.24rem;
    color: #999;
    flex-shrink: 0;
}
.m-itemDetail-hotArea {
    margin-bottom: 9px;
}
.m-itemDetail-hotArea > .hotArea-img {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
}
.m-itemDetail-hotArea > .hotArea-img > img {
    width: 100%;
}
.lazy-component-wrapper {
    margin-bottom: 1.6rem;
}
.lazy-component-wrapper > .guanggao {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    margin-bottom: 18px;
}
.lazy-component-wrapper > .guanggao > img {
    width: 100%;
}
.changjianwenti {
    padding: 0 0.4rem 0.4rem;
    background-color: #fff;
}
.changjianwenti > .tt,
.qitatuijian > .tt {
    position: relative;
    padding: 0.72rem 0;
    text-align: center;
}
.changjianwenti > .tt > .line,
.qitatuijian > .tt > .line {
    width: 3.97333rem;
    border-bottom: 1px solid #ccc;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 1px;
    background-color: #ccc;
    z-index: 1;
}
.changjianwenti > .tt > .text,
.qitatuijian > .tt > .text {
    display: inline-block;
    font-size: 0.42667rem;
    padding-right: 0.21333rem;
    padding-left: 0.21333rem;
    line-height: 1;
    color: #333;
    background-color: #fff;
    position: relative;
    z-index: 2;
}
.changjianwenti > .list > .item {
    padding-bottom: 0.34667rem;
    font-size: 0.34667rem;
}
.changjianwenti > .list > .item > .qu {
    color: #303030;
    padding-bottom: 0.2rem;
    line-height: 1;
    position: relative;
    padding-left: 0.24rem;
}
.changjianwenti > .list > .item > .qu > i {
    position: absolute;
    display: block;
    width: 4px;
    height: 4px;
    top: 0.10667rem;
    left: 0;
    background-color: #dd1a21;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 50%;
    font-size: 0.34667rem;
}
.changjianwenti > .list > .item > .an {
    color: #787878;
    line-height: 0.48rem;
    padding-left: 0.21333rem;
}
.qitatuijian > .m-wrap {
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
}
.qitatuijian > .m-wrap > .goods {
    padding: 0rem 0.133333rem 0.44rem 0.266667rem;
    width: 50%;
}
.qitatuijian > .m-wrap > .goods:nth-child(2n) {
    padding: 0rem 0.266667rem 0.44rem 0.133333rem;
}
.qitatuijian > .m-wrap > .goods > .hd {
    width: 100%;
    border-radius: 0.05333rem;
}
.qitatuijian > .m-wrap > .goods > .hd > img {
    width: 100%;
    height: 4.6rem;
    border-radius: 0.05333rem 0.05333rem 0 0;
    background-color: #f4f4f4;
}
.qitatuijian > .m-wrap > .goods > .hd > .desc {
    width: 100%;
    background: #f1ece2;
    border-radius: 0 0 0.05333rem 0.05333rem;
    font-size: 0.32rem;
    color: #9f8a60;
    letter-spacing: 0;
    line-height: 0.48rem;
    padding: 0.08rem 0.13333rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.qitatuijian > .m-wrap > .goods > .name {
    margin-top: 0.21333rem;
    line-height: 0.53333rem;
    font-size: 0.37333rem;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    text-align: left;
    font-family: PingFangSC-Regular;
}
.qitatuijian > .m-wrap > .goods > .price {
    font-size: 0.42667rem;
    line-height: 0.64rem;
    color: #dd1a21;
    text-align: left;
    font-family: PingFangSC-Regular;
}
.qitatuijian > .m-wrap > .goods > .price > .counterPrice {
    margin-left: 0.10667rem;
    font-size: 0.32rem;
    color: #999;
    line-height: 0.48rem;
    text-decoration: line-through;
    font-family: PingFangSC-Light;
}
.bottom-wrap {
    width: 100%;
    background: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    font-family: PingFangSC-Light, helvetica, "Heiti SC";
}
.bottom-wrap > .left {
    display: flex;
    width: 2.08rem;
    height: 1.38667rem;
    line-height: 1.28rem;
    color: #333;
    background-color: #fff;
    border: 1px solid #c7c7c7;
    border-right: none;
    text-align: center;
    vertical-align: middle;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
}
.bottom-wrap > .left > i {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    background-image: url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.bottom-wrap > .center {
    display: flex;
    width: 3.36rem;
    height: 1.38667rem;
    line-height: 1.28rem;
    font-size: 0.37333rem;
    color: #333;
    background-color: #fff;
    border: 1px solid #c7c7c7;
    border-right: none;
    text-align: center;
    vertical-align: middle;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
}
.bottom-wrap > .right {
    display: flex;
    width: 3.36rem;
    height: 1.38667rem;
    line-height: 1.28rem;
    font-size: 0.37333rem;
    color: #fff;
    background-color: #dd1a21;
    border: 1px solid #dd1a21;
    border-right: none;
    text-align: center;
    vertical-align: middle;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
}
</style>