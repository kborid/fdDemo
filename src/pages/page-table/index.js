import ajax from '@/components/tools/extend/ajax.js';

export default {
    name: 'table',
    data() {
        return {
            name: '标准表格',
            formData: {},
            tableData: []
        };
    },

    mounted() {
        // this.loadData();
    },

    methods: {
        search() {
            this.loadData();
        },

        reset() {
            this.formData = {};
        },

        loadData() {
            const _this = this;
            ajax.get('static/json/table.json')
                .then(res => {
                    _this.tableData = res.data;
                })
                .catch(e => {
                    window.alert(`获取数据出错了!\n(${e.message})`);
                });
        }
    }
};
