import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { About } from "@/types/typings.d";
import { client } from "@/sanity/client";

const query = groq`*[_type == "about"][0]`;

export default async function About() {
  const about = await client.fetch<About>(query);

  return (
    <div id="about" className="lg:flex lg:flex-col">
      <div className="pt-24 text-8xl font-extrabold text-violet-300 lg:text-9xl">
        <div className="">ABO</div>
        <div className="">UT.</div>
      </div>
      <div className="py-24 lg:flex lg:flex-row lg:gap-6">
        <div className="lg:basis-1/2">
          <div className="pb-6 font-mono text-violet-500">
            {about.nameTitle}
          </div>
          <div className="pb-6 text-5xl font-bold text-slate-100 lg:text-7xl">
            {about.name}
          </div>
          <div className="max-w-xs text-xl">
            <PortableText value={about.shortBio} />
          </div>
        </div>
        <div className="about self-center pt-12 lg:basis-1/2 lg:pt-0">
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
