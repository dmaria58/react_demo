import React, {Component, PropTypes} from 'react';
import { Badge, Icon ,Row, Col} from 'antd';
import {History, Link } from 'react-router';
class Top extends Component {
	render(){
		return (
		  <Row className="top_row">
		    <Col xs={12} sm={12} md={18} lg={20} xl={20}>
		    <h1 className="page1_title"><Icon type="rocket" className="top_icon" /> REACT DEMO</h1>
		    </Col>
		    <Col xs={12} sm={12} md={6} lg={4} xl={4} className="top_leftcol">
			    <div className="page1_top">
				    <Badge dot>
				      <Icon type="notification" />
				    </Badge>	
				    <Link to="/" className="top_link"><Icon type="poweroff" /> 退出</Link>			    	
				</div>    
		    </Col>
		  </Row>
		)
	}
}
export default Top