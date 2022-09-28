import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div style={{ backgroundImage: "url('./image/acc.png')", height: '100%', width: '100%' }}>
            <div className="row">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./image/homeImage.webp" width="100%" height="250" alt="fruits" />
                            {/* <h1>first</h1> */}
                            <div class="carousel-caption d-none d-md-block">
                                <h1 style={{color: "black"}}>Welcome to E-Kisan</h1>
                                <h5 style={{color: "black"}}>Lets buy and sell togather</h5>
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img src="./image/banner4.jpg" width="100%" height="250" alt="fruits" />
                            {/* <h1>second</h1> */}
                        </div>
                        <div className="carousel-item">
                            <img src="./image/banner8.jpg" width="100%" height="250" alt="fruits" />
                            {/* <h1>third</h1> */}
                        </div>
                        <div className="carousel-item">
                            <img src="./image/banner9.jpg" width="100%" height="250" alt="fruits" />
                            {/* <h1>third</h1> */}
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='row my-4'></div>
            <div className="container my-4">

                <div className="row my-5">
                    <div className="col-md-6" style={{ textAlign: "left" }}>
                        <div id="collapseThree" ClassName="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div ClassName="accordion-body">
                                <h2>WELCOME TO E-KISAN. </h2>  <h6>'E-Kisan' is an Online platform for buying as well as selling the essential items like vegetables and fruits. </h6>
                                <h6>Happy Shopping!!!</h6>

                            </div>
                            <div className='my-4'>
                                <Link to="/register">
                                    <button type="button" className="btn btn-primary">Lets start Shopping</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src="./image/cart14.PNG" width="100%" height="60%" />
                    </div>
                </div>
            </div>
        </div>
    )
}
