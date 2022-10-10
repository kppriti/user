import { Container, Row,Col,Button} from "react-bootstrap";

function Aboutus() {
    return (
        <>
            <div className="main_about ">
                <Container>
                    <Row>
                        <Col className="align-self-center">
                            <div className="about_section">
                            
                                <h1>ABOUT US</h1>
                                <p>Full cleaning and housekeeping services for companies and households.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
                                <Button  className="btn" variant="dark">Read More</Button>
                            
                            </div>
                            
                        </Col>
                        <Col>
                        <div className="about_image">
                            <img src={require("../image/about-img.png")}></img>
                            </div> 
                        </Col>
                    </Row>
                </Container>

            </div>

        </>
    )
}
export default Aboutus;