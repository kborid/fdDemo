export default {
    name: 'left-menu',
    data() {
        return {name: '左侧菜单'};
    },
    methods: {
        clickGoto(path) {
            this.$router.push({path: path});
        },
        close() {
            const _this = this;
            _this.$store.commit('updateToken', 'commit');
            this.$Alert.alert({
                width: 300,
                height: 180,
                zIndex: 90,
                modal: true,
                title: 'vuex测试',
                content: 'vuex测试-异步更新？',
                confirm: {
                    show: true,
                    text: '确认',
                    callback() {
                        // window.console.log('点击了确定');
                        // window.open('', self).close();
                        _this.$store.dispatch('updateAsyncToken', 'dispatch');
                    }
                }
            });
        }
    },
    computed: {
        value() {
            return this.$store.getters.getToken;
        }
    }
};
