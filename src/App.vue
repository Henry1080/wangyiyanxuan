<template>
    <div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepalive"></router-view>
            <router-view v-if="!$route.meta.keepalive"></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
    line-height: 1.5;
    color: #333;
    font-family: PingFangSC-Light, helvetica, Heiti SC;
}
html,
body,
#app,
.page {
    height: 100%;
}
a {
    cursor: pointer;
    text-decoration: none;
}

li {
    list-style: none;
}
i {
    font-style: normal;
}
</style>
