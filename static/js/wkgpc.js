var dom = document.getElementById("container1");
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
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    visualMap: {
        show: false,
        min: 150,
        max: 700,
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
                {value: 1088, name: '老师'},
                {value: 638, name: '作业'},
                {value: 574, name: '学生'},
                {value: 486, name: '上课'},
                {value: 473, name: '开学'},
				{value: 426, name: '视频'},
				{value: 197, name: '签到'},
				{value: 159, name: '大学生'}
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