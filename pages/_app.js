import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <fragment>
    <Component {...pageProps} />
    {/* <footer>
    © 2022 LNPappas
    </footer> */}
  </fragment>
}

export default MyApp
