import { groq } from "next-sanity";
import { Social } from "@/types/typings.d";
import { client } from "@/sanity/client";
import { SocialLink } from "@/components/social-link";

const query = groq`*[_type == "social"]`;

export default async function Socials() {
  const socials = await client.fetch<Social[]>(query);

  return (
    <>
      <aside className="social fixed right-6 top-0 hidden h-full flex-col justify-center gap-6 lg:flex">
        {socials.map((social) => (
          <SocialLink social={social} key={social.name} />
        ))}
      </aside>
      <footer className="social flex w-full flex-row items-center justify-center gap-6 py-6 lg:hidden">
        {socials.map((social) => (
          <SocialLink social={social} key={social.name} />
        ))}
      </footer>
    </>
  );
}
