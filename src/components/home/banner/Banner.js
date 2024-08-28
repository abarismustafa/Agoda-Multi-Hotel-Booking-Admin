import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../../assets/img/banner/banner-1.jpg'
import banner2 from '../../../assets/img/banner/banner-2.jpg'
import banner3 from '../../../assets/img/banner/banner-3.jpg'
function Banner() {
    return (
        <>
            {/* <section className="position-relative overflow-hidden min-vh-100 d-flex home-slider-area"> */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="text-dark home-slider-text">
                            <h1><span style={{ backgroundColor: 'inherit' }}><b style={{}}>Every Love Story is&nbsp;</b></span></h1><h1><span style={{ backgroundColor: 'inherit' }}><b style={{}}>Beautiful</b></span></h1><h1><b style={{}}><font color="#fd2c79">Make Yours</font></b></h1><h1><b style={{}}><font color="#fd2c79">Special</font></b></h1>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="text-dark home-slider-text">
                            <h1><span style={{ backgroundColor: 'inherit' }}><b style={{}}>Every Love Story is&nbsp;</b></span></h1><h1><span style={{ backgroundColor: 'inherit' }}><b style={{}}>Beautiful</b></span></h1><h1><b style={{}}><font color="#fd2c79">Make Yours</font></b></h1><h1><b style={{}}><font color="#fd2c79">Special</font></b></h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="text-dark home-slider-text">
                            <h1><span style={{ backgroundColor: 'inherit' }}><b style={{}}>Every Love Story is&nbsp;</b></span></h1><h1><span style={{ backgroundColor: 'inherit' }}><b style={{}}>Beautiful</b></span></h1><h1><b style={{}}><font color="#fd2c79">Make Yours</font></b></h1><h1><b style={{}}><font color="#fd2c79">Special</font></b></h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* </section> */}

        </>
    )
}
export default Banner