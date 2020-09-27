export const SET_DATE = 'SET_DATE';

export default {
    [SET_DATE] (state, {startDate, endDate}) {
        state.startDate = startDate;
        state.endDate = endDate;
    },
}