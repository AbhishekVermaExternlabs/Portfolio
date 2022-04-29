import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './HeroSection.css';
import heroImg from '../../Assets/images/photo.png';
// import { init } from 'ityped'
import Typical from 'react-typical';

const HeroSection = () => {
    // const textRef = useRef();
    // useEffect(() =>{
    //         if (!textRef.current) {
    //           return;
    //     }
    //     init(textRef.current, {
    //         backDelay: 1500,
    //         showCursor: true,
    //         strings:[
    //             'Abhishek Verma',
    //             'a Front End Developer',
    //             'a Coder'
    //         ]

    //     })
    // },[])
    return <section className='hero_section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='hero_content'>
                        <p className='mb-3'>Welcome to my world!</p>
                       
                        <h2 className='hero_title mb-4'>I'm <span><Typical
                        loop = {Infinity}
                        steps = {[
                            'Abhishek Verma',
                            1000,
                            'a Front End Developer',
                            1000,
                            'a Coder',
                            1000,  
                        ]}
                     /></span></h2>
                    
                        <p>I am good in front End developer and also intersted in coding</p>
                        <div className='mt-5 hero_btns d-flex  align-items-center gap-4'>
                           <button className='btn hire_btn' ><a href='#'>Hire Me</a></button>
                           <a href='Resume.pdf' download="Abhishek Resume.pdf">
                           <button className='btn'>Get Resume</button>
                           </a>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className='hero_img'>
                    <img src={heroImg} alt='' className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default HeroSection