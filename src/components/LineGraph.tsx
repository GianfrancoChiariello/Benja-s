import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

import {
    useState,
    useEffect 
} from 'react'

import {
    useSelector,
    useDispatch
} from 'react-redux'

import {
    getAllVentas
} from '../apis/actions'


const LineGraph = () => {

    const dispatch = useDispatch()
    const ventas = useSelector((state: any) => state.ventas)

    useEffect(() => {
        getAllVentas().then((res) => {
            dispatch<any>(res)
        })
    },[])
    

     const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
      };
      
      
      const labels = ventas?.slice(ventas > 15 ? ventas.length - 10 : ventas.length - 5).map((item: any) => item.fecha.slice(0, 10))
      
       const data = {
        labels,
        datasets: [
          {
            fill: true,
            data: ventas?.slice(ventas > 15 ? ventas.length - 10 : ventas.length - 5).map((item : any) => item.total),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };


    return <Line options={options} data={data} />
}

export default LineGraph