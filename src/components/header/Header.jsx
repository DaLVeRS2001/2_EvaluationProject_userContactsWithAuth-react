import React from 'react';
import s from './header.module.scss';
import logout from '../../assets/images/icons/logout.png';

const Header = (props) => {
  const searchHandler = (e) => {
    const value = e.target.value;
    props.addSearchValue(value);
  };

  return (
    <header>
      <div className={s.header__title}>Contacts List</div>
      <input
        onInput={searchHandler}
        value={props.searchValue}
        placeholder="Search"
        type="text"
      />
      <img onClick={props.signOut} src={logout} alt="nothing" />
    </header>
  );
};

export default Header;
