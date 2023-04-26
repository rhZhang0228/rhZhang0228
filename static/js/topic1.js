var dom = document.getElementById("container4");
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
			name: '疫情',
			value: 0.033092378
		},{
			name: '招聘',
			value: 0.008435421
		}, {
			name: '工作',
			value: 0.017375661
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
		    name: '就业',
		    value: 0.044583622
		}, {
			name: '疫情',
			value: 0.032896813
		},{
			name: '毕业生',
			value: 0.022370335
		}, {
			name: '线上',
			value: 0.012949567
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
		    name: '招聘',
		    value: 0.008477056
		}, {
			name: '疫情',
			value: 0.033184657
		},{
			name: '毕业生',
			value: 0.02288617
		}, {
			name: '找工作',
			value: 0.011407898
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