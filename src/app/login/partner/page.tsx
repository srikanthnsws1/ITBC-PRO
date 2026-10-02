import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Partner Login – ITBC Portal",
  description: "Sign in to the ITBC Institutional Partner Portal for regional incubation, MoUs, and academic leadership.",
};

export default function PartnerLoginPage() {
  return <AuthCard initialRole="partner" mode="login" />;
}
