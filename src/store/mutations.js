
export default {
    updateToken(state, value) {
        state.token = `${value}是mutation更新的`;
    },

    setToken(state, value) {
        state.token = value;
    }
};
