import axios from 'axios'
const API = `http://localhost:3000/`
async function Signup(email, password) {
    const { data: newData } = await axios.post(API + `signup`, { email, password })
    return newData
}
async function Signin(email, password) {
    console.log(email, password)
    const { data: newData } = await axios.post(API + `signin`, { email, password })
    return newData
}
async function UserInfo(userId) {
    const { data: newData } = await axios.get(API + `userInfo?userId=` + userId)
    return newData
}
export default {
    Signup,
    Signin,
    UserInfo
}