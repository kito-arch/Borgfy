
import styles from './aiPage.module.css'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import Section1 from './section1/section1'
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Section7 from './section7/section7'
import Section8 from './section8/section8'
import Section7Link from './section7Link/section7'

export default function AIPage(props){
    return(


        <StandardLayout>

            <div className = {`${styles.container}`}>

                <PaddingLayout backgroundColor = '#0B0000'>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = '#0B0000'>
                    <Section2/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section3/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'black'>
                    <Section4/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = '#161616'>
                    <Section5/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section6/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = '#161616'>
                    <Section7/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section8/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section7Link/>
                </PaddingLayout>

            </div>
        </StandardLayout>


    )
}