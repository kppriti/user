import { Container, Row, Col,Card,Button } from "react-bootstrap";

function Gallerypart() {
    return (
        <>
            <div className="Gallery_section">
                <Container>
                    <Row>
                        <Col>
                            <div className="main_gallery">
                                <h1>Our Gallery</h1>
                                <p>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="gallery_section">
                <Container>
                    <Row className="gallery">
                        <Col>
                            <Card  className="image">
                                <Card.Img variant="top"src={require("../image/img-1.png")}/>
                            </Card>
                        </Col>
                        <Col>
                            <Card  className="image">
                                <Card.Img variant="top" src={require("../image/img-2.png")} />
                            </Card>
                        </Col>
                        <Col>
                            <Card  className="image">
                                <Card.Img variant="top" src={require("../image/img-3.png")} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="gallery_section">
                <Container>
                    <Row className="gallery">
                        <Col>
                            <Card className="image">
                                <Card.Img variant="top"src={require("../image/img-4.png")}/>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="image">
                                <Card.Img variant="top" src={require("../image/img-5.png")} />
                            </Card>
                        </Col>
                        <Col>
                            <Card className="image">
                                <Card.Img  variant="top" src={require("../image/img-6.png")} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="gallery_section">
                <Container>
                    <Row className="gallery">
                        <Col>
                            <Card  className="image">
                                <Card.Img variant="top"src={require("../image/img-7.png")}/>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/img-8.png")} />
                            </Card>
                        </Col>
                        <Col>
                            <Card  className="image">
                                <Card.Img variant="top" src={require("../image/img-9.png")} />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <Button variant="dark" className="brn1">See More</Button>{' '} */}
            
                          

        </>
    )
}
export default Gallerypart;