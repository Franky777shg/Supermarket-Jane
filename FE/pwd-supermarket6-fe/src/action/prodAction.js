import Axios from 'axios'

export const getAllProd = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get(`http://localhost:2000/product/getProduct`)

            console.log(res.data)

            dispatch({ type: "GET_PROD", payload: res.data })
        }
        catch(err) {
            console.log(err)
        }
    }
}
