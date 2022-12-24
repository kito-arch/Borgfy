import { useEffect, useState } from 'react'
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import "swiper/css";
import "swiper/css/bundle";
import React from 'react';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const [loading, setLoading] = useState(true)

  const widthChanger = ()=>{
    let width = screen.width
    if(width <= 480){
      document.documentElement.style.setProperty('font-size', '8px');
      return;
    }
    // zoom

    if(router.pathname.includes("/admin")){
      return;
    }

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
    setLoading(false)
    
  }, [router.pathname])

  return (
    <React.Fragment>
      {loading ? 
        <div style = {{width: '100%', height: '100%', position: 'fixed', top: '0', left: '0', backgroundColor: 'white'}}>

        </div>
      :
      <React.Fragment>

          <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

          <Script strategy="lazyOnload">
              {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `}
          </Script>
          <Component {...pageProps} />
        </React.Fragment>
      }
    </React.Fragment>
  )

  
}

export default MyApp
