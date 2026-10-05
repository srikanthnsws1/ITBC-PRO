import InfoPageView from "@/components/info/InfoPageView";
import { contactPage } from "@/data/pages";

export const metadata = {
  title: "Contact Us – Information Technology Business Council",
  description: contactPage.lead,
};

export default function Page() {
  return <InfoPageView page={contactPage} />;
}
