// export const BASE_URL = 'http://localhost:3001';
export const BASE_URL = 'https://api.movies.galamm.nomoredomains.sbs';
export const BASE_URL_MOVIES_API = 'https://api.nomoreparties.co/beatfilm-movies';

class MainApi {
    constructor(options) {
      this._options = options;
    }
  
    _checkResponse(result) {
      if (result.ok)
          return result.json();
      else
          return Promise.reject(`Ошибка ${result.status}`);
    }
  
    _makeRequest(endpoint, options) {
        return fetch(this._options.baseUrl + endpoint, options).then(this._checkResponse);
    }
  
    getUser() {
      return this._makeRequest('/users/me', {
        credentials: 'include',
        headers: this._options.headers
      });
    }

    setInfoUser(name, email) {
        return this._makeRequest('/users/me', {
          method: 'PATCH',
          credentials: 'include',
          headers: this._options.headers,
          body: JSON.stringify({
            name: name,
            email: email
          })
        });
      }
  
    getSavedMovies() {
      return this._makeRequest('/movies', {
        credentials: 'include',
        headers: this._options.headers
      });
    }
  
    addMovies(card) {
      return this._makeRequest('/movies', {
        method: 'POST',
        credentials: 'include',
        headers: this._options.headers,
        body: JSON.stringify({
          country: card.country,
          director: card.director,
          movieId: card.id,
          duration: card.duration,
          year: card.year,
          description: card.description,
          image: `https://api.nomoreparties.co/${card.image.url}`,
          trailerLink: card.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
          nameRU: card.nameRU,
          nameEN: card.nameEN
        })
      });
    }
  
    deleteCard(moviesId) {
      return this._makeRequest('/movies/' + moviesId, {
        method: 'DELETE',
        credentials: 'include',
        headers: this._options.headers
      });
    }
  
    logOut() {
      return this._makeRequest('/users/me/signout', {
        method: 'POST',
        credentials: 'include',
        headers: this._options.headers,
      });
    }
  }
  
  const mainApi = new MainApi({
    baseUrl: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  
  export default mainApi;