import React, { Component } from 'react';
import { connect } from 'react-redux';
import throttle from 'lodash.throttle';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { searchData } from '../../actions/dashboard';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            autoCompleteValue : ''
        }
        this.throttleInput = throttle(this.throttleInput.bind(this),300);
    }
    removeAutoCompleteValue = () =>{
        this.props.searchData('');
        this.setState({autoCompleteValue:''});
    }
    autoComplete = (e) => {
        this.setState({autoCompleteValue:e.target.value});
        this.throttleInput(e.target.value);
    }
    throttleInput = (val) => this.props.searchData(val);
    render(){
        const {autoCompleteValue} = this.state;
        return(
            <div style={{display: 'initial'}}>
                <TextField
                        floatingLabelText={"Search Campaign"}
                        style={{width:'50%',verticalAlign:'middle',marginTop:'-15px'}}
                        value={autoCompleteValue}
                        onChange={this.autoComplete.bind(this)} />
                {
                    autoCompleteValue ?
                        <IconButton tooltip="Clear Search" tooltipPosition="top-center" style={{padding:0,display:'inline-block',verticalAlign:'bottom',marginBottom:10,width:30,height:20}} onTouchTap={e=>{e.preventDefault();this.removeAutoCompleteValue()}}>
                            <FontIcon className="material-icons">highlight_off</FontIcon>
                        </IconButton>
                    : null
                }
            </div>
        )
    }
}

export default connect(()=>({}), {searchData})(SearchBar);
