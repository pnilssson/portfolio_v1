import { Social } from "@/types/typings";

export function SocialLink({ social }: { social: Social }) {
  return (
    <a
      href={social.url}
      title={social.name}
      aria-label={social.label}
      target="_blank"
    >
      <span dangerouslySetInnerHTML={{ __html: social.svg }} />
    </a>
  );
}
