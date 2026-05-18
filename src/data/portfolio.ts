export const DATA = {
  first_name:     'Shahdee',
  second_name:    'Zaman',
  role:     'Full-Stack Software Engineer',
  location: 'New York City, NY',
  bio:      'AI Engineer with hand-on experience with Langchain and VectorDB. Passionate about building automated agents and agentic applications. Skilled in Python, TypeScript, and cloud technologies.',
  email:    'Shahdeezaman@gmail.com',
  github:   'https://github.com/shahdee-zaman',
  linkedin: 'https://www.linkedin.com/in/shahdee-zaman/',

  skills: [
    'TypeScript', 'React', 'C++', 'Java',
    'Pandas', 'Langchain', 'VectorDB',
    'SQL', 'Redis', 'Docker', 'AWS', 'Python',
    
  ],

  projects: [
    {
      title:   'Historical War Simulation Platform',
      tagline: 'AI Game Master · RAG-grounded · Sub-second response times',
      desc:    'Interactive historical conflict simulator powered by a RAG pipeline that grounds the AI Game Master in curated historical datasets. LangChain handles complex dataset retrieval to deliver evidence-backed tactical advice and realistic scenario outcomes. A React/TypeScript frontend pairs with a FastAPI backend for sub-second response times on real-time strategic queries.',
      detail:  'RAG architecture eliminates hallucinations on tactical queries by anchoring every response to retrieved source documents rather than model weights alone. LangChain orchestrates multi-step retrieval and context assembly before inference. The FastAPI backend is optimized for concurrent data retrieval, keeping latency low even under simultaneous user sessions.',
      stack:   ['React', 'TypeScript', 'FastAPI', 'LangChain', 'Python'],
      repo:    'https://github.com/Shahdee-Zaman/Historical-War-Simulation-Platform',
    },
    {
      title:   'Login Anomaly Detection System',
      tagline: 'Autoencoder neural net · 100k+ auth events · ML threat detection',
      desc:    'Anomaly detection model trained on 100,000+ LANL enterprise authentication events using a PyTorch autoencoder. Trained exclusively on legitimate logins, it flags suspicious patterns via reconstruction error analysis — reducing false negatives on unauthorized login attempts. A preprocessing pipeline handles categorical encoding and normalization for real-time scoring.',
      detail:  'Autoencoders learn the distribution of normal behavior; high reconstruction error signals deviation from that baseline. Training on only legitimate logins avoids label imbalance issues common in fraud datasets. The preprocessing pipeline transforms raw log fields into fixed-width normalized vectors, keeping inference latency minimal for real-time authentication scoring.',
      stack:   ['PyTorch', 'Python', 'Pandas', 'Scikit-learn'],
      repo:    'https://github.com/Shahdee-Zaman',
    },
    {
      title:   'Gemini Token Manager',
      tagline: 'Daily quota automation · Live usage dashboard · Zero overages',
      desc:    'Token quota management tool that automates daily limit resets synchronized to UTC midnight and maintains 30-day usage history — keeping teams within API quota 100% of the time. A real-time React dashboard with auto-refresh surfaces live consumption analytics so teams catch usage spikes before limits are hit.',
      detail:  'Daily resets are triggered by a scheduled job keyed to UTC midnight, ensuring quota windows align precisely with Gemini API billing cycles. Redis stores token counters for sub-millisecond read/write on every API call. The Flask REST layer exposes endpoints consumed by the React frontend, which polls on a configurable interval to keep the usage view current.',
      stack:   ['Python', 'Flask', 'Redis', 'React', 'JavaScript'],
      repo:    'https://github.com/Shahdee-Zaman/Gemini-Token-Manager',
    },
  ],

  experience: [
    {
      company:  'Revature',
      role:     'Gen AI Developer',
      period:   'January 2026 – March 2026',
      location: 'Remote, US',
      bullets: [
        'Designed and deployed RAG pipelines grounding LLM responses in domain-specific knowledge bases, reducing hallucination rates across AI-powered features.',
        'Built production-ready intelligent agents and context-aware applications using Python, LangChain, and LangGraph.',
        'Architected RESTful services with FastAPI, delivering well-documented, scalable endpoints used in real-time applications.',
        'Engineered agentic workflows and multimodal AI pipelines enabling automated decision-making with minimal human intervention.',
      ],
    },
  ],

  education: [
    {
      institution: 'Queens College - CUNY',
      degree:      'B.S. Computer Science',
      period:      '2020 - 2025',
      courses:  'DataBase, Structure',
      note: 'sure'
    },
  ],
};
