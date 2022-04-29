import React, { useState } from 'react'
import './About.css';
import aboutImg from '../../Assets/images/photo.png'
import { Col, Container, Row } from 'reactstrap';
import Education from './Education'
import Skills from './Skills';
import Award from './Award';

const About = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT')
    return <section id='about'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'><h2>About Me</h2></Col>
                <Col lg='4' md='3'>
                    <div className='about_btns d-flex flex-column align-items-center'>
                        <button className={`about_btn ${aboutFilter === 'ABOUT' ? 'about_btn-active':'' }`} onClick={() => setAboutFilter('ABOUT')}>About me</button>
                        <button className={`about_btn ${aboutFilter === 'EDUCATION' ? 'about_btn-active':'' }`} onClick={() => setAboutFilter('EDUCATION')}>Education</button>
                        <button className={`about_btn ${aboutFilter === 'SKILLS' ? 'about_btn-active':'' }`} onClick={() => setAboutFilter('SKILLS')}>Skills</button>
                        <button className={`about_btn ${aboutFilter === 'AWARD' ? 'about_btn-active':'' }`} onClick={() => setAboutFilter('AWARD')}>Award</button>
                    </div>
                </Col>
                <Col lg='8' md='9'>
                    {
                        aboutFilter === 'ABOUT' && <div className='about_content_wrapper d-flex gap-5'>
                            <div className='about_img w-25'>
                                <img src={aboutImg} alt="" className="w-100" />
                            </div>
                            <div className='about_content w-75'>
                                <h2>I'm Abhishek Verma</h2>
                                <p>I’ve always sought out opportunities
                                    and challenges that are meaningful to me.
                                    I've never stopped passion to help others
                                    and solve problems.<br /> As a web developer,
                                    I love learning and working on
                                    new technology That's why I’m excited
                                    to make a greate impact at a high growth company.</p>
                                <div className='social_links'>
                                    <h6 className='mb-3'>Connect with me:</h6>
                                    <span><a href='https://www.facebook.com/profile.php?id=100006604927347'><i class="ri-facebook-line"></i></a></span>
                                    <span><a href='https://www.youtube.com/?&ab_channel=Muhib%27sTechDiary'><i class="ri-youtube-line"></i></a></span>
                                    <span><a href='https://github.com/AbhishekVermaExternlabs'><i class="ri-github-line"></i></a></span>
                                    <span><a href='https://www.instagram.com/anshuverma497/'><i class="ri-instagram-line"></i></a></span>
                                    <span><a href='https://www.linkedin.com/in/abhishek-verma-75a360200/'><i class="ri-linkedin-line"></i></a></span>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        aboutFilter === 'EDUCATION' && <Education />
                    }
                    {
                        aboutFilter === 'SKILLS' && <Skills />
                    }
                    {
                        aboutFilter === 'AWARD' && <Award/>
                    }
                </Col>
            </Row>
        </Container>
    </section>
}

export default About