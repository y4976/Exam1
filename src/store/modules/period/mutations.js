export const SET_DATE = 'SET_DATE';
export const SET_VIEW_START_DATE = 'SET_VIEW_START_DATE';
export const SET_VIEW_END_DATE = 'SET_VIEW_END_DATE';

export default {
    [SET_DATE] (state, {startDate, endDate}) {
        state.startDate = startDate;
        state.endDate = endDate;
        state.views.startDate = startDate;
        state.views.endDate = endDate;
    },

    [SET_VIEW_START_DATE] (state, date) {
        state.views.startDate = date;
    },

    [SET_VIEW_END_DATE] (state, date) {
        state.views.endDate = date;
    },
}