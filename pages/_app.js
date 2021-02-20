import Head from 'next/head'
import '../styles/global.scss'

function App({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>Tweeto 🔥</title>
        </Head>
        <Component {...pageProps} />
        </>
    );
}
export default App