import React from 'react';
import { DATA } from '../../data/portfolio';

const MainSkills: React.FC = () => (
  <section id="skills">
    <p className="eo-sec-label">Technology Stack</p>
    <div className="eo-skills">
      {DATA.skills.map(s => <span key={s} className="eo-skill">{s}</span>)}
    </div>
  </section>
);

export default MainSkills;
