import echarts from 'echarts'

export default class BarChart5{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const color = {'今日头条':'#19A2F7', '西瓜视频':'#35C724', '头条搜索':'#FFB900', '图虫':'#F25C61'}
        const data = [
            [['今日头条', 'A组', 2, .1],['今日头条', 'A组', 4, .1],['今日头条', 'A组', 6, .1],],
            [['今日头条', 'B组', 2, .2],['今日头条', 'B组', 4, .3],['今日头条', 'B组', 6, .4],],
            [['西瓜视频', 'A组', 2, .2],['西瓜视频', 'A组', 4, .3],['西瓜视频', 'A组', 6, .4],],
            [['西瓜视频', 'B组', 2, .1],['西瓜视频', 'B组', 4, .1],['西瓜视频', 'B组', 6, .1],],
            [['头条搜索', 'A组', 2, .2],['头条搜索', 'A组', 4, .3],['头条搜索', 'A组', 6, .4],],
            [['头条搜索', 'B组', 2, .1],['头条搜索', 'B组', 4, .1],['头条搜索', 'B组', 6, .1],],
            [['图虫', 'A组', 2, .2],['图虫', 'A组', 4, .3],['图虫', 'A组', 6, .4],],
            [['图虫', 'B组', 2, .1],['图虫', 'B组', 4, .1],['图虫', 'B组', 6, .1],],
        ]
        const option = {
            
            title: {
                show: true,
                text: '基础柱状_分组',
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
                    type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow',
                }
            },
            grid:{
                left: '10%',
                width: '70%',
                height: '50%',
                top: '25%',
            },
            xAxis: {
                data:[
                    2, 4, 6, 8, 10, 12
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
            series: (()=>{
                let result = []
                for(let i=0;i < data.length; i++){
                    let barBlock = {
                        type: 'bar',
                        data: data[i].map(e=>{return {value: e[3], itemStyle:{color:color[e[0]]}}}),
                        stack: i%2===0?'A':'B',
                        barWidth: 20,
                        name:data[i][0][0]
                    }
                    result.push(barBlock)
                }        
                return result
            })()
        };

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}



