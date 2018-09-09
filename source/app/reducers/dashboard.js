import { GET_DATA, SEARCH_DATA, EDIT_CAMPAIGN, DELETE_CAMPAIGN, CHECKBOX_ACTION, CLEAR_BULK_DELETE, PAGINATE, SHOW_BULK_DELETE } from '../lib/constant';
import {getPaginatedData, searchData, editData, deleteData} from '../lib/utils';

const initialState = {originalList : {}, list : {}, filterList : {}, dataAvailable : false, paginationCount : 1, activeCount : 1, deleteList:[], autoKey : '', showBulkDelete : false};

export default function(state = initialState , action ) {
	let originalList  = JSON.parse(JSON.stringify(state.originalList));
	switch(action.type){
		case GET_DATA :
			let list = Object.values(action.payload);
			return {...state, list : getPaginatedData(list,1), originalList : action.payload, filterList : list ,dataAvailable : list.length, paginationCount : Math.ceil(list.length/3)};

		case SEARCH_DATA :
			let searchList = action.payload ? searchData(Object.values(originalList),action.payload) : Object.values(originalList);
			return {...state, list:getPaginatedData(searchList,1), filterList : searchList, activeCount : 1, paginationCount : Math.ceil(searchList.length/3), autoKey : action.payload};

		case EDIT_CAMPAIGN :
			editData(originalList, action.payload.id, action.payload.name);
			let eidtList = state.autoKey ? searchData(Object.values(originalList),state.autoKey) : Object.values(originalList);
			return {...state, list:getPaginatedData(eidtList,state.activeCount), originalList, filterList : eidtList};

		case DELETE_CAMPAIGN :
			deleteData(originalList, action.payload ? action.payload : state.deleteList);
			let deletedList = state.autoKey ? searchData(Object.values(originalList),state.autoKey) : Object.values(originalList);
			let paginationCount = Math.ceil(deletedList.length/3);
			let activeCount = state.activeCount;
			if(paginationCount < activeCount){
				activeCount = paginationCount;
			}
			return {...state, list:getPaginatedData(deletedList,activeCount), originalList, filterList : deletedList, paginationCount, activeCount, showBulkDelete : false};

		case CHECKBOX_ACTION :
			let deleteList = JSON.parse(JSON.stringify(state.deleteList));
	        let idIndex = deleteList.indexOf(action.payload);
	        if(idIndex == -1){
	            deleteList.push(action.payload)
	        } else{
	            deleteList.splice(idIndex,1);
	        }
			return {...state, deleteList};

		case CLEAR_BULK_DELETE :
			return {...state, deleteList:[], showBulkDelete : false};

		case PAGINATE :
			let count = action.payload;
			return {...state, activeCount : count, list : getPaginatedData(state.filterList,count)};

		case SHOW_BULK_DELETE :
			return {...state, showBulkDelete : true};

        default :
		     return state;
    }
}
