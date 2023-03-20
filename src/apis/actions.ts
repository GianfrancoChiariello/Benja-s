import axios from 'axios';

axios.defaults.baseURL = "http://localhost:9000/api/"


export const getProductos = async (marca: any,animal: any, etapa: any, empaque: any, peso: any) => {
    
    return async function (dispatch: any) {


        try {

            const data = await axios.get(`getProducts?marca=${marca}&animal=${animal}&etapa=${etapa}&empaque=${empaque}&peso=${peso}`, {
                headers : {
                    "Content-Type": "application/json"
                }
            })

            .then((response) => {
                console.log(response.data)

                return dispatch({
                    type: 'PRODUCTOS',
                    payload: response.data
                })
            })

        } catch (error) {
            console.error(error)
        }

    }

}

export const getTypes = async () => {
    return async function (dispatch: any) {
            
            try {
    
                const data = await axios.get(`getAllTypes`, {
                    headers : {
                        "Content-Type": "application/json"
                    }
                })
                .then((response) => {
                    console.log(response.data)
                    return dispatch({
                        type: 'TIPOS',
                        payload: response.data
                    })
                })
    
            } catch (error) {
                console.error(error)
            }
    
        }
}

export const authGmail = async (object: any) => {
    return async function (dispatch: any) {

        try {

            const data = axios.post('gmailVerify', {
                "credential": object.credential,
                "clientId": object.clientId,
                "select_by": object.select_by
            },
            {
                headers: {
                  "Content-Type": "application/json",
                },
            }
            )
            .then((response) => {
                return dispatch({
                    type: 'LOGIN',
                    payload: response.data
                })
            })

        } catch (e: any) {
            return dispatch({
                type: 'LOGIN',
                payload: e
            })
        }

    }
}

export const getVentasByDate = async (fecha: any) => {
        try {

            const data = await axios.get(`getVentasByDate?fecha=${fecha}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return data.data

        } catch (e: any) {
            console.log(e)
        }

}

export const getAllVentas = async () => {
    return async function (dispatch: any) {

        try {

            const data = await axios.get('getVentas',{
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            return dispatch({
                type: 'VENTAS',
                payload: data.data
            })

        } catch (e: any) {
            console.log(e)
        }

    }
}

export const getTop5 = async () => {
    return async function (dispatch: any) {

        try {

            const data = await axios.get('getTop5', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return dispatch({
                type: 'TOP5',
                payload: data.data
            })

        } catch (e: any) {
            console.log(e)
        }

    }
}

