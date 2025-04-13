import AppIntegration from "@/components/AppIntegration";
import Container from "@/components/Container";
import CraftEngage from "@/components/CraftEngage";
import DesignPixel from "@/components/DesignPixel";
import Hero from "@/components/Hero";
import ScaleBusiness from "@/components/ScaleBusiness";
import ThirdPartyDep from "@/components/ThirdPartyDep";
import Performance from "@/components/Performance";

export default function Home() {
  return (
    <Container>
      <>
        <Hero />
        <DesignPixel />
        <CraftEngage />
        <ScaleBusiness />

        <ThirdPartyDep />
        <Performance />
        <AppIntegration />
      </>
    </Container>
  );
}
