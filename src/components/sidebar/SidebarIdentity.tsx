import React from 'react';
import { DATA } from '../../data/portfolio';

const SidebarIdentity: React.FC = () => (
  <div>
    <h1 className="eo-name">{DATA.first_name}<br /><span className="eo-name-fire">{DATA.second_name}</span></h1>
    <p className="eo-role">{DATA.role}</p>
    <p className="eo-bio">{DATA.bio}</p>
  </div>
);

export default SidebarIdentity;
