import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { emailVer } from '../action'

import {
    Button
} from 'react-bootstrap'

class Verification extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            verified: false
        }
    }

    async componentDidMount () {
        const token= this.props.location.search.substring(1)
        console.log('didmount')

        try {
            const res= await Axios.post('http://localhost:2000/user/verification', {token})

            console.log(res.data)

            // this.setState({ verified: true })
            this.props.emailVer()

        }
        catch(err) {
            console.log(err)
        }
    }

    render () {
        console.log(this.props.status)

        return (
            <div>
                {this.props.status === 1
                ?
                    <>
                    <h3>Your Account has been Verified</h3>
                    <Button as={Link} to='/'>
                        Go To Home
                    </Button>
                    </>
                    :
                    <h3>Waiting for Account Verification...</h3>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.user.regStatus
    }
}

export default connect(mapStateToProps)(Verification)