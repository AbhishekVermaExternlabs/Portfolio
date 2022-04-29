import React from 'react'
import { Container, Row } from 'reactstrap'
import './Portfolio.css'
import img01 from '../../Assets/images/photo.png'

const Portfolio = () => {
  return <section>
     <Container>
        <Row>
           <Col lg='12' className ='portfolio_top'>
              <h6>Explore my work and give a feedback</h6>
              <h2>Portfolio</h2>
           </Col>
           <Col lg='4' md='6' sm='6'>
              
           </Col>
        </Row>
     </Container>
  </section>
}

export default Portfolio