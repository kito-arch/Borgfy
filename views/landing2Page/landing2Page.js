
import styles from './landing2Page.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Image from 'next/image';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Section5 from './section5/section5';
import Section6 from './section6/section6';
import Section8 from './section8/section8';
import Section7 from './section7/section7';
import Section9 from './section9/section9';
import Section10 from './section10/section10';
import Section11 from './section11/section11';
import Section12 from './section12/section12';
import Section13 from './section13/section13';
import Section14 from './section14/section14';
import Section15 from './section15/section15';
import Section16 from './section16/section16';

export default function Landing2Page(props){
    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>

                <PaddingLayout>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Image priority  style = {{opacity: '0.7'}} src = './landing2_sec2_back.png' layout = 'fill' />
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

                <PaddingLayout backgroundColor = 'black'>
                    <Section7/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'black'>
                    <Section8/>
                </PaddingLayout>

                <Section9/>

                <Section10/>

                <PaddingLayout backgroundColor = '#EDF1F4'>
                    <div style = {{position: 'absolute', left: 0, top: '0'}}>
                        <Image priority  src = './landing2_sec11_top.png' width = '2304px' height = '90px' />
                    </div>
                    <Section11/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section12/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = '#f5f6fa'>
                    <Section13/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section14/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section15/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = '#F4F6F6'>
                    <Section16/>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}