import React from 'react'
import { connect } from 'react-redux'

import {
    Image,
    Button,
    Modal
} from 'react-bootstrap'

import bgprod from '../assets/bgprod.jpg'

import { Link } from 'react-router-dom'

//  NOTE import action
import { getAllProd } from '../action/prodAction'

class ProdDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataProd: {},
            image: '',
            // u/ button di klik berubah warna
            // untuk nampung
            selectedSize: null,
            size: null,
            stok: '',
            total: 0,
            toLogin: false,
            cartErr: false,
            toCart: false
        }
    }

    componentDidMount() {
        this.props.getAllProd()
    }

    render () {

        const {cartErr} = this.state

        return (
            <div style={styles.container}>

            <div style={{ display: 'flex', height: '65vh', justifyContent:'space-evenly'}}>

                <div style={styles.divimg}>
                    <Image src={this.props.product.images} style={{ width: '80%', height: '100%', borderRadius: '50px', marginTop:'150px'}} />
                </div>

                <div style={styles.divdesc}>
                    <h6>Name: {this.props.product.nama}</h6>
                    <p>Category: {this.props.product.kategori}</p>
                    <h4>Price: IDR {this.props.product.harga ? this.props.product.harga.toLocaleString() : 0}</h4>
                    <div style={{ display: 'flex', flexDirection:'column', marginTop: '10px'}}>
                        <h5>Stock: {this.props.product.stock} </h5>

                        <Modal show={cartErr} onHide={() => this.setState({cartErr: false})}>
                            <Modal.Header closeButton>
                                <Modal.Title>⚡ WARNING ⚡</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                PLEASE PICK YOUR SIZE AND QUANTITY OF THE SHOES
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="primary" onClick={() => this.setState({cartErr: false})}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const styles = {
    container: {
        marginTop: '70px',
        // padding: '10px 20px',
        // paddingTop: '80px',
        // background: 'url(https://images.unsplash.com/photo-1445498059992-f5a276e1218d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80) no-repeat center',
        // backgroundSize: 'cover',
        backgroundColor: '#cfdbd5',
        height: '88vh'
    },
    divimg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: '40%',
        paddingBottom: '20px',
    },
    divdesc: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: '60%',
        color: '#424b54',
        paddingTop: '150px'
    },
    divbtn: {
        display: 'flex',
        flexDirection: 'column'
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product.data
    }
}

export default connect(mapStateToProps, {getAllProd})(ProdDetail)