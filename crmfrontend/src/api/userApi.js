import axios from "axios";

const rootUrl = "http://localhost:3001/";

const loginUrl = `${rootUrl}v1/user/login`;
const userProfileUrl = `${rootUrl}v1/user`;
const logOutUrl = `${rootUrl}v1/user/logout`

const newAccessTokenUrl = `${rootUrl}v1/tokens`

export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, formData);
      console.log(res);
      resolve(res.data);
      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({
            refreshJWT: res.data.refreshJWT,
          })
        );
      }
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const getUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        return reject("Token not found");
      }

      const res = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
      resolve(res.data);
    } catch (error) {
      console.log(error.message);
      reject(error.message);
    }
  });
};

export const userLogout = async() => {
  try { 

    await axios.delete(logOutUrl, {
        headers:{
            Authorization: sessionStorage.getItem("accessJWT")
        }
    })

  } catch (error) {
    console.log(error);
  }
};


export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const {refreshJWT} =JSON.parse(localStorage.getItem("crmSite"));

      if (!refreshJWT) {
        return reject("Token not found");
      }

      const res = await axios.get(newAccessTokenUrl, {
        headers: {
          Authorization: refreshJWT,
        },
      });

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        
      }

      resolve(true)

      resolve(res.data);
    } catch (error) {
      if(error.message === "Request failed with status code 403"){
        localStorage.removeItem("crmSite")
      }
      console.log(error.message);
      reject(false);
    }
  });
};