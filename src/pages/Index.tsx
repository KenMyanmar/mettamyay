import Nav from "@/components/mettamyay/Nav";
import Hero from "@/components/mettamyay/Hero";
import Manifesto from "@/components/mettamyay/Manifesto";
import WhatIsBaka from "@/components/mettamyay/WhatIsBaka";
import WhatWeAre from "@/components/mettamyay/WhatWeAre";
import Pillars from "@/components/mettamyay/Pillars";
import Model from "@/components/mettamyay/Model";
import Stats from "@/components/mettamyay/Stats";
import Pathways from "@/components/mettamyay/Pathways";
import TransformativeExperiences from "@/components/mettamyay/TransformativeExperiences";
import Council from "@/components/mettamyay/Council";
import Vision from "@/components/mettamyay/Vision";
import Location from "@/components/mettamyay/Location";
import Contact from "@/components/mettamyay/Contact";
import EarthStrip from "@/components/mettamyay/EarthStrip";
import Footer from "@/components/mettamyay/Footer";

const Index = () => (
  <div className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
    <Nav />
    <Hero />
    <Manifesto />
    {/* Order: Manifesto → WhatIsBaka → WhatWeAre → Pillars.
        Readers must understand "Baka" before reading "we are not a charity that
        only builds for Baka schools." Do not reorder. */}
    <WhatIsBaka />
    <WhatWeAre />
    <Pillars />
    <Model />
    <Stats />
    <Pathways />
    <TransformativeExperiences />
    <Council />
    <Vision />
    <Location />
    <Contact />
    <EarthStrip />
    <Footer />
  </div>
);

export default Index;
