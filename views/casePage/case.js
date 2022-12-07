
import styles from './case.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Image from 'next/image';
import { scroll } from '../../conts_vars';

export default function Case(props){
    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>
                
                <PaddingLayout backgroundColor = 'white'>

                    <div style = {{position: 'absolute', bottom: '250px', right: '0rem'}}>
                        <Image src = './case2_hifi.png' width = '300px' height = '300px'/>
                    </div>

                    <div className = {`${styles.innerContainer}`}>

                        <div style = {{position: 'absolute', top: '400px', left: '-4rem'}}>
                            <Image src = './digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>
                        <div style = {{position: 'absolute', top: 23, right: '0rem'}}>
                            <Image src = './digital_right_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>

                        <p data-aos-offset = {-300*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.heading}`}>Check In Depth - How we solved it</p>
                        <p data-aos-offset = {-300*scroll} data-aos = 'fade-up' data-aos-duration = '3000' className = {`${styles.subheading}`}>Case Studies</p>


                        <div className = {`${styles.stretchBetween}`}>

                            <div style = {{position: 'absolute', top: '200px', left: '-24rem'}}>
                                <Image src = './case2_ellipse1.png' width = '600px' height = '3000px'/>
                            </div>
                            <div style = {{position: 'absolute', top: '800px', right: '-348px'}}>
                                <Image src = './case2_ellipse2.png' width = '600px' height = '600px'/>
                            </div>

                            <div data-aos-offset = {-300*scroll} data-aos = 'fade-right' data-aos-duration = '3000'>
                                <div style = {{display: 'flex', alignItems: 'center'}}>
                                    <Image src = './case2_ellipse.png' width = '31px' height = '31px' />
                                    <p className = {`${styles.mobile}`}>Mobile App</p>
                                </div>
                                <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                    <p className = {`${styles.sure}`}>SureCash</p>
                                    <p className = {`${styles.gray}`}>Branding Mobile App</p>
                                </div>
                                <div className = {`${styles.hover}`}>
                                    <div className = {`${styles.box}`}>
                                        {/* <Image src = './case2_box_back.png' layout = 'fill'/> */}
                                        <p className = {`${styles.boxHeading}`}>Lorem ipsum doler sit</p>
                                        <p className = {`${styles.boxSubheading}`}>Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.</p>
                                        <div style = {{width: 'fit-content', margin: 'auto'}}>
                                            <Image src = './case2_image1.png' width = '668px' height = '525px'/>
                                        </div>
                                    </div>
                                </div>
                                <p className = {`${styles.read}`}>Read More</p>
                            </div>

                            <div data-aos-offset = {-300*scroll} data-aos = 'fade-left' data-aos-duration = '3000'>
                                <div style = {{display: 'flex', alignItems: 'center'}}>
                                    <Image src = './case2_ellipse.png' width = '31px' height = '31px' />
                                    <p className = {`${styles.mobile}`}>Mobile App</p>
                                </div>
                                <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                    <p className = {`${styles.sure}`}>SureCash</p>
                                    <p className = {`${styles.gray}`}>Branding Mobile App</p>
                                </div>
                                <div className = {`${styles.hover}`}>
                                    <div className = {`${styles.box}`}>
                                        {/* <Image src = './case2_box_back.png' layout = 'fill'/> */}
                                        <p className = {`${styles.boxHeading}`}>Lorem ipsum doler sit</p>
                                        <p className = {`${styles.boxSubheading}`}>Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.</p>
                                        <div style = {{width: 'fit-content', margin: 'auto'}}>
                                            <Image src = './case2_image1.png' width = '668px' height = '525px'/>
                                        </div>
                                    </div>
                                </div>
                                <p className = {`${styles.read}`}>Read More</p>
                            </div>

                            <div data-aos-offset = {-scroll*500} data-aos = 'fade-right' data-aos-duration = '3000'>
                                <div style = {{display: 'flex', alignItems: 'center'}}>
                                    <Image src = './case2_ellipse.png' width = '31px' height = '31px' />
                                    <p className = {`${styles.mobile}`}>Mobile App</p>
                                </div>
                                <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                    <p className = {`${styles.sure}`}>SureCash</p>
                                    <p className = {`${styles.gray}`}>Branding Mobile App</p>
                                </div>
                                <div className = {`${styles.hover}`}>
                                    <div className = {`${styles.box}`}>
                                        {/* <Image src = './case2_box_back.png' layout = 'fill'/> */}
                                        <p className = {`${styles.boxHeading}`}>Lorem ipsum doler sit</p>
                                        <p className = {`${styles.boxSubheading}`}>Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.</p>
                                        <div style = {{width: 'fit-content', margin: 'auto'}}>
                                            <Image src = './case2_image1.png' width = '668px' height = '525px'/>
                                        </div>
                                    </div>
                                </div>
                                <p className = {`${styles.read}`}>Read More</p>
                            </div>

                            <div data-aos-offset = {-scroll*500} data-aos = 'fade-left' data-aos-duration = '3000'> 
                                <div style = {{display: 'flex', alignItems: 'center'}}>
                                    <Image src = './case2_ellipse.png' width = '31px' height = '31px' />
                                    <p className = {`${styles.mobile}`}>Mobile App</p>
                                </div>
                                <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                    <p className = {`${styles.sure}`}>SureCash</p>
                                    <p className = {`${styles.gray}`}>Branding Mobile App</p>
                                </div>
                                <div className = {`${styles.hover}`}>
                                    <div className = {`${styles.box}`}>
                                        {/* <Image src = './case2_box_back.png' layout = 'fill'/> */}
                                        <p className = {`${styles.boxHeading}`}>Lorem ipsum doler sit</p>
                                        <p className = {`${styles.boxSubheading}`}>Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.</p>
                                        <div style = {{width: 'fit-content', margin: 'auto'}}>
                                            <Image src = './case2_image1.png' width = '668px' height = '525px'/>
                                        </div>
                                    </div>
                                </div>
                                <p className = {`${styles.read}`}>Read More</p>
                            </div>
                        </div>
                    </div>                        

                </PaddingLayout>
            </div>
        </StandardLayout>
    )
}