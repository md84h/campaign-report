import { GET_DATA, SEARCH_DATA, EDIT_CAMPAIGN, DELETE_CAMPAIGN, CHECKBOX_ACTION, CLEAR_BULK_DELETE, PAGINATE, SHOW_BULK_DELETE} from '../lib/constant';

var customData = require('../lib/campaign.json');

export function getData(){
    return function(dispatch){
        dispatch({type:GET_DATA, payload:customData});
    }
}

export function searchData(keyword){
    return function(dispatch){
        dispatch({type:SEARCH_DATA, payload:keyword});
    }
}

export function editCampaign(id,name){
    return function(dispatch){
        dispatch({type:EDIT_CAMPAIGN, payload:{id,name}});
    }
}

export function deleteCampaign(id){
    return function(dispatch){
        dispatch({type:DELETE_CAMPAIGN, payload:id});
    }
}

export function checkboxAction(id){
    return function(dispatch){
        dispatch({type:CHECKBOX_ACTION, payload:id});
    }
}

export function clearBulkDelete(){
    return function(dispatch){
        dispatch({type:CLEAR_BULK_DELETE});
    }
}

export function paginate(pageCount){
    return function(dispatch){
        dispatch({type:PAGINATE, payload:pageCount});
    }
}

export function openBulkDelete(){
    return function(dispatch){
        dispatch({type:SHOW_BULK_DELETE});
    }
}
