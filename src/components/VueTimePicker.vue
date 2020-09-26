<template>
    <div>
        <vue-calender class="input-calender"/>
        <vue-select class="input-select" :item-list="selectHourList"/>
        <vue-select class="input-select" :item-list="selectMinuteList"/>
    </div>
</template>

<script>
    import VueCalender from "@/components/VueCalender";
    import VueSelect from "@/components/VueSelect";

    export default {
        name: "VueTimePicker",
        components: {VueSelect, VueCalender},
        data() {
            return {
                selectHourList: this.makeHourList(),
                selectMinuteList: [
                    {value: 0, text: '0 분'},
                    {value: 10, text: '10 분'},
                    {value: 20, text: '20 분'},
                    {value: 30, text: '30 분'},
                    {value: 40, text: '40 분'},
                ]
            }
        },
        methods: {
            makeHourList() {
                let hourList = [];
                for (let i = 0; i < 24; i++) {
                    let when = (i < 12) ? '오전' : '오후';
                    let time = (i < 12) ? i : i - 12;
                    hourList[i] = {value: i, text: `${when} ${time}시`};
                }
                return hourList;
            }
        }
    }
</script>

<style scoped>
    .input-calender {
        width: 218px;
        height: 44px;
    }

    .input-select {
        width: 152px;
        height: 44px;
        margin-left: 16px;
    }
</style>