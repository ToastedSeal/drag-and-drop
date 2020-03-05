import React, { Component } from 'react';
import './DropZone.css'


class DropZone extends Component {

    state = {
        hovering: false
    }


    render() { 
        const mainClass = `drop-zone ${ this.props.pos} ${this.state.hovering ? 'dropHovering':''}`;
        return (
            <div className = {mainClass} 
                onDragOver={(e) => this.onDragOver(e)} 
                onDragLeave={(e) => this.setState({hovering:false})}
                onDrop={(e)=>this.onDrop(e)}>
                {this.props.itemList}
            </div>
        );
    }

    onDragOver = (event) => {
        this.setState({hovering:true})
        event.preventDefault();
    }

    onDrop = (e) => {
        this.setState({hovering:false});
        const name = e.dataTransfer.getData("id");
        this.props.doMove(name, this.props.pos, e.pageY);
        this.forceUpdate();
    }
}
 
export default DropZone;