import axios from 'axios'
import {LOGIN_FAILURE, LOGIN_SUCCESS } from '../redux/reducer/fetchUser'
const loginCall = async (userCredentials,dispatch)=>{
    try {
        const res = await axios.post('/auth/login',userCredentials)
        dispatch(LOGIN_SUCCESS(res.data))
    } catch (err) {
        dispatch(LOGIN_FAILURE())
    }
    
}

export default loginCall