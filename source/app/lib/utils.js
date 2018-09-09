export function getPaginatedData(list,count){
	return list.slice((count-1)*10, count*10);
}

export function searchData(list,val){
	return list.filter(data => {return data.name.toLowerCase().indexOf(val.toLowerCase()) == 0;});
}

export function editData(list, id, name){
	list[id].name = name;
}

export function deleteData(list, delObj){
	for(let i=0; i<delObj.length; i++){
		delete list[delObj[i]];
	}
}
