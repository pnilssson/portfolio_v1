import { client } from "@/sanity/client";
import { Downloadable } from "@/types/typings";
import { groq } from "next-sanity";

const query = groq`*[_type == "download"]  | order(_createdAt desc) {
    ...,
    file {
      ...,
      "url": asset->url
    }
  }`;

export default async function Contact() {
  const downloadables = await client.fetch<Downloadable[]>(query);

  return (
    <div id="contact" className="pb-12 lg:flex lg:flex-col lg:py-24">
      <div className="pb-12 text-7xl font-extrabold text-violet-300 lg:basis-4/12 lg:pb-24 lg:text-8xl">
        <div className="">CONT</div>
        <div className="">ACT.</div>
      </div>
      <div className="flex flex-col justify-around gap-6 lg:basis-8/12 lg:flex-row lg:items-center">
        <div>
          <a
            className="border-b border-violet-500 text-3xl font-extrabold uppercase text-violet-300 hover:text-slate-100"
            aria-label="Email me"
            href="mailto:p.nilsson95@hotmail.com"
          >
            Email me.
          </a>
        </div>
        {downloadables.map((downloadable) => (
          <div key={downloadable.title}>
            <a
              href={`${downloadable.file.url}?dl=${downloadable.name}.pdf`}
              download
              aria-label={downloadable.label}
              className="border-b border-violet-500 text-3xl font-extrabold uppercase text-violet-300 hover:text-slate-100"
            >
              {downloadable.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
