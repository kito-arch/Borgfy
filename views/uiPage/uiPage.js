

import Image from "next/image";
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section7 from "./components/section7/section7";
import styles from './uiPage.module.css'

export default function UIPage(props){
    return(
        <StandardLayout logo = '/../public/logo_black.png'>
            <PaddingLayout>
                <Image priority  src = '/../public/ui_sec1_back.png' layout = 'fill'/>
                <Section1/>
            </PaddingLayout>
            <PaddingLayout>
                <Section2/>
            </PaddingLayout>
            <PaddingLayout>
                <Section3/>
            </PaddingLayout>
            <video width="100%" height="100%" loop autoPlay muted>
                <source src={'render.mp4'} type="video/mp4" />
            </video>
            {/* <div style = {{position: 'relative', minHeight: '1080px', marginBottom: '26.875rem'}}>
                <Image priority  src = '/../public/ui_sec3_back.png' layout="fill"/>
            </div> */}
            <PaddingLayout backgroundColor = 'white'>
                <Section4/>
            </PaddingLayout>
            <PaddingLayout backgroundColor = 'white'>
                <Section5/>
            </PaddingLayout>
            <PaddingLayout backgroundColor = 'white'>
                <Section7/>
            </PaddingLayout>
        </StandardLayout>
    )
}