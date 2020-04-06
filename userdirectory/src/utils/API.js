import axios from "axios";

// Adding in random user api

export default {
  getUsers: function() {
    return axios.get(
      "https://randomuser.me/api/?results=200&nat=us"
    );
  }
};