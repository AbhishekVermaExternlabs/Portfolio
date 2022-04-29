import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './Services.css'


const servicesData = [
    {
        icon: 'ri-code-fill',
        title: 'Web Design',
        desc: 'Design is not just what it looks like and feels like. Design is how it works.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        desc: 'Design is not just what it looks like and feels like. Design is how it works.'
    },
    {
        icon: 'ri-search-line',
        title: 'SEO',
        desc: 'Design is not just what it looks like and feels like. Design is how it works.'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Design is not just what it looks like and feels like. Design is how it works.'
    },

]
const Services = () => {
    return <section id='services'>
        <Container>
            <Row>
                <Col lg='12' className='service_top mb-5'>
                    <h6>Features</h6>
                    <h2>What services I provide</h2>
                </Col>
                {
                    servicesData.map((item, index) => (
                        <Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                            <div className='single_service'>
                                <span className='service_icon'>
                                    <i class={item.icon}></i>
                                </span>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    </section>
}

export default Services