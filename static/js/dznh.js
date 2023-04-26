var dom = document.getElementById("container3");
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
        min: 0,
        max: 15,
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
                //{value: 35, name: '孩子'},
                {value: 10, name: '手机'},
                {value: 10, name: '捐款'},
                {value: 8, name: '脱贫'},
				{value: 8, name: '上网'},
                {value: 6, name: '贫困'},
				{value: 5, name: '心酸'},
				{value: 4, name: '痛心'}
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
                shadowColor:'#FFFFFF'
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