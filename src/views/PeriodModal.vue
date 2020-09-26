<template>
    <vue-modal title="응시 기간 설정" ref="modal">
        <template v-slot:content>
            <div class="sub-title">
                <span>응시 시작일</span>
            </div>
            <div>
                <vue-time-picker/>
            </div>

            <div class="divider"></div>

            <div class="sub-title">
                <span>응시 마감일</span>
            </div>
            <div>
                <vue-time-picker/>
            </div>
        </template>
    </vue-modal>
</template>

<script>
    import VueModal from "@/components/VueModal";
    import VueSelect from "@/components/VueSelect";
    import VueCalender from "@/components/VueCalender";
    import VueTimePicker from "@/components/VueTimePicker";

    export default {
        name: 'PeriodModal',
        components: {VueTimePicker, VueCalender, VueSelect, VueModal},
        methods: {
            show() {
                this.$refs.modal.show();
            },
            hide() {
                this.$refs.modal.hide();
            },
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