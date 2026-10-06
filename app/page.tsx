import Hero from "@/components/Hero";
import Story from "@/components/Story";
import WorkGrid from "@/components/WorkGrid";
import Quote from "@/components/Quote";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <WorkGrid />
      <Quote />
      <ClientLogos />
      <Contact />
    </main>
  );
}