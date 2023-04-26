var dom = document.getElementById("container5");
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
		    name: '疫情',
		    value: 0.023783857
		}, {
			name: '就业',
			value: 0.020070793
		},{
			name: '经济',
			value: 0.00782156
		}, {
			name: '美国',
			value: 0.01177068
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
		    name: '国家',
		    value: 0.01179765
		}, {
			name: '失业',
			value: 0.005929768
		},{
			name: '经济',
			value: 0.007755805
		}, {
			name: '中国',
			value: 0.003834155
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
		    name: '失业',
		    value: 0.005997286
		}, {
			name: '数据',
			value: 0.005504418
		},{
			name: '人数',
			value: 0.00388644
		}, {
			name: '经济',
			value: 0.007812052
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