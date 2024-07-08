import axios from "axios";

const api = axios.create({
  baseURL: `https://medway-basketball.azurewebsites.net/api`,
});

const getPlayers = (sort_by) => {
  return api
    .get(`/players`, {
      params: {
        sortBy: sort_by,
      },
    })
    .then(({data}) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

const postPlayer = (player) => {
  return api
    .post(`/players`, player)
    .then(({data}) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

export {getPlayers, postPlayer};
