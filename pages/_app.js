import { useEffect } from 'react'
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

  const router = useRouter()
  

  useEffect(()=>{
    // aos
    AOS.init();

    // zoom
    if(router.pathname == "/portfolio"){
      // zoom
      let width = screen.width
      let zoom = (width / 1920) * 100
      console.log(zoom)
      console.log(width)
      let scale = zoom + "%"
      document.body.style.zoom =  scale;    // Chrome, Opera, Safari
    }
    else{
      let width = screen.width
      let zoom = (width / 2304) * 100
      console.log(zoom)
      console.log(width)
      let scale = zoom + "%"
      document.body.style.zoom =  scale;    // Chrome, Opera, Safari
    }
  }, [router.pathname])

  return <Component {...pageProps} />
}

export default MyApp
