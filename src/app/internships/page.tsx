import InfoPageView from "@/components/info/InfoPageView";
import { internshipsPage } from "@/data/pages";

export const metadata = {
  title: "Internship & Jobs – Information Technology Business Council",
  description: internshipsPage.lead,
};

export default function Page() {
  return <InfoPageView page={internshipsPage} />;
}
