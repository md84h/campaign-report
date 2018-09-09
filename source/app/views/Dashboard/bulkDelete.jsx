import React, {Component} from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { deleteCampaign, clearBulkDelete, openBulkDelete } from '../../actions/dashboard';

class BulkDelete extends Component{
    render(){
        return(
            <div style={{float:'right'}}>
                {
                    this.props.showBulkDelete ?
                        <div>
                            <RaisedButton
                                label={
                                    <p style={{display:'inline-block',verticalAlign:'middle'}}>
                                        <FontIcon className="material-icons" color='white' style={{verticalAlign:'inherit',marginRight:5}}>delete</FontIcon>
                                        Confirm Delete
                                    </p>
                                }
                                primary={true}
                                style={{marginRight:10}}
                                labelStyle={{textTransform: 'none',verticalAlign:'middle'}}
                                onClick={e=>{this.props.deleteCampaign()}} />
                            <RaisedButton
                                label={
                                    <p style={{display:'inline-block',verticalAlign:'middle'}}>
                                        <FontIcon className="material-icons" color='white' style={{verticalAlign:'inherit',marginRight:5}}>clear</FontIcon>
                                        Cancel Bulk Delete
                                    </p>
                                }
                                primary={true}
                                labelStyle={{textTransform: 'none',verticalAlign:'middle'}}
                                onClick={e=>{this.props.clearBulkDelete()}} />
                        </div>
                    :
                        <RaisedButton
                            label={
                                <p style={{display:'inline-block',verticalAlign:'middle'}}>
                                    <FontIcon className="material-icons" color='white' style={{verticalAlign:'inherit',marginRight:5}}>delete</FontIcon>
                                    Bulk Delete
                                </p>
                            }
                            primary={true}
                            labelStyle={{textTransform: 'none',verticalAlign:'middle'}}
                            onClick={e=>{this.props.openBulkDelete()}} />
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {showBulkDelete : state.dashboard.showBulkDelete};
}

export default connect(mapStateToProps, {deleteCampaign, clearBulkDelete, openBulkDelete})(BulkDelete);
