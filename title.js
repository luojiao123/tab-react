import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    render() {
		// console.log(this.props.index)
		let oLi=[];
		this.props.topVal.forEach((val,index)=>{
			// onClick={this.props.change.bind(val,index)  bind里面第一个参数没什么意义，只做占位，第二个参数传递我们需要的值
			oLi.push(<li className={index==this.props.index?'active':''} key={index} onClick={this.props.change.bind(val,index)}>{val}</li>)
		}) 
        return (<div className="topBox">
			<ul>
			{oLi}
			</ul>
		</div>)
    }
}

export default Title;