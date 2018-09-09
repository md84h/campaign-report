import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

export default class ActionBtn extends Component{
    render(){
        return(
            <div style={{float:'right'}}>
                <IconButton tooltip="Edit Campaign Name" tooltipPosition="top-center" onClick={e=>{this.props.editCampaignName(this.props.data)}}>
                    <FontIcon className="material-icons" color='#827e7e'>edit</FontIcon>
                </IconButton>
                <IconButton tooltip="Delete Campaign" tooltipPosition="top-center" onClick={e=>{this.props.deleteSingleCampaign(this.props.data)}}>
                    <FontIcon className="material-icons" color='#827e7e'>delete</FontIcon>
                </IconButton>
            </div>
        )
    }
}
