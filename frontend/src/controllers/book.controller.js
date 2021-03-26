import axios from 'axios';

const url = 'http://localhost:5050';

class BookController {
    static getBooks(){
        return axios.post(`${url}/book/getbooks`);
    }
}

export default BookController;
