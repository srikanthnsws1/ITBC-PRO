import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Student Registration – ITBC Portal",
  description: "Join ITBC as a student member for verified live projects, internship marketplace, and skill certifications.",
};

export default function StudentRegisterPage() {
  return <AuthCard initialRole="student" mode="register" />;
}
