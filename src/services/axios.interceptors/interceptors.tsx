import axios, {AxiosRequestConfig} from 'axios'

export const AxiosInterceptor = () => {
    const Header = (request: AxiosRequestConfig) => {
        const token = window?.localStorage.getItem("TOKEN")

        const newHeader = {
            "token": token,
            "Content-Type": "application/json",
        }

        request.headers = newHeader
        return request
    }

    axios.interceptors.request.use((request: any) => {
        if (request.url?.includes('file')) return request
        return Header(request)
    })
}