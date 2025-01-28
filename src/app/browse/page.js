import { Suspense } from "react";
import RenderMediaSection from "./components/RenderMediaSection";
import Slider from "./components/Slider";
import UpcomingSection from "./components/UpcomingSection";
import UpcomingLoader from "./components/loader/UpcomingLoader";

export const metadata = {
  title: "Browse | Movie App",
};

export default function Browse() {
  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <Suspense fallback={<UpcomingLoader />}>
        <UpcomingSection />
      </Suspense>
      <RenderMediaSection titleType="movie" />
      <RenderMediaSection titleType="tvSeries" />
      <RenderMediaSection titleType="podcastEpisode" />
      <RenderMediaSection titleType="tvEpisode" />
      <RenderMediaSection titleType="tvMovie" />
      <RenderMediaSection titleType="videoGame" />
    </div>
  );
}
