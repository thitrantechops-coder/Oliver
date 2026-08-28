import { BackCover } from "@/components/back-cover";
import { Cover } from "@/components/cover";
import { Film } from "@/components/film";
import { Chapter1 } from "@/components/sections/chapter-1";
import { Chapter2 } from "@/components/sections/chapter-2";
import { Chapter3 } from "@/components/sections/chapter-3";
import { Chapter4 } from "@/components/sections/chapter-4";
import { SiteNav } from "@/components/site-nav";
import { Toc } from "@/components/toc";

export function ProfileApp() {
  return (
    <div className="bg-paper text-ink">
      <SiteNav />
      <main>
        <Cover />
        <Film />
        <Toc />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <BackCover />
      </main>
    </div>
  );
}
