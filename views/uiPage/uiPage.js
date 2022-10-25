

import Image from "next/image";
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import styles from './uiPage.module.css'

export default function UIPage(props){
    return(
        <StandardLayout>
            <PaddingLayout>
                <Image src = '/../public/ui_sec1_back.png' layout = 'fill'/>
                <Section1/>
            </PaddingLayout>
            <PaddingLayout>
                <Section2/>
            </PaddingLayout>
            <PaddingLayout>
                <Section3/>
            </PaddingLayout>
            <div style = {{position: 'relative', minHeight: '1080px', marginBottom: '26.875rem'}}>
                <Image src = '/../public/ui_sec3_back.png' layout="fill"/>
            </div>
            <PaddingLayout backgroundColor = 'white'>
                <Section4/>
            </PaddingLayout>
            <PaddingLayout backgroundColor = 'white'>
                <Section5/>
            </PaddingLayout>
        </StandardLayout>
    )
}