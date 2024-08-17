import "../styles/home.css"
import Footer from "../components/Footer"
import video from '../videos/home.mp4'
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="container-fluid" style={{ marginTop: 180 }}>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" >
                    <div className="carousel-inner  mb-5">
                        <div className="carousel-item active " style={{ height: 500 }}>
                            <img src="https://cdn.pixabay.com/photo/2017/08/04/05/52/touch-2579147_1280.jpg" className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>We care</h1>
                                <p></p>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ height: 500 }}>
                            <img src="https://cdn.pixabay.com/photo/2012/03/01/01/42/baby-20339_1280.jpg" className="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <p className="h3 text-dark ">"The closest thing to being cared for is to care for someone else."</p>
                            </div>
                        </div>

                        <div className="carousel-item" style={{ height: 500 }}>
                            <video class="w-100" autoPlay loop>
                                <source src={video} type="video/mp4" />
                            </video>
                            <div class="carousel-caption d-none d-md-block">
                                <button className="btn btn-success" onClick={() => navigate('/patient/bookAppointment')}>Book Appointment</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="mt-2">
                    <div className="row mb-5">
                        <div className="col-md-2">
                            <div className="card w-100" onClick={() => { navigate('/patient/bookAppointment') }}>
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_640.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text text-center">Book Appointment</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card w-100">
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/08/08/07/21/doctors-office-2610509_640.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">Book health checkup</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 ">
                            <div className="card w-100">
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/08/07/13/05/blood-donation-2603649_640.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">Sample collection from home</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card w-100">
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/25/08/24/ambulance-1005433_640.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">Home care service</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card w-100">
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/08/18/12/23/building-2654823_640.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">Find a Hospital</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="card w-100">
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2020/03/27/16/26/phone-4974179_640.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">Call me back</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row text-center mb-5">
                        <div className="h1">Explore our Centers of Clinical Excellence</div>
                        <div className="h3">Explore Specialized Services Available at the Ayurhit Hospitals</div>
                    </div>

                    <div className="text-center">
                        <div className="row">
                            <div className="col">
                                <ul className="nav nav-pills mb-5 d-flex justify-content-center" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button id="hms-specialities" className="nav-link active btn-success" data-bs-toggle="pill" data-bs-target="#pills-specialities" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Specialities</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-treatments" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Treatments</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-procedures" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Procedures</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills-diseases" type="button" role="tab" aria-controls="pills-new" aria-selected="false">Diseases</button>
                                    </li>
                                </ul>

                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-specialities" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

                                        <div className="row d-flex justify-content-center mb-5">
                                            <div className="col-md-2">
                                                <div className="card">
                                                    <img className="card-img-top" src="https://sahyadrihospital.com/wp-content/uploads/2021/02/cardiology.png.webp" alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text">Cardiology</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-2">
                                                <div className="card">
                                                    <img className="card-img-top" src="https://sahyadrihospital.com/wp-content/uploads/2021/04/brain-spine.jpg.webp" alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text">Neurology</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-2">
                                                <div className="card">
                                                    <img className="card-img-top" src="https://sahyadrihospital.com/wp-content/uploads/2021/04/gastroenterology.jpg.webp" alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text">Gastroenterology</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-2">
                                                <div className="card">
                                                    <img className="card-img-top" src="https://sahyadrihospital.com/wp-content/uploads/2021/08/general-surgery.jpg.webp" alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text">General Surgery</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row d-flex justify-content-center mb-3">

                                            <div className="col-md-2">
                                                <div className="card">
                                                    <img className="card-img-top" src="https://sahyadrihospital.com/wp-content/uploads/2021/04/oncology.jpg.webp" alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text">Oncology</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-2">
                                                <div className="card">
                                                    <img className="card-img-top" src="https://sahyadrihospital.com/wp-content/uploads/2021/04/Orthopedic.jpg.webp" alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text">Orthopedics</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-2">
                                                <div className="card">
                                                    <img className="card-img-top" src="https://sahyadrihospital.com/wp-content/uploads/2021/04/Urology.jpg.webp" alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text">Urology</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-2">
                                                <div className="card">
                                                    <img className="card-img-top" src="https://sahyadrihospital.com/wp-content/uploads/2021/08/Department-of-Cardiac-Surgery.jpg.webp" alt="Card image cap" />
                                                    <div className="card-body">
                                                        <p className="card-text">Cardiac Surgery</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                    <div class="tab-pane fade" id="pills-treatments" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">Treatments Content</div>
                                    <div class="tab-pane fade" id="pills-procedures" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">Procedures Content</div>
                                    <div class="tab-pane fade" id="pills-diseases" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">Diseases Content</div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className="container-fluid m-0 p-0">
                <Footer></Footer>
            </div>
        </div>


    )
}

export default Home;

