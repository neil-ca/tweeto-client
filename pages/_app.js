import Head from 'next/head'
import { AuthProvider } from '../context/Auth'
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
    return (<>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>Tweeto ✌️</title>
        </Head>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    </>
    )
}