import moment from 'moment'

const mutations = {
    FETCH_DATA(state,  data) {
        state.data = data.transactions.slice()
        state.dataCopy = data.transactions.slice()
    },
    SORT_DATA(state,  type) {
        if(type === 'id' || type === 'amount') {
            state.data.sort((a, b) => {
                return (+a[type] - +b[type]);
            });
        }
        if(type === 'date') {
            state.data.sort((a,b) => moment.utc(a[type]).diff(moment.utc(b[type])))
        }
        state.activePage = 0;
    },
    FILTER_BY_PROPERTY(state, property) {
        let arr = state.dataCopy.slice()
        if(property.type === 'date') {
            state.data = arr.filter((n) => { return moment(n.date).isAfter(moment(property.value).subtract(1, 'days'))});
        }
        else {
            state.data = arr.filter(word => word[property.type].toString().toLowerCase().indexOf(property.value) > -1);
        }
    },
    CLEAR_FILTER(state) {
        state.data = state.dataCopy.slice()
    },
    SET_ACTIVE_PAGE(state, page) {
        state.activePage = page
    },
}
export default mutations;
