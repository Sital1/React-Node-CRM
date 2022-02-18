import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUyM0BlLmNvbTEiLCJpYXQiOjE2NDUwNzkzMDksImV4cCI6MTY0NTE2NTcwOX0.p0tINtchHOHn7xNfcZPZT-SBcVje6stl-4Sjp3-14SE",
        },
      });
      resolve(result)
    } catch(error) {
        reject(error)
    }
  });
};
