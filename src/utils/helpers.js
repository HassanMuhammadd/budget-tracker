export const formatDateString = (dateString) => {
	const date = new Date(dateString).toDateString();
	const formattedDate = date.toLocaleString().replace(' ',', ');
	return formattedDate;
};
export const formatSmallerDate = (dateString) =>{

	const date = new Date(dateString);
	return date.getDate()  + '/' + (date.getMonth()+1);
}

export const formatNumber = (num)=>{

	return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
}

export const  countOccurrences = (arr)=> {
	var countMap = {};

	for (var i = 0; i < arr.length; i++) {
	var element = arr[i];

		if (!countMap[element]) {
			countMap[element] = 1;
		} else {
			countMap[element]++;
		}
	}
	return countMap;
}
