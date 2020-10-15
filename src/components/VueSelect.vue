<template>
    <select id="vue-select" name="job" :value="value" @input="changed">
        <slot name="test"/>
        <option v-for="item in selectItemList" :value="item.value">{{item.text}}</option>
    </select>
</template>

<script>
    export default {
        name: "VueSelect",
        props: [
            'selectItemList', 'value'
        ],
        methods: {
            changed(event) {
                this.$emit('changed', event.target.value);
            },
        }
    }
</script>

<style scoped>
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url('/src/assets/img/arrow.png') no-repeat 95% 50%;
    }

    select::-ms-expand { display:none; }

    select:hover {
        cursor: pointer;
        background-color: #f9f9f9;
    }

    select:active {
        border: none;
        background-color: #efefef;
    }

    option:hover {
        cursor: pointer;
    }

    #vue-select * {
        height: 44px;
    }

</style>