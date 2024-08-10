import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiUrl,
});

const nbaApi = axios.create({
  baseURL: `https://nba-stories.onrender.com`,
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
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

const getPlayerById = (id) => {
  return api
    .get(`/players/${id}`)
    .then(({data}) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

const putPlayerById = (player, id) => {
  return api
    .put(`/players/${id}`, player)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

const deletePlayerById = (id) => {
  return api
    .delete(`/players/${id}`)
    .then(({data}) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

const postLogin = (login) => {
  return api
    .post(`/account/login`, login)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

const getArticles = () => {
  return nbaApi
    .get(`/articles`)
    .then(({data}) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

export {
  getPlayers,
  postPlayer,
  postLogin,
  getPlayerById,
  putPlayerById,
  deletePlayerById,
  getArticles,
};
