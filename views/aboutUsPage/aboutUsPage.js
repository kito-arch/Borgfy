
import styles from './aboutUsPage.module.css'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import Sectoin1 from './section1/section1'
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Section7 from './section7/section7'

export default function AboutUsPage(props){
    return(
        <StandardLayout>
            <div className = {`${styles.container}`}>

                <PaddingLayout backgroundColor = 'black'>
                    <Sectoin1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section2/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section3/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section4/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = '#000103'>
                    <Section5/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section6/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'black'>
                    <Section7/>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}