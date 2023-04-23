import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
    useEffect,
    useState
} from 'react'

import {
    getVentasByDate
} from '../../../services/actions'
import {
    useDispatch,
    useSelector
} from 'react-redux'

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    options: {
        plugins: {
          legend: {
            display: false
          }
        }
      }
}

const Cards = ({time,objetivo} : any) => {

    const dispatch = useDispatch()




    const [datos, setDatos] = useState([])

    useEffect(() => {

        getVentasByDate(time).then(res => {
            setDatos(res)
        })

    },[])


    //@ts-ignore
    const gains = datos && datos?.reduce((a,b) => a + b.total, 0)

    let porcentaje = (gains * 100) / objetivo

    const data = {
        labels: [''],
        datasets: [
        {
            data:  [porcentaje, 100 - porcentaje],
            backgroundColor: [
                'rgba(71, 91, 232, 1)',
                'rgba(228, 232, 239, 1)',
            ],
            borderWidth: 0,
        },
        ],
    };

    return (
        <div style={{
            backgroundColor: 'rgba(46, 46, 72, 1)',
            width: '25%',
            height: '115px',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '.8rem',
            fontFamily: 'monospace',
        }}>
            
            <div style={{
                wordSpacing: '1px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
            }}>
                
                <h4>Ventas por {time}</h4>
                <h2>$ {gains} ARS</h2>
                <p>Realizaste {datos?.length} ventas</p>

            </div>


            <div style={{
                width: '58px',
                height: '58px'
            }}>

                {/*graph*/}

                <Doughnut data={data} options={options.options} />

            </div>

        </div>
    )
}

export default Cards