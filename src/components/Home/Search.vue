<template>
    <div class="g-row">
        <div class="hdWraper">
            <div class="m-topBar-search">
                <div class="row-active">
                    <div class="m-searchIpWrap">
                        <div class="m-ipt-searchIpt">
                            <i class="icon-hd-clearIpt"></i>
                            <input type="search" class="ipt" placeholder="9.9超值专区" />
                        </div>
                    </div>
                    <span class="cancel" @click="$router.go(-1)">取消</span>
                </div>
            </div>
        </div>

    <div class="m-searchSuggestionsViews">
        <div class="hd">
            <h3 class="tit">热门搜索</h3>
        </div>
        <nav class="list">
            <a  class="item highlight">新人首单0元购</a>
            <a  class="item">被子</a>
            <a  class="item">行李箱</a>
            <a  class="item">毛巾</a>
            <a  class="item">湿巾</a>
            <a  class="item">杯子</a>
            <a  class="item">纸巾</a>
            <a  class="item">洗衣液</a>
            <a  class="item">乳胶液</a>
            <a  class="item">咖啡</a>
            <a  class="item">泡脚</a>
        </nav>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
.m-topBar-search {
    z-index: 1;
    position: relative;
}
.row-active {
    padding: 0 0.4rem;
    background-color: #fff;
    z-index: 1;
    width: 10rem;
    margin: auto;
    overflow: hidden;
    position: relative;
    height: 1.17333rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.m-searchIpWrap {
    flex: 1;
}
.m-ipt-searchIpt {
    padding-top: 0;
    padding-left: 0.26667rem;
    padding-bottom: 0;
    border: 0;
    background-color: #f4f4f4;
    height: 0.74667rem;
    border-radius: 4px;
}
.m-ipt{
    padding: 0 .26667rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.icon-hd-clearIpt{
    margin-right: .21333rem;
    width: .37333rem;
    height: .37333rem;
    background-image: url(https://yanxuan.nosdn.127.net/15954074352382011.png);
    background-size: .37333rem .37333rem;
}
.ipt{
    width: 100%;
    flex: 1;
    line-height: 0.7933rem;
    padding-left: .02667rem;
    font-size: .37333rem;
    border: none;
    background-color: #f4f4f4;
    color: rgba(0,0,0,.8);;
    outline: none;
}
.cancel{
    margin-left: .4rem;
    font-size: .37333rem;
}
.hd{
    height: 1.2rem;
    font-size: .37333rem;
    color: #999;
    display: flex;
    align-items: center;
    margin-left: 16px;
}
.tit{
    font-weight: 400;
    font-size: 100%;
}
.list{
    margin-right: -.4rem;
    margin-bottom: -.42667rem;
    zoom: 1;
}
.list .item.highlight{
    border-color: #dd1a21;
    color: #dd1a21;
}
.list .item{
    float: left;
    padding: 0 .2rem;
    margin-right: .42667rem;
    margin-bottom: .42667rem;
    line-height: .61333rem;
    border: 1px solid #999;
    border-radius: 4px;
    font-size: .32rem;
}
.m-searchSuggestionsViews{
    padding: 0 .4rem .4rem;
    background-color: #fff;
    overflow: hidden;
}
</style>