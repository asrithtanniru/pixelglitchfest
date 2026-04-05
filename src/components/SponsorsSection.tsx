'use client'
import Image from 'next/image'

const sponsors = {
  organizedBy: [
    { name: 'Next Tech Lab', logo: '/images/ntl_icon.png' },
    { name: 'SRM University AP', logo: '/images/srmlogo.png' },
  ],
  collaborationPartner: [
    { name: 'Game Developers Association of India (GDAI)', logo: '/images/GDAI logo.png' },
  ],
  speakerPartner: [
    { name: 'Galactic Geeks Studio', logo: '/images/GG.png' },
  ],
}

export default function SponsorsSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Organized By */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-tech font-bold text-foreground mb-4 md:mb-6">Organized by</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
              {sponsors.organizedBy.map((sponsor, index) => (
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

        {/* Collaboration Partner */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-tech font-bold text-foreground mb-4 md:mb-6">Collaboration Partner</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-4xl">
              {sponsors.collaborationPartner.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-64 h-40 md:h-48 bg-white rounded-lg border-4 border-black flex items-center justify-center p-4 md:p-6 mx-auto">
                    <Image src={sponsor.logo!} alt={`${sponsor.name} logo`} width={160} height={120} className="object-contain w-full h-full" />
                  </div>
                  <h3 className="text-lg md:text-xl font-tech font-bold text-foreground mt-3 md:mt-4 text-center px-2">{sponsor.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Speaker Partner */}
        <div>
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-tech font-bold text-foreground mb-4 md:mb-6">Speaker Partner</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-4 md:gap-6 max-w-4xl">
              {sponsors.speakerPartner.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="w-full max-w-64 h-40 md:h-48 bg-white rounded-lg border-4 border-black flex items-center justify-center p-4 md:p-6 mx-auto">
                    {sponsor.logo ? (
                      <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={160} height={120} className="object-contain w-full h-full" />
                    ) : (
                      <span className="text-2xl md:text-3xl font-tech font-bold text-black text-center">{sponsor.name}</span>
                    )}
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
