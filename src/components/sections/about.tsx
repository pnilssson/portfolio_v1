import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { About } from "../../types/typings.d";
import { client } from "@/sanity/client";

const query = groq`*[_type == "about"][0]`;

export default async function About() {
  const about = await client.fetch<About>(query);

  return (
    <div id="about" className="lg:flex lg:flex-col lg:gap-6">
      <div className="pt-24 lg:py-24 text-8xl lg:text-9xl font-extrabold text-violet-300">
        <div className="">AB</div>
        <div className="">OUT.</div>
      </div>
      <div className="lg:flex lg:flex-row">
        <div className="pb-24 pt-24 lg:py-24 lg:w-1/2">
          <div className="text-violet-500 font-mono pb-6">
            {about.nameTitle}
          </div>
          <div className="text-5xl lg:text-7xl font-bold pb-6 text-slate-100">
            {about.name}
          </div>
          <div className="max-w-xs text-xl">
            <PortableText value={about.shortBio} />
          </div>
        </div>
        <div className="pb-24 lg:py-24 lg:w-1/2 self-center about">
          {about.fullBio?.map((bio, i) => (
            <div className="pt-4 text-sm" key={i}>
              <PortableText value={bio} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
