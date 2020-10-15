<template>
    <div>
        <button @click="$refs.periodModal.showModal()">설정 대화상자 열기</button>
        <period-modal ref="periodModal"/>
    </div>
</template>

<script>
    import PeriodModal from "@/views/PeriodModal";

    export default {
        name: 'Home',
        components: {PeriodModal},
    }
</script>

<style scoped>
</style>