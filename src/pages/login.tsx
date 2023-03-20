import { useDispatch } from "react-redux"
import {
    useEffect,
} from "react"
import { useSelector } from "react-redux"
import { GoogleLogin } from '@react-oauth/google';
import {
    authGmail
} from '../apis/actions'
import { useState } from "react";
import {useRouter} from 'next/router'

 


const Login = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const verify = (data: any) => {
        authGmail(data)
        .then((response) => {
            dispatch<any>(response)
            router.push('dashboard')
        })
    }

    
    return (

        <GoogleLogin 
            onSuccess={(data) => {
                verify(data)
                console.log(data)
            }}
            onError={() => {
                console.log("Error al iniciar sesion")
            }}
        />

    )
}


export default Login