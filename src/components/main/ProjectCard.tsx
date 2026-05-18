import React, { useState } from 'react';
import { DATA } from '../../data/portfolio';

type Project = typeof DATA.projects[0];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="eo-card">
      <div className="eo-card-top">
        <div className="eo-card-title-row">
          <h3 className="eo-card-title">{project.title}</h3>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="eo-gh-link">? GitHub</a>
        </div>
        <p className="eo-card-tagline">{project.tagline}</p>
        <p className="eo-card-desc">{project.desc}</p>
      </div>
      <div
        className="eo-card-footer"
        onClick={() => setOpen(o => !o)}
        role="button" tabIndex={0} aria-expanded={open}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
      >
        <div className="eo-chips">
          {project.stack.map(t => <span key={t} className="eo-chip">{t}</span>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.75rem', flexShrink: 0 }}>
          <span className="eo-expand-label">{open ? 'Less' : 'More detail'}</span>
          <span className={`eo-toggle-arrow${open ? ' open' : ''}`}>?</span>
        </div>
      </div>
      <div className={`eo-card-detail${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="eo-card-detail-inner">{project.detail}</div>
      </div>
    </article>
  );
};

export default ProjectCard;
