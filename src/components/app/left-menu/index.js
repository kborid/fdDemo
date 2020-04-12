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
            this.$Alert.alert({
                width: 300,
                height: 180,
                zIndex: 90,
                modal: true,
                title: '关闭',
                content: '您确定关闭吗？',
                confirm:{
                    show: true,
                    text: '确认',
                    callback() {
                        window.console.log('点击了确定');
                        window.close();
                    }
                }
            });
        }
    }
};
