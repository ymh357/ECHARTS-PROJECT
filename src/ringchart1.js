import echarts from 'echarts'

export default class RingChart1{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const option = {
            color: ['#19A2F7', '#2BD6CA'],
            dataset:{
              source: [
                  ['分类1', 0.25],
                  ['分类1', 0.5],
                  ['分类2', 0.25],
              ]
            },
            title: {
                show: true,
                text: '环图_基础备份2',
            },
            legend: {
                bottom: 0,
                left: 10,
                icon: 'circle',
                textStyle: {
                    fontSize: 18
                },
                data: ['分类1','分类2']
            },
            tooltip: {},

            series: [
                {
                    type: 'pie',
                    radius: ['46%','50%'],
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        normal:{
                            borderWidth: 4,
                            borderColor: 'rgba(255,255,255,1)'
                        }
                    },
                    label: {
                        position: 'center',
                        formatter: [
                            '{a|462,920}',
                            `{b|腾讯全部地区}`,
                            `{b|运营帐号}`,
                        ].join('\n'),
                        rich:{
                            a:{
                                fontSize: 36,
                                color: '#000',
                            },
                            b:{
                                fontSize: 15,
                                color: '#1D252F',
                                lineHeight: 24
                            }
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



