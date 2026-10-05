import InfoPageView from "@/components/info/InfoPageView";
import { wingsPage } from "@/data/pages";

export const metadata = {
  title: "Our Wings – Information Technology Business Council",
  description: wingsPage.lead,
};

export default function Page() {
  return <InfoPageView page={wingsPage} />;
}
