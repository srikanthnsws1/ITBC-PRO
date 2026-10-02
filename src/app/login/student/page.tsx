import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Student Login – ITBC Portal",
  description: "Sign in to the ITBC Student Portal for live projects, internships, and certifications.",
};

export default function StudentLoginPage() {
  return <AuthCard initialRole="student" mode="login" />;
}
