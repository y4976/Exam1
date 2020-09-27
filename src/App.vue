<template>
    <div>
        <home/>
    </div>
</template>

<script>
    import Home from "@/views/Home";

    export default {
        name: 'App',
        components: {Home},
        data() {
            return {
            }
        },
    }
</script>

<style>
    @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

    body {
        font-family: "Noto Sans KR", sans-serif !important;
        /*font-family: NotoSansCJKkr;*/
    }

    input, select {
        font-family: "Noto Sans KR", sans-serif !important;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.25;
        letter-spacing: normal;
        color: #000000;
        padding-left: 16px;
        padding-right: 16px;

        border-radius: 8px;
        border: solid 1px #dadbdf;
    }

    .divider {
        width: 656px;
        height: 1px;
        background-color: #dadbdf;
        margin-top: 32px;
        margin-bottom: 32px;
    }

    .float-right {
        float: right !important;
    }

    button {
        height: 44px;
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;

        border-radius: 8px;
        outline:none;
    }

    button:hover {
        cursor: pointer;
    }

    .down-button {
        background: url('/src/assets/img/arrow.png') no-repeat 95% 50%;
    }

</style>

<style scoped>

</style>