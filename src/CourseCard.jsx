import React from 'react'

const CourseCard = (props) => {
    const {imgUrl,title,lesson,students,rating}=props.item;

  return (
    <div className="single__course--item">
                <div className="course__img">
                    <img className='w-100' src={imgUrl} alt="" />
                </div>
                <div className="course__details">
                    <h6 className='course__title mb-4'>{title}</h6>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className="lesson d-flex align-items-center gap-1">
                            <i className="fas fa-book"></i>
                            {lesson} Lessons
                        </p>
                        <p className="students d-flex align-items-center gap-1">
                            <i className="fas fa-user"></i>
                            {students}
                        </p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className="rating d-flex align-items-center gap-1">
                            <i className="fas fa-star"></i>
                            {rating}
                        </p>
                        <span className="enroll d-flex align-items-center gap-1">
                           <a href="#">Enroll now.</a>
                        </span>
                    </div>
                </div>
            </div>
  )
}

export default CourseCard