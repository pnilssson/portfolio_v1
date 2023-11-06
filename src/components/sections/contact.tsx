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
    <div
      id="contact"
      className="items-center gap-6 pb-12 lg:flex lg:flex-row lg:pb-48 lg:pt-24"
    >
      <div className="text-7xl font-extrabold text-violet-300 lg:basis-4/12 lg:text-8xl">
        <div className="">CONT</div>
        <div className="">ACT.</div>
      </div>
      <div className="pt-12 lg:pt-0">
        <a
          className="btn-contact "
          aria-label="Email me"
          href="mailto:p.nilsson95@hotmail.com"
        >
          Email me.
        </a>
      </div>
      {downloadables.map((downloadable) => (
        <div key={downloadable.title} className="btn-shadow pt-12 lg:pt-0">
          <a
            href={`${downloadable.file.url}?dl=${downloadable.name}.pdf`}
            download
            aria-label={downloadable.label}
            className="btn-contact"
          >
            {downloadable.title}
          </a>
        </div>
      ))}
    </div>
  );
}
