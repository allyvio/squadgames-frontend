import Faq from "@/components/home/faq/faq";
import Hero from "@/components/home/hero";
import Fact from "@/components/home/fact";
import Solution from "@/components/home/solution";
import Why from "@/components/home/why";
import Games from "@/components/home/games";
import TrustedBy from "@/components/home/trusted-by";
import MeetTheExpert from "@/components/home/meet-the-expert";
import Cta from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Fact />
      <Solution />
      <Why />
      <Games />
      <TrustedBy />
      <MeetTheExpert />
      <Faq />
      <Cta />
    </>
  );
}
