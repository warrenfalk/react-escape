"use strict";
var React = require('react');

var Escape = require('./react-escape');

var Inner = React.createClass({
    render: function() {
        return <div style={{pointerEvents:'auto'}} onClick={()=>{this.setState({count:this.state.count+1})}} >
            Inner (color: {this.context.color}) {this.props.children} ({this.state.count})
        </div>
    },
    contextTypes: {
        color: React.PropTypes.string,
    },
    getInitialState: function() {
        return {count: 0};
    },
});

var Outer = React.createClass({
    render: function() {
        return <div>
            Dev from react-escape
            <Inner>{this.state.count}</Inner>
            <div style={{height:1000,fontSize:60}}>Scroll Me</div>
            {((this.state.count & 3) != 3) &&
                <Escape to="viewport" style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
                    Escaped here
                    <div>
                        <Inner>{this.state.count}</Inner>
                    </div>
                </Escape>
            }
            <div style={{position:'fixed',top:0,right:0}} onClick={()=>this.setState({count:this.state.count+1})}>Click</div>
        </div>
    },
    childContextTypes: {
        color: React.PropTypes.string,
    },
    getInitialState: function() {
        return {count: 0};
    },
    getChildContext: function() {
        return {color: "purple"};
    },
});

module.exports = <Outer />
