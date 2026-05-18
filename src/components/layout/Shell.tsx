import React from 'react';

interface ShellProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
}

const Shell: React.FC<ShellProps> = ({ sidebar, main }) => (
  <div className="eo-shell">
    <aside className="eo-sidebar">{sidebar}</aside>
    <main className="eo-main">{main}</main>
  </div>
);

export default Shell;
