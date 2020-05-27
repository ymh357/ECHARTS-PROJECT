import echarts from 'echarts'

export default class AreaChart2{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const option = {
            color: ['#35C724','#19A2F7 ', ],
            dataset: {
                dimensions: ['月份',  '西瓜视频', '今日头条'],
                source: [
                    ['01', 0.3, 1.3,],
                    ['02', 0.3, 1.35],
                    ['03', 0.3, 1.4],
                    ['04', 0.3, 1.45],
                    ['05', 0.3, 1.5],
                    ['06', 0.3, 1.55],
                    ['07', 0.3, 1.6],
                    ['08', 0.3, 1.7],
                ]
            },
            title: {
                show: true,
                text: '面积图_堆叠',
            },
            legend: {
                show: true,
                bottom: 0,
                left: 10,
                icon: 'circle',
                textStyle: {
                    fontSize: 18
                },
                data:[
                    {name: '今日头条'},
                    {name: '西瓜视频'}
                ]
            }
            ,
            tooltip: {
                formatter(params){
                    return `${params.dimensionNames[params.seriesIndex + 1]}
                    ${params.data[0]}:${params.data[1 + 1 - params.seriesIndex]}亿
                    `
                }
            },
            grid: {
                left: '10%',
                width: '70%',
                height: '50%',
                top: '25%',
            },
            xAxis: {
                type: 'category',
                splitNumber: 10,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 0
                    },
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#C2C6CC'
                    },
                    alignWithLabel: true
                },
                axisLabel: {
                    color: '#606A78',
                    fontSize: 20
                }
            },
            yAxis: {
                min: 1,
                max: 2,
                splitNumber: 5,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    color: '#606A78',
                    fontSize: 15,
                    margin: 0,
                    verticalAlign: 'bottom',
                    padding: [0, 0, 10, 0],
                    align: 'left',
                    formatter(value) {
                        if (value !== 1) {
                            return `${value}亿`
                        }
                        return '0'

                    },
                }
            },
            series: [
                {
                    type: 'line',
                    name: '西瓜视频',
                    encode: {
                        x: '月份',
                        y: 2
                    },
                    stack: 'amount',
                    areaStyle: {
                        color: 'rgba(0,255,100,.6)',
                    },
                },
                {
                    type: 'line',
                    name: '今日头条',
                    encode: {
                        x: '月份',
                        y: 1
                    },
                    stack: 'amount',
                    areaStyle: {
                        color: 'rgba(30,180,250,.6)',
                    },
                },
            ],

        }

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}



