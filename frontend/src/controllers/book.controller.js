import axios from 'axios';

const url = 'http://localhost:5050';

class BookController {
    static getBooks(){
        return axios.post(`${url}/book/getbooks`);
    }
    static informationBook(id){
        return axios.post(`${url}/book/informationbook/${id}`);
    }
}

export default BookController;
