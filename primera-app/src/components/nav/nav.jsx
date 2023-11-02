import React from 'react';
import Item from './Item';

const Nav = () => {

  const itemsNav = ['Home', 'Aboot', 'Contact']

  return (
    <nav>
        <ul>
          {
            itemsNav.map((item, i) => <Item key={i} item={item} />)
          }
        </ul>
      </nav>
  );
}

export default Nav;
