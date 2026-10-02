import AuthCard from "@/components/auth/AuthCard";

export const metadata = {
  title: "Partner Registration – ITBC Portal",
  description: "Register your institution, government agency, or incubation center as an ITBC Regional Apex Partner.",
};

export default function PartnerRegisterPage() {
  return <AuthCard initialRole="partner" mode="register" />;
}
