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
        const { cartErr, detailProd, total, stok } = this.state

        // if (this.state.detailProd)

        return (
            <div style={styles.container}>

                <div style={{ display: 'flex', height: '65vh', justifyContent: 'space-evenly' }}>

                    <div style={styles.divimg}>
                        <Image src={detailProd.images} style={{ width: '80%', height: '100%', borderRadius: '50px', marginTop: '150px' }} />
                    </div>

                    <div style={styles.divdesc}>
                        <h4>Name: {detailProd.nama}</h4>
                        <p>Category: {detailProd.kategori}</p>
                        <h4>Price: IDR {detailProd.harga ? detailProd.harga.toLocaleString() : 0}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                            <h5>Stock: {detailProd.stock} </h5>

                            <h6>Quantity:</h6>
                            <div style={styles.divqty}>
                                <Button
                                style={{marginRight: '15px'}}
                                    disabled={total <= 0 ? true : false}
                                    variant='light'
                                    onClick={() => this.setState({ total: total - 1 })}
                                >
                                    <i class="fas fa-minus-square"></i>
                                </Button>

                                <h5 style={{marginTop: '5px'}}>{total}</h5>

                                <Button
                                    style={{marginLeft: '15px'}}
                                    disabled={total >= detailProd.stock ? true : false}
                                    variant='light'
                                    onClick={() => this.setState({ total: total + 1 })}
                                >
                                    <i class="fas fa-plus-square"></i>
                                </Button>

                            </div>
                            <div style={styles.divbtn}>
                                <Button
                                    style={styles.btncart}
                                >
                                    <i class="fas fa-cart-plus"></i>Add To Cart 🛒
                                </Button>
                            </div>


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
        flexDirection: 'row'
    },
    btncart: {
        height: '40px',
        width: "200px"
    },
    divqty: {
        display: 'flex',
        flexDirection: "row",
        marginBottom: '15px'
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product.data
    }
}

export default connect(mapStateToProps, { getAllProd })(ProdDetail)