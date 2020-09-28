<template>
    <vue-modal title="응시 기간 설정" ref="modal" @ok="save">
        <template v-slot:content>
            <div class="sub-title">
                <span>응시 시작일</span>
            </div>
            <div>
                <vue-time-picker :time="startDate" @openedCalender="openedCalender" @closedCalender="closedCalender" ref="startPicker"/>
            </div>

            <div class="divider"></div>

            <div class="sub-title">
                <span>응시 마감일</span>
            </div>
            <div>
                <vue-time-picker :time="endDate" @openedCalender="openedCalender" @closedCalender="closedCalender" ref="endPicker"/>
            </div>
        </template>
    </vue-modal>
</template>

<script>
    import * as periodStore from '@/store/modules/period';
    import * as periodActions from '@/store/modules/period/actions';

    import VueModal from "@/components/VueModal";
    import VueTimePicker from "@/components/VueTimePicker";

    export default {
        name: 'PeriodModal',
        components: {VueTimePicker, VueModal},
        methods: {
            ...periodStore.mapActions({
                load: periodActions.LOAD_DATE,
                saveDate: periodActions.SAVE_DATE
            }),
            show() {
                this.load();
                this.$refs.startPicker.load(this.startDate);
                this.$refs.endPicker.load(this.endDate);
                this.$refs.modal.show();
            },
            hide() {
                this.$refs.modal.hide();
            },
            save() {
                let period = {startDate: this.$refs.startPicker.getSelectedTime(), endDate: this.$refs.endPicker.getSelectedTime()};
                this.saveDate(period);
            },
            openedCalender() {
                let start = new Date(this.$dateUtil.getDate(this.$refs.startPicker.getSelectedTime())).getTime();
                let end = new Date(this.$dateUtil.getDate(this.$refs.endPicker.getSelectedTime())).getTime();

                this.$refs.startPicker.setPickerDate(start, end);
                this.$refs.endPicker.setPickerDate(start, end);
            },
            closedCalender(period) {
                this.$refs.startPicker.setSelectedDate(new Date(period.startDate));
                this.$refs.endPicker.setSelectedDate(new Date(period.endDate));
            }
        },
        computed: {
            ...periodStore.mapState({
                startDate: (state) => state.startDate,
                endDate: (state) => state.endDate,
            }),
        }
    }
</script>

<style scoped>
    .sub-title {
        height: 18px;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: 0.9px;
        color: #000000;
        margin: 8px;
    }

</style>