import Maquet from '../../components/Maquet'
import Cards from './components/Cards'
import LineGraph from './components/LineGraph'
import BestItems from './components/BestItems'
import BestPayments from './components/BestPayments'
import TableVentas from './components/TableVentas'
import {
    useState
} from 'react'


const Dashboard = () => {

    const [viewer, setViewer] = useState(true)

    return (
        <Maquet title="Dashboard">
            <div style={{
                display: 'flex',
                gap: '.5rem'
            }}>
                <Cards time="dia" objetivo={5000}/>
                <Cards time="semana" objetivo={35000}/>
                <Cards time="mes" objetivo={150000}/>
                <Cards time="año" objetivo={1500000}/>
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                gap: '.5rem'
            }}>

                <div style={{
                    width: '65%',
                    height: '300px',
                    marginTop: '.5rem',
                    backgroundColor: 'rgba(46, 46, 72, 1)',
                    borderRadius: '.8rem',
                    padding: '.5rem'
                }}>

                    <LineGraph/>

                </div>

                <div style={{
                    width: '35%',
                    marginTop: '.5rem',
                    padding: '.7rem',
                    backgroundColor: 'rgba(46, 46, 72, 1)',
                    borderRadius: '.8rem',
                }}>

                    <div style={{
                        display: 'flex',
                        justifyContent:'center',
                        gap: '.5rem'
                    }}>
                        <h4 style={{
                            fontFamily: 'monospace',
                            textAlign: 'center',
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            opacity: '.8'
                        }}
                        onClick={() => setViewer(true)}
                        >Mas vendidos</h4>
                        <span>|</span>
                        <h4 style={{
                            fontFamily: 'monospace',
                            textAlign: 'center',
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            opacity: '.8'
                        }}
                        onClick={() => setViewer(false)}
                        >Mas usados </h4>
                    </div>


                    {
                        viewer ? (
                            <BestItems/>
                        ) : (
                            <BestPayments/>
                        )
                    }

                </div>

            </div>

            <div style={{
                width: '100%',
                height: '29%',
                marginTop: '.5rem',                    
                backgroundColor: 'rgba(46, 46, 72, 1)',
                borderRadius: '.8rem',
            }}>

                <TableVentas/>

            </div>


        </Maquet>
    )

}

export default Dashboard