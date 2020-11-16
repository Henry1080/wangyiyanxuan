<template>
    <div >
        <div class="top-bar" v-if="isexist">
            <div class="iconwrap">
                <i
                    class="u-icon u-icon-hd-miniOpenAppClose close"
                    @click="deltopbar"
                ></i>
            </div>
            <div class="imgwrap">
                <img
                    src="https://yanxuan.nosdn.127.net/1fe7a46449e44c20d508bf514e195c9f.png?type=webp&imageView&thumbnail=750x0&quality=75"
                />
            </div>
        </div>
        个人
    </div>
</template>

<script>
export default {
    data() {
        return {
            componentName: "first",
        };
    },
     computed:{
        isexist(){
            return this.$store.state.isexist
        }
    },
    methods: {
        deltopbar(){
            this.$store.commit("deltopbar")
        },
    },
};
</script>

<style scoped>
.page {
    flex-grow: 1;
    overflow: auto;
    background: rgb(247, 247, 247);
}
</style>