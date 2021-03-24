let INITIAL_STATE = {
    id_users: null,
    username: '',
    email: '',
    gender: '',
    kota: '',
    umur: null,
    profilepic: '',
    password: '',
    regStatus: null,
    errLogin: '',
    role: ''
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                id_users: action.payload.id_users,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                regStatus: action.payload.status,
                gender: action.payload.gender,
                kota: action.payload.kota,
                umur: action.payload.umur,
                profilepic: action.payload.profilepic,
                role: action.payload.role
            }
        case 'LOG_OUT':
            return INITIAL_STATE
        case 'VERIFICATION':
            return {
                ...state,
                regStatus: 1
            }
        case 'ERR_LOGIN':
            return {
                ...state,
                errLogin: action.payload
            }
        case 'CLOSE_ERRLOGIN':
            return {
                ...state,
                errLogin: ''
            }
        default:
            return state
    }
}