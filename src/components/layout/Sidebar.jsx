import React from 'react'
import {NavLink} from 'react-router-dom'
import { IoIosAddCircle } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";



export default function Sidebar() {
  return (
	<div className='d-flex flex-row flex-sm-column justify-content-start align-items-center h-100  sidebar  '>
		<div className=" w-100 ">
				<NavLink className='d-sm-flex d-block justify-content-start ps-3 align-items-center gap-2 py-3 text-white link' to='/form' >
					<IoIosAddCircle size={20} /><span className='sideText'>Add Item</span>
				</NavLink>

				<NavLink className='d-sm-flex d-block justify-content-start ps-3 align-items-center gap-2 py-3 text-white link  ' to="/summary">
					<GrNotes size={20}/><span className='sideText'> Summary</span>
				</NavLink>
				<NavLink className='d-sm-flex d-block justify-content-start ps-3 align-items-center gap-2 py-3 text-white link' to="/charts">
					<FaChartSimple size={20} /><span className='sideText'>Statistics</span>
				</NavLink>

		</div>
	</div>
  )
}
