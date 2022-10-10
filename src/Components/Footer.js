import { Container,Row,Col } from "react-bootstrap";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";

function Footer(){
    return(
        <>
        <div className="footer">
            <Container>
                <Row>
                    <Col xs lg="3">
                        <div className="about_footer">
                            <h3>About</h3>
                            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u</p>
                        </div>
                    </Col>
                    <Col xs lg="3" >
                        <div className="menu_footer">
                        <h3>Menu</h3>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Gallery</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>

                        </div>
                    </Col>
                    <Col xs lg="3">
                        <div className="link_footer">
                            <h3> useful Link</h3>
                            <p>Adipiscing Elit, sed do Eiusmod Tempor incididunt</p>
                        </div>
                    </Col>
                    <Col xs lg="3">
                        <div className="contact_footer">
                        <h3 >Contact Us</h3>
                        <ul>
                            <li>
                            <HiLocationMarker/>
                        <span>Address : Loram Ipusm</span>
                            </li>
                            <li>
                            <BsTelephoneFill/>
                            <span>Call : +01 1234567890</span>
                            </li>
                            <li>
                            <HiOutlineMail/>  
                            <span>Email : demo@gmail.com</span> 
                                

                            </li>
                        </ul>
                        
                       
                         </div>
                    </Col>
                </Row>
            </Container>
        </div>

        </>
    )
}
export default Footer;