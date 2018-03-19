"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import assign from 'object-assign';

class Escape extends React.Component {
    render = () => {
        this._nodes = this.renderLayer();
        return <noscript ref="from"/>;
    }
    renderLayer = () => {
        var { style, ...props } = this.props;
        style = style || {};
        assign(style, styles.escapeLayer, styles[props.to]);
        return (
            <div style={style} {...props}>
                {this.props.children}
            </div>
        )
    }
    componentDidMount = () => {
        this.escapePoint = this.refs.from.parentNode;
        var layer = document.createElement('div');
        document.body.appendChild(layer);
        this._layer = layer;
        ReactDOM.render(
            this._nodes,
            this._layer);
    }
    componentDidUpdate = () => {
        ReactDOM.render(
            this._nodes,
            this._layer);
    }
    componentWillUnmount = () => {
        this.escapePoint = undefined;
        ReactDOM.unmountComponentAtNode(this._layer);
        this._layer.parentNode.removeChild(this._layer);
        this._layer = null;
    }
    getSize = () => {
        var e = this._layer.firstChild;
        return { width: e.offsetWidth, height: e.offsetHeight };
    }
};

var styles = {
    escapeLayer: {
        position: 'absolute',
        left:0,
        top:0,
        right:0,
        bottom:0,
        zIndex:10001,
        pointerEvents:'none',
        overflow: 'visible',
    },
    viewport: {
        position: 'fixed',
    },
};

module.exports = Escape;
