import * as mutations from './mutations';

export const LOAD_DATE = 'LOAD_DATE';
export const SAVE_DATE = 'SAVE_DATE';

export default {
    [LOAD_DATE] ({ commit }) {
        let period = JSON.parse(sessionStorage.getItem('period'));
        if (period == null) period = {startDate: new Date(), endDate: new Date()};

        commit(mutations.SET_DATE, period);
    },

    [SAVE_DATE] ({ commit, dispatch}, period) {
        sessionStorage.setItem('period', JSON.stringify(period));
    },
}