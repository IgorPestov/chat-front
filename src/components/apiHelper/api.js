import axios from 'axios'
const API_SIGN = `http://localhost:3000/`
async function Signup(email, password) {
    console.log('email', email)
    const { data: newData } = await axios.post(API_SIGN + `signup`, { email, password })
    return newData
}
async function Signin(email, password) {
    console.log(email, password)
    const { data: newData } = await axios.post(API_SIGN + `signin`, { email, password })
    return newData
}

export default {
    Signup,
    Signin,
}