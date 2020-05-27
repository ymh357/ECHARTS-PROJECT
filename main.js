import BarChart1 from './src/barchart1'
import BarChart2 from "./src/barchart2";
import BarChart3 from "./src/barchart3";
import BarChart4 from "./src/barchart4";
import AreaChart1 from "./src/areachart1";
import AreaChart2 from "./src/areachart2";
import FunnelChart1 from "./src/funnelchart1";
import FunnelChart2 from "./src/funnelchart2";
import ScatterChart1 from "./src/scatterChart1";
import ScatterChart2 from "./src/scatterChart2";
import RadarChart1 from "./src/radarchart1";
import RingChart1 from "./src/ringchart1";
import RingChart2 from "./src/ringchart2"
import PieChart1 from "./src/piechart1"
import RadarChart2 from "./src/radarchart2";
import AreaChart3 from "./src/areachart3"
import BarChart5 from "./src/barchart5"
import BarChart6 from "./src/barchart6"
import BarChart7 from "./src/barchart7"
import LineChart1 from "./src/linechart1"

let arr = []
for(let i=0; i<26; i++){
    let div = document.createElement('div')
    arr.push(`chart${i}`)
    div.id = `chart${i}`
    div.style.width = '1200px'
    div.style.height = '600px'
    document.body.append(div)
}

new BarChart1('#' + arr.shift())
new BarChart2('#' + arr.shift())
new BarChart3('#' + arr.shift())
new BarChart4('#' + arr.shift())
new AreaChart1('#' + arr.shift())
new AreaChart2('#' + arr.shift())
new FunnelChart1('#' + arr.shift())
new FunnelChart2('#' + arr.shift())
new ScatterChart1('#' + arr.shift())
new ScatterChart2('#' + arr.shift())
new RadarChart1('#' + arr.shift())
new RingChart1('#' + arr.shift())
new RingChart2('#' + arr.shift())
new PieChart1('#' + arr.shift())
new RadarChart2('#' + arr.shift())
new AreaChart3('#' + arr.shift())
new BarChart5('#' + arr.shift())
new BarChart6('#' + arr.shift())
new BarChart7('#' + arr.shift())
new LineChart1('#' + arr.shift())