import React from 'react';
import { Line } from 'react-chartjs-2';

import moment from 'moment';
import { userData } from 'features/homePage/util/utils';

import 'chart.js/auto';

 
const Hertrate = () => {
    const options = {
		scales: {
			y: {
				beginAtZero: true,
				suggestedMax: 40 // Customize the maximum value on the y-axis if needed
			}
		}
	};
	const data = {
		labels: userData.activities.map((ele: any) => moment(ele.date).format(' MMMM DD YYYY')),
		datasets: [
			{
				label: 'Heart Rate Average',
				data: userData.activities.map((ele: any) => ele.heart_rate.average),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			},
			{
				label: 'Heart Rate Max',
				data: userData.activities.map((ele: any) => ele.heart_rate.max),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)'
			},
			
		]
	};

    return( 
    <div className='container-dashboard'>
        <Line options={options} data={data} />
    </div>
    );
}



export default Hertrate;