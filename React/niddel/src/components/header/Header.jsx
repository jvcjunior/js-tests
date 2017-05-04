// Dependencies
import React from 'react';
import Input from '../commom/input/Input.jsx';

// Styles
import './Header.scss';

const Header = (props) => {
  const header = (
    <header>
      <Input inputName="Search" onSearchTermChange={term => props.onSearchTermChange(term)} />
    </header>
  );
  return header;
};

export default Header;
