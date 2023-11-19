import React from 'react'
import {useItems} from '../../contexts/ItemsContext'

export default function Dropdown({handleDrop}) {

	const {handleFilterOption,categories} = useItems();

	return (
	<div className='dropdown text-dark w-100 text-center '>
		{categories.map((category)=>
		<button
			className='dropdownItem d-block w-100 dropdownBtn'
			key ={category}
			onClick={()=>{
				handleFilterOption(category);
				handleDrop();
				}
			}>{category}</button>)}
	</div>
)
}
