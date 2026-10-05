import InfoPageView from "@/components/info/InfoPageView";
import { membershipPage } from "@/data/pages";

export const metadata = {
  title: "Membership – Information Technology Business Council",
  description: membershipPage.lead,
};

export default function Page() {
  return <InfoPageView page={membershipPage} />;
}
