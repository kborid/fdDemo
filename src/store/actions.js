
export default {
    updateAsyncToken(context, value) {
        setTimeout(() => {
            context.commit('setToken', `${value}是Actions更新的`);
        // eslint-disable-next-line no-magic-numbers
        }, 3000);
    }
};
