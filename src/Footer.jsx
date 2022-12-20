import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'


const Footer = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg="3">
                    <h2 className='d-flex align-items-center gap-1'><i className="fas fa-search"></i>Students.</h2>
                    <div className="follows">
                        <p>Follow us</p>
                        <span><a href="https://facebook.com"></a>
                        <i className="fab fa-facebook"></i></span>
                        <span><a href="https://twitter.com"></a>
                        <i className="fab fa-twitter"></i></span>
                        <span><a href="https://instagram.com"></a>
                        <i className="fab fa-instagram"></i></span>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer