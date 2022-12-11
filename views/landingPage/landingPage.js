
import Image from "next/image";
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import styles from './landingPage.module.css'
import Section1 from './section1/section1'
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Section4 from "./section4/section4";
import Section5 from "./section5/section5";
import Section6 from "./section6/section6";
import Section7 from "./section7/section7";
import Section8 from "./section8/section8";

export default function LandingPage(props){
    return(

        <StandardLayout>

            <div className = {`${styles.container}`}>

                <PaddingLayout backgroundColor = 'black'>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Image priority  style = {{opacity: '0.4'}} src = '/../public/landing_sec2_back.png' layout='fill'/>
                    <Section2/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <div style = {{zIndex: '1', position: 'absolute', top: '0', left: '0'}}>
                        <Image priority  src = '/../public/landing_sec3_back.png' width = '2400px' height = '1300px' />
                    </div>
                    <Section3/>
                </PaddingLayout>

                <Section4/>

                
                <Section5/>

                <PaddingLayout backgroundColor = 'white'>
                    <Section6/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section7/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section8/>
                </PaddingLayout>

            </div>

        </StandardLayout>
    )
}