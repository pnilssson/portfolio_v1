import { groq } from "next-sanity";
import { About } from "@/types/typings.d";
import { client } from "@/sanity/client";

const query = groq`*[_type == "about"][0]`;

export default async function Contact() {
  const about = await client.fetch<About>(query);

  return (
    <div id="about" className="pb-24 lg:flex lg:flex-col lg:gap-6">
      <div className="pb-12 text-7xl font-extrabold text-violet-300 lg:py-24 lg:text-8xl">
        <div className="">CONT</div>
        <div className="">ACT.</div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row"></div>
    </div>
  );
}
