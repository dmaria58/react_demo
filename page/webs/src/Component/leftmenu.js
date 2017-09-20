
import React, {Component, PropTypes} from 'react';
import { Menu, Icon, Button } from 'antd';
import {History, Link } from 'react-router';
const SubMenu = Menu.SubMenu;

class Common extends Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div className="menu_div">
 
        <Menu
          selectedKeys={[this.props.selectkey]}
          defaultOpenKeys={['sub1']}
          mode={this.props.menumode}
          theme="dark"
        >
          <Menu.Item key="1">
          <Link to="/page1">
            <Icon type="pie-chart" />
            <span>图表</span>
          </Link>  
          </Menu.Item>
          <Menu.Item key="2">
          <Link to="/page2">
            <Icon type="desktop" />
            <span>表单</span>
          </Link>  
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default Common;