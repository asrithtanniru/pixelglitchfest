import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ScheduleSection from '@/components/ScheduleSection'
import PrizesSection from '@/components/PrizesSection'
import SponsorsSection from '@/components/SponsorsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
