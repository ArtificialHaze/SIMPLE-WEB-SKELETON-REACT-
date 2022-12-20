import React from 'react'
import {Col} from 'react-bootstrap'


const FreeCourseCard = (props) => {
    const {imgUrl,title,students,rating}=props.item;

  return (
     <Col lg="3"> 
        <div className="single__free--course">
            <div className="free__course--img mb-5">
                <img src={imgUrl} alt="" className='w-100' />
                <button className="btn free__btn">Free</button>
            </div>
            <div className="free__course--details mt-2">
                <h6>{title}</h6>
                <div className='d-flex align-items-center gap-5'>
                    <span className='d-flex align-items-center gap-2'>
                        <i className="fas fa-user"></i>{students}
                    </span>
                    <span><i className="fas fa-star"></i>
                    {rating}
                    </span>
                </div>
            </div>
        </div>
    </Col>
  )
}

export default FreeCourseCard