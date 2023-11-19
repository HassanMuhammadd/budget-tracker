import React from 'react'
import {useItems} from '../../contexts/ItemsContext';
import {formatNumber} from '../../utils/helpers';

export default function SummaryHeader() {
	const {balance, income, expenses} = useItems();
  return (
	<header className="d-flex flex-row justify-content-between text-dark w-100 mt-4 summaryHeader p-3">
					<div>
						<span className='text-dark '>Balance</span >
						<h5 className={`mt-1 ${balance<0?'text-danger':'text-success'}`}>{formatNumber(balance)}</h5>
					</div>

					<div className='d-flex flex-row gap-3'>
						<div>
							<span className='text-dark'>Income</span >
							<h5 className='mt-1 text-success opacity-75'>{formatNumber(income)}</h5>
						</div>
						<div>
							<span className='text-dark'>Expenses</span >
							<h5 className='mt-1 text-danger opacity-75'>{formatNumber(expenses)}</h5>
						</div>
					</div>
			</header>
  )
}
