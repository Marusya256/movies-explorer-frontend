import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../../images/logo.svg';
import React from 'react';
import moviesAuth from './../../utils/MoviesAuth';

function Register(props) {

  // const [errorInput, setErrorInput] = React.useState(false);
  // const [textErrorInput, setTextErrorInput] = React.useState('');

  const [buttonSubmit, setButtonSubmit] = React.useState(false);

  const [validateInputName, setValidateInputName] = React.useState(false);
  const [validateInputEmail, setValidateInputEmail] = React.useState(true);
  const [validateInputPassword, setValidateInputPassword] = React.useState(true);


  const {onRegisteredFailed, onRegisteredSuccess} = props;

  const [formValue, setFormValue] = React.useState({
    useremail: '',
    userpassword: ''
  })

  const navigate = useNavigate();

  function handleActiveButtonSubmit() {
    if (!validateInputName && !validateInputEmail && !validateInputPassword) {
      setButtonSubmit(true);
    } else {
      setButtonSubmit(false);
    }
  }

  React.useEffect(() => {
    handleActiveButtonSubmit();
  },)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('AAAAAAAAAAAAAAAa');

    const { username, useremail, userpassword } = formValue;

    props.handleRegisterUser(username, useremail, userpassword);

    // moviesAuth.register(username, useremail, userpassword)
    // .then(() => {
    //   onRegisteredSuccess();
    // })
    // .then(() => navigate('/signin', {replace: true}))
    // .catch(err => {
    //   setErrorInput(true);
    //   if (err === 'Ошибка 409') {
    //     setTextErrorInput('Пользователь с такой почтой уже существует');
    //   } else {
    //     setTextErrorInput('Что-то пошло не так... ' + err);
    //   }
    // });
  }

  const handleChangeInputName = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    if(e.target.validity.valid) {
      setValidateInputName(false);
    } else {
      setValidateInputName(true);
    }
  }
  
  const handleChangeInputEmail = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    if(e.target.validity.valid) {
      setValidateInputEmail(false);
    } else {
      setValidateInputEmail(true);
    }
  }

  const handleChangeInputPassword = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    if(e.target.validity.valid) {
      setValidateInputPassword(false);
    } else {
      setValidateInputPassword(true);
    }
  }

  // if (validateInputName && validateInputEmail && validateInputPassword) {
  //   setButtonSubmit(true);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (test && !validateInputName && !validateInputEmail && !validateInputPassword) {

  //     const { username, useremail, userpassword } = formValue;
  
  //     moviesAuth.register(username, useremail, userpassword)
  //     .then((res) => {
  //       onRegisteredSuccess();
  //       console.log(res);
  //     })
  //     .then(() => navigate('/signin', {replace: true}))
  //     .catch(err => {
  //       onRegisteredFailed();
  //       setErrorInput(true);
  //       console.log(err);
  //     });
  //   }
  // }

  return (
    <section className="register">
      <img className="logo logo_type_mobile" src={logo} alt='Logo'/>
      <div className="register__content">
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          <h2 className="register__header">Добро пожаловать!</h2>
          <fieldset className="register__field">
            <div className="register__input-cover">
              <label className="register__label" htmlFor="username">Имя</label>
              <input className="register__input register__input_type_register" onChange={handleChangeInputName} type="text" name="username" id="username" required placeholder="Виталий" minLength="2" maxLength="15" />
              <span className={validateInputName ? 'register__input-validate' : 'input-error-hidden'}>Неверное значение для данного поля</span>
            </div>
            <div className="register__input-cover">
              <label className="register__label" htmlFor="useremail">E-mail</label>
              <input className="register__input register__input_type_register" onChange={handleChangeInputEmail} type="email" name="useremail" id="useremail" required placeholder="mail@mail.ru" minLength="2" />
              <span className={validateInputEmail ? 'register__input-validate' : 'input-error-hidden'}>Неверное значение для данного поля</span>
            </div>
            <div className="register__input-cover">
              <label className="register__label" htmlFor="userpassword">Пароль</label>
              <input className="register__input register__input_type_register" onChange={handleChangeInputPassword} type="password" name="userpassword" id="userpassword" required placeholder="Пароль" minLength="8" maxLength="15" />
              <span className={props.errorInput ? 'register__input-error' : 'input-error-hidden'}>{ props.textErrorInput }</span>
              <span className={validateInputPassword ? 'register__input-validate' : 'input-error-hidden'}>Неверное значение для данного поля</span>
            </div>
            <button className={buttonSubmit ? 'button button_type_sub button_type_register' : 'button button-hidden'} disabled={buttonSubmit ? false : true} type="submit">Зарегистрироваться</button>
            <p className="register__text">Уже зарегистрированы? <Link to="/signin" className="register__link">Войти</Link></p>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Register;
