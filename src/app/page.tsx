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
    <>
      <Header />
      <main className="container-x pb-5">
        <div className="grid gap-x-5 xl:grid-cols-[minmax(0,1fr)_300px] xl:grid-rows-[auto_auto_1fr]">
          {/* Full-bleed dark band behind the hero row (stretches past the container to the viewport edges) */}
          <div
            aria-hidden
            className="col-span-full row-start-1 mx-[calc(50%-50vw)] bg-[#06102e] bg-[radial-gradient(ellipse_at_52%_35%,rgba(59,130,246,0.55),transparent_45%),radial-gradient(ellipse_at_0%_100%,rgba(30,64,175,0.55),transparent_45%),radial-gradient(ellipse_at_100%_0%,rgba(30,58,138,0.6),transparent_40%)]"
          />
          <div className="col-start-1 row-start-1 min-w-0">
            <Hero />
          </div>
          <div className="col-start-1 row-start-2 min-w-0">
            <QuickLinks />
          </div>
          <div className="col-start-1 row-start-3 min-w-0">
            <Stakeholders />
          </div>
          <div className="mt-8 min-w-0 xl:col-start-2 xl:row-span-3 xl:row-start-1 xl:mt-4">
            <Sidebar />
          </div>
        </div>
        <div className="mt-8 space-y-5 xl:mt-6">
          <Hubs />
          <Itccf />
          <StatsBar />
        </div>
      </main>
      <Footer />
    </>
  );
}
