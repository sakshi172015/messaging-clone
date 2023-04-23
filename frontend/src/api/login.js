import axios from 'axios'

const BASE_URL = "http://localhost:5000"

const getAllUsers = async() => {
    let res = await axios.get(BASE_URL + '/api/user/', {}, {
        headers: {
            'content-type': 'application/json'
          }
    })
    return res.data

}

const checkIfUserAlreadyExists = async(email, phoneNumber) => {
    let res = await axios(BASE_URL + '/api/user/checkIfUserAlreadyExists?email= ' + email + '&phoneNumber=' + phoneNumber, {}, {
        headers: {
            'content-type': 'application/json'
          }
    })
    return res.data
}

const sendOtp = async(email) => {
    let otp = generateOtp()
    let res = await axios.post(BASE_URL + 'api/user/sendOtp', {
        email: email,
        otp: otp
    })
    return { 
        "res": res.data,
        "otp": otp
    }
}
const generateOtp = () => {
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
} 

export { getAllUsers, sendOtp, checkIfUserAlreadyExists }