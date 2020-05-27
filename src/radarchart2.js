import echarts from 'echarts'

export default class RadarChart2{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const option = {
            color: ['#7056D8', '#1AD0EB'],

            title: {
                show: true,
                text: '基础雷达图',
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
                show: false
            },
            yAxis: {
                axisLabel:{
                    color: '#606A78',
                    fontSize: 20,
                    margin: 16,
                    formatter(value){
                        return Math.abs(value)
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick:{
                    show: false
                },
                splitLine: {
                    show: false
                },
                min: -200,
                max: 200,
                splitNumber: 4
            },
            radar:{
                radius: '50%',
                indicator:[
                    {name: '销售', max: 5},
                    {name: '财务', max: 5},
                    {name: '人事', max: 5},
                    {name: '管理', max: 5},
                    {name: '信息技术', max: 5},
                    {name: '客服', max: 5},
                    {name: '研发', max: 5},
                    {name: '市场', max: 5},
                ],
                name: {
                  color: '#000',
                },
                axisLine:{
                    lineStyle:{
                        color: '#8174E7',
                        width: 1,
                        opacity: .1
                    },
                    symbol: 'circle',
                    symbolSize: 7
                },
                splitLine:{
                    lineStyle:{
                        color: 'rgba(0,0,0,.05)',
                    },
                },
                splitArea: {
                    show: false
                }
            },

            series: [
                {
                    type: 'radar',
                    symbolSize: 0,
                    symbol: 'circle',
                    data: [
                        {
                            value: [3, 2, 2.6, 3, 3, 1, 2, 2],
                            name: '今日头条',
                            areaStyle:{
                                color: '#7056D8'
                            },
                            lineStyle:{
                                width: 0
                            }
                        },{
                            value: [1, .5, 1.6, 2.2, 2.2, 3, 3.1, 3],
                            name: '西瓜视频',
                            areaStyle:{
                                color: '#1AD0EB'
                            },
                            lineStyle:{
                                width: 0
                            }
                        }
                    ],
                
                },
            ]
        };

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}



