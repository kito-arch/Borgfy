
import Image from 'next/image'
import styles from './section14.module.css'

export default function Section14(props){
    return(
        <div className = {`${styles.container}`}>
            <p className = {`${styles.heading}`}>You need to Choose Us</p>
            <p className = {`${styles.subheading}`}>The World is too noise tune to Borgy SignalThe World is too noise tune to Borgy Signal</p>


            <div style = {{padding: '19px 16px', paddingRight: '131px', marginBottom: '93px'}} className = {`${styles.box}`}>
                <div style = {{padding: '29px 52px 28px 43px'}} className = {`${styles.whiteBox}`}>
                    <Image src = '/../public/landing2_sec14_image1.png' width = '120px' height = '148px' />
                </div>
                <div>
                    <p style = {{width: '439px', paddingBottom: '60px'}} className = {`${styles.whiteText}`}>Trust and Quality</p>
                </div>
            </div>



            <div style = {{padding: '25px 69px 28px 55px', marginBottom: '77px', marginLeft: 'auto'}} className = {`${styles.box}`}>
                <div style = {{position: 'absolute', top: '-415px', left: '81px'}}>
                    <Image src = '/../public/landing2_sec14_image2.png' width = '296px' height = '527px' />
                </div>
                <div>
                    <p style = {{width: '305px', paddingBottom: '24px'}} className = {`${styles.whiteText}`}>Dedication</p>
                </div>
            </div>


            <div style = {{padding: '18px 47px 39px', marginBottom: '-142px'}} className = {`${styles.box}`}>
                <div style = {{position: 'absolute', top: '-194px', left: '81px'}}>
                    <Image src = '/../public/landing2_sec14_image3.png' width = '254px' height = '168px' />
                </div>
                <div>
                    <p style = {{ paddingBottom: '19px'}} className = {`${styles.whiteText}`}>Commitment</p>
                </div>
            </div>


            <div style = {{padding: '19px 16px', paddingRight: '69px', marginLeft: 'auto'}} className = {`${styles.box}`}>
                <div style = {{padding: '8px 16px 12px 12px'}} className = {`${styles.whiteBox}`}>
                    <Image src = '/../public/landing2_sec14_image4.png' width = '187px' height = '187px' />
                </div>
                <div>
                    <p style = {{width: '501px', paddingBottom: '60px'}} className = {`${styles.whiteText}`}>Imaginary Minds</p>
                </div>
            </div>

        </div>
    )
}