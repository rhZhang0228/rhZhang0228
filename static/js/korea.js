var dom = document.getElementById("container2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {      //标题组件
            text: '韩国每日新增',
			x:'center',
			y:'bottom',
			padding:[0,0,0,0],
			textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontFamily: '微软雅黑',
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
    },
    tooltip: {
                trigger: 'item',
                formatter: function (params) {
                var value = params.value;
                return '日期：' + params.name + '<br/>'  + '新增：' + value;
                }
    },
	toolbox: {
        show : true,
        top:10,
        right:10,
        feature : {
            mark : {show: true},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: true}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2月23日', '2月24日', '2月25日', '2月26日', '2月27日', '2月28日', '2月29日', '3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日', '3月8日', '3月9日', '3月10日', '3月11日', '3月12日', '3月13日', '3月14日', '3月15日', '3月16日', '3月17日', '3月18日', '3月19日', '3月20日', '3月21日', '3月22日', '3月23日', '3月24日', '3月25日', '3月26日', '3月27日', '3月28日', '3月29日', '3月30日', '3月31日', '4月1日', '4月2日', '4月3日', '4月4日', '4月5日', '4月6日', '4月7日', '4月8日', '4月9日', '4月10日', '4月11日', '4月12日', '4月13日', '4月14日', '4月15日', '4月16日', '4月17日'],
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [256, 162, 214, 13, 571, 571, 813, 589, 476, 516, 438, 518, 483, 367, 248, 131, 242, 114, 110, 107, 76, 74, 84, 93, 152, 87, 147, 98, 64, 76, 100, 104, 91, 146, 105, 78, 125, 101, 89, 86, 94, 81, 47, 47, 53, 39, 27, 30, 32, 25, 27, 27, 22, 22, 18],
        type: 'line',
        smooth: true,
        itemStyle: {  
            normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                    offset: 0, color: '#DC143C' // 100% 处的颜色
                }, {
                    offset: 1, color: '#FFC0CB' // 100% 处的颜色
                    }]
                ), //背景渐变色    
                lineStyle: {color: "#DC143C"}  
                },  
                emphasis: {color: '#DC143C', }  
            },//线条样式
        areaStyle: {normal: {}}
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}