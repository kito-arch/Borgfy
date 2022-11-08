
import styles from './case.module.css'
import PaddingLayout from "../../layouts/paddingLayout/paddingLayout";
import StandardLayout from "../../layouts/standardLayout/standardLayout";
import Image from 'next/image';

export default function Case(props){
    return(

        <StandardLayout>
            <div className = {`${styles.container}`}>
                
                <PaddingLayout backgroundColor = 'white'>
                    <div className = {`${styles.innerContainer}`}>

                        <div style = {{position: 'absolute', top: '400px', left: '-4rem'}}>
                            <Image src = '/../public/digital_left_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>
                        <div style = {{position: 'absolute', top: 23, right: '0rem'}}>
                            <Image src = '/../public/digital_right_triangle.png' width = '219.47px' height = '221.19px'/>
                        </div>

                        <p className = {`${styles.heading}`}>Check In Depth - How we solved it</p>
                        <p className = {`${styles.subheading}`}>Case Studies</p>


                        <div className = {`${styles.stretchBetween}`}>
                            <div>
                                <div style = {{display: 'flex', alignItems: 'center'}}>
                                    <Image src = '/../public/case2_ellipse.png' width = '31px' height = '31px' />
                                    <p className = {`${styles.mobile}`}>Mobile App</p>
                                </div>
                                <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                    <p className = {`${styles.sure}`}>SureCash</p>
                                    <p className = {`${styles.gray}`}>Branding Mobile App</p>
                                </div>
                                <div className = {`${styles.box}`}>
                                    <Image src = '/../public/case2_box_back.png' layout = 'fill'/>
                                    <p className = {`${styles.boxHeading}`}>Lorem ipsum doler sit</p>
                                    <p className = {`${styles.boxSubheading}`}>Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.</p>
                                    <div style = {{width: 'fit-content', margin: 'auto'}}>
                                        <Image src = '/../public/case2_image1.png' width = '668px' height = '525px'/>
                                    </div>
                                </div>
                                <p className = {`${styles.read}`}>Read More</p>
                            </div>

                            <div>
                                <div style = {{display: 'flex', alignItems: 'center'}}>
                                    <Image src = '/../public/case2_ellipse.png' width = '31px' height = '31px' />
                                    <p className = {`${styles.mobile}`}>Mobile App</p>
                                </div>
                                <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                    <p className = {`${styles.sure}`}>SureCash</p>
                                    <p className = {`${styles.gray}`}>Branding Mobile App</p>
                                </div>
                                <div className = {`${styles.box}`}>
                                    <Image src = '/../public/case2_box_back.png' layout = 'fill'/>
                                    <p className = {`${styles.boxHeading}`}>Lorem ipsum doler sit</p>
                                    <p className = {`${styles.boxSubheading}`}>Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.</p>
                                    <div style = {{width: 'fit-content', margin: 'auto'}}>
                                        <Image src = '/../public/case2_image1.png' width = '668px' height = '525px'/>
                                    </div>
                                </div>
                                <p className = {`${styles.read}`}>Read More</p>
                            </div>

                            <div>
                                <div style = {{display: 'flex', alignItems: 'center'}}>
                                    <Image src = '/../public/case2_ellipse.png' width = '31px' height = '31px' />
                                    <p className = {`${styles.mobile}`}>Mobile App</p>
                                </div>
                                <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                    <p className = {`${styles.sure}`}>SureCash</p>
                                    <p className = {`${styles.gray}`}>Branding Mobile App</p>
                                </div>
                                <div className = {`${styles.box}`}>
                                    <Image src = '/../public/case2_box_back.png' layout = 'fill'/>
                                    <p className = {`${styles.boxHeading}`}>Lorem ipsum doler sit</p>
                                    <p className = {`${styles.boxSubheading}`}>Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.</p>
                                    <div style = {{width: 'fit-content', margin: 'auto'}}>
                                        <Image src = '/../public/case2_image1.png' width = '668px' height = '525px'/>
                                    </div>
                                </div>
                                <p className = {`${styles.read}`}>Read More</p>
                            </div>

                            <div>
                                <div style = {{display: 'flex', alignItems: 'center'}}>
                                    <Image src = '/../public/case2_ellipse.png' width = '31px' height = '31px' />
                                    <p className = {`${styles.mobile}`}>Mobile App</p>
                                </div>
                                <div style = {{width: '730px'}} className = {`${styles.stretchBetween}`}>
                                    <p className = {`${styles.sure}`}>SureCash</p>
                                    <p className = {`${styles.gray}`}>Branding Mobile App</p>
                                </div>
                                <div className = {`${styles.box}`}>
                                    <Image src = '/../public/case2_box_back.png' layout = 'fill'/>
                                    <p className = {`${styles.boxHeading}`}>Lorem ipsum doler sit</p>
                                    <p className = {`${styles.boxSubheading}`}>Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.Our Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into StartupsOur Visions Crafted Into Startups.</p>
                                    <div style = {{width: 'fit-content', margin: 'auto'}}>
                                        <Image src = '/../public/case2_image1.png' width = '668px' height = '525px'/>
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