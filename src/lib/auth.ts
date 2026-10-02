export type Role = "student" | "faculty" | "corporate" | "partner";

export interface UserSession {
  role: Role;
  name: string;
  email: string;
  organization: string;
  id: string;
  avatar?: string;
  badge?: string;
}

export interface RoleConfig {
  id: Role;
  label: string;
  shortLabel: string;
  badge: string;
  description: string;
  loginPath: string;
  registerPath: string;
  dashboardPath: string;
  testCredentials: {
    email: string;
    password: string;
  };
  color: {
    primary: string;
    bg: string;
    border: string;
    text: string;
    ring: string;
    gradient: string;
  };
  demoUser: UserSession;
  keyPoints: string[];
}

export const ROLE_CONFIGS: Record<Role, RoleConfig> = {
  student: {
    id: "student",
    label: "Student",
    shortLabel: "Student",
    badge: "Student Member",
    description: "Access verified live projects, internship marketplace, AI career mentorship & certifications.",
    loginPath: "/login/student",
    registerPath: "/register/student",
    dashboardPath: "/dashboard/student",
    testCredentials: {
      email: "student@itbc.world",
      password: "password123",
    },
    color: {
      primary: "#2563eb",
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      ring: "focus:ring-blue-500",
      gradient: "from-blue-600 to-indigo-700",
    },
    demoUser: {
      role: "student",
      name: "Aryan Sharma",
      email: "student@itbc.world",
      organization: "National Institute of Technology",
      id: "ITBC-STU-8821",
      badge: "Class A++ Scholar",
    },
    keyPoints: [
      "Access 3,500+ Verified Live Projects",
      "Direct Placement & Internship Pipeline",
      "AI Career Guidance & Industry Certifications",
    ],
  },
  faculty: {
    id: "faculty",
    label: "Faculty / Academic",
    shortLabel: "Faculty",
    badge: "Academic Fellow",
    description: "Connect with R&D initiatives, mentor ambitious talent, publish research & lead innovation.",
    loginPath: "/login/faculty",
    registerPath: "/register/faculty",
    dashboardPath: "/dashboard/faculty",
    testCredentials: {
      email: "faculty@itbc.world",
      password: "password123",
    },
    color: {
      primary: "#7c3aed",
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      ring: "focus:ring-purple-500",
      gradient: "from-purple-600 to-violet-800",
    },
    demoUser: {
      role: "faculty",
      name: "Dr. Meera Iyer",
      email: "faculty@itbc.world",
      organization: "Indian Institute of Science & Tech",
      id: "ITBC-FAC-4092",
      badge: "Senior Research Fellow",
    },
    keyPoints: [
      "Industry-Backed R&D Research Grants",
      "Student Mentorship & Evaluation Framework",
      "Faculty Development & Global Exchange",
    ],
  },
  corporate: {
    id: "corporate",
    label: "Corporate / Business",
    shortLabel: "Corporate",
    badge: "Corporate Partner",
    description: "Hire pre-vetted tech talent, outsource real projects, drive enterprise digital transformation.",
    loginPath: "/login/corporate",
    registerPath: "/register/corporate",
    dashboardPath: "/dashboard/corporate",
    testCredentials: {
      email: "corporate@itbc.world",
      password: "password123",
    },
    color: {
      primary: "#059669",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-700",
      ring: "focus:ring-emerald-500",
      gradient: "from-emerald-600 to-teal-800",
    },
    demoUser: {
      role: "corporate",
      name: "Vikramaditya Roy",
      email: "corporate@itbc.world",
      organization: "TechVista Enterprise Solutions",
      id: "ITBC-CORP-1044",
      badge: "Class A++ Enterprise",
    },
    keyPoints: [
      "Access Top 1% Pre-Screened Tech Graduates",
      "Post Projects & Commission Applied Prototypes",
      "Access Corporate Innovation & B2B Solutions",
    ],
  },
  partner: {
    id: "partner",
    label: "Institutional Partner",
    shortLabel: "Partner",
    badge: "Apex Partner",
    description: "Establish university chapters, facilitate MoUs, startup incubators & regional governance.",
    loginPath: "/login/partner",
    registerPath: "/register/partner",
    dashboardPath: "/dashboard/partner",
    testCredentials: {
      email: "partner@itbc.world",
      password: "password123",
    },
    color: {
      primary: "#ea580c",
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-700",
      ring: "focus:ring-orange-500",
      gradient: "from-amber-600 to-orange-700",
    },
    demoUser: {
      role: "partner",
      name: "Suresh Narayanan",
      email: "partner@itbc.world",
      organization: "National Innovation Council & Incubators",
      id: "ITBC-PTR-0078",
      badge: "Regional Apex Chapter",
    },
    keyPoints: [
      "Regional ITBC Chapter & Campus Center of Excellence",
      "Seed Capital, Incubation & Startup Accelerator Funds",
      "e-Governance Accreditation & Institutional MoUs",
    ],
  },
};

export const AUTH_STORAGE_KEY = "itbc_user_session";

export function getStoredSession(): UserSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveSession(session: UserSession) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  } catch (err) {
    console.error("Failed to save session", err);
  }
}

export function clearSession() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (err) {
    console.error("Failed to clear session", err);
  }
}
