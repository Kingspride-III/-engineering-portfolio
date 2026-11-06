// EDIT THIS FILE to update your site. Put photos in the images/ folder.
const portfolio = {
  name: 'Your Name',
  email: 'your.email@example.com',
  portrait: '', // e.g. 'images/portrait.jpg'
  bio: 'Mechanical engineering student passionate about hands-on design, prototyping, manufacturing, and solving real-world problems. Explore my work below.'
};

const projects = [
  {
    slug: 'senior-design',
    title: 'Senior Design — Electromechanical System',
    category: 'CAD / Systems Integration',
    summary: 'Interdisciplinary mechanical design, CAD integration, and project coordination.',
    cover: '', // e.g. 'images/senior-design/cover.jpg'
    description: 'Add the project objective, your specific contributions, design constraints, engineering decisions, and results here.',
    gallery: [
      {image: '', caption: 'CAD assembly — describe the design choices.'},
      {image: '', caption: 'Prototype — explain fabrication and testing.'}
    ]
  },
  {
    slug: 'manufacturing-redesign',
    title: 'Manufacturing-Focused Component Redesign',
    category: 'Design for Manufacturing',
    summary: 'A component redesign focused on error-proofing and easier assembly.',
    cover: '',
    description: 'Explain the original manufacturing challenge, poka-yoke strategy, CAD changes, and validation. Avoid claiming quantified improvements until measured.',
    gallery: [{image: '', caption: 'Original design and redesign comparison.'}]
  },
  {
    slug: 'robotic-bartender',
    title: 'Robotic Bartender Concept',
    category: 'Mechatronics / Personal Project',
    summary: 'A moving dispensing-head concept built around repurposed 3D-printer components.',
    cover: '',
    description: 'Describe the concept, motion architecture, docking system, mechanical challenges, and prototype progress.',
    gallery: [{image: '', caption: 'Early system layout or CAD model.'}]
  }
];
