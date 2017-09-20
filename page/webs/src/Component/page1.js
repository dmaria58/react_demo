import React, {Component, PropTypes} from 'react';
import { Form, Icon, Input, Button, Checkbox ,Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import Mymenu from './leftmenu.js'; 
import Top from './top.js';
const FormItem = Form.Item;
class Page1 extends Component { 
	getOtion(){
		var data = [
		    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
		    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
		];

		const option = {
		    backgroundColor: "rgb(234, 236, 239)",
		    title: {
		        text: '1990 与 2015 年各国家人均寿命与 GDP'
		    },
		    legend: {
		        right: 10,
		        data: ['1990', '2015']
		    },
		    xAxis: {
		        splitLine: {
		            lineStyle: {
		                type: 'dashed'
		            }
		        }
		    },
		    yAxis: {
		        splitLine: {
		            lineStyle: {
		                type: 'dashed'
		            }
		        },
		        scale: true
		    },
		    series: [{
		        name: '1990',
		        data: data[0],
		        type: 'scatter',
		        symbolSize: function (data) {
		            return Math.sqrt(data[2]) / 5e2;
		        },
		        label: {
		            emphasis: {
		                show: true,
		                formatter: function (param) {
		                    return param.data[3];
		                },
		                position: 'top'
		            }
		        },
		        itemStyle: {
		            normal: {
		                shadowBlur: 10,
		                shadowColor: 'rgba(120, 36, 50, 0.5)',
		                shadowOffsetY: 5,
		                color: "rgb(120, 212, 227)"
		            }
		        }
		    }, {
		        name: '2015',
		        data: data[1],
		        type: 'scatter',
		        symbolSize: function (data) {
		            return Math.sqrt(data[2]) / 5e2;
		        },
		        label: {
		            emphasis: {
		                show: true,
		                formatter: function (param) {
		                    return param.data[3];
		                },
		                position: 'top'
		            }
		        },
		        itemStyle: {
		            normal: {
		                shadowBlur: 10,
		                shadowColor: 'rgba(25, 100, 150, 0.5)',
		                shadowOffsetY: 5,
		                color:"rgb(227, 107, 118)"
		            }
		        }
		    }]
		};
	    return option;
  }
  getOtion2(){
  	const option = {
	    title: {
	        text: '堆叠区域图'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            label: {
	                backgroundColor: '#6a7985'
	            }
	        }
	    },
	    legend: {
	        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
	    },
	    toolbox: {
	        feature: {
	            saveAsImage: {}
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'邮件营销',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'直接访问',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'搜索引擎',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {}},
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
	return option;
  }
  render() {
    return (
      <div>
      <Top />
	  <Row className="page1_row">
	    <Col xs={0} sm={0} md={4} lg={3} xl={3} className="page1_col">      
      		<Mymenu menumode="inline" selectkey="1"/>
      	</Col>
 	    <Col xs={24} sm={24} md={0} lg={0} xl={0} >      
      		<Mymenu menumode="horizontal" selectkey="1"/>
      	</Col> 
      	<Col xs={24} sm={24} md={10} lg={11} xl={11} style={{height:"100%"}}>  
      		<div className="echart_div">
  		    	<ReactEcharts
                        option={this.getOtion2()}
                        style={{height: '90%', width: '100%'}}
                        className='react_for_echarts' />
      		</div>
      	</Col>	    		
      	<Col xs={24} sm={24} md={10} lg={10} xl={10} style={{height:"100%"}}>  
      		<div className="echart_div">
  		    	<ReactEcharts
                        option={this.getOtion()}
                        style={{height: '90%', width: '100%'}}
                        className='react_for_echarts' />
      		</div>
      	</Col>	
      </Row>	
      </div>
    );
  }
}

export default Page1
