import LandingNavMenu from "~/components/layout/navbar/landing-nav-menu";
import Logo from "~/components/layout/navbar/logo";
import Navbar from "~/components/layout/navbar/navbar";
import Footer from "./_components/landing/Footer";
import Hero from "./_components/landing/Hero";

export default async function LandingPage() {
  return (
    <div>
      <Navbar>
        <Logo />
        <LandingNavMenu />
      </Navbar>
      <Hero />
      <Footer />
    </div>
  );
}
