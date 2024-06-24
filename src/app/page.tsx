import CategoryGrid from "../components/CategoryGrid";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <main className="p-8 flex flex-1 flex-col">
      <VideoCard />
      <CategoryGrid />
    </main>
  );
}
