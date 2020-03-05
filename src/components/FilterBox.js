import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import './FilterBox.css'

export class FilterBox extends Component {
    state = { 

    }

    render() { 
        return (  
            <div className="filter-form">
                <FormGroup row>
                    <FormControlLabel
                        label="Show x"
                        control={
                            <Checkbox
                                color="primary"
                            />
                        }
                    />
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel
                        label="Hide y"
                        control={
                            <Checkbox
                                color="primary"
                            />
                        }
                    />
                </FormGroup>
                <FormGroup row>
                    <FormControlLabel
                        label="do z"
                        control={
                            <Checkbox
                                color="primary"
                            />
                        }
                    />
                </FormGroup>
            </div>
        );
    }
}
 
export default FilterBox;
