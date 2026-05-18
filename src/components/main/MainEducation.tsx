import React from 'react';
import { DATA } from '../../data/portfolio';

const MainEducation: React.FC = () => (
  <section id="education">
    <p className="eo-sec-label">Education</p>
    <div className="eo-education">
      {DATA.education.map(e => (
        <div key={e.institution} className="eo-edu-item">
          <div>
            <p className="eo-edu-institution">{e.institution}</p>
            <p className="eo-edu-degree">{e.degree}</p>
            <p className="eo-edu-note">{e.courses}</p>
          </div>
          <p className="eo-edu-period">{e.period}</p>
        </div>
      ))}
    </div>
  </section>
);

export default MainEducation;
