import React, {Component} from 'react';

export default class Item extends Component {
    render(){
        const {data} = this.props;
        return(
            <div style={{width:'90%',display:'inline-block',padding:'10px 0'}}>
                <p>{data.name}</p>
                <p>{data.type}</p>
                <p>{data.lastSaved}</p>
            </div>
        )
    }
}
