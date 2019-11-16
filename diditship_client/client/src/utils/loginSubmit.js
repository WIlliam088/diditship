import axios from "axios";
import md5 from 'md5';

// Private
function validateForm(username, password) {
  return username.length > 0 && password.length > 0;
}

// Public
export function handleSubmit (settings) {
  if (validateForm(settings.username, settings.password)) {
    var postData = {
      username: settings.username,
      password: md5(settings.password),
    };

    let axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      }
    };

    axios.post('http://localhost:8000/api/v1/login', postData, axiosConfig)
      .then((res) => {
        // console.log("RESPONSE RECEIVED: ", res);
        return {
          token: res.data.token
        };
      })
      .catch((err) => {
        // console.log("AXIOS ERROR: ", err);
        return {
          token: ""
        };
      })
  }
}
