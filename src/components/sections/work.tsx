import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { Experience } from "@/types/typings.d";
import { PortableText } from "@portabletext/react";

const query = groq`*[_type == "experience"]  | order(_createdAt desc)`;

export default async function Work() {
  const experiences = await client.fetch<Experience[]>(query);

  return (
    <div id="work" className="lg:flex lg:flex-col lg:gap-6">
      <div className="pb-24 lg:flex lg:flex-row lg:py-24">
        <div className="lg:basis-4/12">
          <div className="text-7xl font-extrabold text-violet-300 lg:text-8xl">
            <div className="">W</div>
            <div className="">ORK.</div>
          </div>
        </div>
        <div className="flex flex-col gap-12 self-center pt-12 lg:w-8/12 lg:pt-0">
          {experiences.map((experience, i) => (
            <div key={i} className="lg:flex lg:flex-row lg:gap-6">
              <div className="pb-3 font-mono font-semibold text-violet-300 lg:basis-2/12">
                {experience.timeframe}
              </div>
              <div className="lg:basis-10/12">
                <div className="text-xl font-bold text-slate-100">
                  {experience.title}
                </div>
                <div className="">{experience.subTitle}</div>
                <div className="py-3 text-sm">
                  <PortableText value={experience.description} />
                </div>
                <ul className="flex flex-wrap">
                  {experience.competencies?.map((competence, j) => (
                    <li
                      key={j}
                      className="me-3 mt-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300"
                    >
                      {competence}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
