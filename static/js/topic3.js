var dom = document.getElementById("container6");
var myChart = echarts.init(dom);
var app = {};
var option = {
    title: [{
        subtext: '时期1',
        left: '16.67%',
        top: '70%',
        textAlign: 'center'
    }, {
        subtext: '时期2',
        left: '50%',
        top: '70%',
        textAlign: 'center'
    }, {
        subtext: '时期3',
        left: '83.33%',
        top: '70%',
        textAlign: 'center'
    }],
    series: [{
        type: 'pie',
        radius: '30%',
        center: ['50%', '50%'],
        data: [{
		    name: '就业',
		    value: 0.044736817
		}, {
			name: '毕业生',
			value: 0.022284673
		},{
			name: '高校',
			value: 0.017966319
		}, {
			name: '防控',
			value: 0.010383208
		}],
        animation: false,
        label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5
        },
        left: 0,
        right: '66.6667%',
        top: 0,
        bottom: 0
    }, {
        type: 'pie',
        radius: '30%',
        center: ['50%', '50%'],
        data: [{
		    name: '工作',
		    value: 0.010434084
		}, {
			name: '企业',
			value: 0.01040149
		},{
			name: '复工',
			value: 0.009431332
		}, {
			name: '稳',
			value: 0.009189962
		}],
        animation: false,
        label: {
            position: 'outer',
            alignTo: 'labelLine',
            bleedMargin: 5
        },
        left: '33.3333%',
        right: '33.3333%',
        top: 0,
        bottom: 0
    }, {
        type: 'pie',
        radius: '30%',
        center: ['50%', '50%'],
        data: [{
		    name: '创业',
		    value: 0.012488608
		}, {
			name: '就业',
			value: 0.04499979
		},{
			name: '招聘',
			value: 0.008477056
		}, {
			name: '中央',
			value: 0.008142286
		}],
        animation: false,
        label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20
        },
        left: '66.6667%',
        right: 0,
        top: 0,
        bottom: 0
    }]
};

myChart.setOption(option, true);