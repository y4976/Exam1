<template>
    <vue-modal title="응시 기간 설정" @show="loadDate" @ok="saveDate" ref="modal">
        <template v-slot:content>
            <div class="sub-title">
                <span>응시 시작일</span>
            </div>
            <div>
                <vue-time-picker :value="startDate" @changed="setViewStartDate"/>
            </div>

            <div class="divider"></div>

            <div class="sub-title">
                <span>응시 마감일</span>
            </div>
            <div>
                <vue-time-picker :value="endDate" @changed="setViewEndDate"/>
            </div>
        </template>
    </vue-modal>
</template>

<script>
    import * as periodStore from '@/store/modules/period';
    import * as periodActions from '@/store/modules/period/actions';
    import * as periodMutations from '@/store/modules/period/mutations';

    import VueModal from "@/components/VueModal";
    import VueTimePicker from "@/components/VueTimePicker";

    export default {
        name: 'PeriodModal',
        components: {VueTimePicker, VueModal},
        methods: {
            ...periodStore.mapActions({
                loadDate: periodActions.LOAD_DATE,
                saveDate: periodActions.SAVE_DATE
            }),

            ...periodStore.mapMutations({
                setViewStartDate: periodMutations.SET_VIEW_START_DATE,
                setViewEndDate: periodMutations.SET_VIEW_END_DATE,
            }),

            showModal() {
                this.$refs.modal.show();
            },
        },
        computed: {
            ...periodStore.mapState({
                startDate: (state) => state.views.startDate,
                endDate: (state) => state.views.endDate,
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