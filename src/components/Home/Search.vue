<template>
      <div class="g-row">
          <div class="hdWraper">
              <div class="m-topBar-search">
                  <div class="row-active">
                      <div class="m-searchIpWrap">
                          <div class="m-ipt-searchIpt"></div>
                          <input type="search" class="ipt" placeholder="9.9超值专区">
                      </div>
                      <span class="cancel">取消</span>
                  </div>
              </div>
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
.m-topBar-search{
    z-index: 1;
    position: relative;
}
.row-active{
    padding: 0 .4rem;
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
.m-searchIpWrap{
    flex: 1;
}
.m-ipt-searchIpt{
    padding-top: 0;
    padding-left: .26667rem;
    padding-bottom: 0;
    border: 0;
    background-color: #f4f4f4;
    height: .74667rem;
    border-radius: 4px;
}
</style>