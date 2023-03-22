import {
    useSelector
} from 'react-redux'
import Link from 'next/link'
import {
    useRouter
} from 'next/router'

import {
    AccordionDetails,
    Typography,
    AccordionSummary,
    Accordion
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Maquet = ({children, title} : any) => {

    const router = useRouter()
    const  url  = router.asPath

    const infoUser = useSelector((state : any) => state.userLogin.payload)


    return (

        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(56, 56, 84, 1)'
        }}>

            
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'row'
            }}>

                <div style={{
                    width: '15rem',
                    height: '100vh',
                    backgroundColor: 'rgba(46, 46, 72, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1rem'
                }}>
                    <div style={{
                        width: '100%'
                    }}>

                        <div style={{
                            fontSize: '1.35rem',
                            fontFamily: 'monospace',
                        }}>
                            BENJA'S
                        </div>
                        
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingTop: '2rem'
                        }}>

                            <div style={{
                                            backgroundColor: "/dashboard" == url ? 'rgba(71, 91, 232, 1)' : 'rgba(0, 0, 0, 0)',
                                            borderRadius: '.6rem',
                                            padding: '.2rem 1rem'
                                        }}>
                                            <Link href="/dashboard">
                                                Dashboard
                                            </Link>
                            </div>

                            <Accordion sx={{
                                backgroundColor: 'transparent',
                                boxShadow: '0',
                            }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                    <Typography sx={{
                                        fontFamily: 'monospace',
                                        color: 'white',
                                        fontSize: '1.2rem',
                                    }}>Productos</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='tp' onClick={() => router.push('/productos')}>
                                                Stock
                                        </Typography>
                                    </AccordionDetails>
                                    <AccordionDetails>
                                        <Typography className='tp'  onClick={() => router.push('/nuevoProducto')}>
                                                Nuevo
                                        </Typography>
                                    </AccordionDetails>
                                    <AccordionDetails>
                                        <Typography className='tp'  onClick={() => router.push('/productos')}>
                                                Actualizar
                                        </Typography>
                                    </AccordionDetails>
                            </Accordion>

                            <div style={{
                                            backgroundColor: "ventas" == url ? 'rgba(71, 91, 232, 1)' : 'rgba(0, 0, 0, 0)',
                                            borderRadius: '.6rem',
                                            padding: '.2rem 1rem'
                                        }}>
                                            <Link href="/ventas">
                                                Ventas
                                            </Link>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h4>Settings</h4>
                        <h4>Logout</h4>
                    </div>
                </div>

                <div style={{
                    width: '100%',
                    height: '90%'
                }}>

                <div style={{
                    padding: '.8rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }}>
                        <div style={{
                            fontSize: '1.3rem',
                            fontFamily: 'monospace'
                        }}>
                            {title}
                        </div>
                        <div style={{
                            display: 'flex',
                            borderRadius: '20rem',
                            overflow: 'hidden',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img src={infoUser?.picture} width="30px" />
                        </div>
                    </div>

                    <div style={{
                        margin: '.5rem 1rem',
                        height: '99%',
                        overflow: 'auto',
                        borderRadius: '.2rem',

                    }}>
                        {children}
                    </div>
                </div>

            </div>
            

        </div>

    )
}

export default Maquet