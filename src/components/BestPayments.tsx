import LinearProgress from '@mui/material/LinearProgress';
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    useEffect,
} from 'react'
import {
    getTop5Payments
} from '../services/actions'



const BestPayments = () => {

    const dispatch = useDispatch()

    const top5pay = useSelector((state: any) => state?.ventas.top5pay)

    useEffect(() => {

        getTop5Payments().then((res) => {
            dispatch<any>(res)
        })

    },[])

    return (

        <div>

            {
                top5pay && top5pay.length > 0 ? top5pay?.map((item: any, index: any) => {

                    return (
                        <div style={{
                            margin: '1.2rem',
                            fontSize: '.8rem',
                            fontFamily: 'monospace',
                        }}
                        key={index}
                        >
                            <label>{item._id}</label>
                            <LinearProgress color='inherit' variant="determinate" value={item.count * 2} style={{
                                height: '10px',
                                borderRadius: '.5rem',
                                marginTop: '.5rem',
                                color: 'rgba(71, 91, 232, 1)'
                            }} />
                        </div>
                    )
                    
                }) : (
                    <div style={{
                        margin: '1.2rem',
                        fontSize: '.8rem',
                        fontFamily: 'monospace',
                        textAlign: 'center'
                    }}
                    >
                        <label>Aun no hay metodos registrados</label>
                    </div>
                )
            }

        </div>

    )
}

export default BestPayments