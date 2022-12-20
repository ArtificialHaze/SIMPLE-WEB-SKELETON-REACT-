import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'


const NewsLetter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col className='text-center' lg="12">
                    <h2 className='mb-4'>Subscribe our newsletter</h2>
                    <div className="subscribe">
                        <button className="btn">Subscribe</button>
                        <input type="text" placeholder='Email..' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter