import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const HeroSection = () => { 
  return (
    <section>
        <Container>
            <Row>
                <Col lg="6" md="6">
                  <div className="hero__content">
                  <h2 className='mb-4'>Anytime anywhere <br /> Learn on your Suitable schedule</h2>
                  <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Qui voluptas iure beatae veritatis ipsum, <br /> distinctio a minus consectetur quod dolorum.</p>
                  <div className="search">
                    <input type="text" placeholder='Search...' />
                    <button className="btn">Search</button>
                  </div>
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <img src=""  className='w-100' alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection