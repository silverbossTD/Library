import axios from 'axios';

const url = 'http://localhost:5050';

class SettingController {
    static editProfile(id, description){
        return axios.post(`${url}/setting/editprofile`, {
            id,
            description
        });
    }
    static updateAvatar(id, file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', id);

        return axios.post(`${url}/setting/updateAvatar`, formData);
    }
    static uploadBook(id, file, title, description, author, pdf) {
        const formData = new FormData();

        formData.append('file', file);
        formData.append('id', id);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('pdf', pdf);
        formData.append('author', author);

        return axios.post(`${url}/setting/uploadbook`, formData);
    }
    static getYourBooks(id) {
        return axios.post(`${url}/setting/yourbooks/${id}`);
    }
    static deleteBook(id, userId) {
        return axios.post(`${url}/setting/deletebook/${id}`, {
            userId
        });
    }
    static editBook(userId, bookId, title, author, description) {
        return axios.post(`${url}/setting/editbook/${bookId}`, {
            userId,
            title,
            author,
            description
        });
    }
}

export default SettingController;
