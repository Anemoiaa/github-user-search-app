import axios from "axios";

export default class UserService {

  static async get(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data
    } catch (e) {
      console.log(e);
    }
  }

}