import { Carousel,Button} from 'react-bootstrap';

function Slider() {
    return (
        <>
            <div className="slider_section">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../image/banner-bg.png')}
                            alt="First slide"
                        />
                        <Carousel.Caption >
                            <div className="slider_caption">
                                <h1>Outstanding</h1>
                                <h2>Coffee Shop</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but <br></br>the majority have suffered alteration in some form, by injected <br></br>humour,.</p>
                                <Button variant="dark">Learn More</Button> 
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../image/banner-bg.png')}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        <div className="slider_caption">
                                <h1>Outstanding</h1>
                                <h2>Coffee Shop</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but <br></br>the majority have suffered alteration in some form, by injected <br></br>humour,.</p>
                                <Button variant="dark">Learn More</Button> 
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

        </>
    )
}
export default Slider;