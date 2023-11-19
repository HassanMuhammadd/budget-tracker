import React from 'react'
import {Line} from 'react-chartjs-2'

export default function LineChart({data,options}) {
  return (
		<div className="col-12 barChart">
          <Line data={data} options={options}/>
        </div>
  )
}
