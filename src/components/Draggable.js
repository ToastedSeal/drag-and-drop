import React, { Component } from 'react';
import './Draggable.css'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class DraggableBox extends Component {

    render() { 
        return ( 
            <div className = "draggable-box" id={this.props.name} draggable onDragStart = {(e) => this.onDragStart(e, this.props.name) } >
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
                        <Typography>{this.props.name}</Typography>
                    </ExpansionPanelSummary>
                    {this.props.children}
                </ExpansionPanel>
            </div>
         );
    }

    onDragStart = (e, name) => {
        e.dataTransfer.setData("id", name)
    }

}
 
export default DraggableBox;