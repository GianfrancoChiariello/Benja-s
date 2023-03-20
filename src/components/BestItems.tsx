import LinearProgress from '@mui/material/LinearProgress';
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    useEffect,
    useState
} from 'react'
import {
    getTop5
} from '../apis/actions'



const BestItems = () => {

    const dispatch = useDispatch()

    const top5 = useSelector((state: any) => state?.top5)

    useEffect(() => {

        getTop5().then((res) => {
            dispatch<any>(res)
        })

    },[])

    return (

        <div>

            {
                top5 && top5?.map((item: any) => {

                    return (
                        <div style={{
                            margin: '1.2rem',
                            fontSize: '.8rem',
                            fontFamily: 'monospace',
                        }}>
                            <label>{item._id}</label>
                            <LinearProgress color='inherit' variant="determinate" value={item.count} style={{
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

export default BestItems