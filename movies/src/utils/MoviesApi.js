export const BASE_URL = ' https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(result) {
    if (result.ok)
        return result.json();
    else
        return Promise.reject(`Ошибка ${result.status}`);
  }

  getMovies() {
    return fetch(`${BASE_URL}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;