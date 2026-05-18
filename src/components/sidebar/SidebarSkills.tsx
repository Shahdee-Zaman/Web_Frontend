import React from 'react';
import { DATA } from '../../data/portfolio';

const SidebarSkills: React.FC = () => (
  <div id="skills">
    <p className="eo-sb-label">Technology Stack</p>
    <div className="eo-sb-skills">
      {DATA.skills.map(s => (
        <span key={s} className="eo-sb-skill">{s}</span>
      ))}
    </div>
  </div>
);

export default SidebarSkills;
