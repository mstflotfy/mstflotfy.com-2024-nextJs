import AppShowCase from "@/components/app-showcase";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main
      className="space-y-12"
    >
      <Nav />
      <Hero />
      <AppShowCase />
      <Footer />
    </main>
  );
}
