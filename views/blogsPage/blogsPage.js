
import Image from 'next/image'
import { scroll } from '../../conts_vars'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import styles from './blogsPage.module.css'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

export default function BlogsPage(props){
    return(
        <StandardLayout>
            
            <div className = {`${styles.container}`}>

                <div style = {{position: 'absolute', bottom: '-100px', left : '6rem', zIndex: '10'}}>
                    <Image src = './blog_sec2_ellipse.png' width = '500px' height = '500px' />
                </div>

                <div style = {{position: 'absolute', bottom: '-100px', right : '0', zIndex: '10'}}>
                    <Image src = './blog_sec2_ellipse.png' width = '500px' height = '500px' />
                </div>

                <PaddingLayout>
                    <Image src = './blog_sec1_back.png' layout = 'fill'/>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <div data-aos-offset = {-300*scroll} data-aos = 'fade-up' data-aos-duration = '1000'>
                        <Section2 paddingTop = '80px' backgroundColor = 'black' headingColor = 'white' textColor = 'white' heading = 'Our new design system' text = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,dummy text of the printing ...." date = '29 Jul 2022' image = './blog1.png'/>
                    </div>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <div data-aos-offset = {-300*scroll} data-aos = 'fade-up' data-aos-duration = '1000'>
                        <Section2 paddingTop = '40px' backgroundColor = '#F3F5F5' headingColor = 'black' textColor = 'black' heading = 'Our new design system' text = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,dummy text of the printing ...." date = '29 Jul 2022' image = './blog2.png'/>
                    </div>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <div data-aos-offset = {-500*scroll} data-aos = 'fade-up' data-aos-duration = '1000'>
                        <Section2 paddingTop = '40px' paddingBottom = '150px' backgroundColor = '#F3F5F5' headingColor = 'black' textColor = 'black' heading = 'Our new design system' text = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,dummy text of the printing ...." date = '29 Jul 2022' image = './blog3.png'/>
                    </div>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <div className = {`${styles.paginationContainer}`}>
                        <div className = {`${styles.pageNumberContainer}`}>
                            <p style = {{background: '#377DFF', color: 'white'}} className = {`${styles.pageNumber}`}>1</p>
                            <p className = {`${styles.pageNumber}`}>2</p>
                            <p className = {`${styles.pageNumber}`}>3</p>
                            <p className = {`${styles.pageNumber}`}>...</p>
                            <p className = {`${styles.next}`}>Next</p>
                        </div>
                    </div>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}