import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomePanels from "@/components/HomePanels";
import Hubs from "@/components/Hubs";
import Itccf from "@/components/Itccf";
import QuickLinks from "@/components/QuickLinks";
import Sidebar from "@/components/Sidebar";
import Stakeholders from "@/components/Stakeholders";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    // `fit:` = desktop one-screen mode (see globals.css): the page is exactly one viewport tall
    <div className="fit:flex fit:h-dvh fit:flex-col fit:overflow-hidden">
      <Header />
      <main className="container-x pb-5 fit:min-h-0 fit:flex-1 fit:py-2.5">
        <div className="grid gap-x-4 xl:grid-cols-[minmax(0,1fr)_280px] fit:h-full fit:grid-rows-[minmax(0,1fr)]">
          <HomePanels
            quickLinks={<QuickLinks />}
            panels={[
              { id: "overview", label: "Overview", content: <Hero /> },
              { id: "stakeholders", label: "Stakeholders", content: <Stakeholders /> },
              { id: "hubs", label: "Projects, Jobs & Startups", className: "mt-8 fit:mt-0", content: <Hubs /> },
              {
                id: "itccf",
                label: "ITCCF & Impact",
                className: "mt-5 space-y-5 fit:mt-0 fit:flex fit:flex-col fit:gap-2 fit:space-y-0",
                content: (
                  <>
                    <Itccf />
                    <StatsBar />
                  </>
                ),
              },
            ]}
          />
          <div className="mt-8 min-w-0 xl:mt-4 fit:mt-0 fit:min-h-0">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
