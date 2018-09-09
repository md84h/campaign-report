import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { checkboxAction } from '../../actions/dashboard';

class  DeleteCheckbox extends Component{
    render(){
        const {deleteList, id} = this.props;
        return(
            <Checkbox
                style={{display:'inline-block',width:'auto',verticalAlign:'middle'}}
                checked={deleteList.indexOf(id) > -1}
                onCheck={e=>{this.props.checkboxAction(id)}} />
        )
    }
}

function mapStateToProps(state){
    return{
        deleteList : state.dashboard.deleteList
    }
}
export default connect(mapStateToProps, {checkboxAction})(DeleteCheckbox);
