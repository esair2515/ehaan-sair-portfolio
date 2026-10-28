export const profile = {
  name: 'Ehaan Sair',
  tagline: 'Business, technology, and everything in between.',
  email: 'ehs223@cornell.edu',
  linkedin: 'https://linkedin.com/in/ehaansair',
  resume: './resume.pdf',
}

export type Project = {
  id: string
  number: string
  name: string
  type: string
  summary: string
  details: string
  tags: string[]
  status: string
  demoUrl?: string
  screenshots?: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    id: 'procureiq', number: '01', name: 'ProcureIQ', type: 'Procurement intelligence platform',
    summary: 'A clearer way to understand the decisions behind organizational spend.',
    details: 'An AI-assisted procurement analytics application featuring supplier comparisons, spend analysis, interactive scenario planning, and business insights. The experience uses synthetic data for demonstration.',
    tags: ['AI-assisted analysis', 'Scenario planning', 'Synthetic data'], status: 'In development',
  },
  {
    id: 'semred', number: '02', name: 'SemRed', type: 'AI-assisted redaction platform',
    summary: 'Exploring a more thoughtful workflow for sensitive documents.',
    details: 'An in-development platform exploring privacy-focused document redaction, conversational rule creation, and human-in-the-loop review.',
    tags: ['Privacy', 'Document workflows', 'Human review'], status: 'In development',
  },
]

export const experience = [
  { org: 'Courselynx', role: 'Director of Growth', dates: 'Jun 2026 — Present' },
  { org: 'Cornell University / US Ignite', role: 'Student Researcher', dates: 'Oct 2026 — Present' },
  { org: 'Apollonian AI', role: 'Advisor · Former Chief Strategic Officer', dates: 'Nov 2024 — Present' },
  { org: 'EGG Labs', role: 'Director of Management', dates: 'Jul 2025 — Sep 2025' },
]

export const research = {
  heading: 'Questions worth sitting with.',
  description: 'Independent research on AI ethics under Dr. Paul Yi, affiliated with St. Jude Children’s Research Hospital. I have also published research in the Research Archive of Rising Scholars.',
  publicationUrl: '',
}
