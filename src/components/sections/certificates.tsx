import Image from "next/image";
import { groq } from "next-sanity";
import { client, urlFor } from "@/sanity/client";
import Card from "@/components/card";
import { Certificate } from "@/types/typings";
import { PortableText } from "@portabletext/react";
import ExternalLink from "../../../public/external-link.svg";

const query = groq`*[_type == "certificate"]`;

export default async function Certificates() {
  const certificates = await client.fetch<Certificate[]>(query);
  return (
    <div id="about" className="pb-24 lg:flex lg:flex-col lg:gap-6">
      <div className="pb-12 text-7xl font-extrabold text-violet-300 lg:py-24 lg:text-8xl">
        <div className="">CERTI</div>
        <div className="">FICATES.</div>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        {certificates.map((certificate) => (
          <div key={certificate.title} className="basis-1/2">
            <Card>
              <div className="relative flex flex-col items-center gap-6">
                <div className="relative h-24 w-24">
                  <Image
                    src={urlFor(certificate.image).url()}
                    alt={certificate.image.alt}
                    fill
                  />
                </div>
                <a
                  href={certificate.url}
                  title={certificate.title}
                  aria-label={certificate.label}
                  target="_blank"
                  className="icon absolute right-0 top-0 h-6 w-6"
                >
                  <Image src={ExternalLink} alt="External link" />
                </a>
                <div className="font-bold text-slate-100">
                  {certificate.title}
                </div>
                <div className="text-center">
                  <PortableText value={certificate.description} />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
