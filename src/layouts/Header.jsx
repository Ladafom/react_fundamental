import { Link, Outlet } from "react-router-dom";
import '../styles/header.css'
import { useContext } from "react";
import { AuthContext } from "../context/context";

function Header() {

  const {isAuthorised, setIsAuthorised} = useContext(AuthContext)

  function logout () {
    setIsAuthorised(false)
    localStorage.removeItem('auth')
  }

  return (
    <>
      <header className="header">
          <Link onClick={logout}>
            Выйти
          </Link>
          <Link to={'/posts'}>Посты</Link>
          <Link to={'/about'}>О сайте</Link>
      </header>
      <Outlet/>
    </>
  );
}

export default Header;