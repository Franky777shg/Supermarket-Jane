import React from 'react'
import {
    Carousel
} from 'react-bootstrap'

// import cocacola from '../assets/cocacola.jpg'
// import cheetos from '../assets/cheetos.jpg'
// import chocolate from '../assets/chocolate.jpg'

import { connect } from 'react-redux'

//  NOTE import action
import { getCarousel } from '../action/carouselAction'

class Carousel1 extends React.Component {
    componentDidMount() {
        this.props.getCarousel()
    }

    render() {
        return (
            // <Carousel>
            //     <Carousel.Item interval={1000}>
            //         <img
            //             className="d-block w-100"
            //             src={"assets/cocacola.jpg"}
            //             alt="First slide"
            //         />
            //         <Carousel.Caption>
            //             <h3>First slide label</h3>
            //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item interval={500}>
            //         <img
            //             className="d-block w-100"
            //             src="holder.js/800x400?text=Second slide&bg=282c34"
            //             alt="Second slide"
            //         />
            //         <Carousel.Caption>
            //             <h3>Second slide label</h3>
            //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <img
            //             className="d-block w-100"
            //             src="holder.js/800x400?text=Third slide&bg=20232a"
            //             alt="Third slide"
            //         />
            //         <Carousel.Caption>
            //             <h3>Third slide label</h3>
            //             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            // </Carousel>

            <Carousel>
                {this.props.carousel.map((item, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={item.images}
                                alt='Slide'
                                style={{ height: '600px', width: '800px' }}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carousel: state.carousel.data
    }
}

export default connect(mapStateToProps, { getCarousel })(Carousel1)