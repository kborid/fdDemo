export default {
    name: 'two',
    data() {
        return {name: '我是第二页'};
    },
    methods: {
        goNext() {
            this.$router.push('/b');
        }
    }
};
