import React from 'react'
import Dropdown from './Dropdown'
import {useItems} from '../../contexts/ItemsContext';

export default function SummaryControls({handleDrop, dropOpen}) {
	const {filterOption,handleFilterOption} = useItems();

	return (
		<div className="d-flex flex-row justify-content-between align-items-center py-3">
			<h5 className='my-4 fw-bold text-dark'>Transactions</h5>
			<div className="dropDownHolder d-flex flex-row">
				{filterOption!=='' &&<button className='text-white btn button filterButton reset rounded-0' onClick={()=>handleFilterOption('')}>Reset Filter</button>}
				<button className='filterButton rounded-0 btn button primaryBg text-dark fw-bold' onClick={handleDrop}>Filter by Category ↓ </button>
				{dropOpen && <Dropdown handleDrop={handleDrop}/>}
			</div>
		</div>
	)
}
