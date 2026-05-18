import React from 'react';
import { DATA } from '../../data/portfolio';

const ContactLinks: React.FC = () => (
  <div id="contact">
    <p className="eo-sb-label">Contact</p>
    <div className="eo-contact-links">
      {[
        { label: 'Email',    handle: DATA.email,                 href: `mailto:${DATA.email}` },
        { label: 'GitHub',   handle: DATA.github,      href: DATA.github },
        { label: 'LinkedIn', handle: DATA.linkedin, href: DATA.linkedin },
      ].map(l => (
        <a key={l.label} href={l.href} className="eo-contact-link" target="_blank" rel="noopener noreferrer">
          <div>
            <div>{l.label}</div>
            <div className="eo-link-handle">{l.handle}</div>
          </div>
          <span className="eo-link-arr">?</span>
        </a>
      ))}
    </div>
  </div>
);

export default ContactLinks;
