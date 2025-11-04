'use client'
import Image from 'next/image'

const sponsors = {
  madePossibleBy: [
    { name: 'SRM University AP', logo: '/images/srmlogo.png' },
    { name: 'HatchLab', logo: '/images/hatchlab-logo.png' },
    { name: 'Meity', logo: '/images/meity-logo.png' },
  ],
  hostedBy: [
    { name: 'Next Tech Lab AP', logo: '/images/ntl_icon.png' },
    { name: 'Pangaea Corporation', logo: '/images/pangara-logo.png' },
  ],
}

export default function SponsorsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-tech font-bold text-foreground mb-6">Made possible by</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
              {sponsors.madePossibleBy.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="w-64 h-48 bg-white rounded-lg border-4 border-black flex items-center justify-center p-6">
                    <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={160} height={120} className="object-contain" />
                  </div>
                  <h3 className="text-xl font-tech font-bold text-foreground mt-4">{sponsor.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-tech font-bold text-foreground mb-6">Hosted by</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              {sponsors.hostedBy.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="w-64 h-48 bg-white rounded-lg border-4 border-black flex items-center justify-center p-6">
                    <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={160} height={120} className="object-contain" />
                  </div>
                  <h3 className="text-xl font-tech font-bold text-foreground mt-4">{sponsor.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
