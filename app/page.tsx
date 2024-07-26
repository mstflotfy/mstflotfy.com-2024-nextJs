import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import DeviceFrame from "@/components/oneExercise-showcase";
import externalLinks from "@/lib/external-links";

export default function Home() {
  return (
    <main
      className="space-y-12"
    >
      <Nav />
      <Hero />
      <DeviceFrame 
        src={externalLinks.OneExercise}
        title="Try 1Xercise (OneExercise)"
        name="OneExercise-iframe"
        aria-label="This iframe showcases my workout tracker app (1Xercsie)"
      />
      <Footer />
    </main>
  );
}
