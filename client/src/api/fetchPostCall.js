import axios from 'axios'
import {POST_SUCCESS, POST_FAILURE } from '../redux/reducer/fetchPost'
const fetchPostCall = async (postId,dispatch)=>{
    try {
        const res = await axios.get(`/post/${postId}`)
        dispatch(POST_SUCCESS(res.data))
    } catch (err) {
        dispatch(POST_FAILURE())
    }
    
}

export default fetchPostCall