import './App.css';
import React from 'react';
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import Main from './../Main/Main.js';
import Movies from './../Movies/Movies.js';
import SavedMovies from './../SavedMovies/SavedMovies.js';
import Profile from './../Profile/Profile.js';
// import Footer from './../Footer/Footer.js';
import PageNotFound from './../PageNotFound/PageNotFound.js';
import EditProfile from './../EditProfile/EditProfile.js';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <section className="App">
      <Routes>
        <Route  path="/signup" element={<Register />}/>
        <Route  path="/signin" element={<Login />}/>
        <Route  path="/" element={<Main loggedIn={loggedIn}/>}/>
        <Route  path="/movies" element={<Movies loggedIn={loggedIn}/>}/>
        <Route  path="/saved-movies" element={<SavedMovies loggedIn={loggedIn}/>}/>
        <Route  path="/profile" element={<Profile loggedIn={loggedIn}/>}/>
        <Route  path="/profile/edit" element={<EditProfile loggedIn={loggedIn}/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;
