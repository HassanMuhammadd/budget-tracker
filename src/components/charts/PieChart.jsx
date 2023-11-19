import React from 'react'
import {Pie} from 'react-chartjs-2'

export default function PieChart({data,pieOptions}) {
	return (
		<div className="col-8 col-md-5 barChart text-dark pb-5 d-flex flex-column align-items-center">
          <Pie data={data} options={pieOptions}/>
          <p className='text-center opacity-75 mt-2'>Categories Report</p>
        </div>
	)
}
