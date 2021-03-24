import Axios from 'axios'

export const login = (data) => {
    return async(dispatch) => {
        try {
            const res= await Axios.post(`http://localhost:2000/user/login`, data)
            // console.log('resdata', res.data)

            // localStorage.id= res.data.id_users
            localStorage.token= res.data.token

            dispatch({type: 'LOG_IN', payload: res.data})
        }
        catch(err) {
            dispatch({ type: 'ERR_LOGIN', payload: err.response.data})
            // console.log(err ? `ERROR : ${err.response.data}` : err)
            // console.log(err)
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        try {
            // localStorage.removeItem('id')
            // localStorage.removeItem('email')
            localStorage.removeItem('token')
            dispatch({ type: 'LOG_OUT' })
        }
        catch(err) {
            console.log(err)
        }
        
    }
}

export const keepLogin = () => {
    return async(dispatch) => {
        try {
            // NOTE get token from local storage
            const token= localStorage.getItem('token')
            // console.log('token: ', token)

            // NOTE get user data from token
            const res= await Axios.post(`http://localhost:2000/user/keepLogin`, { token })
            // console.log('resdata:', res.data)

            dispatch({type: 'LOG_IN', payload: res.data})
        }
        catch(err) {
            // console.log(err ? `ERROR : ${err.response.data}` : err)
            // console.log(err)
            localStorage.removeItem('id')
            localStorage.removeItem('token')
            dispatch ({ type: 'LOG_OUT' })
        }
    }
}

export const emailVer = () => {
    return {
        type: 'VERIFICATION'
    }
}

export const editProfile = (body, id) => {
    return async(dispatch) => {
        try {
            // console.log(body, id)

            // NOTE axios disini
            const res= await Axios.patch(`http://localhost:2000/profile/edit/${id}`, body)
            console.log(res.data)

            // REVIEW ambil lagi keeplogin nya disini
            // NOTE get token from local storage
            const token= localStorage.getItem('token')
            // console.log('token: ', token)

            // NOTE get user data from token
            const res1= await Axios.post(`http://localhost:2000/user/keepLogin`, { token })
            // console.log('resdata:', res.data)

            dispatch({type: 'LOG_IN', payload: res1.data})

        }
        catch(err) {
            console.log(err)
        }
    }

}

export const upload = (data, id) => {
    return async(dispatch) => {
        try {
            // console.log('data&id', data,id)
            const option= {
                headers: {'Content-type' : 'multipart/form-data'}
            }

            const res= await Axios.post(`http://localhost:2000/profile/upload/${id}`, data, option)
            console.log(res.data)


            // REVIEW ambil lagi keeplogin nya disini
            // NOTE get token from local storage
            const token= localStorage.getItem('token')
            // console.log('token: ', token)

            // NOTE get user data from token
            const res1= await Axios.post(`http://localhost:2000/user/keepLogin`, { token })
            // console.log('resdata:', res.data)

            dispatch({type: 'LOG_IN', payload: res1.data})
        }
        catch(err) {
            console.log(err)
        }
    }
}

// export const closeErrLogin = () => {
//     return {
//         type: 'CLOSE_ERRLOGIN'
//     }
// }