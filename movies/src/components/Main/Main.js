import './../App/App.css';
import Promo from './../Promo/Promo.js';
import AboutProject from './../AboutProject/AboutProject.js';
import Portfolio from './../Portfolio/Portfolio.js';
import Techs from './../Techs/Techs.js';
import AboutMe from './../AboutMe/AboutMe.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';
// import Preloader from './../Preloader/Preloader.js';

function Main(props) {
  return (
    <section>
      {/* <Preloader /> */}
      <Header  loggedIn={props.loggedIn} atPageMain={true}/>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </section>
  );
}

export default Main;
