import moment from 'moment'

const mutations = {
    FETCH_DATA(state,  data) {
        state.data = data.transactions.slice()
        state.dataCopy = data.transactions.slice()
    },
    SORT_DATA(state,  type) {
        if(type === 'id') {
            state.data.sort((a, b) => {
                return (+a.id - +b.id);
            });
        }
        if(type === 'amount') {
            state.data.sort((a, b) => {
                return (+a.amount - +b.amount);
            });
        }
        if(type === 'date') {
            state.data.sort((a,b) => moment.utc(a.date).diff(moment.utc(b.date)))
        }
        state.activePage = 0;
    },
    FILTER_BY_PROPERTY(state, property) {
        let arr = state.dataCopy.slice()
        if(property.type === 'id') {
            state.data = arr.filter(word => word.id.indexOf(property.value) > -1);
        }
        if(property.type === 'amount') {
            state.data = arr.filter(word => word.amount.toString().indexOf(property.value) > -1);
        }
        if(property.type === 'status') {
            state.data = arr.filter(word => word.status.toLowerCase().indexOf(property.value) > -1);
        }
        if(property.type === 'date') {
            state.data = arr.filter(function(n) { return moment(n.date).isAfter(moment(property.value).subtract(0, 'days'))});
        }

    },
    CLEAR_FILTER(state, page) {
        state.data = state.dataCopy.slice()
    },
    SET_ACTIVE_PAGE(state, page) {
        state.activePage = page
    },
}
export default mutations;
