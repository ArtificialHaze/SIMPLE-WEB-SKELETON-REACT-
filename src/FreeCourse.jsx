import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import FreeCourseCard from './FreeCourseCard'

const freeCoursesData=[
    {
        id:'01',
        title:'Basic Web Development course',
        imgUrl:'',
        students:5.2,
        rating:1.2,
    },
    {
        id:'02',
        title:'Basic Web Designer course',
        imgUrl:'',
        students:6.2,
        rating:2.2,
    },
    {
        id:'03',
        title:'Basic AI Programmer course',
        imgUrl:'',
        students:10.2,
        rating:4.2,
    },
    {
        id:'04',
        title:'Basic Graphic Designer course',
        imgUrl:'',
        students:1.2,
        rating:0.2,
    },
]


const FreeCourse = () => {

  return (
    <section>
        <Container>
            <Row>
                <Col lg="12" className='text-center mb-5'>
                    <h2 className='fw-bold'>Our free courses</h2>
                </Col>
                {freeCoursesData.map((item)=>(
                    <FreeCourseCard item={item} key={item.id}/>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default FreeCourse