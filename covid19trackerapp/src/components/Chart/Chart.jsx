import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';


const Chart = ()=> {
    const [dailyData, setDailyData] = useState([]);
    console.log('#############');
    useEffect(() => {
        const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
        setDailyData(initialDailyData);
    };
    console.log(dailyData);
    fetchMyAPI();
    });

    const lineChart = (
        dailyData.length
        ? (
            <Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor : '#3333ff',
                    fill:true,
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor : 'red',
                    borderColor: 'rgba(255,0,0,0.5)',
                    fill:true,
                }]
            }}
            />) : null
    );

    return (
        //<h1>Chart</h1>
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;