import React from 'react'

import {
    Button
} from 'react-bootstrap'

import Carousel1 from '../components/carousel'

import { Link } from 'react-router-dom'

class Home extends React.Component {
    render () {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
               {/* <h1>THIS IS HOME</h1> */}
               <Carousel1 />
               <Button variant='primary' as={Link} to='/product' style={styles.button}>Go To Products Page</Button>
            </div>
        )
    }
}

const styles= {
    button: {
        marginTop: '20px'
    }
}

export default Home