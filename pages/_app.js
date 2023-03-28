import Navbar from '@/components/navbar.jsx'
import '@/styles/globals.css'

export default function App({ Component, pageProps}) {
  return (
  <>
    <Navbar/>
    
    <Component {...pageProps} />
  </>

  )
}
