import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import CourseCard from './CourseCard'

const coursesData=[
    {
        id:'01',
        title:'Web design',
        lesson:12,
        students:12.5,
        rating:5.9,
        imgUrl:'image'
    },
    {
        id:'02',
        title:'Graphic design',
        lesson:6,
        students:5.5,
        rating:4.9,
        imgUrl:'image'
    },
    {
        id:'03',
        title:'Web Devs',
        lesson:20,
        students:15.5,
        rating:8.9,
        imgUrl:'image'
    },
]


const Courses = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg="12" className='mb-5'>
                    <div className="course__top d-flex justify-content-between align-items-center">
                        <div className="course__top--left w-50">
                            <h2>Popular Courses</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perferendis repellat labore repudiandae esse neque cum, numquam corrupti recusandae doloribus.</p>
                        </div>
                        <div className="w-50 text-end">
                            <button className="btn">See all.</button>
                        </div>
                    </div>
                </Col>
            {coursesData.map((item)=>(
                <Col lg="4" md="6" key={item.id}>
                    <CourseCard  item={item}/>
                </Col>
            ))}
            </Row>
        </Container>
    </section>
  )
}

export default Courses