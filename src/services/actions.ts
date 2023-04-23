import axios from 'axios';

axios.defaults.baseURL = "https://backend-1-0.vercel.app/api/"


export const getProductos = async (marca = "",animal="", etapa="", empaque="", peso="") => {
    
    return async function (dispatch: any) {
        try {

            const data = await axios.get(`getProducts?marca=${marca}&animal=${animal}&etapa=${etapa}&empaque=${empaque}&peso=${peso}`)

            return dispatch({
                type: 'PRODUCTOS',
                payload: data.data
            })

        } catch (error) {
            console.error(error)
        }

    }

}

export const getProductoId = async (id: any) => {
    console.log(id)
    return async function (dispatch : any) {
        try {

            const data = await axios.get(`getProduct/${id}`)
            return dispatch({
                type: 'PRODUCTOID',
                payload: data.data
            })

        } catch (error) {
            console.log(error)            
        }

    }
}



export const getTypes = async () => {
    return async function (dispatch: any) {
            
            try {
    
                const data = await axios.get(`getAllTypes`)
                return dispatch({
                    type: 'TIPOS',
                    payload: data.data
                })
    
            } catch (error) {
                console.error(error)
            }
    
        }
}


export const getVentasByDate = async (fecha: any) => {
        try {

            const data = await axios.get(`getVentasByDate?fecha=${fecha}`)
            return data.data

        } catch (e: any) {
            console.log(e)
        }

}

export const getAllVentas = async () => {
    return async function (dispatch: any) {

        try {

            const data = await axios.get('getVentas')
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

            const data = await axios.get('getTop5')
            return dispatch({
                type: 'TOP5',
                payload: data.data
            })

        } catch (e: any) {
            console.log(e)
        }

    }
}

export const getTop5Payments = async () => {

    return async function (dispatch: any) {

        try {

            const data = await axios.get('getTop5Payments')

            return dispatch({
                type: 'TOP5PAY',
                payload: data.data
            })
            
        } catch (e) {
            console.log(e)
        }

    }

}



//Productos


export const newProducto = async (obj: any) => {
    return async function (dispatch: any) {
        try {
            const data = await axios.post('newProduct', obj)
            return dispatch({
                type: 'NEWPRODUCTO',
                payload: data.data
            })

        } catch (e) {
            console.log(e)
        }

    }
}

export const updateProduct = async (obj: any, id: any) => {
    console.log(obj)
    return async function (dispatch: any) {

        try {
            
            const data = await axios.put('updateProduct/' + id, obj)
            return dispatch({
                type: 'UPDATEPRODUCT',
                payload: data.data
            })

        } catch (error) {
            console.log(error)
        }

    }
}

export const deleteProduct = async (id: any) => {

    return async function (dispatch: any) {

        try {
            
            const data = await axios.delete(`deleteProduct/${id}`)
            dispatch({
                type: 'DELETEPRODUCT',
                payload: data.data.message
            })

            const refresh = await getProductos()
            dispatch(refresh)

        } catch (error) {
            console.log(error)
        }

    }

}



//AUTH

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
                if (response.data.token && window !== undefined) {
                    window.localStorage.setItem("TOKEN", response.data.token)
                    window.localStorage.setItem("infoUser", JSON.stringify(response.data.payload))
                }
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


export const singIn = async (values: any) => {

    return async function (dispatch : any) {


        try {

            const data = await axios.post('signIn', values)
            window !== undefined ? window.localStorage.setItem('TOKEN', data.data.token) : null
            return dispatch({
                type: 'SIGNIN',
                payload: data.data
            })

        } catch (error) {
            return dispatch({
                type: 'SIGNIN',
                payload: error
            })
        }


    }

}

export const createAccount = async (values: any) => {

    return async function (dispatch: any) {

        try {
            
            const data = await axios.post('createAccount', values)

            return dispatch({
                type: 'CREATEACCOUNT',
                payload: data.data
            })

        } catch (error) {
            return dispatch({
                type: 'CREATEACCOUNT',
                payload: error
            })
        }

    }

}