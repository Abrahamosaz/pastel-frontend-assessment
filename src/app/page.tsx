import AppIntegration from "@/components/AppIntegration";
import Container from "@/components/Container";
import CraftEngage from "@/components/CraftEngage";
import DesignPixel from "@/components/DesignPixel";
import Hero from "@/components/Hero";
import ScaleBusiness from "@/components/ScaleBusiness";
import ThirdPartyDep from "@/components/ThirdPartyDep";
import Performance from "@/components/Performance";
import DesignBuild from "@/components/DesignBuild";
import GetStarted from "@/components/GetStarted";
import SwipesSection from "@/components/jumpStart/SwipesSection";

export default function Home() {
  return (
    <Container>
      <>
        <Hero />
        <DesignPixel />
        <CraftEngage />
        <ScaleBusiness />

        <SwipesSection />

        <ThirdPartyDep />
        <Performance />
        <AppIntegration />
        <DesignBuild />
        <GetStarted />
      </>
    </Container>
  );
}
