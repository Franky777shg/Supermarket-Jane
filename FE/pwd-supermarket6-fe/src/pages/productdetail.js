import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'

import {
    Image,
    Button,
    Modal
} from 'react-bootstrap'

import bgdetail1 from '../assets/bgdetail1.jpg'

import { Link } from 'react-router-dom'

//  NOTE import action
import { getAllProd } from '../action/prodAction'

class ProdDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataProd: {},
            detailProd: {},
            image: '',
            stok: '',
            total: 0,
            // toLogin: false,
            cartErr: false,
            toCart: false
        }
    }

    componentDidMount() {
        console.log(this.props.location.search)
        let url = this.props.location.search
        url = url.replace("?id=", '')

        Axios.get(`http://localhost:2000/product/detail/${url}`)
            .then((res) => {
                // res.data nya array karena ngambil pake query
                this.setState({ detailProd: res.data[0] })
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }

    render() {
        const { cartErr, detailProd } = this.state

        // if (this.state.detailProd)

        return (
            <div style={styles.container}>

                <div style={{ display: 'flex', height: '65vh', justifyContent: 'space-evenly' }}>

                    <div style={styles.divimg}>
                        <Image src={detailProd.images} style={{ width: '80%', height: '100%', borderRadius: '50px', marginTop: '150px' }} />
                    </div>

                    <div style={styles.divdesc}>
                        <h6>Name: {detailProd.nama}</h6>
                        <p>Category: {detailProd.kategori}</p>
                        <h4>Price: IDR {detailProd.harga ? detailProd.harga.toLocaleString() : 0}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                            <h5>Stock: {detailProd.stock} </h5>

                            <Button>
                                <i class="fas fa-cart-plus"></i>Add To Cart 🛒
                            </Button>

                            <Modal show={cartErr} onHide={() => this.setState({ cartErr: false })}>
                                <Modal.Header closeButton>
                                    <Modal.Title>⚡ WARNING </Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    PLEASE PICK THE PROPER QUANTITY FOR THE ITEM
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="primary" onClick={() => this.setState({ cartErr: false })}>
                                        CLOSE
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
        // marginTop: '70px',
        // padding: '10px 20px',
        // paddingTop: '80px',
        // backgroundSize: 'cover',
        backgroundImage: `url(${bgdetail1})`,
        // backgroundColor: '#cfdbd5',
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

export default connect(mapStateToProps, { getAllProd })(ProdDetail)