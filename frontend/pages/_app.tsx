import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../state/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component className="font-lighters" {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
