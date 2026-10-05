import InfoPageView from "@/components/info/InfoPageView";
import { eventsPage } from "@/data/pages";

export const metadata = {
  title: "Events – Information Technology Business Council",
  description: eventsPage.lead,
};

export default function Page() {
  return <InfoPageView page={eventsPage} />;
}
