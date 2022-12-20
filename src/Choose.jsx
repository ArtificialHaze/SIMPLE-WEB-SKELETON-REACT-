import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useState } from 'react'

const Choose = () => {
const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
        <Container>
            <Row>
                <Col lg="6">
                <div className="choose__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam molestiae suscipit, ducimus tempora error dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde veritatis rem voluptatibus earum, recusandae nemo quam. <br /> Aperiam, officia veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, corrupti!</p>
                </div>
                </Col>
                <Col lg="6">
                    <div className="choose__img">
                        {showVideo?(<ReactPlayer url="https://www.youtube.com" controls width="100%" height="300px"/>)
                        :
                        (<img src="" alt="" className='w-100'/>)
                        }
                        {
                            !showVideo && (
                                    <div className="play__icon">
                                        <i className="fas fa-play" onClick={()=>setShowVideo(!showVideo)}></i>
                                    </div>
                            )
                        }
                       
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Choose