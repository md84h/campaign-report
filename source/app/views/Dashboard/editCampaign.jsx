import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { editCampaign } from '../../actions/dashboard';

class EditCampaign extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : props.data.name
        }
    }
    render(){
        let {closeEdit, handleEdit, data} = this.props;
        let {name} = this.state;
        return(
            <Dialog
                modal={true}
                open={true}
                contentStyle={{width:250}}
            >
                <div>
                    <TextField
                        style={{marginLeft:20,width:'90%'}}
                        value={name}
                        onChange={(e)=>{this.setState({name:e.target.value})}}
                        autoFocus
                        floatingLabelText={"Edit Campaign Name"} />
                    <div>
                        <FlatButton
                            label="CANCEL"
                            onClick={e=>{closeEdit()}} />
                        <FlatButton
                            label="Save"
                            secondary={true}
                            onClick={e => {this.props.editCampaign(data.id,name)}} />
                    </div>
                </div>
            </Dialog>
        )
    }
}
export default connect(()=>({}), {editCampaign})(EditCampaign);
