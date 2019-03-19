// import Vue                          from 'vue';
// import defaultValues                from './defaultValues'

const mutations = {
    FETCH_DATA(state,  data) {
        state.data = data
    },
    SORT_DATA(state,  type) {
        if(type.type === 'id') {
            console.log('id')
        }
        if(type.type === 'amount') {
            console.log('amount')
        }
        if(type.type === 'date') {
            console.log('date')
        }
        if(type.type === 'description') {
            console.log('description')
        }
        if(type.type === 'status') {
            console.log('status')
        }
    }
}
export default mutations;
