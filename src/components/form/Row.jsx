import React, { useState} from 'react'
import {formatDateString, formatNumber} from '../../utils/helpers'
import Form from './Form';
import {useItems} from '../../contexts/ItemsContext';
import {createPortal} from 'react-dom';

export default function Row({item}) {
	const [editing,setEditing] = useState(false);
	const {deleteItem} = useItems();

return (
	<>
	<tr className='tableRow' onClick={()=>setEditing((e)=>!e)}>
			<td className='rowText d-none d-sm-table-cell'>{formatDateString(item.date)}</td>
			<td className='rowText'>{item.category}</td>
			<td className={`rowText fw-bold ${item.type==='expense'?'text-danger':'text-success'} `}>{item.type==='expense'? '-':'+'}{formatNumber(item.amount)}</td>
			<td>
				<div className='d-flex justify-content-end align-content-center gap-2 '>
				<button className=' btn btn-danger  closeBtn d-flex flex-row justify-content-center align-items-center' onClick={()=>deleteItem(item.id)}>X</button>
				</div>
			</td>
	</tr>
	{editing &&
	<tr>
		{
			createPortal(<Form oldData={item} handleSetEditing={()=>setEditing(false)}/>,document.body)
		}
	</tr>
	}
	</>
)
}
