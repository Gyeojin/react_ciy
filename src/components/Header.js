import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Header.css";
import logo from "../assets/cig.png";

const Header = () => {
  //토글 함수 useState 사용으로 계속 상태변화 시켜줌
  const [toggle, setToggle] = useState("true");
  const toggler = () => {
    setToggle(!toggle);
    console.log(toggle); //처음이 true 이므로 첫 클릭 시 false로 나옴
  };
  return (
    <header>
      <div className='center'>
        <h2 className='logo'>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </h2>
        <span className='menu' onClick={toggler}>
          {toggle ? (
            <i className='fa fa-bars'></i> //true면 이 아이콘
          ) : (
            <i className='fa fa-times'></i> //false면 이 아이콘
          )}
          {/*메뉴 버튼 클릭할때마다 true, false로 바꿔줌 */}
        </span>
      </div>
    </header>
  );
};

export default Header;
