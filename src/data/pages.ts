/**
 * Content for the navbar pages. All text is taken from the
 * "ITBC – Complete DPR and Execution Plan" document (section numbers in comments).
 * Edit wording here; the layout lives in components/info/.
 */

export type Block =
  | { type: "heading"; text: string }
  | { type: "text"; paragraphs: string[] }
  | { type: "flow"; label?: string; steps: string[] }
  | { type: "cards"; columns?: 2 | 3 | 4 | 5; items: { tag?: string; title: string; text: string }[] }
  | { type: "steps"; items: string[] }
  | { type: "list"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "quote"; text: string }
  | { type: "note"; text: string }
  | { type: "contact" }
  | { type: "links"; items: { label: string; href: string; primary?: boolean }[] };

export type SectionImage = { src: string; alt: string };

export type Section = { id: string; title: string; image?: SectionImage; blocks: Block[] };

export type InfoPage = {
  eyebrow: string;
  title: string;
  lead: string;
  quote?: string;
  sections: Section[];
};

/** User journeys, §33 */
const journey = (user: string) => {
  const rows: Record<string, string> = {
    Student: "Register → Build profile → Learn → Join project → Internship → Portfolio → Industry interaction",
    Faculty: "Register → Join domain → Mentor → Industry interaction → Research / knowledge contribution",
    "IT Professional": "Profile → Expertise → Mentor / speak / consult → Projects → Knowledge contribution",
    College: "Institution profile → TPO/faculty → Industry engagement → Projects → Internships → Outcomes",
    "IT Organization": "Organization profile → Requirements → Talent / projects → Collaboration → Feedback",
    "ITCCF / Training Centre": "Course → Skills → Project → Assessment → Internship / employment pathway",
    "Business User": "Problem → Requirement → Technology category → Provider discovery → Project → Outcome",
    Startup: "Idea → Mentor → Prototype → Customer → Funding pathway → Scale",
    Researcher: "Research → Documentation → IP → Prototype → Industry → Commercialization",
  };
  return [user, rows[user]];
};

const journeyTable = (...users: string[]): Block => ({ type: "table", head: ["User", "Journey"], rows: users.map(journey) });

/** Section photos live in public/images/sections/ */
const photo = (name: string, alt: string): SectionImage => ({ src: `/images/sections/${name}.webp`, alt });

const IMPORTANT_NOTE =
  "ITBC is presented as a proposed ecosystem. Government affiliation, statutory authority, accreditation, certification, funding, placement or official partnership should only be claimed after formal authorization or agreement.";

/* ------------------------------------------------------------------ */

