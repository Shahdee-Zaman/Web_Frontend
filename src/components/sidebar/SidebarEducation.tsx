import React from 'react';
import { DATA } from '../../data/portfolio';

const SidebarEducation: React.FC = () => (
  <div id="education">
    <p className="eo-sb-label">Education</p>
    <div className="eo-sb-edu">
      {DATA.education.map(e => (
        <div key={e.institution} className="eo-sb-edu-item">
          <p className="eo-sb-edu-inst">{e.institution}</p>
          <p className="eo-sb-edu-degree">{e.degree}</p>
          <div className="eo-sb-edu-row">
            <p className="eo-sb-edu-note">{e.courses}</p>
            <p className="eo-sb-edu-period">{e.period}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SidebarEducation;
