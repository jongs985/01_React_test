    import Carousel from 'react-bootstrap/Carousel';

    function UncontrolledExample() {
    return (
        <Carousel style={{width: 'auto', height: '800px', overflow: 'hidden', backgroundColor: '#abe0f5'}}>
        <Carousel.Item style={{ height: '800px' }}>
            
            <img
                    className="d-block w-100"
                    src='/eco_slide_1.jpg'
                    alt="First slide"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />

            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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