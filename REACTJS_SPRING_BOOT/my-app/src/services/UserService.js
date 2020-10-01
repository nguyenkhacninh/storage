import axios from 'axios'
import BASEURL from './constants'

const baseurl = BASEURL.getBaseURl()
const USERS_REST_API_URL = baseurl + '/users';
const CREATE_USERS_REST_API_URL = baseurl + '/users/create';
const GET_USER_DETAIL_REST_API_URL = baseurl + '/users/';
const UPDATE_USER_REST_API_URL = baseurl + '/users/update';
const DELETE_USER_REST_API_URL = baseurl + '/users/delete';

class UserService {
    getUsers(){
        
        return axios.get(USERS_REST_API_URL);
    }

    createUsers(user){
    
        return axios.post(CREATE_USERS_REST_API_URL, user);
    }

    getUserDetail(userId){
    
        return axios.get(GET_USER_DETAIL_REST_API_URL + userId);
    }

    updateUserDetail(user){
    
        return axios.post(UPDATE_USER_REST_API_URL, user);
    }

    deleteUser(userId){
        const user = {
            userId: userId,
        };
       
        return axios.post(DELETE_USER_REST_API_URL,user);
    }
}
export default new UserService();