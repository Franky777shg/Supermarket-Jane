import React from 'react'
import { connect } from 'react-redux'

import bgprod from '../assets/bgprod.jpg'

import {
    Card,
    Button
} from 'react-bootstrap'

import {Link} from 'react-router-dom'

//  NOTE import action
import { getAllProd } from '../action/prodAction'

class Products extends React.Component {
    componentDidMount() {
        this.props.getAllProd()
    }

    render () {
        return (
            <div style={styles.divutama}>
                <h1 style={{color: 'white'}}>PRODUCTS</h1>
                <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    {this.props.product.map((item, index) => {
                        return (
                            <Card bg='secondary' style={{ width: '18rem', marginBottom: '20px', borderRadius: '20px'}} key={index}>
                                <Card.Img variant="top" src={item.images} style={{borderTopLeftRadius:'20px', borderTopRightRadius:'20px'}}/>
                                <Card.Body style={styles.body}>
                                    <Card.Title>{item.nama}</Card.Title>
                                    <Card.Text style={styles.text}>{item.kategori}</Card.Text>
                                    
                                    <div style={styles.button}>
                                        {/* <Button variant="secondary">💖💖💖</Button> */}
                                        {/* //NOTE buat ngambil kalo di klik buy now item 1, ngelink ke detail item 1 */}
                                        <Button variant="dark" as={Link} to={`/detail?id=${item.id}`}>Details 🛒</Button> 
                                    </div>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const styles= {
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '150px'
    },
    text: {
        display:'flex',
        justifyContent:'start'
    },
    button: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    divutama: {
        padding: '20px',
        backgroundImage: `url(${bgprod})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product.data
    }
}

export default connect(mapStateToProps, { getAllProd })(Products)