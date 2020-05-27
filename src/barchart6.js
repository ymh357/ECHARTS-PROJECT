import echarts from 'echarts'

export default class BarChart5{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const color = {'今日头条':'#19A2F7', '西瓜视频':'#35C724', '头条搜索':'#FFB900'}
        const data = [
            [['今日头条',  '2010', 1.4],['今日头条',  '2012', 1.4],['今日头条',  '2013', 1.4],['今日头条',  '2014', 1.4],['今日头条',  '2015', 1.4],['今日头条',  '2016', 1.4],],
            [['西瓜视频',  '2010', 1.4],['西瓜视频',  '2012', 1.4],['西瓜视频',  '2013', 1.4],['西瓜视频',  '2014', 1.4],['西瓜视频',  '2015', 1.4],['西瓜视频',  '2016', 1.4],],
        ]
        const option = {
            
            title: {
                show: true,
                text: '柱状图_双轴图',
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
                    '今日头条', '西瓜视频',
                ]
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid:{
                left: '10%',
                width: '70%',
                height: '50%',
                top: '25%',
            },
            xAxis: [{
                type: 'category',
                data:[
                    2010, 2012, 2013, 2014, 2015, 2016,
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
                }
            },{
                min: 0, 
                max: 6,
                splitNumber: 6,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 0
                    },
                },
                axisTick:{
                    show: false,
                    alignWithLabel: true
                },
                splitLine:{
                    show: false,
                    lineStyle: {
                        color: ['rgba(0,0,0,0.05)']
                    }
                },
                axisLabel:{
                    show: false,
                    color: '#606A78',
                    fontSize: 20
                }
            }],
            yAxis: [{
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
            },{
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
                    align: 'right',
                    formatter(value) {
                        return `${value*100}%`
                    },
                },
            }],
            series: (()=>{
                let result = []
                for(let i=0;i < data.length; i++){
                    let barBlock = {
                        type: 'bar',
                        data: data[i].map(e=>{return {value: e[2], itemStyle:{color:color[e[0]]}}}),
                        barWidth: 20,
                        name:data[i][0][0]
                    }
                    result.push(barBlock)
                }        
                let line = {
                    type: 'line',
                    data: [
                        [1.5, .6],
                        [2.5, .2],
                        [3.5, .4],
                        [4.5, .7],
                        [5.5, .8],
                        [6, 1],
                    ],
                    yAxisIndex: 1,
                    xAxisIndex: 1,
                    lineStyle:{
                        color: Object.values(color)[Object.values(color).length-1]
                    }
                }
                result.push(line)                
                console.log(result)

                return result
            })()
        };

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}



