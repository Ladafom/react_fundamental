import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/context";
import '../styles/registration.css'
import '../styles/App.css'

function Login() {

  const {isAuthorised, setIsAuthorised} = useContext(AuthContext)

  function login(e){
    e.preventDefault()
    setIsAuthorised(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div className="App">
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Введите логин'/>
        <MyInput type='password' placeholder='Введите пароль'/>
        <MyButton>
          Войти
        </MyButton>
      </form>
      <p>Эта форма - заглушка, можно просто нажать кнопку 'Войти', чтобы продолжить</p>
    </div>
  );
}

export default Login;