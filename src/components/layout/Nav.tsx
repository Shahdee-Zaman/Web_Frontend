import React from 'react';

interface NavProps {
  links: string[];
}

const Nav: React.FC<NavProps> = ({ links }) => (
  <nav className="eo-nav">
    <span className="eo-logo"><span className="eo-logo-fire"></span> </span>
    <div className="eo-nav-links">
      {links.map(l => (
        <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
      ))}
    </div>
  </nav>
);

export default Nav;
