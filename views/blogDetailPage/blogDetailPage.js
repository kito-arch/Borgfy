
import styles from './blogDetailPage.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Section1 from './components/section1/section1';
import Image from 'next/image';
import Section2 from './components/section2/sectiton2';
import Section3 from './components/section3/section3';
import { myscroll, mobscroll } from '../../conts_vars';

export default function BlogDetailPage(props){
    return(
        <StandardLayout>
            <div className = {`${styles.container}`}>
                <PaddingLayout>
                    <Image priority  src = './blog_sec1_back.png' layout = 'fill'/>
                    <Section1/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <Section2/>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <div data-aos-offset = {-500*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000'>
                        <Section3 image = './blog_detail_blue_ellipse.png' bottom = '-200px' left = '-12rem' title = 'Our new design system' date = '29 Jul 2022' text = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,dummy text of the printing .But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? [33] On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."/>
                    </div>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <div data-aos-offset = {-700*(screen.width <= 480 ? mobscroll : myscroll)} data-aos = 'fade-up' data-aos-duration = '3000'>
                        <Section3 image = './blog_detail_blue_ellipse_2.png' bottom = '-200px' right = '-12rem' title = 'Our new design system' date = '' text = "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,dummy text of the printing .But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? [33] On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, "/>
                    </div>
                </PaddingLayout>

                <PaddingLayout backgroundColor = 'white'>
                    <div className = {`${styles.paginationContainer} hide_in_mobile`}>
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