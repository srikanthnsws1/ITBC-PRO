import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Corporate Login – ITBC Portal",
  description: "Sign in to the ITBC Corporate Portal for talent recruitment, project postings, and industry innovation.",
};

export default function CorporateLoginPage() {
  return <AuthCard initialRole="corporate" mode="login" />;
}
