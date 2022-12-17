
import styles from './caseStudyPage.module.css'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import Section1 from './section1/section1'
import Section2 from './section2/section2'
import Section3 from './section3/section3'
import Image from 'next/image'
import Section4 from './section4/section4'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Section7 from './section7/section7'
import Section8 from './section8/section8'
import Section9 from './section9/section9'
import Section10 from './section10/section10'
import Section11 from './section11/section11'
import Section12 from './section12/section12'
import Section13 from './section13/section13'
import Section14 from './section14/section14'
import Section15 from './section15/section15'
import Section16 from './section16/section16'

export default function DynamicCaseStudyPage(props){
    return(

        <StandardLayout double = {true}>
            <div className = {`${styles.container}`}>
                <PaddingLayout backgroundColor = 'white'>
                    <Section1 useCase = {props?.useCase}/>
                </PaddingLayout>

                {props?.useCase?.contribution_text &&
                    <PaddingLayout backgroundColor = 'black'>
                        <Section2 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.brainstorm_image &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Image priority  src = './case_sec3_back.png' layout = 'fill' />
                        <Section3 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.objective &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section4 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }


                {props?.useCase?.problem_text &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section5 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {(props?.useCase?.challenge1_text || props?.useCase?.challenge2_text) &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section6 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.solution_text &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section7 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }


                {props?.useCase?.approach_text &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section8 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.sketching_text &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section9 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                
                {props?.useCase?.wireframe_text &&                
                    <PaddingLayout backgroundColor = 'white'>
                        <Section10 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.style_text &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section11 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.visual_text &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section12 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.brainstorm_text &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section13 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.final_image &&
                    <PaddingLayout backgroundColor = 'white'>
                        <Section14 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {(props?.useCase?.funding || props?.useCase?.onboarding || props?.useCase?.revenue) &&
                    <PaddingLayout backgroundColor = 'black'>
                        <Image priority  src = './case_sec15_back.png' layout = 'fill'/>
                        <Section15 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

                {props?.useCase?.quote &&
                    <PaddingLayout zIndex = '15' backgroundColor = 'white'>
                        <Image priority  src = './case_sec16_back.png' layout = 'fill'/>
                        <Section16 useCase = {props?.useCase}/>
                    </PaddingLayout>
                }

            </div>
        </StandardLayout>
    )
}