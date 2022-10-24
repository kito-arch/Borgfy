import React from "react";

import styles from './venturePage.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import Section4 from "./section4/section4";
import Image from "next/image";
import Section5 from "./section5/section5";

export default function VenturePage(props){
    return(
        <React.Fragment>
            <StandardLayout>
                <PaddingLayout>
                    <Section1/> 
                </PaddingLayout>
                <PaddingLayout>
                    <Section2/>
                </PaddingLayout>
                <PaddingLayout backgroundColor = 'white'>
                    <Section3/>
                </PaddingLayout>

                <PaddingLayout>
                    <Image src = '/../public/digital_advantages_back.png' layout="fill"/>
                    <Section4/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section5/>
                </PaddingLayout>

            </StandardLayout>
        </React.Fragment>
    )
}