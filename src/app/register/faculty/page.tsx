import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Faculty Registration – ITBC Portal",
  description: "Join ITBC Academic Council as a Faculty Member for R&D grants, academic mentorship, and curriculum guidance.",
};

export default function FacultyRegisterPage() {
  return <AuthCard initialRole="faculty" mode="register" />;
}
