import echarts from 'echarts'

export default class ScatterChart2{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const data = [
            [['01', 1.2, 10, ],['02', 1.3, 5, ],['04',1.8,  3,  ],[  '07',1.9, 1,]],
            [['06',1.3,  1, ],[ '08',1.3,2,  ],[ '03',1.8, 3, ],[ '05',1.34,4,  ]],
            [[  '03',1.4,1, ],[ '07', 1.2,2,],[  '01', 1.1,3,],[  '02',1.45,4, ]],
            [[  '02',1.4,1, ],[  '06',1.7,2,],[ '05',1.8, 3, ],['04',1.9, 4,  ]],
        ]

        const option = {
            color: ['#8174E7', '#19A2F7', '#43C496', '#FEB03D' ],
            title: {
                show: true,
                text: '散点图_散点堆积备份',
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
                data: ['01','02','03','04','05','06','07','08',]
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
                    type:'scatter',
                    name: '今日头条',
                    data: data[0],
                    symbolSize(data){
                        return data[2] * 10
                    }
                },
                {
                    type:'scatter',
                    name: '西瓜视频',
                    data: data[1],
                    symbolSize(data){
                        return data[2] * 10
                    }
                },
                {
                    type:'scatter',
                    name: '头条搜索',
                    data: data[2],
                    symbolSize(data){
                        return data[2] * 10
                    }
                },
                {
                    type:'scatter',
                    name: '图虫',
                    data: data[3],
                    symbolSize(data){
                        return data[2] * 10
                    }
                },
            ]
        }

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}
