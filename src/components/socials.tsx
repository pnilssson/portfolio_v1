import { groq } from "next-sanity";
import { Social } from "../types/typings.d";
import { client } from "@/sanity/client";

const query = groq`*[_type == "social"]`;

export default async function Socials() {
  const socials = await client.fetch<Social[]>(query);

  return (
    <>
      <aside className="hidden lg:flex flex-col justify-center fixed right-6 top-0 h-full gap-6 social">
        {socials.map((social) => (
          <a href={social.url} key={social.name} target="_blank">
            <span dangerouslySetInnerHTML={{ __html: social.svg }} />
          </a>
        ))}
      </aside>
      <footer className="flex lg:hidden flex-row justify-center items-center py-6 w-full gap-6 social">
        {socials.map((social) => (
          <a
            href={social.url}
            title={social.name}
            aria-label={social.label}
            key={social.name}
            target="_blank">
            <span dangerouslySetInnerHTML={{ __html: social.svg }} />
          </a>
        ))}
      </footer>
    </>
  );
}
