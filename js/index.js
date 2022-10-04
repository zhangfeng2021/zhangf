// 模拟飞行路线模块地图模块
(function () {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var geoCoordMap = {
        赤峰: [119, 42],
        随州: [112.0856, 32.0105],
        襄阳: [113, 32],
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
    };

    var XAData = [
        [{ name: "西安" }, { name: "沈阳", value: 100 }],
        [{ name: "西安" }, { name: "赤峰", value: 100 }],
        [{ name: "西安" }, { name: "武汉", value: 100 }],
        [{ name: "西安" }, { name: "南京", value: 100 }],
        [{ name: "西安" }, { name: "济南", value: 100 }],
        [{ name: "西安" }, { name: "深圳", value: 100 }],
        [{ name: "西安" }, { name: "随州", value: 100 }],
        [{ name: "西安" }, { name: "杭州", value: 100 }],
        [{ name: "西安" }, { name: "上海", value: 100 }],
        [{ name: "西安" }, { name: "太原", value: 100 }],
    ];

    var XNData = [
        [{ name: "随州" }, { name: "西安", value: 100 }],
        [{ name: "随州" }, { name: "武汉", value: 100 }],
        [{ name: "随州" }, { name: "南昌", value: 100 }],

    ];

    var YCData = [
        [{ name: "沈阳" }, { name: "深圳", value: 100 }],
        [{ name: "武汉" }, { name: "广州", value: 100 }],
    ];

    var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //var planePath = 'arrow';
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
    var series = [];
    [
        ["西安", XAData],
        ["随州", XNData],
        ["武汉", YCData]
    ].forEach(function (item, i) {
        series.push(
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: "red", //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 2,
                symbol: ["none", "arrow"],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    brushType: "stroke"
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        formatter: "{b}"
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            }
        );
    });
    var option = {
        tooltip: {
            trigger: "item",
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return (
                        params.data.fromName +
                        ">" +
                        params.data.toName +
                        "<br />" +
                        params.data.value
                    );
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: "vertical",
            top: "bottom",
            left: "right",
            data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
            textStyle: {
                color: "#fff"
            },
            selectedMode: "multiple"
        },
        geo: {
            map: "china",
            label: {
                emphasis: {
                    show: true,
                    color: "#fff"
                }
            },
            // 把中国地图放大了1.2倍
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    // 地图省份的背景颜色
                    areaColor: "rgba(20, 41, 87,0.6)",
                    borderColor: "#195BB9",
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: "#2B91B7"
                }
            }
        },
        series: series
    };
    myChart.setOption(option);

    var dom = document.getElementById("globe3D");
    var myChart = echarts.init(dom);
    var option;

    option = {
        backgroundColor: '#000',
        globe: {
            baseTexture: '/images/earth.jpg',
            heightTexture: '/images/bathymetry_bw_composite_4k.jpg',
            displacementScale: 0.1,
            shading: 'lambert',
            environment: '/images/starfield.jpg',
            light: {
                ambient: {
                    intensity: 0.1
                },
                main: {
                    intensity: 1.5
                }
            },
            layers: [
                {
                    type: 'blend',
                    blendTo: 'emission',
                    texture: '/images/night.jpg'
                },
                {
                    type: 'overlay',
                    texture: '/images/clouds.png',
                    shading: 'lambert',
                    distance: 5
                }
            ]
        },
        series: []
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();






// 折线图 右下
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".line .chart"));

    var option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: "#dddc6b"
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: false,   //坐标轴从0开始
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },

                data: ["2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000"]
            },
            {
                axisPointer: { show: false },
                axisLine: { show: false },
                position: "bottom",
                offset: 20
            }
        ],

        yAxis: [
            {
                type: "value",
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },

                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "第一年薪资统计",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#0184d5",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [17, 37, 30, 28, 10, 8, 5, 5],

                markArea: {
                    data: [
                        [
                            { xAxis: '3000' }, { xAxis: '4000' }
                        ]
                    ]
                }
            }
            ,
            {
                name: "第二年薪资统计",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [3, 8, 19, 30, 33, 20, 16, 11],

                markArea: {
                    data: [
                        [
                            { xAxis: '5000' }, { xAxis: '6000' }
                        ]
                    ]
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    /*******高亮显示开始**********/
    var _this2 = this
    var isSet2 = true // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消
    var currentIndex2 = 0

    // 2、鼠标移动上去的时候的高亮动画
    myChart.on('mouseover', function (param) {
        isSet2 = false
        clearInterval(_this2.startCharts)
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex2
        })
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: param.dataIndex
        })
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: param.dataIndex
        })
    })
    // 3、自动高亮展示
    chartHover = function () {
        var dataLen = myChart.getOption().series[0].data.length
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex2
        })
        currentIndex2 = (currentIndex2 + 1) % dataLen
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex2
        })
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex2
        })
    }
    _this2.startCharts = setInterval(chartHover, 1000)
    // 4、鼠标移出之后，恢复自动高亮
    myChart.on('mouseout', function (param) {
        if (!isSet2) {
            _this2.startCharts = setInterval(chartHover, 1000)
            isSet2 = true
        }
    })
    /*******高亮显示结束**********/

    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




(function () {

    var myChart = echarts.init(document.querySelector(".bar .chart"), 'chalk');
    // var myChart = echarts.init(chartDom);
    var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e'];
    option = {
        backgroundColor: '#0e2147',
        grid: {
            left: '11%',
            top: '12%',
            right: '5%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                }
            },
            data: ['教授', '副教授', '博士学位', '硕士学位']
        }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                }
            },
            data: ['16人', '15人', '46人', '7人']
        }, {
            name: '分拨延误TOP 10',
            nameGap: '50',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '16',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,

            data: [(1600 / 53).toFixed(1), (1500 / 53).toFixed(1), (4600 / 53).toFixed(1), (700 / 53).toFixed(1)],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: "{c}%",
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                },

            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }
        ]
    };

    option && myChart.setOption(option);

    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



























