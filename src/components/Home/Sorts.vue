<template>
    <div class="middle-page">
        <div class="m-itemCateListHd">
            <div class="m-topSearchIpt ipt">
                <i class="icon u-icon-hd-search2"></i>
                <span class="placeholder"  @click="$router.push('/Search')">搜索商品, 共30000+款好物</span>
            </div>
        </div>
        <div class="m-cateContainer" style="height: 549px;">
            <div class="m-cateNavVertWrap">
                <ul class="m-cateNavVert">
                    <li
                        class="item"
                        v-for="(item,index) in list"
                        :key="index"
                        :class="{active:num==index}"
                    >
                        <span class="txt" @click="tab(index)">{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="m-subCateList">
                <div
                    class="m-subCateContainer"
                    v-for="(item,index) in contentlist"
                    :key="index"
                    v-show="index==num"
                >
                    <div class="banner">
                        <img :src="item.headimg" class="singleBanner" alt />
                    </div>
                    <div class="cateList">
                        <div class="hd" :class="{active:item.name}">{{item.name}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="hd" :class="{active:item.name1}">{{item.name1}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg1"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="hd" :class="{active:item.name2}">{{item.name2}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg2"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="hd" :class="{active:item.name3}">{{item.name3}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg3"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="hd" :class="{active:item.name4}">{{item.name4}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg4"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="hd" :class="{active:item.name5}">{{item.name5}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg5"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="hd" :class="{active:item.name6}">{{item.name6}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg6"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="hd" :class="{active:item.name7}">{{item.name7}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg7"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="hd" :class="{active:item.name8}">{{item.name8}}</div>
                        <ul class="list">
                            <li
                                class="cateItem"
                                v-for="(item,index) in item.contentimg8"
                                :key="index"
                            >
                                <div>
                                    <div class="cateImgWrapper u-icon-hd-water">
                                        <img :src="item.img" class="cateImg" />
                                    </div>
                                    <div class="name">{{item.title}}</div>
                                </div>
                            </li>
                        </ul>
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
            num: 0,
            list: [
                "推荐专区",
                "新品专区",
                "居家生活",
                "服饰鞋包",
                "美食酒水",
                "个护清洁",
                "母婴亲子",
                "运动旅行",
                "数码家电",
                "严选全球",
            ],
            contentlist: [],
        };
    },
    created() {
        let url = "http://localhost:8080/sort.json";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        let that = this;
        xhr.onload = function () {
            that.contentlist = JSON.parse(xhr.response).contentlist;
        };
    },
    methods: {
        tab(index) {
            this.num = index;
        },
    },
};
</script>

<style scoped>
.middle-page {
    flex-grow: 1;
    overflow: hidden;
    background: rgb(247, 247, 247);
}
.m-itemCateListHd {
    display: -moz-flex;
    display: flex;
    -moz-align-items: center;
    align-items: center;
    height: 1.17333rem;
    padding: 0 0.4rem;
    background-color: #fff;
    position: relative;
}
.m-itemCateListHd > .ipt {
    width: 100%;
}
.m-topSearchIpt {
    display: -moz-flex;
    display: flex;
    flex-flow: row nowrap;
    -moz-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    justify-content: center;
    height: 0.74667rem;
    font-size: 0.37333rem;
    background-color: #ededed;
    border-radius: 0.10667rem;
}
.u-icon-hd-search2 {
    display: inline-block;
    width: 0.37333rem;
    height: 0.37333rem;
    /* background: url("http://localhost:8080/logo3.png"); */
    vertical-align: middle;
    margin-right: 0.13333rem;
    background-size: 3.1733333333333333rem 2.7066666666666666rem;
    background-position: -1.8666666666666667rem -0.7466666666666667rem;
}
.m-topSearchIpt .icon {
    width: 0.37333rem;
    height: 0.37333rem;
    margin-right: 0.13333rem;
}
.m-topSearchIpt .placeholder {
    color: #666;
}
.m-itemCateListHd:after {
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
.m-itemCateListHd:after {
    content: "";
    position: absolute;
    background-color: #d9d9d9;
    left: 0;
    width: 100%;
    height: 1px;
    -webkit-transform-origin: 50% 100% 0;
    transform-origin: 50% 100% 0;
    bottom: 0;
}
.m-cateContainer {
    width: 100%;
    overflow: auto;
}
.m-cateNavVertWrap {
    float: left;
    width: 2.16rem;
    height: 100%;
    background-color: #fff;
    position: relative;
}
.m-cateNavVert {
    padding: 0.53333rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.m-cateNavVert .item {
    width: 100%;
    height: 0.66667rem;
    text-align: center;
    color: #333;
    margin-bottom: 0.53333rem;
    border-left: 0.08rem solid transparent;
}
.m-cateNavVert .item.active {
    color: #ab2b2b;
    border-left: 0.08rem solid #ab2b2b;
}
.m-cateNavVert .item .txt {
    display: block;
    font-size: 0.37333rem;
    line-height: 0.66667rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.m-subCateList {
    margin-left: 2.16rem;
    padding: 0.4rem 0.4rem 0.28rem;
    height: 100%;
    background-color: #fff;
    overflow: auto;
}
.m-subCateList::-webkit-scrollbar {
    display: none;
}
.m-subCateContainer .banner {
    position: relative;
    width: 100%;
    height: 2.56rem;
    display: table;
    margin-bottom: 0.42667rem;
    border-radius: 2px;
}
.m-subCateContainer .banner .singleBanner,
.m-subCateContainer .banner .singleBanner img {
    width: 100%;
    height: 2.56rem;
}
.m-subCateContainer .cateList {
    width: 100%;
    margin-bottom: 0.16rem;
    overflow: hidden;
}
.m-subCateContainer .hd {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 7.04rem;
    padding-bottom: 0.10667rem;
    margin-bottom: 0.32rem;
    text-align: left;
    font-size: 0.37333rem;
    font-weight: 700;
    color: #333;
}
.m-subCateContainer .hd.active {
    border-bottom: 1px solid #d9d9d9;
}
.m-subCateContainer .cateItem {
    display: inline-block;
    margin-right: 0.45333rem;
    font-size: 0;
    width: 1.92rem;
    vertical-align: top;
}
.m-subCateContainer .cateItem:nth-child(3n) {
    margin-right: -0.13333rem;
}
.m-subCateContainer .cateItem .cateImgWrapper {
    width: 1.92rem;
    height: 1.92rem;
}
.u-icon-hd-water {
    background-position: 0 -1.7333333333333334rem;
}
.u-icon-hd-search2,
.u-icon-hd-water {
    background-image: url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-node-wap/style/img/hd-4de7d1dc8847215399843e49de640d68.png");
    display: inline-block;
    vertical-align: middle;
    background-size: 3.1733333333333333rem 2.7066666666666666rem;
}
.m-subCateContainer .cateItem .cateImg {
    display: block;
    width: 100%;
    background: #fff;
    height: 100%;
}
.m-subCateContainer .cateItem .name {
    height: 0.96rem;
    font-size: 0.32rem;
    color: #333;
    text-align: center;
    line-height: 0.48rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>