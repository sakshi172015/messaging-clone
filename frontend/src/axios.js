import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://messaging-clone.herokuapp.com',
});
export default instance