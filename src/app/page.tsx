import { discussionsData } from "@/data/data";
import DiscussionForum from "@/components/DiscussionForum";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-between md:p-4 md:pl-8 w-full">
      <DiscussionForum data={discussionsData}/>
    </main>
  );
}
