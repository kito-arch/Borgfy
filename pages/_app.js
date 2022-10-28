import { useEffect } from 'react'
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    let width = screen.width
    let zoom = (width / 1920) * 100
    console.log(zoom)
    console.log(width)
    let scale = zoom + "%"
    document.body.style.zoom =  scale;    // Chrome, Opera, Safari
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
