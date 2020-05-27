import echarts from 'echarts'

export default class FunnelChart2{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const option = {
            color: ['#19A2F7', '#47B5F9', '#75C7FA', '#8CD0FB' ].reverse(),
            title: {
                show: true,
                text: '漏斗图_基础',
            },
            dataset:{
                source: [
                    ['图虫',25],
                    ['头条搜索',50],
                    ['西瓜视频',75],
                    ['今日头条',100]
                ]
            },
            legend: {
                show: true,
                bottom: 0,
                left: 10,
                icon: 'circle',
                textStyle: {
                    fontSize: 18
                },
                data: ['今日头条','西瓜视频','头条搜索','图虫']
            },
            tooltip:{

            },
            grid:{

            },
            xAxis:{
                axisLine: {
                    show: false,
                },
            },
            yAxis: {
                min: 0,
                max: 1,
                maxInterval: .25,
                splitNumber: 4,
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
                        if (value !== 0) {
                            return `${value * 100}%`
                        }else{
                            return value
                        }
                    },
                }
            },

            series: [
                {
                    type:'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 25,
                    max: 100,
                    minSize: '10%',
                    maxSize: '30%',
                    sort: 'descending',
                    //gap: 2,
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#606A78',
                        fontSize: 20,
                        formatter(params){
                            return `完成${params.data[params.seriesIndex + 1]}%`
                        },
                    },
                    labelLine: {
                        show: true,
                        length: 60,
                        lineStyle: {
                            width: 1,
                            type: 'solid',
                            color: '#606A78'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 0,
                    },
                }
            ]
        }

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}
