import { useDispatch } from "react-redux"
import {
    useEffect,
} from "react"
import { useSelector } from "react-redux"
import { GoogleLogin } from '@react-oauth/google';
import {
    authGmail,
    singIn,
    createAccount
} from '../services/actions'
import { useState } from "react";
import {useRouter} from 'next/router'
import { useFormik } from 'formik';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {
    Snackbar,
    Alert
} from '@mui/material'

const Login = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const [option,setOption] = useState(true)
    const [alertt,setAlertt] = useState(false)

    const verify = (data: any) => {
        authGmail(data)
        .then((response) => {
            dispatch<any>(response)
            router.push('dashboard')
        })
    }

    const message = useSelector( (state: any) => state?.data?.message )
    const messageCreate = useSelector((state: any) => state?.messageCreate?.Message)

    console.log(message)

    useEffect(() => {
        message === "successful login" ? router.push('dashboard') : null
        messageCreate === "Create user sucess" ? router.reload() : null
    }, [message,messageCreate])

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        }
        ,
        
        onSubmit: values => {
            option 
            ? singIn(values).then((res) => {
                dispatch<any>(res).finally(setAlertt(true))
            }) 
            : createAccount(values).then((res) => {
                dispatch<any>(res).finally(setAlertt(true))
            }) 
        }}
    )
    
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(46, 46, 72, 1)'
        }}>

                <Snackbar open={alertt} autoHideDuration={6000}>
                    <Alert onClose={() => setAlertt(false)} severity="success" sx={{ width: '100%' }}>
                        {message ? message : messageCreate}
                    </Alert>
                </Snackbar>

            <form onSubmit={formik.handleSubmit}>
                    <div style={{
                        backgroundColor: 'rgba(56, 56, 84, 1)',
                        width: '25rem',
                        height: '30rem',
                        borderRadius: '1rem',
                    }}>
                            
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '1rem',
                            }}>
                            <h4>Email</h4>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative'
                            }}>
                                <AccountCircleIcon sx={{
                                    position: 'absolute',
                                    left: '-30px'
                                }}/>
                                <input  
                                    id='email'
                                    name='email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    style={{height: '25px'}}
                                />
                            </div>
                            

                            <h4>Password</h4>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative'
                            }}>
                                <LockOpenIcon sx={{
                                        position: 'absolute',
                                        left: '-30px'
                                    }}/>
                                <input  
                                    id='password'
                                    type='password'
                                    name='password'
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    style={{height: '25px'}}
                                />
                            </div>

                            <button type='submit' style={{
                                marginBottom: '2rem',
                                padding: '.5rem'
                            }}>
                                {option ? "Ingresar" : "Crear cuenta"}
                            </button>

                            <GoogleLogin 
                                onSuccess={(data) => {
                                    verify(data)
                                }}
                                onError={() => {
                                    console.log("Error al iniciar sesion")
                                }}
                                theme='outline'
                                auto_select={false}
                                ux_mode='popup'
                                shape='pill'
                                type='icon'
                            />

                            <a style={{
                                textDecoration: 'underline',
                                cursor: 'pointer'
                            }}
                            onClick={() => setOption(!option)}
                            >
                                {option ? "Not account?" : "You have account?"}
                            </a>

                            </div>
                            
                            
                    </div>
                </form>

        </div>

    )
}


export default Login