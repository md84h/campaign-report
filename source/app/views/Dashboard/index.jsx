import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import { getData } from '../../actions/dashboard';
import ItemList from './listItem';
import SearchBar from './searchBar';
import Pagination from './pagination';
import BulkDelete from './bulkDelete';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getData();
    }
    render() {
        let {list, dataAvailable} = this.props;
        return (
            <div className="container">
                <div className="header">Dashboard</div>
                {
                    dataAvailable ?
                        <div>
                            <div className="searchBar">
                                <SearchBar />
                                <BulkDelete />
                            </div>
                            {
                                list.length ?
                                    <div>
                                        <ItemList list={list}/>
                                        <Pagination />
                                    </div>

                                :
                                    <p className="no-result">No Result Found with search keyword!</p>
                            }
                        </div>
                    :
                        <Dialog
                            modal={true}
                            open={true}
                            contentStyle={{width:100}}
                        >
                            <div>
                                <CircularProgress />
                            </div>
                        </Dialog>
                }
            </div>
        );
    }
}
function mapStateToProps(state){
    const {list, dataAvailable} = state.dashboard;
    return {list, dataAvailable};
}
export default connect(mapStateToProps, {getData})(Dashboard);
