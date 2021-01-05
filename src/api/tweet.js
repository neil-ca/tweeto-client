import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function addTweetApi(message) {
  const url = `${API_HOST}/tweet`;
  const data = {
    message,
  };

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return { code: response.status, message: "Tweet enviado" };
      }
      return { code: 500, message: "Error del servidor" };
    })
    .catch((err) => {
      return err;
    });
}

export function getUserTweetsApi(idUser, page) {
  const url = `${API_HOST}/tweets?id=${idUser}&page=${page}`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}
export function getTweetsFollowersApi(page = 1) {
  const url = `${API_HOST}/tweets/followers?page=${page}`;
  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenApi()}`,
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}
