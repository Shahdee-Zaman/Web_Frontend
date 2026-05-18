import React from 'react';
import { DATA } from '../../data/portfolio';

const SidebarExperience: React.FC = () => (
  <div id="experience">
    <p className="eo-sb-label">Experience</p>
    <div className="eo-sb-exp">
      {DATA.experience.map(e => (
        <div key={e.company} className="eo-sb-exp-item">
          <p className="eo-sb-exp-company">{e.company}</p>
          <div className="eo-sb-exp-row">
            <p className="eo-sb-exp-role">{e.role}</p>
            <p className="eo-sb-exp-period">{e.period}</p>
          </div>
          <ul className="eo-sb-exp-bullets">
            {e.bullets.map((b, i) => (
              <li key={i} className="eo-sb-exp-bullet">{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default SidebarExperience;
