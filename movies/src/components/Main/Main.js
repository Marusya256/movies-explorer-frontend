import './../App/App.css';
import Promo from './../Promo/Promo.js';
import AboutProject from './../AboutProject/AboutProject.js';
import Portfolio from './../Portfolio/Portfolio.js';
import Techs from './../Techs/Techs.js';
import AboutMe from './../AboutMe/AboutMe.js';
import Header from './../Header/Header.js';
// import Preloader from './../Preloader/Preloader.js';

function Main() {
  return (
    <main>
      {/* <Preloader /> */}
      <Header onPageMain={true}/>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
