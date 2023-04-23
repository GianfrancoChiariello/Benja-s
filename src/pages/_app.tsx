import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import {store} from '../redux/store'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AxiosInterceptor } from '@/services/axios.interceptors/interceptors';

AxiosInterceptor()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="258745218516-3l9klk9l1np8bpf2ed102o7ukb1ngfj4.apps.googleusercontent.com">
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </GoogleOAuthProvider>
  )
}
