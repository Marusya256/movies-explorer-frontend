import './App.css';
import React, { useEffect } from 'react';
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import Main from './../Main/Main.js';
import Movies from './../Movies/Movies.js';
import SavedMovies from './../SavedMovies/SavedMovies.js';
import Profile from './../Profile/Profile.js';
import PageNotFound from './../PageNotFound/PageNotFound.js';
import InfoTooltip from './../InfoTooltip/InfoTooltip.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import moviesApi from './../../utils/MoviesApi';
import ProtectedRoute from "./../ProtectedRoute/ProtectedRoute";
import { useLocation } from 'react-router-dom';
import mainApi from './../../utils/MainApi';
import moviesAuth from './../../utils/MoviesAuth';
import { CurrentUserContext } from './../../context/CurrentUserContext';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [currentUser, setСurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]); //массив всех фильмов с сервера
  const [moviesListSearch, setMoviesListSearch] = React.useState(localStorage.getItem('searchMovies') ? JSON.parse(localStorage.getItem('searchMovies')) : []); //массив найденных фильмов
  const [savedMoviesList, setSavedMoviesList] = React.useState([]); //массив сохраненных фильмов

  const [moviesKeywordInput, setMoviesKeywordInput] = React.useState(''); //ключевое слово для поиска фильмов
  const [savedMoviesKeywordInput, setSavedMoviesKeywordInput] = React.useState(''); //ключевое слово для поиска по сохраненным фильмам
  const [valueCheckbox, setValueCheckbox] = React.useState(localStorage.getItem('selectedCheckbox') ? JSON.parse(localStorage.getItem('selectedCheckbox')) : false); // значение чекбокса короткометражных фильмов

  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);

  const [isNotFound, setIsNotFound] = React.useState(false); // Фильмы по запросу не найдены
  const [isServerError, setIsServerError] = React.useState(false); //Произошла ошибка при поиске фильмов

  const [errorInput, setErrorInput] = React.useState(false); // ошибка при регистрации или авторизации
  const [textErrorInput, setTextErrorInput] = React.useState(''); // текст ошибки

  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies()
      .then((cards) => {
        setSavedMoviesList(cards);
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
    }
  }, [loggedIn])

  const getMovies = () => {
    localStorage.setItem('selectedCheckbox', valueCheckbox);
    if (cards.length === 0) {
      setIsLoading(true);
      moviesApi.getMovies()
      .then(cards => {
        setCards(cards);
        handleFoundMovies(cards, valueCheckbox);
        setIsServerError(false);
        console.log(cards);
      }).catch(err => {
        setIsServerError(true);
        alert(`failed to get card info, err: ${err}`);
      }).finally(() => {
        setIsLoading(false);
      })
    } else {
      handleFoundMovies(cards, valueCheckbox);
    }
  }

  //проверка токена

  const handleLogin = (email) => {
    setLoggedIn(true);
    mainApi.getUser().then(info => {
      setСurrentUser(info);
    }).catch(err => {
      console.log(`failed to get owner info, err: ${err}`);
    })
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      moviesAuth.getContent(jwt)
      .then(res => {
        handleLogin(res.email);
        navigate('/movies', {replace: true});
      })
      .catch(err => {
        alert(`failed to check token, err: ${err}`);
      })
    }
  }

  React.useEffect(() => {
    tokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // запись ключевого слова в переменную

  const updateValueKeyword = (value) => {
    if (location.pathname === '/movies') {
      setMoviesKeywordInput(value);
      localStorage.setItem('moviesKeyword', value);
    } else {
      setSavedMoviesKeywordInput(value);
    }
  };

  useEffect(() => {
    setMoviesKeywordInput(localStorage.getItem('moviesKeyword' || ''));
    setSavedMoviesKeywordInput(localStorage.getItem('savedMoviesKeyword' || ''));
  }, []);

  // поиск фильма по ключевому слову

  const searchMovies = (cards, checkbox) => {
    if (location.pathname === '/movies') {
      const moviesListKeywordSearch = cards.filter((card) => {
        return card.nameRU.toLowerCase().includes(moviesKeywordInput.toLowerCase());
      });
      if (checkbox) {
        return searchShortMovies(moviesListKeywordSearch);
      } else {
        return moviesListKeywordSearch;
      }
    } else {
      if (savedMoviesKeywordInput) {
        const moviesListKeywordSearch = cards.filter((card) => {
          return card.nameRU.toLowerCase().includes(savedMoviesKeywordInput.toLowerCase());
        });
        if (checkbox) {
          return searchShortMovies(moviesListKeywordSearch);
        } else {
          return moviesListKeywordSearch;
        }
      } else {
        if (checkbox) {
          return searchShortMovies(cards);
        } else {
          return cards;
        }
      }
    }
  };

  // поиск фильмов

  const handleFoundMovies = (cards, checkbox) => {

    const foundMovies = searchMovies(cards, checkbox);

    if (location.pathname === '/movies') {
      setMoviesListSearch(foundMovies);
    } else {
      setSavedMoviesList(foundMovies)
    }
  }

  // Меняем состояние чекбокса на короткометражки

  const updateValueCheckbox = () => {
    setValueCheckbox(!valueCheckbox);
    if (!valueCheckbox) {
      if (location.pathname === '/movies') {
        setMoviesListSearch(searchShortMovies(moviesListSearch));
      } else {
        setSavedMoviesList(searchShortMovies(savedMoviesList));
      }
    } else {
      if (location.pathname === '/movies') {
        setMoviesListSearch(searchMovies(cards, !valueCheckbox));
      } else {
        setSavedMoviesList(searchMovies(savedMoviesList));
      }
    }
    localStorage.setItem('selectedCheckbox', !valueCheckbox);
  };
    
  // Поиск короткометражныx фильмов

  const searchShortMovies = (cards) => {
    return cards.filter((cards) => cards.duration <= 40);
  };

  //ошибка "Ничего не найдено"

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      if (moviesListSearch.length === 0 && localStorage.getItem('moviesKeyword') && !isServerError) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      if (savedMoviesList.length === 0 && localStorage.getItem('savedMoviesKeyword') && !isServerError) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [moviesListSearch, savedMoviesList, location.pathname, isServerError]);

  // Сохранение фильма на страницу "Сохраненные фильмы"

  const handleSaveMovie = (card) => {
    if (!(savedMoviesList.some(i => i.movieId === card.id))) {
      mainApi.addMovies(card)
      .then((card) => {
        setSavedMoviesList([card, ...savedMoviesList]);
        console.log(card);
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      alert('Фильм уже сохранен');
    }
  };

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(cards));
  }, [cards]);
  
  useEffect(() => {
    localStorage.setItem('saveMovies', JSON.stringify(savedMoviesList));
  }, [savedMoviesList]);

  useEffect(() => {
    localStorage.setItem('searchMovies', JSON.stringify(moviesListSearch));
  }, [moviesListSearch]);

  // Узнаём сохранен ли фильм

  const findoutMoviesLike = (card) => {
    return savedMoviesList.some(i => i.movieId === card.id);
  }

  // Удаление фильма из списка "Сохраненные фильмы"

  function handleDeleteMovie(card) {
    const jwt = localStorage.getItem('jwt');
    mainApi.deleteCard(card._id, jwt)
      .then((deleteMovies) => {
        setSavedMoviesList((savedMoviesList) => savedMoviesList.filter((i) => i._id !== deleteMovies._id));
        console.log('savedMoviesList: ', savedMoviesList);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  //

  const handleDislike = (card) => {
    const id = savedMoviesList.find((i) => i.movieId === card.id)._id;
      mainApi.deleteCard(id)
        .then(() => {
          setSavedMoviesList((savedMoviesList) => savedMoviesList.filter((i) => i._id !== id));
        })
        .catch((err) => console.log(err));
  }

  // Авторизация пользователя

  const handleAythorizationUser = (useremail, userpassword) => {
    moviesAuth.authorize( useremail, userpassword )
    .then((data) => {
      if (data._id){
        localStorage.setItem('jwt', data._id);
        tokenCheck(data._id);
        navigate('/movies', {replace: true});
      }
    })
    .catch(err => {
      setErrorInput(true);
      if (err === 'Ошибка 401') {
        setTextErrorInput('Неверно указан пароль или почта');
      } else {
        setTextErrorInput('Что-то пошло не так... ' + err);
      }
    });
  }

  // Регистрация пользователя

  const handleRegisterUser = (username, useremail, userpassword) => {
    moviesAuth.register(username, useremail, userpassword)
    .then(() => {
      handleAythorizationUser(useremail, userpassword);
    })
    .catch(err => {
      setErrorInput(true);
      if (err === 'Ошибка 409') {
        setTextErrorInput('Пользователь с такой почтой уже существует');
      } else {
        setTextErrorInput('Что-то пошло не так... ' + err);
      }
    });
  }

  // Обновление информации о пользователе

  function handleUpdateUser({name, email}) {
    mainApi.setInfoUser(name, email).then(info => {
      setСurrentUser(info);
      setIsInfoTooltipPopupOpen(true);
    }).catch(err => {
      alert(`failed to set user info, err: ${err}`);
    })
  }

  // Реализация выхода из аккаунта

  function handleSignOut() {  
    mainApi.logOut();
    setLoggedIn(false);
    localStorage.clear();
    localStorage.removeItem('jwt');
    setSavedMoviesList([]);
    setMoviesKeywordInput('');
    setSavedMoviesKeywordInput('');
    setValueCheckbox(false);
    setMoviesListSearch([]);
    navigate('/', {replace: true});
  }

 // попап с инф-ей об успешном изменении данных пользователя

  function handleInfoTooltipClick() {
    setIsInfoTooltipPopupOpen(true);
  }

  function closePopups() {
    setIsInfoTooltipPopupOpen(false);
  }


  return (
    <section className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <InfoTooltip isOpen={isInfoTooltipPopupOpen} onClose={closePopups} openInfoTooltip={handleInfoTooltipClick}/>
        <Routes>
          <Route  path="/signup" element={<Register handleRegisterUser={handleRegisterUser} errorInput={errorInput} textErrorInput={textErrorInput}/>}/>
          <Route  path="/signin" element={<Login handleLogin={tokenCheck} handleAythorizationUser={handleAythorizationUser} errorInput={errorInput} textErrorInput={textErrorInput}/>}/>
          <Route  path="/" element={<Main loggedIn={loggedIn}/>}/>
          <Route  path="/movies" 
            element={
              <ProtectedRoute 
                moviesList={moviesListSearch}
                savedMoviesList={savedMoviesList}
                isNotFound={isNotFound}
                isServerError={isServerError}
                updateValueCheckbox={updateValueCheckbox}
                updateValueKeyword={updateValueKeyword}
                isLoading={isLoading}
                getMovies={getMovies}
                loggedIn={loggedIn}
                handleSaveMovie={handleSaveMovie}
                moviesKeywordInput={moviesKeywordInput}
                valueCheckbox={valueCheckbox}
                element={Movies}
                location={location}
                findoutMoviesLike={findoutMoviesLike}
                handleDeleteMovie={handleDeleteMovie}
                handleDislike={handleDislike}
              />
            }
          />
          <Route  path="/saved-movies" 
            element={
              <ProtectedRoute
                isNotFound={isNotFound}
                handleDeleteMovie={handleDeleteMovie}
                isServerError={isServerError}
                updateValueCheckbox={updateValueCheckbox}
                valueCheckbox={valueCheckbox}
                updateValueKeyword={updateValueKeyword}
                isLoading={isLoading}
                savedMoviesKeywordInput={savedMoviesKeywordInput}
                getMovies={getMovies}
                moviesList={savedMoviesList}
                moviesListSearch={moviesListSearch}
                savedMoviesList={savedMoviesList}
                loggedIn={loggedIn}
                element={SavedMovies}
                handleFoundMovies={handleFoundMovies}
                location={location}
                />
              }
            />
          <Route  path="/profile" element={<ProtectedRoute loggedIn={loggedIn} element={Profile} signOut={handleSignOut} onUpdateUser={handleUpdateUser}/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </section>
  );
}

export default App;
