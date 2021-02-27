import Head from 'next/head'
import { CounterProvider } from '../context/Counter';
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
    return (<>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>&rarr; tweeto ✌️</title>
        </Head>
        <CounterProvider>
            <Component {...pageProps} />
        </CounterProvider>
    </>
    )
}
// class MyApp extends App {
//     render() {
//         const { Component, pageProps } = this.props
//         return (
//             <CounterProvider>
//                 <Component {...pageProps}/>
//             </CounterProvider>
//         )
//     }
// }
// export default MyApp