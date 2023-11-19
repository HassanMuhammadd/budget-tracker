import {createContext, useContext, useState} from "react";
import useLocalStorage from '../hooks/useLocalStorage';
import toast from "react-hot-toast";


const ItemsContext = createContext();

export default function ItemsProvider({children}){
	let [items,setItems] = useLocalStorage('items',[]);
	const [filterOption,setFilterOption] = useState('');
	items.sort((a,b)=>{
		return new Date(b.date) - new Date(a.date);
	})
	//return unique entries in categories
	let categories = items.map((item)=>item.category).reduce((unique, category) => {
		return unique.includes(category) ? unique : [...unique, category];
	}, []);

	const handleFilterOption = (filter)=>{
		setFilterOption(filter);
	}

	const income = items.reduce((acc,item)=>{
		if(item.type === 'income'){
			return acc+parseFloat(item.amount)
		}
		return acc
	},0);
	const expenses = items.reduce((acc,item)=>{
		if(item.type === 'expense'){
			return acc+parseFloat(item.amount)
		}
		return acc
	},0)

	const balance = income - expenses;

	function deleteItem(id){
		const i = items.filter((item)=>item.id!==id);
		setItems(i);
		toast.success("Item deleted")
	}

	return <ItemsContext.Provider value={{
		items,
		setItems,
		balance,
		income,
		expenses,
		deleteItem,
		filterOption,
		handleFilterOption,
		categories
	}}>
		{children}
	</ItemsContext.Provider>
}

export function useItems(){
	const items = useContext(ItemsContext);
	if(items === undefined){
		throw new Error('useItems must be used within an ItemsProvider')
	}
	return items
}