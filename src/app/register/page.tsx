import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Register – ITBC Member Portal",
  description: "Register for ITBC membership as a Student, Faculty, Corporate, or Institutional Partner.",
};

export default function RegisterPage() {
  return <AuthCard initialRole="student" mode="register" />;
}
