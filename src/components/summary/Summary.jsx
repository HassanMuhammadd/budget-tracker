import React, {useEffect, useState} from 'react';
import SummaryHeader from './SummaryHeader';
import Row from '../form/Row';
import {useItems} from '../../contexts/ItemsContext';
import SummaryControls from './SummaryControls';


export default function Summary() {
	const {items,filterOption} = useItems();

	const [dropOpen,setDropOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	function handleDrop(){
		setDropOpen(!dropOpen);
	}

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	let filteredItems = items;
	if(filterOption!=='')
		filteredItems = items.filter((item)=>item.category === filterOption)


	return (
		<main className='mainPage p-md-5 d-flex justify-content-center overflowControl  pt-5  '>
			<div className='text-white w-75'>
				<SummaryHeader />
				<SummaryControls handleDrop={handleDrop} dropOpen={dropOpen}/>

			<div className="table-responsive">
				<table className="table table-striped ">
					<thead>
						<tr>
							{windowWidth >=576 &&<th scope="col rowText">Date</th>}
							<th scope="col rowText">Category</th>
							<th scope="col rowText">Amount</th>
							<th scope="col rowText"></th>
						</tr>
					</thead>
					<tbody>
						{filteredItems.map((item) => <Row item={item} key={item.id}/> )}
					</tbody>
				</table>
			</div>
			</div>
		</main>

	);
}
