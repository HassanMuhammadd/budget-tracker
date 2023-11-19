import 'chart.js/auto'
import React from 'react'
import {useItems} from '../../contexts/ItemsContext';
import {  countOccurrences, formatSmallerDate } from '../../utils/helpers';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';


const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
  },
};
const pieOptions = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
        display: false,
    },
    y: {
        display: false,
    },
  },
}

export default function Charts() {

  const {items,categories} = useItems();
  const income = items.filter((item) => item.type === 'income').sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
  });
  const incomeValue = income.reduce((acc, item) => acc + parseFloat(item.amount), 0);

  const expenses = items.filter((item) => item.type === 'expense').sort(function(a,b){
    return new Date(a.date) - new Date(b.date);
  });
  const expensesValue = expenses.reduce((acc, item) => acc + parseFloat(item.amount), 0);

  const categoriesMap = countOccurrences(items.map((item)=>item.category));

  const barData = {
    labels: ['Income', 'Expenses'],
    datasets: [{
      label: 'Income vs Expenses',
      data: [incomeValue, expensesValue],
      backgroundColor: [
        'rgba(99, 255, 135, 0.2)',
        'rgba(255, 64, 64, 0.2)',

      ],
      borderColor: [
        'rgb(99, 255, 135)',
        'rgb(255, 64, 64)',

      ],
      borderWidth: 0.5,
      barThickness:60,
      barPercentage: 0.3,
    }]
  };

  const lineData = {
    labels: income.map((item)=>formatSmallerDate(item.date)),
    datasets: [{
      label: 'Income Report',
      data: income.map((item)=>item.amount),
      fill: true,
      backgroundColor: 'rgba(137, 188, 220, 0.2)',
      borderColor: 'rgb(31, 140, 203)',
      tension: 0.1
    }]
};


  const pieData = {
    labels: categories.map((category)=>category),
    datasets: [{
      label: 'Categories Report',
      data: categories.map((category)=>categoriesMap[category]),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(78, 235, 54)',
        'rgb(179, 86, 255)',
        'rgb(255, 205, 86)',
        'rgb(78, 235, 54)',
        'rgb(179, 86, 255)'
      ],
    }]
  }

  return (
    <main className='mainPage p-md-5 overflowControl py-5 px-4 '>
      <h5 className="my-5 text-dark text-uppercase text-center summaryHeader statHeader mx-auto py-3 px-2 ">
        Statistics and Charts
      </h5>
      <div className="d-flex flex-column flex-md-row align-items-center gap-4 flex-wrap">
        <BarChart data={barData} options={options}/>
        <PieChart data={pieData} options={pieOptions}/>
        <LineChart data={lineData} options={options}/>
      </div>
    </ main>
  )
}
