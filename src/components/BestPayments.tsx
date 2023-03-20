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
} from '../apis/actions'



const BestPayments = () => {

    const dispatch = useDispatch()

    const top5pay = useSelector((state: any) => state?.top5pay)

    useEffect(() => {

        getTop5Payments().then((res) => {
            dispatch<any>(res)
        })

    },[])

    return (

        <div>

            {
                top5pay && top5pay?.map((item: any) => {

                    return (
                        <div style={{
                            margin: '1.2rem',
                            fontSize: '.8rem',
                            fontFamily: 'monospace',
                        }}>
                            <label>{item._id}</label>
                            <LinearProgress color='inherit' variant="determinate" value={item.count * 2} style={{
                                height: '10px',
                                borderRadius: '.5rem',
                                marginTop: '.5rem',
                                color: 'rgba(71, 91, 232, 1)'
                            }} />
                        </div>
                    )
                    
                })
            }

        </div>

    )
}

export default BestPayments