import echarts from 'echarts'

export default class PieChart1{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const option = {
            color: ['#19A2F7', '#2BD6CA', '#35C724', '#FFB900', '#F25C61', '#7056D8', '#ED55B0', '#FF8933'],
            dataset:{
              source: [
                  ['分类1', 40],
                  ['分类2', 21],
                  ['分类3', 9],
                  ['分类4', 8],
                  ['分类5', 7],
                  ['分类6', 6],
                  ['分类7', 5],
                  ['分类8', 4],
              ]
            },
            title: {
                show: true,
                text: '基础饼图',
            },
            legend: {
                bottom: 0,
                left: 10,
                icon: 'circle',
                textStyle: {
                    fontSize: 18
                },
                data: ['分类1','分类2','分类3','分类4','分类5','分类6','分类7','分类8']
            },
            tooltip: {},

            series: [
                {
                    type: 'pie',
                    radius: [0,'50%'],
                    labelLine: {
                        show: true,
                        smooth: true,
                        length: 10,
                        lineStyle: {
                            width: 1
                        }
                    },
                    itemStyle: {
                        normal:{
                            borderWidth: 1,
                            borderColor: 'rgba(255,255,255,1)'
                        }
                    },
                    label: {
                        position: 'outside',
                        fontSize: 16,
                        color: '#606A78',
                        formatter(params){
                            return `${params.name}: ${params.value[params.seriesIndex + 1]}%`
                        }
                    },

                },
            ]
        };

        this.myChart.setOption(option)
        this.myChart.getDom().style.border = '1px solid #D5DADF'
        this.myChart.getDom().style.padding = '20px'
    }
}



