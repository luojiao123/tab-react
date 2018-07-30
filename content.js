import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Content extends Component {
    render() {
		let aDiv=[];
		this.props.bottomVal.topValue.forEach((val,index)=>{
			aDiv.push(<div style={{display:index==this.props.index?'block':'none'}} className="bottomBox" key={index}>{this.props.bottomVal.bottomValue[index]}</div>);
		})
        return (<div className="bBox">
			{aDiv}
		</div>)
    }
}

export default Content;