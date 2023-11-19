import React from 'react'
import {Bar} from 'react-chartjs-2'



export default function BarChart({data,options}) {
  return (
	  <div className="col-8 col-md-4 barChart">
          <Bar data={data} options={options}/>
    </div>
  )
}
