var dom = document.getElementById("container2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    backgroundColor: '#FFFFFF',

    title: {
        text: '高频词',
		show:false
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {d}%'
    },
    visualMap: {
        show: false,
        min: 20,
        max: 230,
        inRange: {
            colorLightness: [0,1]
        }
    },
    series: [
        {
            name:'高频词',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 205, name: '直播'},
                {value: 110, name: '黑屏'},
                {value: 110, name: '声音'},
                {value: 81, name: '进不去'},
                {value: 60, name: '暂停'},
				{value: 59, name: '崩溃'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: '#333'
            },
            labelLine: {
                lineStyle: {
                    color: '#333'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor:'#FFB6C1'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}