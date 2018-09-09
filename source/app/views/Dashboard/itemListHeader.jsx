import React, {Component} from 'react';

export default class ItemListHeader extends Component{
    render(){
        return(
            <div className="info">
                <p>Campaign Name</p>
                <p>Type</p>
                <p>Last Saved</p>
                {
                    this.props.showBulkDelete ?
                        null
                    :
                        <p style={{textAlign:'right',paddingRight:70}}>Actions</p>
                }
            </div>
        )
    }
}
