import InfoPageView from "@/components/info/InfoPageView";
import { aboutPage } from "@/data/pages";

export const metadata = {
  title: "About ITBC – Information Technology Business Council",
  description: aboutPage.lead,
};

export default function Page() {
  return <InfoPageView page={aboutPage} />;
}
