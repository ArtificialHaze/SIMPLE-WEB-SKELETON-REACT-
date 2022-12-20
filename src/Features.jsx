import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const featureData=[
    {
        title:'Quick Learning',
        desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi suscipit quos culpa! Odit, alias excepturi.',
        icon:"fas fa-clock"
    },
    {
        title:'Certification',
        desc:'Sit amet consectetur adipisicing elit. Modi suscipit quos culpa! Odit, alias excepturi.',
        icon:"fas fa-folder"
    },
    {
        title:'24/7 Support',
        desc:'Lorem ipsumsit amet consectetur adipisicing elit. Modi suscipit quos culpa! Odit, alias excepturi.',
        icon:"fas fa-message"
    },
]


const Features = () => {
  return (
    <section>
        <Container>
            <Row>
                {featureData.map((item,index)=>(
                <Col md="6" key={index} lg="4">
                    <div className="single__feature text-center px-4">
                        <h2 className='mb-3'><i className={item.icon}></i></h2>
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                    </div>
                </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Features