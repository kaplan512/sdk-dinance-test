// import Vue                          from 'vue';
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
            console.log('date')
            state.data.sort(function(a,b){
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                console.log(moment(a.date).format('YYYY MM DD'))
                return moment(b.date).format('YYYY MM DD') - moment(a.date).format('YYYY MM DD');
            });
        }
        state.activePage = 0;
    },
    FILTER_BY_PROPERTY(state, property) {
        let arr = state.dataCopy.slice()
        console.log(property)
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
            state.data = arr.filter(word => word.date.toLowerCase().indexOf(property.value) > -1);
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
