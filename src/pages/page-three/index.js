export default {
    name: 'three',
    data() {
        return {name: '我是第三页'};
    },
    methods: {
        goNext() {
            this.$router.push('/unit');
        }
    }
};
