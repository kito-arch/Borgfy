
import styles from './landing2Page.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Image from 'next/image';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Section5 from './section5/section5';
import Section6 from './section6/section6';

export default function Landing2Page(props){
    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>

                <PaddingLayout>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Image src = '/../public/landing2_sec2_back.png' layout = 'fill' />
                    <Section2/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section3/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section4/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'black'>
                    <Section5/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section6/>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}