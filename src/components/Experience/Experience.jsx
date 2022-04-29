import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Experience.css'

const developmentExperienceDate = [
    {
        year: '2022-Present Day',
        title: 'Frontend Developer',
        desc: 'I am a frontend developer since last 4 months and may want to learn this skill better. I stay up to date regarding web development.'
    }
]

const Experience = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Experience</h2>
                </Col>
                {
                    developmentExperienceDate.map((item, index) => (
                        <Col lg='6' md='6' key={index}>
                            <div className='single_experience-container'>
                                <div className='single_experience'>
                                    <span className='experience_icon'>
                                        <i class="ri-briefcase-line"></i>
                                    </span>
                                    <h6>{item.year}</h6>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>

}

export default Experience