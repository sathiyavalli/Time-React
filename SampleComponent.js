import React, { Component } from 'react';


class SampleComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			header:new Date() ,
			block:"Sample content"
		}
	};

componentDidMount(){
	this.intervalId = setInterval(this.increment.bind(this),1000);
	this.content();
}	
componentWillUnmount(){
    clearInterval(this.intervalId);
  }
increment(){
	var steps = 1;
	var maxCount = 10;
	// if(steps >= 1){
	this.value = this.setState({header:new Date()});
	// maxCount = this.state.header;
	// }
	// if(maxCount == 10){
	// 	clearInterval(this.intervalId);	
	// }
}	
content(){
	this.setState({block:"Three different time clocks"});
}
render() {
	return(
		<div>
			<SubContent {...this.state}/>
			<Header {...this.state}/>
		 </div>
		);	
		}
	}
	class SubContent extends React.Component {
	render() {
		return(
		<div>
			<div>
		  		{this.props.block}
			</div>
		</div>
		);
		}
	}
class Header extends React.Component {
	render() {
		return(
		<div>
		  <h4>
		  IST<br/>
		  {this.props.header.toLocaleTimeString()}
		  </h4>
		  <h4>
		  US Time<br/>
			{this.props.header.toLocaleTimeString("en-US", {timeZone: "America/New_York"})}
		  </h4>
		  <h4>
		  Berlin Time<br/>
		  {this.props.header.toLocaleTimeString("en-US", {timeZone: "Europe/Berlin"})}
		  </h4>
		</div>
		);
		}
	}


export default SampleComponent;