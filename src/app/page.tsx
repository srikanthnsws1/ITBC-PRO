import FitToScreen from "@/components/FitToScreen";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hubs from "@/components/Hubs";
import Itccf from "@/components/Itccf";
import QuickLinks from "@/components/QuickLinks";
import Sidebar from "@/components/Sidebar";
import Stakeholders from "@/components/Stakeholders";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    // `fit:` = desktop one-screen mode: every section is shown at once, packed and scaled to the viewport
    <FitToScreen>
      <Header />
      <main className="container-x pb-5 fit:flex fit:min-h-0 fit:flex-1 fit:flex-col fit:gap-2 fit:py-2.5">
        <div className="grid gap-x-5 xl:grid-cols-[minmax(0,1fr)_300px] xl:grid-rows-[auto_auto_1fr] fit:min-h-0 fit:flex-1 fit:grid-rows-[minmax(0,1fr)_auto_auto]! fit:gap-x-4 fit:gap-y-2">
          <div className="col-start-1 row-start-1 min-w-0 fit:min-h-0">
            <Hero />
          </div>
          <div className="col-start-1 row-start-2 min-w-0">
            <QuickLinks />
          </div>
          <div className="col-start-1 row-start-3 min-w-0">
            <Stakeholders />
          </div>
          <div className="mt-8 min-w-0 xl:col-start-2 xl:row-span-3 xl:row-start-1 xl:mt-4 fit:mt-0 fit:min-h-0">
            <Sidebar />
          </div>
        </div>
        <div className="mt-8 space-y-5 xl:mt-6 fit:mt-0 fit:grid fit:shrink-0 fit:grid-cols-2 fit:gap-2 fit:space-y-0">
          <Hubs />
          <Itccf />
          <div className="fit:col-span-2">
            <StatsBar />
          </div>
        </div>
      </main>
      <Footer />
    </FitToScreen>
  );
}
