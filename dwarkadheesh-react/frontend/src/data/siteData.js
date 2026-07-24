// ==========================================================================
// Central site data — edit real business details here in one place.
// ==========================================================================

export const site = {
  name: 'Dwarkadheesh Skill Training Centre',
  legalName: 'Dwarkadheesh Academy & Polytechnic – Kaushal Vikas Kendra',
  tagline: 'Skill Training Centre',
  affiliation: 'Ministry of Youth Affairs',
  address: {
    line1: 'Plot No. 83, Nanda Enclave',
    line2: 'Behind Need Hub Departmental Store, Amberhai',
    line3: 'Sector 19, Dwarka, Delhi – 110075',
    mapsQuery: 'Dwarkadheesh Skill Training Centre, Plot No. 83, Nanda Enclave, Sector 19, Dwarka, Delhi 110075'
  },
  phone: '095998 65699',
  phoneHref: 'tel:+919599865699',
  whatsappHref: 'https://wa.me/919599865699',
  email: 'preet@dwarkadheeshpolytechnic.online',
  rating: 4.8,
  reviewCount: 34,
  hours: {
    display: 'Mon – Sat, 9:00 AM – 7:00 PM',
    days: 'Monday – Saturday',
    time: '9:00 AM – 7:00 PM',
    closed: 'Closed on Sundays'
  }
};

export const courses = [
  {
    id: 'dca',
    name: 'DCA',
    fullName: 'Diploma in Computer Applications',
    summary: 'A foundational computer course covering essential digital skills for study, office work and everyday use.',
    covers: ['Computer fundamentals', 'MS Office (Word, Excel, PowerPoint)', 'Internet, Email & Digital Literacy', 'Basic typing & file management'],
    duration: '3–4 Months',
    eligibility: 'Class 10 / 12 pass or equivalent',
    icon: 'monitor'
  },
  {
    id: 'adca',
    name: 'ADCA',
    fullName: 'Advanced Diploma in Computer Applications',
    summary: 'Builds on DCA with accounting, DTP and introductory programming for stronger office & career readiness.',
    covers: ['Advanced MS Office & DTP', 'Tally & basic accounting', 'Internet applications', 'Introduction to programming'],
    duration: '6 Months',
    eligibility: 'Class 12 pass or equivalent',
    icon: 'layers'
  },
  {
    id: 'o-level',
    name: 'O Level',
    fullName: 'O Level (NIELIT-format IT Course)',
    summary: 'A structured, government-format IT foundation course covering programming, web technology and IT tools.',
    covers: ['IT Tools & Business Systems', 'Programming & problem solving', 'Web design fundamentals', 'Project work'],
    duration: '6–12 Months',
    eligibility: 'Class 12 pass or equivalent',
    icon: 'award'
  },
  {
    id: 'ccc',
    name: 'CCC',
    fullName: 'Course on Computer Concepts',
    summary: 'A short, certificate-format course in basic digital literacy — ideal for government job eligibility requirements.',
    covers: ['Computer & OS basics', 'Word processing & spreadsheets', 'Internet, email & digital services', 'Digital financial tools'],
    duration: '1–2 Months',
    eligibility: 'Open to all',
    icon: 'check-badge'
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    fullName: 'Digital Marketing',
    summary: 'Covers organic and paid channels so students can manage a brand\u2019s marketing end-to-end or freelance.',
    covers: ['SEO fundamentals', 'Social media & content marketing', 'Google & Meta Ads basics', 'Analytics & reporting'],
    duration: '2–3 Months',
    eligibility: 'Class 12 pass or equivalent',
    icon: 'megaphone'
  },
  {
    id: 'office-automation',
    name: 'Office Automation',
    fullName: 'Office Automation',
    summary: 'Practical, job-ready training on the software tools used in everyday office and administrative roles.',
    covers: ['MS Office suite (Word, Excel, PowerPoint)', 'Tally & basic accounting entries', 'DTP & document formatting', 'Internet & email for office use'],
    duration: '2–3 Months',
    eligibility: 'Class 10 / 12 pass or equivalent',
    icon: 'briefcase'
  },
  {
    id: 'programming',
    name: 'Programming Languages',
    fullName: 'Programming Languages',
    summary: 'Builds core programming logic and syntax across foundational languages used in academics and industry.',
    covers: ['C & C++', 'Java fundamentals', 'Python basics', 'Logic building & problem solving'],
    duration: '3–4 Months',
    eligibility: 'Class 12 pass or equivalent',
    icon: 'code'
  },
  {
    id: 'web-development',
    name: 'Web Development',
    fullName: 'Web Development',
    summary: 'From HTML/CSS fundamentals through JavaScript and modern frameworks — students build real, deployable projects.',
    covers: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React basics', 'Node.js & deployment fundamentals'],
    duration: '4 Months',
    eligibility: 'Class 12 pass or equivalent, basic computer familiarity',
    icon: 'globe'
  }
];

export const faqs = [
  {
    q: 'Do I need a computer background to join?',
    a: 'No — most of our courses, including DCA and CCC, start from the basics. Our counsellors will recommend the right starting point based on your current level.'
  },
  {
    q: 'Is Dwarkadheesh Skill Training Centre government-affiliated?',
    a: `Yes, the centre is affiliated with the ${site.affiliation}. Ask our counsellors for details on how this applies to individual courses.`
  },
  {
    q: 'Are classes offered on flexible timings?',
    a: 'Yes, we run morning, afternoon and evening batches across the week (Monday to Saturday, 9 AM to 7 PM) so students and working professionals can both attend comfortably.'
  },
  {
    q: 'Do you provide a certificate on completion?',
    a: 'Yes, every student receives a course-completion certificate along with practical project work completed during the program.'
  },
  {
    q: 'Do you help with job placement?',
    a: 'We provide placement assistance — resume support, interview preparation and guidance — though placement itself depends on individual performance and market conditions.'
  }
];
