import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Corporate Registration – ITBC Portal",
  description: "Register your enterprise with ITBC to hire pre-screened technical talent and post live projects.",
};

export default function CorporateRegisterPage() {
  return <AuthCard initialRole="corporate" mode="register" />;
}
