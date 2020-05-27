import echarts from 'echarts'

export default class AreaChart3{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const option = {
            color: ['#19A2F7 '],
            dataset: {
                dimensions: ['月份', '今日头条'],
                source: [
                    ['01', 1.3],
                    ['02', 1.35],
                    ['03', 1.62],
                    ['04', 1.60],
                    ['05', 1.67],
                    ['06', 1.82],
                    ['07', 1.86],
                    ['08', 2.00],
                ]
            },
            title: {
                show: true,
                text: '基础面积图',
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
                },
                axisPointer:{
                    show: true,
                    type: 'line',
                    lineStyle:{
                        type: 'solid'
                    }
                }
            },
            yAxis: {
                min: 1,
                max: 2,
                splitNumber: 5,
                splitLine:{
                    lineStyle:{
                        color: 'rgba(0,0,0,.05)'
                    }
                },
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
                },
                axisPointer:{
                    show: true,
                    type: 'line',
                    lineStyle:{
                        type: 'dashed'
                    }
                }
            },
            series: [
                {
                    type: 'line',
                    label: {
                        show: true,
                        position: 'top',
                        color: '#737C88',
                        formatter(params) {
                            if (params.data[1] !== 0) {
                                return `${params.data[1]}亿`
                            }
                        }
                    },
                    areaStyle: {
                        color: 'rgba(30,180,250,.6)',
                    },
                    // markLine:{
                    //     symbol:'none',
                    //     label: {
                    //         show:false
                    //     },
                    //     lineStyle:{ 
                    //         color:'#C2C6CC'
                    //     },
                    //     data:[
                    //         {
                    //             yAxis: 1.6
                    //         }
                    //     ]
                    // },
                },
            ],
            
        }

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}



