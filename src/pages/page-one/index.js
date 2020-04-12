export default {
    name: 'one',
    data() {
        return {name: '我是第一页'};
    },
    methods: {
        goNext() {
            this.$router.push('/a');
        }
    }
};
