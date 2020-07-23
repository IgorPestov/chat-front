import  { axios } from '../../core/index'
 
 async function signin(postData : object){
     await axios.post('/signin', postData)
 }
 async function signup(postData :object) {
     await axios.post('/signup',postData)
 }
export default {
    signin,
    signup
 }