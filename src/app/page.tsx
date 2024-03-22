import { discussionsData,marketStoriesData } from "@/data/data";
import DiscussionForum from "@/components/DiscussionForum";
import MarketStories from "@/components/MarketStories";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-between gap-2 md:p-4 md:pl-8 w-full">
      <DiscussionForum data={discussionsData}/>
      <MarketStories data={marketStoriesData}/>
    </main>
  );
}
