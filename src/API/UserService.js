import axios from "axios";

export default class UserService {

  static async get(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return {data: response.data, status: response.status }
    } catch(e){
      return {data: e.response.data.message, status: e.response.status}
    }
  }

}