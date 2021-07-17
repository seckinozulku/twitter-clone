import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Icon } from "../component/icon";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isLoginSuccess, setIsLoginSuccess] = useState(true);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // form bilgi değişim
  const formHandleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  // button click
  const onSubmit = (e) => {
    e.preventDefault();

    fetch("userData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
        .then((response) => response.json())
        .then((data) => {
          const isUserMatched = data.find(
              (usr) =>
                  usr.username === user.username &&
                  usr.password === user.password
          );
          if (isUserMatched) {
            localStorage.setItem("isLoggedIn", JSON.stringify(true))
            localStorage.setItem("user", JSON.stringify(isUserMatched))
            setIsLoggedIn(true);
            setIsLoginSuccess(true);
          } else {
            setIsLoginSuccess(false);
          }
        });
  };

  if (isLoggedIn) {
    return <Redirect to="/"/>
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" action="" onSubmit={onSubmit}>
        <div className="login-icon-wrapper">
          <Icon size={50} iconName="twitter" color="#1DA1F2" />
        </div>
        <div>
          <input
            id="username"
            name="username"
            value={user.username}
            onChange={formHandleChange}
            className="user-name-input"
            type="text"
            placeholder="username"
          />
        </div>
        <div>
          <input
            id="password"
            name="password"
            value={user.password}
            onChange={formHandleChange}
            className="password-input"
            type="password"
            placeholder="password"
          />
        </div>
        <button className="login-submit-button">Login</button>
        {!isLoginSuccess && <div>Böyle bir kullanıcı yoktur</div>}
      </form>
    </div>
  );
};

export default Login;
