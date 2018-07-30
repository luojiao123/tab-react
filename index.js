import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Title from './title'
import Content from './content'
require('./tabCss.css') 
 
let tabJson={
	topValue:['tab1','tab2','tab3'],
	bottomValue:['tabl1-contxt','tabl2-contxt','tabl3-contxt']
} 
class Tab extends Component {
	constructor() {
		super();
		this.state = {
			index:0
		}			
	}
	change(v){
		this.setState({
			index:v
		})
	}
    render() {
        return (<div className="outBox">
			<Title topVal={this.props.val.topValue} index={this.state.index} change={this.change.bind(this)} />
			<Content bottomVal={this.props.val} index={this.state.index} />
		</div>)
    }
}
ReactDOM.render(<Tab val={tabJson}/>,document.getElementById('app'));
 
