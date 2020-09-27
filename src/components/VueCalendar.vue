<template>
    <input type="date" :value="date">
</template>

<script>
    export default {
        name: "VueCalendar",
        props: [
            'selectedDate'
        ],
        computed: {
            date() {
                let date;
                if (this.selectedDate == 0) {
                    date = new Date(Date.now() * 1000);
                } else {
                    date = new Date(this.selectedDate * 1000);
                }

                return date;
            }
        }
    }
</script>

<style scoped>
    input[type=date]::-webkit-calendar-picker-indicator /* datepicker*/ {
        background: url('/src/assets/img/arrow.png') no-repeat 90% 50%;
    }
</style>