import Socials from "@/components/socials";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";

export default async function Home() {
  return (
    <>
      <main className="container min-h-screen max-w-screen-xl px-6 lg:px-24">
        <About />
        <Work />
      </main>
      <Socials />
    </>
  );
}
