// export const BASE_URL = 'https://api.movies.galamm.nomoredomains.sbs';
export const BASE_URL = 'http://localhost:3001';

class MoviesAuth {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(result) {
    if (result.ok)
        return result.json();
    else
        return Promise.reject(`Ошибка ${result.status}`);
  }

  register (name, email, password) {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    })
    .then(this._checkResponse);
  };

  authorize(email, password) {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then(this._checkResponse);
  };

  getContent(token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        // "Authorization" : `Bearer ${token}`
      }
    })
    .then(this._checkResponse);
  }
}

const moviesAuth = new MoviesAuth();

export default moviesAuth;