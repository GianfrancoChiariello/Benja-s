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

            { top5.length > 0 &&
                top5 ? top5?.map((item: any, index: any) => {

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
                        <label>Aun no hay ventas</label>
                    </div>
                )
            }

        </div>

    )
}

export default BestItems