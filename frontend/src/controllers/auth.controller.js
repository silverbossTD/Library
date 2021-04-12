import axios from 'axios';

const url = 'http://localhost:5050';

class AuthController {
    static checkCookie(id){
        return axios.post(`${url}/auth/checkCookie`, {
            id
        });
    }
    static login(email, password) {
        return axios.post(`${url}/auth/login`, {
            email,
            password
        });
    }
    static register(username, email, password) {
        return axios.post(`${url}/auth/register`, {
            username,
            email,
            password
        });
    }
    static verify(id) {
        return axios.get(`${url}/auth/verify/${id}`);
    }
}

export default AuthController;
