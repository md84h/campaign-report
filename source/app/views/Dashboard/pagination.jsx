import React, {Component} from 'react';
import { connect } from 'react-redux';
import { paginate } from '../../actions/dashboard';

class Pagination extends Component {
    paginationHandler = pageCount => this.props.paginate(pageCount);
    renderPagination = () =>{
        const {activeCount, paginationCount} = this.props;
        let el = [],
            delta = 2,
            left = activeCount - delta,
            right = activeCount + delta + 1,
            j;
        for (let i=1; i<=paginationCount; i++){
            if (i==1 || i==paginationCount || i>=left && i<right){
                if(j){
                    if(i-j == 2){
                        el.push(<div className={activeCount == j+1 ? "active" : ""} key={"pagiation"+(j+1)} onClick={e=>this.paginationHandler(j+1)}>{j+1}</div>)
                    }else if(i - j !== 1){
                        el.push(<div key={"pagiation"+(j+1)}>..</div>)
                    }
                }
                el.push(<div className={activeCount == i ? "active" : ""} key={"pagiation"+i} onClick={e=>this.paginationHandler(i)}>{i}</div>)
                j=i;
            }
        }
        return el;
    }
    render(){
        const {paginationCount} = this.props;
        return(
            <div>
                {
                    paginationCount > 1 ?
                        <div className="pagination">
                            {this.renderPagination()}
                        </div>
                    : null
                }
            </div>

        )
    }
}

function mapStateToProps(state){
    const { paginationCount, activeCount } = state.dashboard;
    return { paginationCount, activeCount };
}

export default connect(mapStateToProps, {paginate})(Pagination);
