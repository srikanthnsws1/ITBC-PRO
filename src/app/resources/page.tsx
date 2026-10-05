import InfoPageView from "@/components/info/InfoPageView";
import { resourcesPage } from "@/data/pages";

export const metadata = {
  title: "Resources – Information Technology Business Council",
  description: resourcesPage.lead,
};

export default function Page() {
  return <InfoPageView page={resourcesPage} />;
}
