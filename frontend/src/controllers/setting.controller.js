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
}

export default SettingController;
