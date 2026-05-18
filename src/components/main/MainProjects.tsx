import React from 'react';
import { DATA } from '../../data/portfolio';
import ProjectCard from './ProjectCard';

const MainProjects: React.FC = () => (
  <section id="projects">
    <p className="eo-sec-label">Selected Projects</p>
    <div className="eo-projects">
      {DATA.projects.map(p => <ProjectCard key={p.title} project={p} />)}
    </div>
  </section>
);

export default MainProjects;
