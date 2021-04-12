import axios from 'axios';

const url = 'http://localhost:5050';

class BookController {
    static getBooks(){
        return axios.post(`${url}/book/getbooks`);
    }
    static informationBook(id){
        return axios.post(`${url}/book/informationbook/${id}`);
    }
    static likeBook(id, userlike, stars) {
        return axios.post(`${url}/book/informationbook/${id}/likebook`, {
            userlike,
            stars
        });
    }
}

export default BookController;
