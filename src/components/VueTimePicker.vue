<template>
    <div>
        <datepicker class="input-calender"
                    :value="selectedDate"
                    :monday-first="true"
                    calendar-button-icon="fas fa-caret-down"
                    :disabled-dates="disabledDates"
        >
        </datepicker>
        <vue-select class="input-select" :item-list="selectHourList" :selected-value="selectedHour"/>
        <vue-select class="input-select" :item-list="selectMinuteList" :selected-value="selectedMinute"/>
    </div>
</template>

<script>
    import VueSelect from "@/components/VueSelect";
    import Datepicker from "@/components/vuejs-datepicker/src/components/Datepicker";

    export default {
        name: "VueTimePicker",
        components: {Datepicker, VueSelect},
        props: [
            'time', 'disabledDates'
        ],
        mounted() {
            this.selectedDate = this.$dateUtil.getDate(this.time);
            this.selectedHour = Number(this.$dateUtil.getHour(this.time));
            this.selectedMinute = Math.floor(this.$dateUtil.getMinutes(this.time) / 10) * 10;
        },
        data() {
            return {
                selectHourList: this.makeHourList(),
                selectMinuteList: [
                    {value: 0, text: '0 분'},
                    {value: 10, text: '10 분'},
                    {value: 20, text: '20 분'},
                    {value: 30, text: '30 분'},
                    {value: 40, text: '40 분'},
                    {value: 50, text: '50 분'},
                ],

                selectedDate: 0,
                selectedHour: 0,
                selectedMinute: 0,
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
            },

            getSelectedTime() {
                return this.$dateUtil.make(this.selectedDate, this.selectedHour, this.selectedMinute);
            }
        },
    }
</script>

<style scoped>
    .input-calender {
        width: 202px;
        height: 44px;
    }

    .input-select {
        width: 136px;
        height: 44px;
        margin-left: 16px;
    }
</style>