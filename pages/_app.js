import { useEffect } from 'react'
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import "swiper/css";
import "swiper/css/bundle";


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const widthChanger = ()=>{
    let width = screen.width
    if(width <= 480){
      document.documentElement.style.setProperty('font-size', '8px');
      return;
    }
    // zoom
    if(router.pathname == "/portfolio"){
      // zoom
      let zoom = (width / 1920) * 100
      console.log(zoom)
      console.log(width)
      let scale = zoom + "%"
      document.body.style.zoom =  scale;    // Chrome, Opera, Safari
    }
    else{
      let zoom = (width / 2304) * 100
      console.log(zoom)
      console.log(width)
      let scale = zoom + "%"
      document.body.style.zoom =  scale;    // Chrome, Opera, Safari
    }
  }
  

  useEffect(()=>{
    // AOS
    AOS.init()
    // window.addEventListener('load', ()=>{widthChanger()});
    widthChanger()

    
  }, [router.pathname])

  return <Component {...pageProps} />
}

export default MyApp
