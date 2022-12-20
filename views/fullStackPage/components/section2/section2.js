
import Image from 'next/image'
import Row from './components/row/row'
import styles from './section2.module.css'
import {scroll} from '../../../../conts_vars'

export function Section2(props){
    return(
        <div className = {`${styles.container}`}>
            {/* <div style = {{position: 'absolute', top: '50px', left: '-12rem'}}>
                <Image priority  src = './full_stack_dots.png' width = '2304px' height = '2000px'/>
            </div> */}
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*350} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row left = {true} heading = 'Idea Evaluation' text = {<span>Whether it is a startup or a highly successful business, the core thing in creating any product for them is to evaluate their idea properly. Idea evaluation provides the reliability of the full stack product development and the resources to target for bringing the product to life. <br/>It is also necessary for checking the viability of the project. This process creates a model for providing steps of construction and ensures every part of the idea can be put into execution. <br/>The idea evaluation process serves as a vital pillar in full-stack product development. We at Borgfy understand this and help in providing the perfect idea evaluation for a successful and viable result.</span>} image = './full_stack_2.png' width = '512px' height = '512px' imagePaddingTop = '62px' imagePaddingLeft = '116px' textPaddingTop = '133px' textPaddingLeft = '47px' textPaddingBottom = '137px'/>
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*450} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row left = {false} heading = 'Project Planning Map' text = {<span>As the process of evaluation of ideas is complete, we move on to the next step of generating a project planning map. This is not just an ordinary map. It entails all the processes and requirements that are essential for the completion of any project.<br/>Moreover, the project planning maps gives specific instruction for every step of the way of developing a user-friendly and scalable product. It helps to resolve many task management problems as well.<br/>Therefore, creating a project planning map can speed up the whole process of development remarkably.</span>} textPaddingLeft = '3px' textPaddingTop = '57px' textPaddingBottom = '315px' imagePaddingTop = '110px' imagePaddingLeft = '116px' image = './full_stack_3.png' height = '512px' width = '512px'/>
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*550} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row left = {false} heading = 'Resources Allocation' text = {<span>In full-stack product development, to create a successful product, the resources must be allocated correctly. As we aim to deliver the finest quality product within an economical budget, resource allocation becomes essential.<br/>Knowing the right team for performing a task and completing multiple tasks with it as well, is an excellent example of resource allocation.<br/>It not only helps in keeping the project budget steady but also helps in efficient project completion.<br/>It may seem that the process of resource allocation is easy but it is not. This is because it needs strategic planning for allocating resources for efficient and scalable results.</span>} textPaddingLeft = '3px' textPaddingTop = '0px' textPaddingBottom = '46px' />
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*650} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row leftBulb = {true} left = {true} heading = 'UI/UX Product Design' text = {<span>The outlook of any project is a vital part of any project. Having an attractive user interface can open a lot of gates for making the product successful using full-stack product development.<br/>Using interactive elements and having an attention-grabbing user interface proved to be useful in every digital project.<br/>User interface and user experience relate to each other. User experience makes sure that all digital products have easy layouts and user access points.<br/>Both facilitate the success of the product and pave the way towards an efficient and reliable UI/UX Product Design.</span>} textPaddingLeft = '31px' textPaddingTop = '0px' textPaddingBottom = '34px' imagePaddingTop = '79px' imagePaddingLeft = '151px' image = './full_stack_4.png' height = '358px' width = '358px'/>
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*750} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row leftBulb = {false} left = {false} heading = 'Front End Development' text = {<span>Better user interaction with the web application or a website is an integral part of a successful product. This comes into reality with the right combination of HTML, CSS, and Javascript intertwined with interactive User Interfaces.<br/>Front-end development makes sure that the user interaction within an app or a website is easy and robust. As the user interacts with the print end directly it is important to make sure everything is in perfect working order.<br/>It leaves an amazing impact on the user. Front-end development seems easy but there are a lot of thought processes and systematic development techniques are required to build the perfect product.</span>} textPaddingLeft = '5px' textPaddingTop = '0px' textPaddingBottom = '26px' imagePaddingTop = '109px' imagePaddingLeft = '204px' image = './full_stack_5.png' height = '383px' width = '383px'/>
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*850} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row leftBulb = {true} left = {true} heading = 'Backend Development' text = {<span>Without backend development frontend is nothing. This is because the backend powers the frontend. Users can do nothing with the frontend if it does not have any functionality. <br/>The best thing about backend development is that it is hidden. All the coding that developers do will stay hidden and users can access it through the front end.<br/>Backend focus on the APIs, databases, backend logic, and Servers. There are many tools to do the backend coding and we make it easy for you to code your product's backend.  </span>} textPaddingLeft = '31px' textPaddingTop = '0px' textPaddingBottom = '26px' imagePaddingTop = '-17px' imagePaddingLeft = '162px' image = './full_stack_6.png' height = '436px' width = '436px'/>
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*950} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row leftBulb = {false} left = {false} heading = 'Deployment On Server' text = {<span>The product runs efficiently when it is on the server. The deployment of the backend on the server allows you to access the product's backend on multiple devices.<br/>Through this, the server gets into the action and you can do configurations easily. The main benefit that you get by deploying the app on the server is that you can easily connect it to the frontend.<br/>The server will help you to run the app and check whether it works correctly or not. You can select the free servers just to test the product. </span>} textPaddingLeft = '5px' textPaddingTop = '0px' textPaddingBottom = '20px' imagePaddingTop = '-10px' imagePaddingLeft = '231px' image = './full_stack_7.png' height = '512px' width = '512px'/>
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1050} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row leftBulb = {true} left = {true} heading = 'Testing' text = {<span>Product testing is an important step in product development. It is also called comparative testing and consumer testing.<br/>Through testing, users can check the performance of their product. Testing helps developers to see whether their product is working in the same way they expect or there is an error.</span>} textPaddingLeft = '31px' textPaddingTop = '0px' textPaddingBottom = '50px'/>
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1150} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row leftBulb = {false} left = {false} heading = 'Addon Special Features & Integrations (AI, IoT)' text = {<span>The product becomes special when users add special features and integrations to them. AI is the famous technology of today.<br/>It makes software efficient and does more than half of the work that people have to do. The best example of AI in the products is Chatbot.<br/>It communicates with the visitors and helps to navigate things on the website or the app. The second special feature is the Internet of Things.<br/>This is an upgrade feature as it enhances the lifestyle. Through this users can access the smart things with their mobile phones without leaving the couch.<br/>Both the features like AI and IoT attract users and you can take benefit of this fact.</span>} textPaddingLeft = '5px' textPaddingTop = '0px' textPaddingBottom = '53px' imagePaddingTop = '49px' imagePaddingLeft = '203px' image = './full_stack_8.png' height = '377px' width = '377px'/>
            </div>
            <div data-aos-offset = {-(screen.width <= 480 ? mobscroll : myscroll)*1250} data-aos = 'fade-up' data-aos-duration = '3000'>
                <Row leftBulb = {true} left = {true} heading = 'Final Launch' text = {<span>After testing the product, we will launch the product on Google's play store or Apple store. So that people can buy the product and take advantage of your services.<br/>Our efficient team will give your product a boost to make sure more people can access your product. This will help you to generate good revenue and make a place in the market.</span>} textPaddingLeft = '31px' textPaddingTop = '0px' textPaddingBottom = '20px' imagePaddingTop = '100px' imagePaddingLeft = '200px' image = './full_stack_9.png' height = '400px' width = '400px'/>
            </div>
        </div>
    )
}