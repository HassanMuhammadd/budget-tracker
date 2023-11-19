import React from 'react'
import Sidebar from './Sidebar'
import {Outlet} from 'react-router-dom'

export default function AppLayout() {
  return (
	<div className={`d-flex flex-column flex-sm-row align-items-center w-100 appLayout  main text-white`}>
		<div className='col-12 col-sm-2 sidebarHolder'>
			<Sidebar/>
		</div>
		<div className='col-12 col-sm-10 outletMain  '>
				<Outlet/>
		</div>
	</div>
  )
}
