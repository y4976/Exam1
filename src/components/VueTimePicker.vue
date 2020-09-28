<template>
    <div :key="componentKey">
        <datepicker class="input-calender"
                    :value="selectedDate"
                    :monday-first="true"
                    calendar-button-icon="fas fa-caret-down"
                    :highlighted="highlighted"
                    @opened="openedCalender"
                    @closed="closedCalender"
                    ref="datepicker"
        >
        </datepicker>
        <vue-select class="input-select" :item-list="hourList" :value="selectedHour" ref="hour"/>
        <vue-select class="input-select" :item-list="minuteList" :value="selectedMinute" ref="minute"/>
    </div>
</template>

<script>
    import VueSelect from "@/components/VueSelect";
    import Datepicker from "@/components/vuejs-datepicker/src/components/Datepicker";

    export default {
        name: "VueTimePicker",
        components: {Datepicker, VueSelect},
        data() {
            return {
                hourList: this.makeHourList(),
                minuteList: [
                    {value: 0, text: '0 분'},
                    {value: 10, text: '10 분'},
                    {value: 20, text: '20 분'},
                    {value: 30, text: '30 분'},
                    {value: 40, text: '40 분'},
                    {value: 50, text: '50 분'},
                ],

                selectedDate: 0,

                time: 0,
                componentKey: 0
            }
        },
        methods: {
            load(time) {
                this.time = time;
                this.selectedDate = this.$dateUtil.getDate(time);
                this.componentKey++;
            },

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
                return this.$dateUtil.make(this.selectedDate, this.$refs.hour.selectedValue, this.$refs.minute.selectedValue);
            },

            openedCalender() {
                this.$emit('openedCalender');
            },

            closedCalender(period) {
                this.$emit('closedCalender', period);
            },

            setSelectedDate(selectedDate) {
                this.selectedDate = this.$dateUtil.getDate(selectedDate);
            },

            setPickerDate(start, end) {
                this.$refs.datepicker.setPickerDate(start, end);
            }
        },
        computed: {
            highlighted() {
                return {
                    // customPredictor: function (date) {
                        // if (date.getDate() % 4 == 0) {
                        //     return true
                        // }
                    // },
                }
            },
            selectedHour() {
                return Number(this.$dateUtil.getHour(this.time));
            },
            selectedMinute() {
                return Math.floor(this.$dateUtil.getMinutes(this.time) / 10) * 10;
            }
        }
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