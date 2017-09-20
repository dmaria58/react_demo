import React, {Component, PropTypes} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {History, Link ,hashHistory} from 'react-router';
import template from './template.js';
const FormItem = Form.Item;
class Main extends Component { 
  constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            loading:"none"
        }
  } 
  componentDidMount(){
    //绘制canvas
    var canvas = this.refs.mainCanvas;
    function SiriWave(opt){
      this.opt = opt || {};
      if (!devicePixelRatio) devicePixelRatio = 1;
      this.width = devicePixelRatio * (this.opt.width || 320);
      this.height = devicePixelRatio * (this.opt.height || 100);
      this.K = 2;
      this.F = 2;
      this.speed = 0.05;
      this.MAX = (this.height/3)-4;
      this.noise = this.opt.noise || 0;
      this.phase = this.opt.phase || 0;      

      this.canvas = canvas;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      this.ctx = this.canvas.getContext('2d');

      this.run = false;
    }
    SiriWave.prototype = {
      _globalAttenuationFn: function(x){
        return Math.pow(this.K*4/(this.K*4+Math.pow(x,4)),this.K*2);
      },

      _drawLine: function(attenuation, color, width){
        this.ctx.moveTo(0,0);
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = width || 1;
        var x, y;
        for (var i=-this.K; i<=this.K; i+=0.01) {
          x = this.width*((i+this.K)/(this.K*2));
          y = this.height/3 + this.noise * this._globalAttenuationFn(i) * (1/attenuation) * Math.sin(this.F*i-this.phase);
          this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();
      },
      _draw: function(){
        if (!this.run) return;
        this._clear();
        this.phase = (this.phase+this.speed)%(Math.PI*64);
        this._drawLine(-1, 'rgba(16, 142, 233, 1)');
        this._drawLine(-6, 'rgba(12, 142, 233, 0.2)');
        this._drawLine(4, 'rgba(16, 142, 233, 0.1)');
        this._drawLine(8, 'rgba(16, 142, 233, 0.05)');


        requestAnimationFrame(this._draw.bind(this), 1000);
      },
      _clear: function(){
        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.globalCompositeOperation = 'source-over';
      },
      start: function(){
        this.phase = 0;
        this.run = true;
        this._draw();
      },

      setNoise: function(v){
        this.noise = Math.min(v, 1)*this.MAX;
      },
    };
    var SW = new SiriWave({
      width: 740,
      height: 300
    });
    SW.start();
    setInterval(function(){
      SW.setNoise(0.2);
    }, 0);
  }
  componentWillReceiveProps(nextProps){
      if(this.props.getLoginData!=nextProps.getLoginData){
        if(nextProps.getLoginData.data=="success"){
          hashHistory.push("page1");
        }
        else if(nextProps.getLoginData.data=="fail"){
          alert("用户或者密码错误");
           this.setState({loading:"none"})
        }
        else if(nextProps.getLoginData.data=="start"){
          this.setState({loading:"block"})
        }
      }
    }
  login=()=>{
    this.props.getLogin("login",this.state);
  }
  changeValue=(key,e)=>{
    this.setState({[key]:e.target.value});
  }
  render() {
    return (
      <div>
        <div style={{display:this.state.loading}} className="login_loading"><Icon type="loading" className="login_loadingicon" /></div>
        <canvas className="login_canvas" ref="mainCanvas">
        </canvas>
        <div className="login_outdiv">      
          <Form  className="login-form">
            <h1 className="login_title">REACT DEMO by maria</h1>
            <FormItem>
                <Input size="large" onChange={this.changeValue.bind(this,"username")} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
            </FormItem>
            <FormItem>
                <Input size="large" onChange={this.changeValue.bind(this,"password")} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
              <Button type="primary"  onClick={this.login} className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
export default template({
    id: 'login',  //应用关联使用的redux
    component: Main,//接收数据的组件入口
    url: ''
});
