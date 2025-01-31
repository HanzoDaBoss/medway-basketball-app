import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const openaiApiUrl = import.meta.env.VITE_OPENAI_API_URL;

const api = axios.create({
  baseURL: apiUrl,
});

const nbaApi = axios.create({
  baseURL: `https://nba-stories.onrender.com`,
});

const openaiApi = axios.create({
  baseURL: openaiApiUrl,
});

const getPlayers = (sort_by) => {
  return api
    .get(`/players`, {
      params: {
        sortBy: sort_by,
      },
    })
    .then(({ data }) => {
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
    .then(({ data }) => {
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
    .then(({ data }) => {
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
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });
};

const getArticleHtmlById = (article) => {
  return openaiApi
    .post(`/nba-article`, article, {
      headers: {
        "Content-Type": "application/json", // Ensure proper content type
        Accept: "text/html", // Expect an HTML response
      },
      responseType: "text", // Important: Treat response as text
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching HTML:", error);
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
  getArticleHtmlById,
};
