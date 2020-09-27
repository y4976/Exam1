import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import period from './modules/period';

import DateUtil from '@/plugins/DateUtil';
Vue.use(DateUtil);

export default new Vuex.Store({
    modules: {
        period,
    }
});