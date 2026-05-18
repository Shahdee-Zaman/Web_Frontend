import React from 'react';
import { DATA } from '../../data/portfolio';

const MainExperience: React.FC = () => (
  <section id="experience">
    <p className="eo-sec-label">Experience</p>
    <div className="eo-experience">
      {DATA.experience.map(e => (
        <div key={e.company} className="eo-exp-item">
          <div>
            <p className="eo-exp-company">{e.company}</p>
            <p className="eo-exp-role">{e.role}</p>
            <ul className="eo-exp-bullets">
              {e.bullets.map((b, i) => <li key={i} className="eo-exp-bullet">{b}</li>)}
            </ul>
          </div>
          <div>
            <p className="eo-exp-period">{e.period}</p>
            <p className="eo-exp-location">{e.location}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MainExperience;
