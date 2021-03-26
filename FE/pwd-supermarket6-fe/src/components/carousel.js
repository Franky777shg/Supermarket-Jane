import React from 'react'
import {
    Carousel
} from 'react-bootstrap'

import cocacola from '../assets/cocacola.jpg'
import cheetos from '../assets/cheetos.jpg'
import chocolate from '../assets/chocolate.jpg'

import { connect } from 'react-redux'

//  NOTE import action
import { getCarousel } from '../action/carouselAction'

class Carousel1 extends React.Component {
    render() {
        return (
            <div style={styles.divutama}>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block"
                            src={cocacola}
                            alt="First slide"
                            style={{ height: '400px', width: '800px' }}
                        />
                        <Carousel.Caption>
                            <h3>Syrups, Soft Drinks & Juices</h3>
                            <p>Choose from our variety of beverages for your thirst quenchers !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block"
                            src={cheetos}
                            alt="Second slide"
                            style={{ height: '400px', width: '800px' }}
                        />
                        <Carousel.Caption>
                            <h3>Snacks & Biscuits</h3>
                            <p>Choose from our variety of snacks and biscuits for your cravings !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={chocolate}
                            alt="Third slide"
                            style={{ height: '400px', width: '800px' }}
                        />
                        <Carousel.Caption>
                            <h3>Chocolates</h3>
                            <p>Choose from our variety of chocolates for you or for your loved ones !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

const styles = {
    divutama: {
        marginTop: '40px'
    }
}

export default Carousel1