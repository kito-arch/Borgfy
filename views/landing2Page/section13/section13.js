
import Image from 'next/image'
import styles from './section13.module.css'

export default function Section13(props){
    return(
        <div className = {`${styles.container}`}>

            <div style = {{position: 'absolute', top: '-90px', left: '-12rem'}}>
                <Image src = '/../public/landing2_sec13_left.png' width = '215px' height = '749px' />
            </div>

            <p data-aos-offset = "-4600" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.subheading}`}>Testimonials</p>
            <p data-aos-offset = "-4600" data-aos = 'fade-up' data-aos-duration = '1000' className = {`${styles.heading}`}>Check what our clients are saying</p>

            <div className = {`${styles.stretchBetween}`}>
                <Image src = '/../public/landing2_sec13_image1.png' width = '495px' height = '593px' />
                <div data-aos-offset = "-4600" data-aos = 'fade-left' data-aos-duration = '1000'>
                    <div style = {{marginBottom: '20px', marginTop: '150px'}}>
                        <Image src = '/../public/landing2_sec13_comma.png' width = '31px' height = '27px' />
                    </div>
                    <div style = {{width: '145px'}} className = {`${styles.srtretchBetween}`}>
                        <Image src = '/../public/landing2_sec13_star.png' width = '29px' height = '29px' />
                        <Image src = '/../public/landing2_sec13_star.png' width = '29px' height = '29px' />
                        <Image src = '/../public/landing2_sec13_star.png' width = '29px' height = '29px' />
                        <Image src = '/../public/landing2_sec13_star.png' width = '29px' height = '29px' />
                        <Image src = '/../public/landing2_sec13_star.png' width = '29px' height = '29px' />
                    </div>
                    <p  className = {`${styles.rev}`}>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.</p>
                    <p  className = {`${styles.by}`}>AR Shakir</p>
                    <p  className = {`${styles.company}`}>CEO GetNextDesign</p>
                </div>
            </div>
        </div>
    )
}