import React, { Component } from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui/List';
import DeleteCheckbox from './deleteCheckbox';
import EditCampaign from './editCampaign';
import DeleteCampaign from './deleteCampaign';
import ItemListHeader from './itemListHeader';
import Item from './item';
import ActionBtn from './actionBtn';
import { deleteCampaign, checkboxAction } from '../../actions/dashboard';

class ItemList extends Component{
    constructor(){
        super();
        this.state = {
            showEdit : false,
            showDelete : false,
            selectedCampaign : null
        }
    }
    componentWillReceiveProps(){
        this.setState({showEdit : false, showDelete: false});
    }
    editCampaignName = data => this.setState({showEdit:true, selectedCampaign : data});
    closeEdit = () => this.setState({showEdit : false});
    handleDelete = () =>this.props.deleteCampaign([this.state.selectedCampaign.id]);
    deleteSingleCampaign = data => this.setState({showDelete:true, selectedCampaign : data});
    closeDelete = () => this.setState({showDelete : false});
    render(){
        const {list, showBulkDelete} = this.props;
        const {showEdit, selectedCampaign, showDelete} = this.state;
        return(
            <div>
                <ItemListHeader showBulkDelete={showBulkDelete} />
                <List style={{padding:'0 20px'}}>
                    {
                        list.map((data,index) => {
                            return (
                                <ListItem
                                    key={'project'+data.id+index}
                                    leftCheckbox={
                                        showBulkDelete ?
                                            <DeleteCheckbox id={data.id} />
                                        : null
                                    }
                                    primaryText={<Item data={data} />}
                                    rightIconButton={
                                        showBulkDelete ?
                                            null
                                        :
                                            <ActionBtn
                                                data={data}
                                                editCampaignName={this.editCampaignName}
                                                deleteSingleCampaign={this.deleteSingleCampaign} />
                                    }
                                    className="item"
                                    innerDivStyle={{padding:'15px 20px'}} />
                            )
                        })
                    }
                </List>
                {
                    showEdit ?
                        <EditCampaign
                            data={selectedCampaign}
                            closeEdit={this.closeEdit} />
                    : null
                }
                {
                    showDelete ?
                        <DeleteCampaign
                            data={selectedCampaign}
                            handleDelete={this.handleDelete}
                            closeDelete={this.closeDelete} />
                    : null
                }
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        showBulkDelete : state.dashboard.showBulkDelete
    }
}
export default connect(mapStateToProps, {deleteCampaign, checkboxAction})(ItemList);
