import echarts from 'echarts'

export default class BarChart4{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const option = {
            color: ['#19A2F7'],
            dataset: {
                dimensions: ['星期', '今日头条'],
                source: [
                    ['周一', 500, 150, 150],
                    ['周二', 1500, 600, 400],
                    ['周三', 2000, 700, 300],
                    ['周四', 3000, 700, 700],
                    ['周五', 4000, 1200, 1200],
                ]
            },
            title: {
                show: true,
                text: '堆叠条行图',
            },
            legend: {
                bottom: 0,
                left: 10,
                icon: 'circle',
                textStyle: {
                    fontSize: 18
                }
            },
            tooltip: {},
            grid:{
                left: '10%',
                width: '70%',
                height: '50%',
                top: '25%',
            },
            xAxis: {
                //type: 'value',
                splitNumber: 10,
                min: 0,
                max: 4500,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 0
                    },
                },
                axisTick:{
                    show: false
                },
                splitLine:{
                    show: true,
                    lineStyle: {
                        color: ['rgba(0,0,0,0.05)']
                    }
                },
                axisLabel:{
                    color: '#606A78',
                    fontSize: 20
                }
            },
            yAxis: {
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#C2C6CC'
                    },
                },
                axisTick:{
                    show: true,
                    alignWithLabel: true,
                },
                axisLabel:{
                    color: '#606A78',
                    fontSize: 20,
                    margin: 16
                }
            },
            series: [
                {type: 'bar'},
            ]
        };

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}



