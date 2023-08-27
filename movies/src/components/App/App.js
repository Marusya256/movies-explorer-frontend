import './App.css';
import Register from './../Register/Register.js';
import Login from './../Login/Login.js';
import Main from './../Main/Main.js';
import Movies from './../Movies/Movies.js';
import SavedMovies from './../SavedMovies/SavedMovies.js';
import Profile from './../Profile/Profile.js';
import Footer from './../Footer/Footer.js';
import PageNotFound from './../PageNotFound/PageNotFound.js';
import EditProfile from './../EditProfile/EditProfile.js';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path="/signup" element={<Register />}/>
        <Route  path="/signin" element={<Login />}/>
        <Route  path="/" element={<Main />}/>
        <Route  path="/movies" element={<Movies />}/>
        <Route  path="/saved-movies" element={<SavedMovies />}/>
        <Route  path="/profile" element={<Profile />}/>
        <Route  path="/profile/edit" element={<EditProfile />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
