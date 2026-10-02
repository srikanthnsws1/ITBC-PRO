import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Faculty Login – ITBC Portal",
  description: "Sign in to the ITBC Academic & Faculty Portal for R&D grants, mentorship, and research collaboration.",
};

export default function FacultyLoginPage() {
  return <AuthCard initialRole="faculty" mode="login" />;
}
