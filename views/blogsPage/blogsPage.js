
import Image from 'next/image'
import PaddingLayout from '../../layouts/paddingLayout/paddingLayout'
import StandardLayout from '../../layouts/standardLayout/standardLayout'
import styles from './blogsPage.module.css'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'

export default function BlogsPage(props){
    return(
        <StandardLayout>
            
            <div className = {`${styles.container}`}>

                <PaddingLayout>
                    <Image src = '/../public/blog_sec1_back.png' layout = 'fill'/>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section2 paddingTop = '80px' backgroundColor = 'black' headingColor = 'white' textColor = 'white' heading = 'Our new design system' text = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,dummy text of the printing ...." date = '29 Jul 2022' image = '/../public/blog1.png'/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section2 paddingTop = '40px' backgroundColor = '#F3F5F5' headingColor = 'black' textColor = 'black' heading = 'Our new design system' text = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,dummy text of the printing ...." date = '29 Jul 2022' image = '/../public/blog2.png'/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section2 paddingTop = '40px' paddingBottom = '150px' backgroundColor = '#F3F5F5' headingColor = 'black' textColor = 'black' heading = 'Our new design system' text = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,dummy text of the printing ...." date = '29 Jul 2022' image = '/../public/blog3.png'/>
                </PaddingLayout>

            </div>
        </StandardLayout>
    )
}