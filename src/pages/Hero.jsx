import AnchorLink from "react-anchor-link-smooth-scroll";
import HeroBackground from "@/components/hero/HeroBackground";
import KeyShadowSection from "@/components/hero/KeyShadowSection";
import "@/styles/ShadowAnimation.css";
import "@/styles/KeyAnimation.css";
import { GradientButton } from "@/components/common/GradientButton";

function Hero({ onPickup, isUnlocked }) {
  return (
    <div
      id="home"
      className="relative min-h-screen md:min-h-[80vh] lg:min-h-[80vh] xl:min-h-[80vh] flex flex-col overflow-hidden pt-16 md:pt-20 scroll -mb-60"
    >
      <HeroBackground />
      <div className="max-w-screen-lg relative w-full min-h-screen mx-auto pb-28 px-6 wrapper flex flex-col justify-start">
        <section className="relative flex flex-col md:flex-row lg:flex-row xl:flex-row md:justify-items-start gap-2">
          <div>
            <p className="text-white text-2xl md:text-3xl lg:text-3xl font-bold mt-10">
              I'm{" "}
              <img
                src="/favicon-j.svg"
                alt="Logo de Jessica Arroyo, desarrolladora web"
                className="inline-block align-middle mb-6 w-6 h-18"
              />
              essica
            </p>
            <div className="max-w-screen-xl mx-auto">
              <h1 className="text-white text-2xl md:text-3xl lg:text-3xl font-bold leading-tight -mt-4">
                <span className="text-primary block mb-1">
                  Fullstack Web Developer
                </span>
              </h1>
              <div className="text-white text-sm md:text-base lg:text-base py-4 mr-10 sm:mr-36 md:mr-0 lg:mr-0 space-y-3">
                <p>
                  My determination has driven me to take on challenges,
                  participate in hackathons, and create solutions that stand out
                  for their creativity and precision.
                </p>
                <p>
                  I deeply value the power of community and collaboration,
                  driving inclusive projects that foster growth and
                  representation in technology.
                </p>
                <p>
                  I also focus on accessibility and user-centered design,
                  ensuring high-quality and iterative results in agile
                  environments.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 items-start mt-4">
              <GradientButton
                asChild
                variant="variant"
              >
                <AnchorLink
                  href="#about"
                  offset="90"
                >
                  More About me
                </AnchorLink>
              </GradientButton>
            </div>
          </div>
          <KeyShadowSection
            onPickup={onPickup}
            isUnlocked={isUnlocked}
          />
        </section>
      </div>
    </div>
  );
}

export default Hero;
