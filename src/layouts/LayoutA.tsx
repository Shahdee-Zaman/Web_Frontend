import React from 'react';
import Nav from '../components/layout/Nav';
import Shell from '../components/layout/Shell';
import SidebarIdentity from '../components/sidebar/SidebarIdentity';
import SidebarEducation from '../components/sidebar/SidebarEducation';
import ContactLinks from '../components/sidebar/ContactLinks';
import MainSkills from '../components/main/MainSkills';
import MainExperience from '../components/main/MainExperience';
import MainProjects from '../components/main/MainProjects';
import MainChat from '../components/chat/MainChat';

const LayoutA: React.FC = () => (
  <div className="eo">
    <Nav links={['Skills', 'Experience', 'Projects', 'Chat']} />
    <Shell
      sidebar={<><SidebarIdentity /><SidebarEducation /><ContactLinks /></>}
      main={<><MainSkills /><MainExperience /><MainProjects /><MainChat /></>}
    />
  </div>
);

export default LayoutA;
