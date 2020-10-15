import moment from 'moment';

let DateUtil = {};

DateUtil.install = function(Vue, options){
    let dateUtil = {
        now() {
            return moment().format('YYYY-MM-DD HH:mm:ss');
        },
        getDate(time) {
            return moment(time).format('YYYY-MM-DD');
        },
        getHour(time) {
            return moment(time).format('HH');
        },
        getMinutes(time) {
            return moment(time).format('mm');
        },
        getDateUnixTime(time) {
            return new Date(moment(time).format('YYYY-MM-DD')).getTime();
        },
        isBefore(time, condition) {
            return moment(time).isBefore(moment(condition));
        },
        isAfter(time, condition) {
            return moment(time).isAfter(moment(condition));
        },
        add(time, interval, unit = 'day') {
            return moment(time).add(interval, unit);
        },
        make(date, hour, minute) {
            return moment(`${date} ${hour}:${minute}`).format('YYYY-MM-DD HH:mm')
        }
    };

    Vue.prototype.$dateUtil = dateUtil;
};

export default DateUtil;
