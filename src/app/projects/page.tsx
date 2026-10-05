import InfoPageView from "@/components/info/InfoPageView";
import { projectsPage } from "@/data/pages";

export const metadata = {
  title: "Projects – Information Technology Business Council",
  description: projectsPage.lead,
};

export default function Page() {
  return <InfoPageView page={projectsPage} />;
}
