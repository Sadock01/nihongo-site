import { HeroSection } from '../../components/HeroSection'
import { AboutSection } from '../../components/AboutSection'
import { PartnerSchoolSection } from '../../components/PartnerSchoolSection'
import { DestinationsSection } from '../../components/DestinationsSection'
// import { GuidesSection } from '../../components/GuidesSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <PartnerSchoolSection />
      <DestinationsSection />
      {/* <GuidesSection /> */}
    </>
  )
}

