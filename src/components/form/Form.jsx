import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import Input from './Input';
import {useItems} from '../../contexts/ItemsContext';
import {useCloseForm} from '../../hooks/useCloseForm';
import {useNavigate} from "react-router-dom";


const regEx = /^0[0-9].*$/

export default function Form({oldData,handleSetEditing}) {
	const [date, setDate] = useState( new Date());
	const [type,setType] = useState(oldData?.type || 'income');
	const [amount, setAmount] = useState(oldData?.amount || 0);
	const [description, setDescription] = useState(oldData?.description || '');
	const [category, setCategory] = useState(oldData?.category || '');

	const {items,setItems} = useItems();
	const navigate = useNavigate();

	function handleSubmit(e){

		e.preventDefault();
		if(amount<=0 || !amount || regEx.test(amount))
		{
				toast.error("Amount cannot be zero or negative");
				return;
		}
		//editing
		if(oldData)
		{
			const newItems = items.map(element => {
				if(element.id===oldData.id)
				{
					element = {id:element.id,date,type,amount,description,category};
				}
				return element;
			});
			setItems(newItems);
			toast.success("Item Edited");
			handleSetEditing();
			return;
		}

		const data = {
			id:Math.random(),
			date,
			type,
			amount,
			description,
			category
		};

		//Add to local storage
		setItems((prevData) => [...prevData, data]);
		//reset input values
		setDate(new Date());
		setType('income');
		setAmount(0);
		setDescription('');
		setCategory('');
		toast.success("Transaction added");
		navigate('/summary');
	}

	function handleSetAmount(amount){
		setAmount(amount.toLowerCase());
	}
	function handleSetCategory(category){
		setCategory(category.toLowerCase());
	}
	function handleSetDescription(desc){
		setDescription(desc);
	}
	// to close the updating form on clicking outside
	const ref = useCloseForm(handleSetEditing,oldData);

	return (
		<main className={`mainPage p-2 p-md-5 d-flex justify-content-center align-items-center overflowControl hideOverflow py-5 px-4 ${oldData?'overlay':" "}`} ref={ref}>

			<form onSubmit={(e)=>handleSubmit(e)}  className='text-dark  d-flex flex-column gap-4 w-100 w-md-75 w-50 align-items-center'>

				<div className="d-flex flex-column gap-3 text-start justify-content-center align-items-center">
					<label htmlFor='type' className='fw-bold primaryText'>Type</label>

					<div className='d-flex flex-row'>
						<label className='mx-3 d-flex align-items-center'>
							<input type="radio" value="income" className='radioButton' checked={type==='income'}  onChange={(e)=>setType(e.target.value)} />
							Income
						</label>
						<label className='d-flex align-items-center'>
							<input type="radio" value="expense" className='radioButton' checked={type==='expense'}  onChange={(e)=>setType(e.target.value)} />
							Expense
						</label>
					</div>
				</div>
				<Input name="Amount" value={amount} type='number' onChange={handleSetAmount}/>
				<Input name="Category" value={category} type='text' onChange={handleSetCategory}/>

				<div className="d-flex flex-column gap-3  text-start  justify-content-center">
					<label htmlFor='date' className='fw-bold  primaryText'>Date</label>
					<DatePicker
					className='w-100 px-3 py-2 inputStyle'
					id='date'
					required
					selected={date}
					onChange={(date)=>setDate(date)}
					dateFormat='dd/MM/yyyy'/>
				</div>
				<Input name="Description" value={description} type='text' onChange={handleSetDescription}/>

				<button type="submit" className='btn button primaryBg text-white mt-4 px-5 py-3 rounded-2 fw-bold'>Submit</button>
			</form>
	</main>

)
}
