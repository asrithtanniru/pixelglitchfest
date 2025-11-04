'use client'
import Image from 'next/image'

const sponsors = {
  madePossibleBy: [
    { name: 'SRM University AP', logo: '/images/srmlogo.png' },
    { name: 'HatchLab', logo: '/images/hatchlab.png' },
    { name: 'Meity', logo: '/images/meity-logo.png' },
  ],
  hostedBy: [
    { name: 'Next Tech Lab AP', logo: '/images/ntl_icon.png' },
    { name: 'Pangaea Corporation', logo: '/images/pangara-logo.png' },
  ],
}

export default function SponsorsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-tech font-bold text-foreground mb-4 md:mb-6">Made possible by</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl">
              {sponsors.madePossibleBy.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-64 h-40 md:h-48 bg-white rounded-lg border-4 border-black flex items-center justify-center p-4 md:p-6 mx-auto">
                    <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={160} height={120} className="object-contain w-full h-full" />
                  </div>
                  <h3 className="text-lg md:text-xl font-tech font-bold text-foreground mt-3 md:mt-4 text-center px-2">{sponsor.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-tech font-bold text-foreground mb-4 md:mb-6">Hosted by</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
              {sponsors.hostedBy.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-64 h-40 md:h-48 bg-white rounded-lg border-4 border-black flex items-center justify-center p-4 md:p-6 mx-auto">
                    <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={160} height={120} className="object-contain w-full h-full" />
                  </div>
                  <h3 className="text-lg md:text-xl font-tech font-bold text-foreground mt-3 md:mt-4 text-center px-2">{sponsor.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
