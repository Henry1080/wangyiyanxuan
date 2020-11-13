<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 36px;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html,
body,
#app,.page{
    height: 100%;
}
a {
    text-decoration: none;
}

li {
    list-style: none;
}
</style>
