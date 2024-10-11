import Carousel from 'react-bootstrap/Carousel';
import './carousels.css'

    function UncontrolledExample() {
    return (
        <Carousel style={{width: 'auto', height: '800px', overflow: 'hidden', backgroundColor: '#b2a73e'}}>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='/eco_slide_1.jpg'
                    alt="First slide"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />

            <Carousel.Caption className="custom-caption">
            <p>대한민국 환경보호 웹사이트</p>
            <p>마루바람에 오신것을 환영합니다.</p>
            </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='/eco_slide_2.jpg'
                    alt="Second slide"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
                
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='/eco_slide_3.jpg'
                    alt="Third slide"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
            
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
    }

    export default UncontrolledExample;