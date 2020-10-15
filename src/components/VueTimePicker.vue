<template>
    <div>
        <datepicker class="input-calender"
                    :value="selectedDate"
                    :monday-first="true"
                    calendar-button-icon="fas fa-caret-down"
                    :highlighted="{}"
                    @opened="openedCalendar"
                    @closed="closedCalendar"
                    ref="datepicker"
        >
        </datepicker>
        <vue-select class="input-select" :select-item-list="selectHourList" :value="selectedHour" @changed="changedHour"/>
        <vue-select class="input-select" :select-item-list="selectMinuteList" :value="selectedMinute" @changed="changedMinute"/>
    </div>
</template>

<script>
    import * as periodStore from '@/store/modules/period';
    import * as periodMutations from '@/store/modules/period/mutations';

    import VueSelect from "@/components/VueSelect";
    import Datepicker from "@/components/vuejs-datepicker/src/components/Datepicker";

    export default {
        name: "VueTimePicker",
        components: {Datepicker, VueSelect},
        props: [
            'value'
        ],
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
            }
        },
        methods: {
            ...periodStore.mapMutations({
                setViewStartDate: periodMutations.SET_VIEW_START_DATE,
                setViewEndDate: periodMutations.SET_VIEW_END_DATE,
            }),

            makeHourList() {
                let selectHourList = [];
                for (let i = 0; i < 24; i++) {
                    let when = (i < 12) ? '오전' : '오후';
                    let time = (i < 12) ? i : i - 12;
                    selectHourList[i] = {value: i, text: `${when} ${time}시`};
                }
                return selectHourList;
            },

            changedHour(hour) {
                this.$emit('changed', this.$dateUtil.make(this.selectedDate, hour, this.selectedMinute));
            },

            changedMinute(minute) {
                this.$emit('changed', this.$dateUtil.make(this.selectedDate, this.selectedHour, minute));
            },

            openedCalendar() {
                this.$refs.datepicker.setPickerDate(
                    this.$dateUtil.getDateUnixTime(this.startDate),
                    this.$dateUtil.getDateUnixTime(this.endDate)
                );
            },

            closedCalendar(period) {
                this.setViewStartDate(this.$dateUtil.make(this.$dateUtil.getDate(period.startDate), this.$dateUtil.getHour(this.startDate), this.$dateUtil.getMinutes(this.startDate)));
                this.setViewEndDate(this.$dateUtil.make(this.$dateUtil.getDate(period.endDate), this.$dateUtil.getHour(this.endDate), this.$dateUtil.getMinutes(this.endDate)));
            },
        },
        computed: {
            ...periodStore.mapState({
                startDate: (state) => state.views.startDate,
                endDate: (state) => state.views.endDate,
            }),

            selectedDate() {
                return this.$dateUtil.getDate(this.value);
            },

            selectedHour() {
                return Number(this.$dateUtil.getHour(this.value));
            },

            selectedMinute() {
                return Math.floor(this.$dateUtil.getMinutes(this.value) / 10) * 10;
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