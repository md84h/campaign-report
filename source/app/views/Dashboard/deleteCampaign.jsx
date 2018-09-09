import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class DeleteCampaign extends Component {
    render(){
        let {closeDelete, data, handleDelete} = this.props;
        return(
            <Dialog
                modal={true}
                open={true}
                contentStyle={{width:250}}
            >
                <div>
                    <p style={{marginBottom:15,color:'#333'}}>{"Delete "+ data.name +" Campaign?"}</p>
                    <div>
                        <FlatButton
                            label="CANCEL"
                            onClick={e => {closeDelete()}} />
                        <FlatButton
                            label="DELETE"
                            secondary={true}
                            onClick={e => {handleDelete()}} />
                    </div>
                </div>
            </Dialog>
        )
    }
}
