import  { axios } from '../../core/index'
 
 async function signin(postData : object){
    const {data : newData} = await axios.post('/signin', postData)
    return newData
 }
 async function signup(postData :object) {
    const {data : newData} = await axios.post('/signup',postData)
    return newData
 }
export default {
    signin,
    signup
 }