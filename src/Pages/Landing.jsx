import React from 'react'
import { Link } from 'react-router-dom'
import landingimage from '../assets/img.gif'
import { Card } from 'react-bootstrap'
import manageimg from '../assets/manage-video.png'
import historyImg from'../assets/history-img.jpeg'
import catogoryImg from '../assets/catogories-img.jpg'

function Landing() {
  return (
    <>

      <div className="landingsection container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat neque quia voluptate suscipit! Eius inventore excepturi labore dignissimos ea adipisci sed dolorum. Quaerat eligendi laboriosam voluptatibus maiores dignissimos necessitatibus ab?
            </p>
            <Link to={'/home'} className='btn btn-warning'> Get Strated</Link>
          </div>
          <div className="col-lg-6">
            <img style={{ width: '550px' }} src={landingimage} alt="" />
          </div>

        </div>

        <div className="features my-5">
          <h3>Features</h3>
          <div className="row">

            <div className="col-lg-4">
              <Card className='p-2' style={{ width: '22rem', height: '400px' }}>
                <Card.Img variant="top" src={manageimg} className='img-fluid' style={{ height: '250px' }} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    User can upload , view and remove the videos.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className='p-2' style={{ width: '22rem', height: '400px' }}>
                <Card.Img variant="top" src={catogoryImg} className='img-fluid' style={{ height: '250px' }} />
                <Card.Body>
                  <Card.Title>Categories Videos </Card.Title>
                  <Card.Text>
                    User can catogaries Videos by drag and drop features.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card className='p-2' style={{ width: '22rem', height: '400px' }}>
                <Card.Img variant="top" src={historyImg} className='img-fluid' style={{ height: '250px' }} />
                <Card.Body>
                  <Card.Title>Managing History</Card.Title>
                  <Card.Text>
                    User can manage watch history of all videos.
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>



          </div>
        </div>


        <div className="row p-5 my-5 border" style={{height:'500px'}}>
          <div className="col-lg-5">
            <h4 className='text-warning my-5'>Simple ,Fast and Powerful</h4>
            <p style={{textAlign:'justify'}}><span className='fs-4'>Play everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non error cupiditate accusantium labore exercitationem deserunt reprehenderit, sed expedita.</p>


            <p style={{textAlign:'justify'}}> <span className='
            fs-4'>Catogories videos:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quo consequuntur modi distinctio, nam?</p>


            <p style={{textAlign:'justify'}}>  <span className='fs-4'>Manage history:</span> Lorem ipsum dab velit facere fuga saepe. Blanditiis velit in inventore, veniam reiciendis aliquam! Amet dolore totam qui!</p>


          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="100%" height="360" src="https://www.youtube.com/embed/HUAAYwtusLI" title="Jaada | Aavesham |Jithu Madhavan |Fahadh Faasil |Sushin Shyam|Sreenath Bhasi |Nazriya |Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>


      </div>
    </>
  )
}

export default Landing
