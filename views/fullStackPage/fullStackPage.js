
import styles from './fullStackPage.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Section1 from './components/section1/section1';
import { Section2 } from './components/section2/section2';
import Image from 'next/image';

export default function FullStackPage (props){
    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>
                
                <PaddingLayout backgroundColor = '#0B0000'>
                    <Section1/>
                </PaddingLayout>
                <div className = {`${styles.border}`}></div>

                <PaddingLayout backgroundColor = '#0B0000'>
                    <div style = {{position: 'absolute', top: '0', left: '50%'}}>
                        <Image src = '/../public/full_stack_line.png' width = '10px' height = '4900px'/>
                    </div>
                    <Section2/>
                </PaddingLayout>
                
            </div>
        </StandardLayout>
    )
}