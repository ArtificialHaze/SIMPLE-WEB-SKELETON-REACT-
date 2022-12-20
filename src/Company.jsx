import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Company = () => {
  return (
    <section>
        <Container>
            <Row>
                 <Col lg="2" md="3">
                     <h3 className='d-flex align-items-center gap-1'><i className="fab fa-vimeo"></i>Vimeo</h3>
                 </Col>
                 <Col lg="2" md="3">
                     <h3 className='d-flex align-items-center gap-1'><i className="fab fa-pinterest"></i>Pinterest</h3>
                 </Col>              
                 <Col lg="2" md="3">
                     <h3 className='d-flex align-items-center gap-1'><i className="fab fa-apple"></i>Apple</h3>
                 </Col>
                 <Col lg="2" md="3">
                     <h3 className='d-flex align-items-center gap-1'><i className="fab fa-google"></i>Google</h3>
                 </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Company