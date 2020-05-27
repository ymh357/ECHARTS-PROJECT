import echarts from 'echarts'

export default class FunnelChart1{
    constructor(query) {
        this.myChart = echarts.init(document.querySelector(query))
        const option = {
            color: ['#19A2F7', '#47B5F9', '#75C7FA', '#8CD0FB' ].reverse(),
            title: {
                show: true,
                text: '漏斗图_对比',
            },
            dataset:{
                source: [
                    ['点击',10, 12],
                    ['咨询',20, 18],
                    ['访问',30, 30],
                    ['查看',50, 40]
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
                    z:3,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '80%',
                    sort: 'descending',
                    //gap: 2,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 2,
                    },
                    emphasis: {
                        label: {
                            show: false
                        }
                    }
                },
                {
                    type:'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    //gap: 2,
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#606A78',

                    },
                    labelLine: {
                        length: 40,
                        lineStyle: {
                            width: 1,
                            type: 'solid',
                            color: '#606A78'
                        }
                    },
                    itemStyle: {
                        color(params){
                          return hexToRgbA(params.color)
                        },
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

function hexToRgbA(hex){
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length === 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',.5)';
    }
    throw new Error('Bad Hex');
}



