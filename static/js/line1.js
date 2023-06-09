var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var option = {
    title: {
        text: '图1:河南居民情感分值及每日新增',
        top:10,
        left:20,
		padding:[0,0,0,0],
		textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontFamily: '微软雅黑',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} <br/>{a} : {c}"
    },
    toolbox: {
        show : true,
        top:10,
        right:10,
        feature : {
            mark : {show: true},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid:{
        top:60,
        right:70,
        bottom:30,
        left:60
    },
	color:['#395692','#DC143C'],
    legend: {
        top:32,
        left:'center',
        data:['情感值','新增数']
    },
    xAxis : [
        {
            type : 'category',
            data:['1月21日', '1月22日', '1月23日', '1月24日', '1月25日', '1月26日', '1月27日', '1月28日', '1月29日', '1月30日', '1月31日', '2月1日', '2月2日', '2月3日', '2月4日', '2月5日', '2月6日', '2月7日', '2月8日', '2月9日', '2月10日', '2月11日', '2月12日', '2月13日', '2月14日', '2月15日', '2月16日', '2月17日', '2月18日', '2月19日', '2月20日', '2月21日', '2月22日', '2月23日', '2月24日', '2月25日', '2月26日', '2月27日', '2月28日', '2月29日', '3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日', '3月8日', '3月9日', '3月10日', '3月11日', '3月12日', '3月13日', '3月14日', '3月15日', '3月16日', '3月17日', '3月18日', '3月19日', '3月20日', '3月21日', '3月22日', '3月23日', '3月24日', '3月25日', '3月26日', '3月27日', '3月28日', '3月29日', '3月30日', '3月31日', '4月1日', '4月2日', '4月3日'] 
        }
    ],
    yAxis : [
        {
            type: 'value',
            name:"每\n日\n情\n感\n值",
            nameLocation:"center",
            nameGap:35,
            nameRotate:0,
            nameTextStyle:{
                fontSize: 16,
            },
        },
        {
            type: 'value',
            name:"每\n日\n新\n增\n人\n数",
            nameLocation:"center",
            nameGap:35,
            nameRotate:0,
            nameTextStyle:{
                fontSize: 16,
            },
        }
    ],
    series : [
        {
            name:'情感值',
            type:'line',
            smooth: true,
            yAxisIndex: 0,
            data:[0.320623969237924, 0.449478051902057, 0.24674640989299, 0.253311608092303, 0.22586175869012, 0.244363340677972, 0.368222337902438, 0.301401588981744, 0.447984952785926, 0.249819447384577, 0.28036346184282, 0.350894093641338, 0.348289975274428, 0.39136719610424, 0.381473157811317, 0.555497024126822, 0.450327225966751, 0.592408687389055, 0.573497865981797, 0.592864694195906, 0.594970241169599, 0.582287298454314, 0.529769046818544, 0.518032983495896, 0.608659375390765, 0.510069698386896, 0.556249577532676, 0.542921938542604, 0.603575869316718, 0.634434994559964, 0.583000775875224, 0.537759915169445, 0.551592726281807, 0.540999606116775, 0.608411084153132, 0.573237502773975, 0.538556785826243, 0.433667269768446, 0.62167740959838, 0.644978549445375, 0.601514060589231, 0.666297074845596, 0.618703479914887, 0.61029213033978, 0.601964303385467, 0.56224300133437, 0.521350304807967, 0.593481468753564, 0.439781599522059, 0.563821350902898, 0.48055280120125, 0.409314062211734, 0.430428933032347, 0.338764619259373, 0.383425437428228, 0.384195329965818, 0.565053079820258, 0.541261295057136, 0.391595312273093, 0.42761889264432, 0.507102586927183, 0.351141282943594, 0.447973263920131, 0.423604392255236, 0.536954915520237, 0.383814198058671, 0.35017745781582, 0.316976383660544, 0.399995187124865, 0.304069860464345, 0.274142733039361, 0.326709324860178, 0.304686930371571, 0.274013839212894],
            itemStyle:{normal:{lineStyle:{color:'#395692'}}},
        },
        {
            name:'新增数',
            type:'line',
            smooth: true,
            yAxisIndex: 1,
            data:[1, 4, 0, 23, 51, 45, 40, 38, 72, 74, 70, 71, 73, 109, 89, 87, 63, 67, 53, 40, 32, 30, 34, 15, 28, 19, 15, 11, 5, 4, 2, 3, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            itemStyle:{normal:{lineStyle:{color:'#DC143C'}}},
            //itemStyle : { normal: {label : {show: true},textStyle:{color:'#333'}}},
        }
    ]
};
myChart.setOption(option);