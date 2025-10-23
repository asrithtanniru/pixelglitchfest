'use client'

import { FaBuilding } from 'react-icons/fa'
import Image from 'next/image'

const sponsors = {
  platinum: [
    { name: 'Redbull', logo: FaBuilding, description: 'Leading technology solutions', image: '/images/redbull.png' },
    { name: 'Redbull', logo: FaBuilding, description: 'Leading technology solutions', image: '/images/redbull.png' },
  ],
  // gold: [
  //   { name: 'CloudHost', logo: FaCloud, description: 'Cloud infrastructure', image: '/sponsors/cloudhost.png' },
  //   { name: 'DevTools Inc', logo: FaTools, description: 'Development software', image: '/sponsors/devtoolsinc.png' },
  //   { name: 'AI Systems', logo: FaRobot, description: 'Artificial intelligence', image: '/sponsors/aisystems.png' },
  // ]
}

export default function SponsorsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-tech font-bold text-foreground mb-4">Our Amazing Sponsors</h2>
          <p className="text-lg font-tech text-foreground/70 max-w-2xl mx-auto">Powered by industry leaders who believe in the future of game development</p>
        </div>

        <div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.platinum.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center">
                <div className="mb-2 flex justify-center items-center w-48 h-32 bg-white border-2 border-black rounded-lg shadow-sm">
                  {sponsor.image ? <Image src={sponsor.image} alt={sponsor.name + ' logo'} width={120} height={96} className="object-contain" /> : <sponsor.logo className="text-7xl" />}
                </div>
                <h4 className="text-xl font-tech font-bold text-foreground mb-1">{sponsor.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mb-12">
          <h3 className="text-2xl font-rajdhani font-bold text-center text-foreground mb-8">
            <span className="inline-flex items-center gap-2">
              <FaMedal /> Gold Sponsors
            </span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <Card key={index} className="p-6 text-center bg-secondary-background hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all border-2 border-chart-3">
                <div className="text-4xl mb-3">
                  <sponsor.logo />
                </div>
                <h4 className="text-lg font-rajdhani font-bold text-foreground mb-2">{sponsor.name}</h4>
                <p className="text-xs font-tech text-foreground/70">{sponsor.description}</p>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
