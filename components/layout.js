import Navigation from './navigation'
import Head from 'next/head'

const Layout=({children})=> {
    return(
        <div>
            <Head>
                <title>Quaresma</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navigation/>
            <main>
               {children}
            </main>
            <footer>
                design by Ömer
            </footer>
        </div>
    )
}

export default Layout;