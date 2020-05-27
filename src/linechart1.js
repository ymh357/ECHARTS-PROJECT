import echarts from 'echarts'

export default class LineChart1{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const color = {'今日头条':'#F55656', '西瓜视频':'#35C724',}
        const data = [
            [.2, .4, .4, .6 , .8, .45, .3, .2],
        ]
        const option = {
            
            title: {
                show: true,
                text: '折线堆叠图',
            },
            color: Object.values(color),
            legend: {
                show: true,
                bottom: 0,
                left: 10,
                icon: 'circle',
                textStyle: {
                    fontSize: 18
                },
                
                data: [
                    '今日头条',
                ]
            },
            tooltip: {
                axisPointer:{
                    type: 'line',
                    show: true
                }
            },
            grid:{
                left: '10%',
                width: '70%',
                height: '50%',
                top: '25%',
            },
            xAxis: {
                //type: 'time',
                data:[
                    '2:00AM', '4:00AM','6:00AM', '8:00AM','10:00AM', '12:00AM', '2:00PM', '4:00PM'
                ],
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 0
                    },
                },
                axisTick:{
                    show: true,
                    alignWithLabel: true
                },
                splitLine:{
                    show: false,
                    lineStyle: {
                        color: ['rgba(0,0,0,0.05)']
                    }
                },
                axisLabel:{
                    color: '#606A78',
                    fontSize: 20
                },
                axisPoint:{

                }
            },
            yAxis: {
                min: 0,
                max: 1,
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
                        return `${value*100}%`
                    },
                },
            },
            axisPointer: {
                type: 'line',
                show: true,
                link: {xAxisIndex: 'all'},
                label: {
                    backgroundColor: '#777'
                }
            },
            series: [
                {
                    name: '今日头条',
                    type: 'line',
                    data: data[0]
                },{
                    name: '西瓜视频',
                    type: 'line',
                    data: data[0].map(e=>e+.2)
                }
            ]
        };

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}



