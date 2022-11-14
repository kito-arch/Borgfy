import { useEffect } from 'react'
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    // aos
    AOS.init();

    // zoom
    let width = screen.width
    let zoom = (width / 2304) * 100
    console.log(zoom)
    console.log(width)
    let scale = zoom + "%"
    document.body.style.zoom =  scale;    // Chrome, Opera, Safari
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
