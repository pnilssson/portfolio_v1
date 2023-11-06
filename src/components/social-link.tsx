import Image from "next/image";
import { urlFor } from "@/sanity/client";
import { Social } from "@/types/typings";

export function SocialLink({ social }: { social: Social }) {
  return (
    <a
      href={social.url}
      title={social.name}
      aria-label={social.label}
      target="_blank"
      className="icon relative h-6 w-6"
    >
      <Image src={urlFor(social.image).url()} alt={social.image.alt} fill />
    </a>
  );
}
