import Axios from 'axios'

export const getCarousel = () => {
    return async (dispatch) => {
        try {
            const res = await Axios.get(`http://localhost:2000/carousel/getCarousel`)

            console.log(res.data)

            dispatch({ type: "GET_CAROUSEL", payload: res.data })
        }
        catch(err) {
            console.log(err)
        }
    }
}