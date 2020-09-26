<template>
    <select id="select" name="job">
        <option v-for="item in itemList" :value="item.value">{{item.text}}</option>
    </select>
</template>

<script>
    export default {
        name: "VueSelect",
        props: [
            'itemList'
        ]
    }
</script>

<style scoped>
    select:hover {
        cursor: pointer;
    }
</style>