export default {
    name: 'echart',
    data() {
        return {name: '图表Demo'};
    },
    mounted() {
        this.draw();
    },
    methods: {
        draw() {
            const chart1 = this.$echarts.init(document.getElementById('chart1'));
            chart1.setOption({
                title: {text: '互联案件汇总趋势统计分析'},
                tooltip: {formatter: '{c0}件'},
                legend: {
                    data: ['案件数', '节点数'],
                    top: 30,
                    left: 10
                },
                xAxis: {data: ['2015/10', '2015/11', '2015/12', '2016/01', '2016/02', '2016/03', '2016/04', '2016/05', '2016/06', '2016/07', '2016/08', '2016/09']},
                yAxis: {},
                series: [
                    {
                        name: '案件数',
                        type: 'line',
                        itemStyle: {
                            color: '#3194e7',
                            width: 1
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{offset: 0, color: '#3194e7'}, {offset: 1, color: 'transparent'}],
                                global: false
                            }
                        },
                        stack: 'a',
                        data: [51, 17, 51, 70, 68, 48, 51, 17, 51, 70, 68, 48]
                    },
                    {
                        name: '节点数',
                        type: 'line',
                        itemStyle: {
                            color: '#ff6769',
                            width: 1
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{offset: 0, color: '#ff6769'}, {offset: 1, color: 'transparent'}],
                                global: false
                            }
                        },
                        stack: 'a',
                        data: [68, 34, 21, 60, 40, 42, 68, 34, 21, 60, 40, 42]
                    }]
            });

            const chart2 = this.$echarts.init(document.getElementById('chart2'));
            chart2.setOption({
                tooltip: {formatter: '{c0}件'},
                legend: {
                    data: ['案件数', '节点数'],
                    top: 30,
                    left: 10
                },
                xAxis: {data: ['二审上诉', '二审抗诉', '法院决定再审', '提出抗诉', '审判监督抗诉', '检查建议', '再检查建议']},
                yAxis: {},
                series: [
                    {
                        name: '案件数',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 15,
                        itemStyle: {
                            color: '#3194e7',
                            width: 1
                        },
                        data: [18, 6, 4, 2, 3, 3, 3]
                    },
                    {
                        name: '节点数',
                        type: 'bar',
                        barGap: 0,
                        barWidth: 15,
                        itemStyle: {
                            color: '#ff6769',
                            width: 1
                        },
                        data: [22, 13, 11, 6, 7, 7, 7]
                    }]
            });

            const chart3 = this.$echarts.init(document.getElementById('chart3'));
            chart3.setOption({
                title: {
                    text: '互联交换信息次数分析',
                    left: 'center'
                },
                legend: {
                    bottom: 0,
                    data: ['发送信息', '接收信息']
                },
                tooltip: {formatter: '{c0}件'},
                series: [
                    {
                        type: 'pie',
                        clockwise: false,
                        color: ['#ffb53f', '#3194e7'],
                        radius: ['50%', '70%'],
                        data: [
                            {value: 30, name: '发送信息'},
                            {value: 80, name: '接收信息'}
                        ]
                    }]
            });

            const chart4 = this.$echarts.init(document.getElementById('chart4'));
            chart4.setOption({
                title: {
                    text: '案件质量分析',
                    left: 0
                },
                legend: {
                    bottom: 0,
                    data: ['累计移送案件数', '含文书案件数', '含卷宗案件数']
                },
                tooltip: {formatter: '{c0}件'},
                avoidLabelOverlap: true,
                hoverAnimation: false,
                hoverOffset: 0,
                series: [
                    {
                        type: 'pie',
                        clockwise: false,
                        color: ['#5fcb5e'],
                        radius: ['65%', '75%'],
                        data: [
                            {value: 90, name: '累计移送案件数'}
                        ]
                    },
                    {
                        type: 'pie',
                        clockwise: false,
                        color: ['#ff6769', 'transparent'],
                        radius: ['45%', '55%'],
                        data: [
                            {value: 85, name: '含文书案件数'},
                            {value: 55}
                        ]
                    },
                    {
                        type: 'pie',
                        clockwise: false,
                        color: ['#546fb5'],
                        radius: ['25%', '35%'],
                        data: [
                            {value: 30, name: '含卷宗案件数'},
                            {value: 80}
                        ]
                    }
                ]
            });

            const chart5 = this.$echarts.init(document.getElementById('chart5'));
            chart5.setOption({
                legend: {
                    bottom: 0,
                    data: ['发送文书', '接收文书']
                },
                tooltip: {formatter: '{c0}件'},
                series: [
                    {
                        type: 'pie',
                        clockwise: false,
                        color: ['#ffb53f', '#3194e7'],
                        radius: ['50%', '70%'],
                        data: [
                            {value: 30, name: '发送文书'},
                            {value: 80, name: '接收文书'}
                        ]
                    }]
            });

            const chart6 = this.$echarts.init(document.getElementById('chart6'));
            chart6.setOption({
                title: {
                    text: '案件时效分析',
                    left: 0
                },
                legend: {
                    bottom: 0,
                    data: ['超时', '正常']
                },
                tooltip: {formatter: '{c0}件'},
                series: [
                    {
                        type: 'pie',
                        clockwise: false,
                        color: ['#ff6769', '#34c7c3'],
                        radius: ['50%', '70%'],
                        data: [
                            {value: 10, name: '超时'},
                            {value: 80, name: '正常'}
                        ]
                    }]
            });
        }


    }
};
