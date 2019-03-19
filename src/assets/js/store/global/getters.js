import state from "./state";

const getters = {
    data() {
        return state.data.transactions;
    },
};

export default getters;
