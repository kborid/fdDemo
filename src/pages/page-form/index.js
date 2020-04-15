export default {
    name: 'form',
    data() {
        return {
            name: '基础表单',
            zdajData: [{
                code: '1',
                codeType: 'zdaj',
                name: '是'
            }, {
                code: '0',
                codeType: 'zdaj',
                name: '否'
            }],
            formData: {
                ajbh: '20199001',
                ajcxlx: '一般程序',
                xzzfztmc: '西宁市药监局',
                jcajbh: '西宁市药监局',
                textarea1: '12345',
                textarea2: '12345',
                zdaj: '1'
            }
        };
    },

    methods: {
        submit() {
            window.alert('submit');
        },

        save() {
            window.alert('save');
        }
    }
};