export const aboutPage: InfoPage = {
  eyebrow: "About ITBC",
  title: "Information Technology Business Council",
  lead: "A Proposed Integrated IT e-Governance-Oriented Digital Ecosystem connecting IT Professionals • Organizations • Faculty • ITCCF • Colleges • Students • Startups • Businesses • Researchers • Investors • End Users.",
  quote: "WE ALL ARE IT — NOW LET THERE BE IT BETWEEN US.",
  sections: [
    {
      id: "who-we-are",
      title: "Who We Are",
      image: photo("about-who-we-are", "Students, faculty and IT professionals talking in a technology campus atrium"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §1
            "The Information Technology Business Council (ITBC) is proposed as an integrated, collaborative and technology-enabled ecosystem designed to connect the diverse stakeholders who learn, develop, use, provide, research, invest in and depend upon Information Technology. The proposed platform seeks to reduce fragmentation between students, faculty, colleges, IT professionals, IT organizations, ITCCF, training institutions, startups, entrepreneurs, researchers, investors, businesses and end users by creating structured pathways for information, expertise, communication, projects, opportunities and technology-enabled solutions.",
            "ITBC is not intended merely to be another website, directory, training centre or employment portal. Its larger purpose is to create an interconnected ecosystem in which information can move in both directions: from industry to education, from professionals to students, from business users to technology providers, from researchers to industry, from entrepreneurs to investors, and from real-world problems to technology solution providers.",
          ],
        },
        // §29
        {
          type: "quote",
          text: "ITBC is a proposed integrated ecosystem designed to bring education, professional expertise, industry, business requirements, innovation, entrepreneurship, research, digital knowledge and technology-enabled opportunities into a connected framework.",
        },
        { type: "heading", text: "The Problem We Address" },
        {
          type: "text",
          paragraphs: [
            // §6
            "The IT ecosystem generates large quantities of information, expertise, technology and opportunities. However, the existence of information does not automatically guarantee that the right person receives the right information at the right time.",
            "A student may possess academic qualifications but lack knowledge of current industry requirements. A college may have many students but limited continuous interaction with technology companies. An IT professional may have valuable experience but no structured mechanism to transfer that experience to students and businesses. A small business may require digital transformation but may not know which technology provider or consultant can address its problem. A startup may have an innovative idea but lack mentors, customers, technical experts or investment connections. A researcher may develop an innovation but struggle to identify an industrial or commercial pathway.",
            "ITBC is proposed to address these gaps through structured connectivity rather than merely information accumulation. The central problem is therefore not simply the absence of technology; it is the fragmentation of people, knowledge, opportunities, requirements and execution.",
          ],
        },
        { type: "heading", text: "Five Interconnected Layers" },
        {
          type: "cards",
          columns: 5,
          items: [
            // §7
            { tag: "Layer 1", title: "Digital Gateway", text: "Website, search, profiles, dashboards, forms, opportunities, knowledge resources and structured request mechanisms." },
            { tag: "Layer 2", title: "Associative Network", text: "IT professionals, organizations, colleges, faculty, students, training institutions, startups, researchers, investors and business users." },
            { tag: "Layer 3", title: "Strategic Councils", text: "Domain-specific knowledge and execution groups covering students, academia, industry, digital transformation, AI, startups, funding, research, global collaboration and media." },
            { tag: "Layer 4", title: "Knowledge and Media", text: "Technology journalism, expert interviews, YouTube, articles, research documentation, project stories and knowledge archives." },
            { tag: "Layer 5", title: "Business and Outcome Network", text: "Projects, internships, employment pathways, consulting, entrepreneurship, technology adoption, innovation and end-user solutions." },
          ],
        },
        { type: "flow", label: "Operating flow", steps: ["Gateway", "Network", "Expertise", "Knowledge", "Opportunity", "Action", "Outcome"] },
        { type: "heading", text: "360° Ecosystem and Five-Directional Model" },
        {
          type: "text",
          paragraphs: ["The ITBC ecosystem can be represented as a 360-degree framework with a central e-Governance-oriented coordination gateway."],
        },
        {
          type: "cards",
          columns: 5,
          items: [
            // §8
            { tag: "North", title: "Knowledge and Leadership", text: "Eminent IT professionals, industry leaders, researchers, consultants, mentors and experts." },
            { tag: "East", title: "Innovation and Emerging Technology", text: "AI, data science, IoT, cloud, cybersecurity, robotics, quantum, semiconductors, EV technology and R&D." },
            { tag: "South", title: "Education and Talent", text: "Colleges, universities, faculty, training institutions, ITCCF, students and job seekers." },
            { tag: "West", title: "Business and Industry", text: "IT companies, MNCs, MSMEs, startups, entrepreneurs, solution providers and digital businesses." },
            { tag: "Center", title: "ITBC e-Governance Gateway", text: "Coordination, discovery, communication, documentation, verification, collaboration, feedback and knowledge." },
          ],
        },
        {
          type: "text",
          paragraphs: ["This model gives ITBC a simple visual identity: knowledge enters from every direction, stakeholders connect through the centre, and outcomes flow back to the ecosystem."],
        },
        { type: "note", text: IMPORTANT_NOTE },
      ],
    },
    {
      id: "vision-mission",
      title: "Vision & Mission",
      image: photo("about-vision-mission", "An engineer looking out over a city skyline at sunrise"),
      blocks: [
        { type: "heading", text: "Vision" },
        {
          type: "text",
          paragraphs: [
            // §3
            "To develop a trusted, inclusive and continuously evolving digital ecosystem that connects technology knowledge, professional experience, education, industry, innovation, entrepreneurship, investment and end-user requirements, enabling individuals and organizations to convert information into meaningful opportunities and measurable outcomes.",
            "ITBC’s long-term vision is to create an environment where a student looking for knowledge, a faculty member looking for industry exposure, an IT professional looking to contribute expertise, a college looking for industry engagement, an IT company looking for talent, a startup looking for mentorship, an entrepreneur looking for technology, an investor looking for opportunities, or a business owner looking for a digital solution can find an appropriate pathway within one connected ecosystem.",
          ],
        },
        { type: "heading", text: "Mission" },
        {
          type: "text",
          paragraphs: [
            // §4
            "The mission of ITBC is to connect people, knowledge, technology and opportunities through a structured digital network that promotes learning, professional collaboration, employment, entrepreneurship, innovation, research, business development and responsible technology adoption.",
            "ITBC will seek to build practical bridges between students and faculty; students and IT professionals; colleges and IT companies; training centres and industry; ITCCF and colleges; researchers and industry; startups and mentors; entrepreneurs and technology providers; businesses and IT solution providers; investors and projects; and society and technology knowledge.",
          ],
        },
        { type: "heading", text: "Core Aims and Objectives" },
        {
          type: "list",
          items: [
            // §5
            "To create a structured common gateway for stakeholders who currently operate through disconnected channels, making relevant information, expertise and opportunities easier to discover and connect.",
            "To build a professional IT knowledge network through which experienced professionals, faculty members, researchers, entrepreneurs, consultants and technology specialists can transfer practical knowledge to students, businesses and society.",
            "To bridge education and industry through expert sessions, internships, live projects, industry visits, faculty development, curriculum feedback, mentoring and placement preparation.",
            "To make technology more accessible to non-IT businesses by translating business problems into understandable technology requirements and connecting them with appropriate solution providers.",
            "To strengthen innovation and entrepreneurship by creating pathways from research and ideas to prototypes, mentors, customers, investment and commercialization.",
            "To develop a trustworthy digital ecosystem through profile verification, transparent participation categories, privacy controls, consent, feedback, complaint handling and clear separation between information, promotion and formal certification.",
          ],
        },
        { type: "heading", text: "Master Statements and Strategic Formulas" },
        {
          type: "cards",
          columns: 3,
          items: [
            // §30
            { tag: "Core slogan", title: "WE ALL ARE IT — NOW LET THERE BE IT BETWEEN US.", text: "" },
            { tag: "Supporting formula", title: "CONNECT • COLLABORATE • CREATE • COMMERCIALIZE • CONTRIBUTE", text: "" },
            { tag: "Institutional philosophy", title: "TOGETHER WE LEARN • TOGETHER WE INNOVATE • TOGETHER WE GROW • TOGETHER WE PROSPER", text: "" },
            { tag: "Ecosystem formula", title: "GATEWAY + PEOPLE + EXPERTISE + KNOWLEDGE → ITBC DIGITAL ECOSYSTEM", text: "" },
            { tag: "Five-E formula", title: "EDUCATION → EXPERIENCE → EMPLOYMENT → ENTREPRENEURSHIP → EMPOWERMENT", text: "" },
            { tag: "Knowledge formula", title: "INFORMATION → KNOWLEDGE → CONNECTION → ACTION → OUTCOME → IMPACT", text: "" },
          ],
        },
        {
          type: "flow",
          label: "Continuous ecosystem cycle",
          steps: ["Education", "Skills", "Experience", "Projects", "Employment / Entrepreneurship", "Business", "Innovation", "Research & Knowledge", "Mentorship", "Next Generation", "Education"],
        },
        {
          type: "quote",
          text: "ITBC shall not be designed merely as a platform for displaying information; it shall be designed as a platform for converting information into verified connections, verified connections into collaborative action, collaborative action into measurable outcomes, and measurable outcomes into reusable knowledge for the wider ecosystem.",
        },
      ],
    },
    {
      id: "leadership",
      title: "Leadership & Strategic Councils",
      image: photo("about-leadership", "Senior leaders in discussion around a boardroom table"),
      blocks: [
        { type: "heading", text: "Organizational Structure" },
        {
          type: "flow",
          // §25
          steps: [
            "ITBC Governing / Steering Body",
            "Executive Director / Project Lead",
            "Strategic Councils",
            "Domain Heads",
            "State / Regional Coordinators",
            "Institutional Coordinators",
            "College / ITCCF / Industry Nodes",
            "Students / Professionals / Business Users",
          ],
        },
        { type: "text", paragraphs: ["The initial core team can include:"] },
        {
          type: "list",
          items: [
            "Project Director",
            "Technology Head",
            "Web/Product Manager",
            "Industry Relations",
            "Academic Relations",
            "ITCCF Coordination",
            "Student and TPO Coordination",
            "Business Development",
            "Research and Documentation",
            "Technology Journalism",
            "Digital Media",
            "Verification and Data Quality",
            "Legal/Compliance Advisor",
            "Finance/Administration",
          ],
        },
        { type: "text", paragraphs: ["Some functions can initially be advisory or part-time."] },
        { type: "heading", text: "Ten Strategic Councils" },
        {
          type: "cards",
          columns: 2,
          items: [
            // §9
            { tag: "01", title: "Student Development & Employability Council", text: "Skills, careers, internships, projects, mentoring and professional development." },
            { tag: "02", title: "Academic Excellence & Faculty Development Council", text: "Faculty-industry interaction, expert sessions, curriculum feedback, research and faculty development." },
            { tag: "03", title: "Corporate & IT Industry Partnership Council", text: "Relationships with IT companies, MNCs, MSMEs, product companies, service companies and startups." },
            { tag: "04", title: "Digital Transformation Services Council", text: "Websites, cloud, ERP, CRM, cybersecurity, AI, analytics, automation, e-commerce and digital business systems." },
            { tag: "05", title: "AI & Emerging Technologies Council", text: "AI, machine learning, data science, cybersecurity, IoT, cloud, robotics, blockchain, quantum and other emerging fields." },
            { tag: "06", title: "Startup, Entrepreneurship & Incubation Council", text: "Idea validation, technology, prototypes, mentors, markets, funding and scaling." },
            { tag: "07", title: "Investment, CSR & Funding Council", text: "CSR programmes, project funding, innovation funding, startup investment and social-impact opportunities." },
            { tag: "08", title: "Research, Innovation & Intellectual Property Council", text: "Research documentation, IP, prototypes, technology transfer and commercialization pathways." },
            { tag: "09", title: "Global Partnerships & International Collaboration Council", text: "International professionals, universities, companies, research networks and knowledge exchange." },
            { tag: "10", title: "Media, Knowledge & Digital Communication Council", text: "Technology journalism, expert interviews, YouTube, knowledge notes, project documentation and public technology communication." },
          ],
        },
      ],
    },
    {
      id: "roadmap",
      title: "Roadmap & Impact",
      image: photo("about-roadmap", "A project team planning a timeline with sticky notes on a glass wall"),
      blocks: [
        { type: "heading", text: "Implementation and Execution Plan" },
        {
          type: "cards",
          columns: 5,
          items: [
            // §24
            { tag: "Phase 1 · 0–3 months", title: "Foundation", text: "Establish organizational structure, brand identity, website architecture, governance policy, advisory structure, membership categories, data policy, verification policy, basic database and initial professional network." },
            { tag: "Phase 2 · 3–6 months", title: "Pilot Ecosystem", text: "Begin with a manageable geographic and institutional pilot, for example Hyderabad/Telangana, and establish initial relationships with selected colleges, IT professionals, IT companies, training centres, ITCCF, faculty, TPOs, startups and business users." },
            { tag: "Phase 3 · 6–12 months", title: "Digital Expansion", text: "Launch professional directory, college directory, faculty network, student profiles, IT organization profiles, project exchange, internship section, expert interview series, technology journalism, YouTube channel and business requirement system." },
            { tag: "Phase 4 · Year 2", title: "Regional Expansion", text: "Expand through Telangana, South India and other states using regional coordinators and institutional nodes, based on demonstrated pilot results." },
            { tag: "Phase 5 · Year 3+", title: "National Network", text: "Build a broader national professional network, college network, faculty network, ITCCF network, startup network and technology knowledge archive after the operational model has been validated." },
          ],
        },
        { type: "heading", text: "KPI and Impact Framework" },
        {
          type: "cards",
          columns: 5,
          items: [
            // §27
            { title: "Input", text: "Professionals, colleges, companies, faculty, students and business users." },
            { title: "Activity", text: "Training, meetings, projects, interviews and field visits." },
            { title: "Output", text: "Profiles, projects, internships, articles, videos and knowledge notes." },
            { title: "Outcome", text: "Skills, employment pathways, business solutions, innovation and collaboration." },
            { title: "Impact", text: "Technology-enabled economic and social value." },
          ],
        },
        {
          type: "quote",
          text: "ITBC shall measure its success not merely by the number of people registered on the platform, but by the quality of connections created, problems addressed, knowledge transferred, opportunities generated and measurable outcomes achieved.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const wingsPage: InfoPage = {
  eyebrow: "Our Wings",
  title: "Training, Startups and Research",
  // §31
  lead: "The central opportunity is to create a systematic bridge between education and industry, students and professionals, faculty and technology, research and commercialization, startups and markets, businesses and solution providers, and knowledge and society.",
  sections: [
    {
      id: "itccf",
      title: "ITCCF – IT Coaching Centres Foundation",
      image: photo("wings-itccf", "A trainer guiding students at computers in an IT coaching centre"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §13
            "ITCCF – IT Coaching Centres Foundation – can function as a proposed training ecosystem component within the broader ITBC framework.",
            "ITCCF centres can communicate courses, trainers, technologies, duration, fees, subsidies where applicable, projects, internships, industry requirements and student outcomes.",
          ],
        },
        { type: "flow", label: "ITCCF pathway", steps: ["Training", "Skill", "Project", "Assessment", "Internship", "Employment / Entrepreneurship"] },
        { type: "heading", text: "The TPO Network" },
        {
          type: "text",
          paragraphs: [
            // §12
            "The TPO network can act as a practical information channel for employer requirements, student employability, internships, placement preparation and industry expectations. Participation should be described as associative unless formal partnership is established.",
          ],
        },
        journeyTable("ITCCF / Training Centre"),
        {
          type: "note",
          text: "ITBC should clearly distinguish its platform role from any independent training, certification or accreditation authority. Any certification authority should be formally identified and legally authorized before such claims are made.",
        },
      ],
    },
    {
      id: "startup-hub",
      title: "Startup Hub",
      image: photo("wings-startup-hub", "Startup founders working on a hardware prototype in a co-working space"),
      blocks: [
        { type: "flow", label: "Startup pathway", steps: ["Idea", "Validation", "Technology", "Prototype", "Market", "Funding", "Business", "Scale"] },
        {
          type: "text",
          paragraphs: [
            // §21
            "The platform can provide access to mentors, project collaborators, customers, technical experts and information about potential funding pathways, while clearly distinguishing opportunity discovery from funding guarantees.",
          ],
        },
        {
          type: "cards",
          columns: 3,
          items: [
            { tag: "Council 06", title: "Startup, Entrepreneurship & Incubation Council", text: "Idea validation, technology, prototypes, mentors, markets, funding and scaling." },
            { tag: "Council 07", title: "Investment, CSR & Funding Council", text: "CSR programmes, project funding, innovation funding, startup investment and social-impact opportunities." },
            // §28
            { tag: "Mentor network", title: "ITBC Professional Mentor Network", text: "Professionals mentor students or young professionals in defined cohorts, subject to capacity and consent." },
          ],
        },
        journeyTable("Startup"),
      ],
    },
    {
      id: "research",
      title: "Research & Innovation",
      image: photo("wings-research", "Researchers examining a robotic arm and circuit boards in a lab"),
      blocks: [
        { type: "flow", label: "Research-to-Market pathway", steps: ["Research", "Documentation", "IP", "Prototype", "Industry", "Commercialization"] },
        {
          type: "cards",
          columns: 3,
          items: [
            { tag: "Council 08", title: "Research, Innovation & Intellectual Property Council", text: "Research documentation, IP, prototypes, technology transfer and commercialization pathways." },
            { tag: "Council 05", title: "AI & Emerging Technologies Council", text: "AI, machine learning, data science, cybersecurity, IoT, cloud, robotics, blockchain, quantum and other emerging fields." },
            { tag: "Council 09", title: "Global Partnerships & International Collaboration Council", text: "International professionals, universities, companies, research networks and knowledge exchange." },
          ],
        },
        { type: "heading", text: "ITBC Real Problem Lab" },
        {
          type: "text",
          paragraphs: [
            // §28
            "Real business or institutional problems are submitted, studied by students and professionals, guided by faculty, prototyped by startups or technology providers and tested by end users.",
          ],
        },
        journeyTable("Researcher"),
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const membershipPage: InfoPage = {
  eyebrow: "Membership",
  title: "Stakeholder Ecosystem",
  // §30
  lead: "Every stakeholder entering the ITBC ecosystem should have a clearly identifiable value pathway — what the stakeholder can contribute, what the stakeholder can learn, what the stakeholder can access, what the stakeholder can collaborate on and what measurable outcome can potentially be achieved.",
  sections: [
    {
      id: "stakeholders",
      title: "Stakeholder Ecosystem",
      image: photo("membership-stakeholders", "Professionals greeting each other at a networking gathering"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §10
            "The ITBC stakeholder ecosystem should be designed as a network of complementary roles rather than as a hierarchy. Each participant should be able to contribute something, receive something and participate in defined activities.",
            "Primary stakeholders include IT professionals, IT organizations, colleges, universities, faculty, TPOs, ITCCF and training institutions, students, job seekers, startups, entrepreneurs, researchers, investors, CSR organizations, consultants, government-related ecosystems, MSMEs, business users and technology end users.",
          ],
        },
      ],
    },
    {
      id: "students",
      title: "Student Membership",
      image: photo("membership-students", "Engineering students working together on laptops on campus"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §14
            "The student should be treated as a future professional and contributor, not merely as an applicant.",
          ],
        },
        { type: "flow", label: "Student journey", steps: ["Learn", "Practice", "Document", "Verify", "Publish", "Connect", "Experience", "Earn", "Lead"] },
        {
          type: "text",
          paragraphs: [
            "Students can maintain an ITBC professional portfolio containing academic profile, skills, projects, certifications, internships, articles, videos, expert interviews, research, innovation, faculty feedback and industry feedback.",
          ],
        },
        journeyTable("Student"),
        { type: "links", items: [{ label: "Student Registration", href: "/register/student", primary: true }, { label: "Student Login", href: "/login/student" }] },
      ],
    },
    {
      id: "institutions",
      title: "Institution Membership",
      image: photo("membership-institutions", "A professor walking and talking with students in a college corridor"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §12
            "ITBC can offer colleges an institutional gateway covering student registration, faculty participation, TPO interaction, industry requirements, internships, expert sessions, project opportunities, training programmes, campus events, faculty development, industry visits and student portfolios.",
            "Faculty should become active knowledge participants rather than only academic instructors. They can serve as subject experts, research mentors, project guides, industry liaisons, student mentors, technology journalism mentors and academic reviewers.",
            "The TPO network can act as a practical information channel for employer requirements, student employability, internships, placement preparation and industry expectations. Participation should be described as associative unless formal partnership is established.",
          ],
        },
        journeyTable("College", "Faculty"),
        { type: "links", items: [{ label: "Faculty Registration", href: "/register/faculty", primary: true }, { label: "Partner Registration", href: "/register/partner" }] },
      ],
    },
    {
      id: "corporate",
      title: "Corporate Membership",
      image: photo("membership-corporate", "IT professionals in a meeting in a glass-walled office"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §11
            "IT professionals should not be treated merely as directory entries. ITBC can create structured professional profiles covering domain, experience, skills, projects, research, certifications, mentoring interests, speaking interests, consultancy interests and collaboration interests.",
            "Professionals may participate as mentors, experts, trainers, consultants, interviewees, project guides, industry advisors, researchers, startup mentors and technology reviewers.",
            "IT organizations can create structured profiles explaining who they are, what they do, what technologies they use, what talent they need, what projects they offer and what collaborations they seek.",
          ],
        },
        { type: "flow", label: "This creates the pathway", steps: ["Company", "Requirement", "ITBC", "College / Training Centre", "Talent / Project", "Outcome"] },
        journeyTable("IT Professional", "IT Organization"),
        { type: "heading", text: "Business People and End Users" },
        {
          type: "text",
          paragraphs: [
            // §15
            "The end-user/business layer is essential. ITBC should not become an ecosystem serving only IT professionals.",
          ],
        },
        journeyTable("Business User"),
        { type: "links", items: [{ label: "Corporate Registration", href: "/register/corporate", primary: true }, { label: "Post a Business Requirement", href: "/projects#post-project" }] },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const projectsPage: InfoPage = {
  eyebrow: "Projects",
  title: "Project Exchange",
  // §20
  lead: "ITBC can create a Project Exchange covering student projects, college projects, industry projects, startup projects, research projects, social-impact technology projects and business requirements.",
  sections: [
    {
      id: "live-projects",
      title: "Live Projects",
      image: photo("projects-live-projects", "Young developers collaborating on a software project at their monitors"),
      blocks: [
        { type: "heading", text: "What each project contains" },
        {
          type: "list",
          items: ["Project title", "Problem", "Objective", "Required technology", "Skills required", "Expected output", "Timeline", "Project owner", "Participants", "Status", "Outcome"],
        },
        { type: "heading", text: "Skill–Project Matching" },
        {
          type: "text",
          paragraphs: [
            "A future Skill–Project Matching Engine can identify potential matches between a person's documented skills and project requirements. Matching should be treated as a recommendation mechanism, not a guarantee of selection or employment.",
          ],
        },
        { type: "heading", text: "One Project – Many Benefits" },
        {
          type: "text",
          paragraphs: [
            // §28
            "A single real-world project can create student learning, faculty learning, a business solution, professional experience, research material, startup opportunities, journalism content and an archived case study.",
          ],
        },
      ],
    },
    {
      id: "post-project",
      title: "Post a Project",
      image: photo("projects-post-project", "A shop owner showing a tablet to an IT consultant who is taking notes"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §15
            "A business owner should be able to submit a business problem, describe the current system, identify the desired improvement, indicate a budget range and timeline, and receive a structured pathway toward relevant technology categories and providers.",
          ],
        },
        {
          type: "flow",
          label: "Proposed process",
          steps: ["Business Problem", "Requirement Document", "Technology Category", "Suitable Providers", "Proposals", "User Review", "Agreement / Project", "Implementation", "Feedback", "Outcome"],
        },
        { type: "text", paragraphs: ["This converts ITBC from a directory into an outcome-oriented ecosystem."] },
        { type: "heading", text: "Problem-to-Solution Engine" },
        {
          type: "steps",
          items: [
            // §18
            "User identifies the problem",
            "ITBC classifies the requirement",
            "Technology domain is identified",
            "Suitable professionals or organizations are identified",
            "Proposals or solution approaches are received",
            "User reviews options",
            "Agreement or project begins",
            "Implementation occurs",
            "Feedback is collected",
            "Outcome is documented",
          ],
        },
        { type: "text", paragraphs: ["This workflow creates a practical connection between ordinary business needs and the professional IT ecosystem."] },
        { type: "heading", text: "ITBC Ask–Connect–Solve System" },
        {
          type: "cards",
          columns: 4,
          items: [
            // §28
            { title: "Ask", text: "The user identifies a question or problem." },
            { title: "Connect", text: "ITBC identifies the relevant person, organization or knowledge." },
            { title: "Solve", text: "Stakeholders work toward an appropriate solution." },
            { title: "Document", text: "The outcome becomes reusable knowledge." },
          ],
        },
        {
          type: "quote",
          text: "Technology should not remain limited to technology companies; legitimate businesses, institutions and social organizations should be able to understand and appropriately use technology.",
        },
        { type: "links", items: [{ label: "Register to Post a Project", href: "/register/corporate", primary: true }, { label: "Contact ITBC", href: "/contact" }] },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const internshipsPage: InfoPage = {
  eyebrow: "Internship & Jobs",
  title: "Students and Employability",
  // §5
  lead: "ITBC aims to bridge education and industry through expert sessions, internships, live projects, industry visits, faculty development, curriculum feedback, mentoring and placement preparation.",
  sections: [
    {
      id: "internships",
      title: "Internships",
      image: photo("internships-internships", "A senior engineer mentoring an intern at her laptop"),
      blocks: [
        { type: "flow", label: "Training pathway", steps: ["Training", "Skill", "Project", "Assessment", "Internship", "Employment / Entrepreneurship"] },
        { type: "heading", text: "ITBC Opportunity Bank" },
        {
          type: "text",
          paragraphs: [
            // §28
            "Jobs, internships, projects, training, mentoring, events, research, startup opportunities, business requirements, consultancy and collaboration, each carrying a clear status such as Submitted, Under Review, Verified or Closed.",
          ],
        },
        { type: "flow", label: "Opportunity status", steps: ["Submitted", "Under Review", "Verified", "Closed"] },
        { type: "heading", text: "ITBC Professional Mentor Network" },
        { type: "text", paragraphs: ["Professionals mentor students or young professionals in defined cohorts, subject to capacity and consent."] },
        journeyTable("Student", "ITCCF / Training Centre"),
      ],
    },
    {
      id: "placements",
      title: "Placements",
      image: photo("internships-placements", "A graduate in a placement interview with two recruiters"),
      blocks: [
        {
          type: "text",
          paragraphs: ["ITBC should avoid blanket employment guarantees. Instead, it should build an employability pipeline:"],
        },
        {
          type: "flow",
          label: "Employability pipeline",
          steps: ["Skill", "Assessment", "Project", "Portfolio", "Internship", "Industry Interaction", "Application", "Interview", "Employment / Entrepreneurship"],
        },
        { type: "flow", label: "Company requirement pathway", steps: ["Company", "Requirement", "ITBC", "College / Training Centre", "Talent / Project", "Outcome"] },
        {
          type: "text",
          paragraphs: [
            "The TPO network can act as a practical information channel for employer requirements, student employability, internships, placement preparation and industry expectations.",
            "Matching should be treated as a recommendation mechanism, not a guarantee of selection or employment.",
          ],
        },
        journeyTable("College", "IT Organization"),
        { type: "links", items: [{ label: "Student Registration", href: "/register/student", primary: true }, { label: "Corporate Registration", href: "/register/corporate" }] },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const resourcesPage: InfoPage = {
  eyebrow: "Resources",
  title: "Knowledge, Journalism and YouTube Wing",
  // §19
  lead: "A dedicated ITBC School of Technology Journalism & Digital Media can become the communication bridge between the IT ecosystem and society.",
  quote: "REPORT TECHNOLOGY • CONNECT EXPERIENCE • EXPLAIN INNOVATION • GUIDE THE NEXT GENERATION.",
  sections: [
    {
      id: "certifications",
      title: "Certifications & Verification",
      image: photo("resources-certifications", "An officer reviewing an applicant’s documents at a desk"),
      blocks: [
        {
          type: "note",
          // §13
          text: "ITBC should clearly distinguish its platform role from any independent training, certification or accreditation authority. Any certification authority should be formally identified and legally authorized before such claims are made.",
        },
        { type: "heading", text: "Trust Framework" },
        {
          type: "text",
          paragraphs: [
            // §22
            "A large network is valuable only when its information can be trusted. ITBC should therefore build a Trust Framework from the beginning.",
          ],
        },
        {
          type: "steps",
          items: [
            "Registered",
            "Profile Completed",
            "Documents Verified where appropriate",
            "Professional or Institutional Validation",
            "Formal ITBC Collaboration where an actual collaboration exists",
          ],
        },
        { type: "text", paragraphs: ["Registered must never automatically be presented as ITBC certified. The platform should maintain clear participation labels."] },
        { type: "heading", text: "Governance Framework" },
        {
          type: "list",
          items: [
            "Identity verification",
            "Organization verification",
            "Transparent commercial relationships",
            "Conflict-of-interest disclosure",
            "Data privacy",
            "Consent",
            "Complaint mechanisms",
            "Corrections",
            "Provider feedback",
            "No false employment guarantees",
            "No false funding guarantees",
            "No false government-affiliation claims",
          ],
        },
      ],
    },
    {
      id: "blogs",
      title: "Blogs & Knowledge Library",
      image: photo("resources-blogs", "A technology writer working on a laptop in a library"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §7 Layer 4, §19
            "Knowledge and Media: technology journalism, expert interviews, YouTube, articles, research documentation, project stories and knowledge archives.",
            "A single expert interview can become a video, article, knowledge note, short clips, expert profile and archived resource. Editorial material should be separated clearly from paid or sponsored promotion.",
          ],
        },
        { type: "heading", text: "ITBC Expertise Bank" },
        {
          type: "text",
          paragraphs: [
            // §28
            "A structured mechanism answering the question “Who knows what?” across technology, education, business, research, entrepreneurship and digital transformation.",
          ],
        },
        { type: "flow", label: "Knowledge-to-Action model", steps: ["Information", "Knowledge", "Connection", "Action", "Result"] },
        { type: "flow", label: "Five-level development path", steps: ["Know", "Learn", "Do", "Connect", "Create Value"] },
      ],
    },
    {
      id: "talks",
      title: "ITBC Talks",
      image: photo("resources-talks", "A host interviewing a technology expert in a podcast studio"),
      blocks: [
        { type: "text", paragraphs: ["Potential programmes include:"] },
        {
          type: "list",
          items: [
            "ITBC Expert Talks",
            "Tech Talks",
            "Career Talks",
            "Industry Voices",
            "Startup Stories",
            "Campus Connect",
            "Project Stories",
            "Placement Insights",
            "ITCCF Connect",
            "Journalism on Wheels",
            "Future Forum",
          ],
        },
        { type: "heading", text: "ITBC 100 Expert Voices" },
        {
          type: "text",
          paragraphs: [
            "A flagship campaign can be ITBC 100 EXPERT VOICES, in which each expert contributes a structured interview focused on technology, professional experience, innovation, industry expectations and advice to the next generation.",
          ],
        },
        {
          type: "cards",
          columns: 2,
          items: [
            { tag: "Council 10", title: "Media, Knowledge & Digital Communication Council", text: "Technology journalism, expert interviews, YouTube, knowledge notes, project documentation and public technology communication." },
          ],
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const eventsPage: InfoPage = {
  eyebrow: "Events",
  title: "Programmes & Execution Plan",
  // §12
  lead: "ITBC can offer colleges an institutional gateway covering student registration, faculty participation, TPO interaction, industry requirements, internships, expert sessions, project opportunities, training programmes, campus events, faculty development, industry visits and student portfolios.",
  sections: [
    {
      id: "programmes",
      title: "Programmes",
      image: photo("events-programmes", "A speaker addressing students in a college auditorium"),
      blocks: [
        { type: "text", paragraphs: ["Potential programmes include:"] },
        {
          type: "list",
          items: [
            // §19
            "ITBC Expert Talks",
            "Tech Talks",
            "Career Talks",
            "Industry Voices",
            "Startup Stories",
            "Campus Connect",
            "Project Stories",
            "Placement Insights",
            "ITCCF Connect",
            "Journalism on Wheels",
            "Future Forum",
          ],
        },
        // §27
        { type: "flow", label: "Activity", steps: ["Training", "Meetings", "Projects", "Interviews", "Field visits"] },
      ],
    },
    {
      id: "pilot",
      title: "Pilot Ecosystem",
      image: photo("events-pilot", "Office workers walking through a technology district of glass towers"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §24
            "Begin with a manageable geographic and institutional pilot, for example Hyderabad/Telangana, and establish initial relationships with selected colleges, IT professionals, IT companies, training centres, ITCCF, faculty, TPOs, startups and business users.",
          ],
        },
      ],
    },
    {
      id: "calendar",
      title: "12-Month Execution Matrix",
      image: photo("events-calendar", "Two colleagues marking dates on a monthly planner"),
      blocks: [
        {
          type: "table",
          head: ["Period", "Primary focus", "Key outputs"],
          // §32
          rows: [
            ["Month 1", "Governance & project foundation", "Structure, policies, roles, domain architecture"],
            ["Month 2", "Website and database design", "Information architecture, registration, profiles"],
            ["Month 3", "Pilot network", "Initial professionals, colleges, faculty, organizations"],
            ["Month 4", "Industry and academic engagement", "MoUs/letters where appropriate, expert sessions"],
            ["Month 5", "Student and TPO ecosystem", "Student profiles, project and internship workflows"],
            ["Month 6", "ITCCF/training integration", "Training listings, skill and project pathways"],
            ["Month 7", "Business requirement module", "Ask–Connect–Solve workflow"],
            ["Month 8", "Project Exchange", "Project listings and skill matching pilot"],
            ["Month 9", "Journalism & YouTube", "Expert interviews, field reporting, knowledge archive"],
            ["Month 10", "Innovation & startup ecosystem", "Mentor and project pathways"],
            ["Month 11", "Quality & security review", "Verification, privacy, security, feedback"],
            ["Month 12", "Pilot evaluation", "KPI report, lessons learned, scale-up plan"],
          ],
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */

export const contactPage: InfoPage = {
  eyebrow: "Contact Us",
  title: "Connect • Collaborate • Create",
  // §31
  lead: "ITBC connects the people who know, the people who learn, the people who create, the people who invest, the people who do business and the people who need technology — through one structured ecosystem.",
  sections: [
    {
      id: "reach-us",
      title: "Reach ITBC",
      image: photo("contact-reach-us", "A support executive with a headset smiling at her desk"),
      blocks: [
        { type: "contact" },
        {
          type: "links",
          items: [
            { label: "Register as a Member", href: "/register", primary: true },
            { label: "Post a Business Requirement", href: "/projects#post-project" },
            { label: "Member Login", href: "/login" },
          ],
        },
      ],
    },
    {
      id: "feedback",
      title: "Feedback, Complaints & Corrections",
      image: photo("contact-feedback", "A man taking notes while a woman explains her feedback"),
      blocks: [
        {
          type: "text",
          paragraphs: [
            // §22
            "The governance framework should include identity verification, organization verification, transparent commercial relationships, conflict-of-interest disclosure, data privacy, consent, complaint mechanisms, corrections, provider feedback, no false employment guarantees, no false funding guarantees and no false government-affiliation claims.",
            "ITBC should define what data is collected, why it is collected, who can see it, how consent is obtained, how information is corrected, how information is removed where applicable, how security is maintained and how third-party access is controlled.",
          ],
        },
        {
          type: "quote",
          // Master closing statement
          text: "ITBC is proposed as a connected ecosystem where knowledge meets people, people meet opportunity, opportunity becomes action, action creates outcomes, and outcomes become knowledge for the next generation.",
        },
      ],
    },
  ],
};
