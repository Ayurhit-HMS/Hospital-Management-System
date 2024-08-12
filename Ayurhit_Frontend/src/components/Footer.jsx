import "../styles/footer.css"
import map from "../images/map.jpg";

function Footer() {
    return (
        <div className="footer fixed-bottom">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3 text-center">
                        <h3>AYURHIT HOSPITALS</h3>
                        <p>Pioneering Medical Excellence <br />Delivering Trusted Care</p>
                    </div>
                    <div className="col-md-2 text-center">
                        <h5>Important Links</h5>
                        <p className="mb-0"><a class="link-underline link-underline-opacity-0 text-light" href="#">Appointment</a></p>
                        <p className="mb-0"><a class="link-underline link-underline-opacity-0 text-light" href="#">Specialties</a></p>
                        <p className="mb-0"><a class="link-underline link-underline-opacity-0 text-light" href="#">Hospitals</a></p>
                        <p className="mb-0"><a class="link-underline link-underline-opacity-0 text-light" href="#">About us</a></p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-center">Contact us</h5>
                        <p className="ms-5">Call : 02112 1234 1234 <br />Email : ayurhit.hospital@gmail.com <br />Address : Ayurhit Hospital, Phase-2, Hinjewadi pune</p>
                    </div>
                    <div className="col ms-5">
                        <a href="https://maps.app.goo.gl/z9UrvCA8iP8qCCaf9"><img className="img-fluid img-thumbnail" src={map} alt="Address Map" /></a>
                        <div className="mt-3 d-flex">
                            <input type="text" placeholder="Subscribe to newsletter" className="rounded me-1" />
                            &copy;
                        </div>
                    </div>
                </div>
                <hr class="border border-light border-2 opacity-50" />
                <div className="row">
                    <div className="col-md-11"><p>&copy; {new Date().getFullYear()} Ayurhit Hospitals website. All rights reserved.</p></div>
                    <div className="col-md-1">&copy; &copy; &copy;</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;