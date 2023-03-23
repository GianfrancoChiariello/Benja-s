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
} from '../apis/actions'
import { useState } from "react";
import {useRouter} from 'next/router'
import { useFormik } from 'formik';

 


const Login = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const [option,setOption] = useState(true)

    const verify = (data: any) => {
        authGmail(data)
        .then((response) => {
            dispatch<any>(response)
            router.push('dashboard')
        })
    }

    const message = useSelector( (state: any) => state.data.message )
    const messageCreate = useSelector((state: any) => state.messageCreate.Message)

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
                dispatch<any>(res)
            }) 
            : createAccount(values).then((res) => {
                dispatch<any>(res)
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
                            <input  
                                id='email'
                                name='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                style={{height: '25px'}}
                            />

                            <h4>Password</h4>
                            <input  
                                id='password'
                                name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                style={{height: '25px'}}
                            />

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