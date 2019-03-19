import state from "./state";

const getters = {
    data() {
        return state.data;
    },
    dataCopy() {
        return state.dataCopy;
    },
    activePage() {
        return state.activePage
    }
};

export default getters;
